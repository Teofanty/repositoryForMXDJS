var status = 0;
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		var Editing = false //true=显示;false=开始活动
          if(Editing){
          cm.sendOk("暂停运作");
          cm.dispose();
          return;
        } 
			cm.sendSimple("#b欢迎玩家 #r#h ##k ,收获不小嘛,那么就把你钓到的鱼在我这里兑换奖励吧!小鱼我可不要!要大的!\r\n#r特别提示:兑换前请确认背包格子,溢出后果自负！戒指/勋章只能领一次！" +
            "#k\r\n#L101##b#v1112907#四维+2.HP/MP+50.攻击/法术+4(有泡泡特效)\r\n#r兑换需要：#k#v4031640#113cm.#v4031644#148cm.各50条.金币800万.\r\n\r\n#L102##b#i1142146#四维+6.命中率+20.攻击力+1魔法力+5速度/跳跃+10\r\n#r兑换需要：#k#v4001200#.50条.金币1500万.\r\n\r\n#L104##b#v4001200#x1#r兑换需要：\r\n#k#v4031628#120cm/128cm/131cm/140cm.#v4031630#30cm/53cm/60cm/100cm.\r\n  每种鱼各10条.10万金币.\r\n");
        } else if (status == 1) {
            
            if (selection == 101) {
                if (cm.haveItem(4031640, 50) & cm.haveItem(4031644, 50) && cm.getMeso() > 8000000) {
                    cm.gainItem(4031640, -50);
                    cm.gainItem(4031644, -50);
                    cm.gainMeso(-8000000);
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1112907); //获得装备的类形
		var toDrop = ii.randomizeStats(ii.getEquipById(1112907)).copy(); // 生成一个Equip类
		//toDrop. setFlag(1);//上锁不能与时间一起，否则会BUG不消失//上锁
		toDrop. setStr(2);//给力量
		toDrop. setDex(2);//给敏捷 
		toDrop. setInt(2);//给智力
		toDrop. setLuk(2);//给运气
		toDrop. setHp(50);//HP
                toDrop. setMp(50);//MP
		//toDrop. setWatk(4);//攻击力    
		//toDrop. setMatk(4);//魔法力
		//toDrop. setAvoid(0);//回避力
		//toDrop. setHands(0);//手技
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
                    cm.sendOk("获得#v1112907#小鱼戒指！.");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具.");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.haveItem(4001200, 50) & cm.haveItem(4001200, 5) && cm.getMeso() > 15000000) {
                    cm.gainItem(4001200, -50);
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1142146); //获得装备的类形
		var toDrop = ii.randomizeStats(ii.getEquipById(1142146)).copy(); // 生成一个Equip类
		//toDrop. setFlag(1);//上锁不能与时间一起，否则会BUG不消失//上锁
		toDrop. setStr(6);//给力量
		toDrop. setDex(6);//给敏捷 
		toDrop. setInt(6);//给智力
		toDrop. setLuk(6);//给运气
		//toDrop. setHp(50);//HP
                //toDrop. setMp(50);//MP
		//toDrop. setWatk(1);//攻击力    
		//toDrop. setMatk(5);//魔法力
		toDrop. setAvoid(20);//回避力
		toDrop. setHands(10);//手技
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		            cm.gainMeso(-15000000);
                    cm.sendOk("获得#v1142146#钓鱼王勋章.");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具.");
                    cm.dispose();
				}
			 }else if (selection == 103) {
                if (cm.haveItem(1142146, 1) & cm.haveItem(4001200, 5) && cm.getMeso() > 15000000) {
                    cm.gainItem(1142146, -1);
                    cm.gainItem(4001200, -10);
                    cm.gainItem(2340000, 1);
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1142610); //获得装备的类形
		var toDrop = ii.randomizeStats(ii.getEquipById(1142610)).copy(); // 生成一个Equip类
		////toDrop. setFlag(1);//上锁不能与时间一起，否则会BUG不消失//上锁
		toDrop. setStr(12);//给力量
		toDrop. setDex(12);//给敏捷 
		toDrop. setInt(12);//给智力
		toDrop. setLuk(12);//给运气
		toDrop. setHp(1200);//HP
                toDrop. setMp(1200);//MP
		toDrop. setWatk(12);//攻击力    
		toDrop. setMatk(12);//魔法力
		//toDrop. setAvoid(20);//回避力
		//toDrop. setHands(10);//手技
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		            cm.gainMeso(-15000000);
                    cm.sendOk("获得#v1142610#天才钓鱼王勋章.");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具.");
                    cm.dispose();
				}
			 }else if (selection == 104) {
                if (cm.haveItem(4031628, 10) & cm.haveItem(4031641, 10) && cm.haveItem(4031642, 10) & cm.haveItem(4031643, 10) && cm.haveItem(4031630, 10) & cm.haveItem(4031637, 10) && cm.haveItem(4031638, 10) & cm.haveItem(4031639, 10) && cm.getMeso() > 1000000) {
                    cm.gainItem(4031628, -10);
                    cm.gainItem(4031641, -10);
                    cm.gainItem(4031642, -10);
                    cm.gainItem(4031643, -10);
                    cm.gainItem(4031630, -10);
                    cm.gainItem(4031637, -10);
                    cm.gainItem(4031638, -10);
                    cm.gainItem(4031639, -10);
                    cm.gainItem(4001200, 1);
		    cm.gainMeso(-100000);
                    cm.sendOk("获得#v4032226#小鱼x1.");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有足够的道具.");
                    cm.dispose();
				}
			 }else if (selection == 105) {
                if (cm.haveItem(2022034, 30) ) {
                    cm.gainItem(2022034, -30);
                    cm.gainItem(2040917, 1);
		    cm.gainItem(4031456,30)
                    cm.sendOk("获得#i2040917#x1#i4031456#x30");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有#i2022034#,请在次确认");
                    cm.dispose();
				}
			 }else if (selection == 106) {
                if (cm.haveItem(2022034, 100) ) {
                    cm.gainItem(2022034, -100);
                    cm.gainItem(1142005, 1);
					cm.gainItem(4031456,100)
                    cm.sendOk("获得#i1142005#x1#i4031456#x100");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有#i2022034#,请在次确认");
                    cm.dispose();
				}
			 }else if (selection == 107) {
                if (cm.haveItem(4032226, 1) ) {
                    cm.gainItem(4032226, -1);
                    cm.gainItem(2022488, 1);
                    cm.sendOk("获得#i2022488#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有#i4032226#,请在次确认");
                    cm.dispose();
				}
			 }else if (selection == 108) {
                if (cm.haveItem(4032226, 20) ) {
                    cm.gainItem(4032226, -20);
                    cm.gainItem(2022489, 1);
                    cm.sendOk("获得#i2022489#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有#i4032226#,请在次确认");
                    cm.dispose();
				}
			 }else if (selection == 109) {
                if (cm.haveItem(4032226, 20) ) {
                    cm.gainItem(4032226, -20);
                    cm.gainItem(2022490, 1);
                    cm.sendOk("获得#i2022490#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("您身上没有#i4032226#,请在次确认");
                    cm.dispose();
				}
			 }
        }
    }
}

	