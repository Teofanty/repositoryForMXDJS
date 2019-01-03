var random = java.lang.Math.floor(Math.random() * 3000 + 1330);
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
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t\t我是兑换NPC,欢迎#k!#n\r\n"
			text += "              #d#e点卷余额：#r" +cm.getPlayer().getCSPoints(1) +  "#d#e点#k\r\n\r\n"//3
			//text += "#L1##d1000W金币兑换1332-4666点券#l\r\n\r\n"
			//text += "#L2##d#v4310018##v4310019##v4310014#兑换戒指#l\t"
			//text += "#L6##d兑换#v4310018##v4310019##v4310014##l\r\n\r\n"
			//text += "#L3##d使用#v4310018#升级#v1114213##l\t"
			//text += "#L4##d使用#v4310019#升级#v1113164##l\r\n\r\n"
			//text += "#L5##d使用#v4310014#升级#v1112793##l\t"
			//text += "#L7##d使用#v4031456#兑换装备#l\r\n\r\n"
			text += "#L20##e#d#v1022088#(四维1)需要200*#v4000004#+50*#v4001176##l\r\n\r\n"
			text += "#L21##e#d#v1022118#(四维3智力6)需要35*#v4031227#+280*#v4001176#+#v1022073#+#v1022088#+3000抵用+200W#l\r\n\r\n"
			text += "#L22##e#d#v1022233#(四维5智力10)需要35*#v4031227#+2*#v4000040#+2*#v4000176#+300*#v4001176#+#v1022118#+5000抵用+300W#l\r\n\r\n"
			text += "#L23##e#d#v1022224#(四维8智力18)需要35*#v4031227#+1*#v4000175#+1*#v4001084#+300*#v4001176#+#v1022233#+5000抵用+300W#l\r\n\r\n"
			text += "#L24##e#d#v1022225#(四维8智力18G3MG6)需要35*#v4031227#+1*#v4001083#+2*#v4001241#+2*#v4001242#+3*#v4032398#+600*#v4001176#+#v1022224#+5000抵用+600W#l\r\n\r\n"
			text += "#L25##e#d#v1022226#(四维8智力18G8MG18)需要35*#v4031227#+500个#v4001176#+#v1022225#+#v4000435#*9+1W抵用+6000W"
			//text += "#L17##e#d#v4001084#可兑换1000*#v4001128##l\r\n\r\n"1022226
            cm.sendSimple(text);
			} else if (selection == 25) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
				} else if(cm.getPlayer().getCSPoints(2) < 10000){//判断抵用券
		cm.sendOk("#b你没有10000点抵用券.");
		cm.dispose();
				} else if (!cm.getMeso() >= 60000000){//判断多少金币
				 cm.sendOk("#b金币不足");
				cm.dispose();
				} else if (!cm.haveItem(4031227,35)) {//判断物品
			    cm.sendOk("#b你没有35个#v4031227##z4031227#");
				cm.dispose();
				} else if (!cm.haveItem(4001176,500)) {//判断物品
			    cm.sendOk("#b你没有500个#v4001176##z4001176#");
				cm.dispose();
				} else if (!cm.haveItem(1022225,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v1022225##z1022225#");
				cm.dispose();
				} else if (!cm.haveItem(4000435,9)) {//判断物品
			    cm.sendOk("#b你没有1个#v4000435##z4000435#");
				cm.dispose();
			} else{
	            cm.gainD(-10000);//抵用券
				cm.gainItem(1022225, -1);// 
				cm.gainItem(4000435, -9);// 
				cm.gainItem(4031227, -35);
				cm.gainItem(4001176, -500);
				cm.gainMeso(- 60000000 );//扣除多少金币
				var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1022226); //获得装备的类形
				var toDrop = ii.randomizeStats(ii.getEquipById(1022226)).copy(); // 生成一个Equip类
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//上锁
				toDrop. setStr(8);//给力量
				toDrop. setDex(8);//给敏捷 
				toDrop. setInt(18);//给智力
				toDrop. setLuk(8);//给运气
				//toDrop. setHp(30);//给HP
				//toDrop. setMp(30);//给MP
				toDrop. setWatk(8);//攻击
				toDrop. setMatk(18);//魔法力
				/*toDrop. setWdef(99);//物理防御
				toDrop. setMdef(99);//魔法防御
				toDrop. setAcc(99);//命中
				toDrop. setAvoid(99);//回避
				toDrop. setHands(99);//手技
				toDrop. setSpeed(99);//移动
				toDrop. setJump(99);//跳跃*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
				cm.sendOk("兑换成功!");
	 status = -1;
				 }
			} else if (selection == 24) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
				} else if(cm.getPlayer().getCSPoints(2) < 5000){//判断抵用券
		cm.sendOk("#b你没有5000点抵用券.");
		cm.dispose();
				} else if (!cm.getMeso() >= 6000000){//判断多少金币
				 cm.sendOk("#b金币不足");
				cm.dispose();
				} else if (!cm.haveItem(4031227,35)) {//判断物品
			    cm.sendOk("#b你没有35个#v4031227##z4031227#");
				cm.dispose();
				} else if (!cm.haveItem(4001176,600)) {//判断物品
			    cm.sendOk("#b你没有600个#v4001176##z4001176#");
				cm.dispose();
				} else if (!cm.haveItem(1022224,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v1022224##z1022224#");
				cm.dispose();
				} else if (!cm.haveItem(4001083,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4001083##z4001083#");
				cm.dispose();
				} else if (!cm.haveItem(4001241,2)) {//判断物品
			    cm.sendOk("#b你没有2个#v4001241##z4001241");
				cm.dispose();
				} else if (!cm.haveItem(4001242,2)) {//判断物品
			    cm.sendOk("#b你没有2个#v4001242##z4001242");
				cm.dispose();
				} else if (!cm.haveItem(4032398,3)) {//判断物品
			    cm.sendOk("#b你没有3个#v4032398##z4032398");
				cm.dispose();
			} else{
	            cm.gainD(-5000);//抵用券
				cm.gainItem(1022224, -1);// 
				cm.gainItem(4001241, -2);// 
				cm.gainItem(4001242, -2);// 
				cm.gainItem(4032398, -3);//
				cm.gainItem(4001083, -1);// 
				cm.gainMeso(- 6000000 );//扣除多少金币
				cm.gainItem(4031227, -35);//给物品
			   cm.gainItem(4001176, -600);//给物品
				var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1022225); //获得装备的类形
				var toDrop = ii.randomizeStats(ii.getEquipById(1022225)).copy(); // 生成一个Equip类
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//上锁
				toDrop. setStr(8);//给力量
				toDrop. setDex(8);//给敏捷 
				toDrop. setInt(18);//给智力
				toDrop. setLuk(8);//给运气
				//toDrop. setHp(30);//给HP
				//toDrop. setMp(30);//给MP
				toDrop. setWatk(3);//攻击
				toDrop. setMatk(6);//魔法力
				/*toDrop. setWdef(99);//物理防御
				toDrop. setMdef(99);//魔法防御
				toDrop. setAcc(99);//命中
				toDrop. setAvoid(99);//回避
				toDrop. setHands(99);//手技
				toDrop. setSpeed(99);//移动
				toDrop. setJump(99);//跳跃*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
				cm.sendOk("兑换成功!");
	 status = -1;
				 }
    } else if (selection == 23) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
				} else if(cm.getPlayer().getCSPoints(2) < 5000){//判断抵用券
		cm.sendOk("#b你没有5000点抵用券.");
		cm.dispose();
				} else if (!cm.getMeso() >= 3000000){//判断多少金币
				 cm.sendOk("#b金币不足");
				cm.dispose();
				} else if (!cm.haveItem(4031227,35)) {//判断物品
			    cm.sendOk("#b你没有35个#v4031227##z4031227#");
				cm.dispose();
				} else if (!cm.haveItem(4001176,300)) {//判断物品
			    cm.sendOk("#b你没有300个#v4001176##z4001176#");
				cm.dispose();
				} else if (!cm.haveItem(1022233,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v1022233##z1022233#");
				cm.dispose();
				} else if (!cm.haveItem(4000175,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4000175##z4000175#");
				cm.dispose();
				} else if (!cm.haveItem(4001084,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4001084##z4001084");
				cm.dispose();
			} else{
	            cm.gainD(-5000);//抵用券
				cm.gainItem(1022233, -1);// 
				cm.gainItem(4000175, -1);// 
				cm.gainItem(4001084, -1);// 
				cm.gainMeso(- 3000000 );//扣除多少金币
				cm.gainItem(4031227, -35);//给物品
			   cm.gainItem(4001176, -300);//给物品
				var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1022224); //获得装备的类形
				var toDrop = ii.randomizeStats(ii.getEquipById(1022224)).copy(); // 生成一个Equip类
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//上锁
				toDrop. setStr(8);//给力量
				toDrop. setDex(8);//给敏捷 
				toDrop. setInt(18);//给智力
				toDrop. setLuk(8);//给运气
				//toDrop. setHp(30);//给HP
				//toDrop. setMp(30);//给MP
				toDrop. setWatk(0);//攻击
				toDrop. setMatk(0);//魔法力
				/*toDrop. setWdef(99);//物理防御
				toDrop. setMdef(99);//魔法防御
				toDrop. setAcc(99);//命中
				toDrop. setAvoid(99);//回避
				toDrop. setHands(99);//手技
				toDrop. setSpeed(99);//移动
				toDrop. setJump(99);//跳跃*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
				cm.sendOk("兑换成功!");
	 status = -1;
				 }
	} else if (selection == 20) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
				} else if (!cm.haveItem(4000004,200)) {//判断物品
			    cm.sendOk("#b你没有200个#v4000004##z4000004#");
				cm.dispose();
				} else if (!cm.haveItem(4001176,50)) {//判断物品
			    cm.sendOk("#b你没有50个#v4001176##z4001176");
				cm.dispose();
			} else{
	            //cm.gainD(-5000);//抵用券
				//cm.gainItem(1022073, -1);// 
				//cm.gainMeso(- 2000000 );//扣除多少金币
				cm.gainItem(4000004, -200);//给物品
			cm.gainItem(4001176, -50);//给物品
				var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1022088); //获得装备的类形
				var toDrop = ii.randomizeStats(ii.getEquipById(1022088)).copy(); // 生成一个Equip类
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//上锁
				toDrop. setStr(1);//给力量
				toDrop. setDex(1);//给敏捷 
				toDrop. setInt(1);//给智力
				toDrop. setLuk(1);//给运气
				//toDrop. setHp(50);//给HP
				//toDrop. setMp(50);//给MP
				toDrop. setWatk(0);//攻击
				toDrop. setMatk(0);//魔法力
				/*toDrop. setWdef(99);//物理防御
				toDrop. setMdef(99);//魔法防御
				toDrop. setAcc(99);//命中
				toDrop. setAvoid(99);//回避
				toDrop. setHands(99);//手技
				toDrop. setSpeed(99);//移动
				toDrop. setJump(99);//跳跃*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
				cm.sendOk("兑换成功!");
	 status = -1;
				 }				 
	} else if (selection == 21) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
				} else if(cm.getPlayer().getCSPoints(2) < 3000){//判断抵用券
		cm.sendOk("#b你没有3000点抵用券.");
		cm.dispose();
				} else if (!cm.getMeso() >= 2000000){//判断多少金币
				 cm.sendOk("#b金币不足");
				cm.dispose();
				} else if (!cm.haveItem(4031227,35)) {//判断物品
			    cm.sendOk("#b你没有35个#v4031227##z4031227#");
				cm.dispose();
				} else if (!cm.haveItem(1022088,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v1022088##z1022088#");
				cm.dispose();
				} else if (!cm.haveItem(1022073,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v1022073##z1022073#");
				cm.dispose();
				} else if (!cm.haveItem(4001176,280)) {//判断物品
			    cm.sendOk("#b你没有280个#v4001176##z4001176");
				cm.dispose();
			} else{
	            cm.gainD(-3000);//抵用券
				cm.gainItem(1022073, -1);// 
				cm.gainItem(1022088, -1);// 
				cm.gainMeso(- 2000000 );//扣除多少金币
				cm.gainItem(4031227, -35);//给物品
			   cm.gainItem(4001176, -280);//给物品
				var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1022118); //获得装备的类形
				var toDrop = ii.randomizeStats(ii.getEquipById(1022118)).copy(); // 生成一个Equip类
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//上锁
				toDrop. setStr(3);//给力量
				toDrop. setDex(3);//给敏捷 
				toDrop. setInt(6);//给智力
				toDrop. setLuk(3);//给运气
				//toDrop. setHp(30);//给HP
				//toDrop. setMp(30);//给MP
				toDrop. setWatk(0);//攻击
				toDrop. setMatk(0);//魔法力
				/*toDrop. setWdef(99);//物理防御
				toDrop. setMdef(99);//魔法防御
				toDrop. setAcc(99);//命中
				toDrop. setAvoid(99);//回避
				toDrop. setHands(99);//手技
				toDrop. setSpeed(99);//移动
				toDrop. setJump(99);//跳跃*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
				cm.sendOk("兑换成功!");
	 status = -1;
				 }
				 } else if (selection == 22) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
				} else if(cm.getPlayer().getCSPoints(2) < 5000){//判断抵用券
		cm.sendOk("#b你没有5000点抵用券.");
		cm.dispose();
				} else if (!cm.getMeso() >= 3000000){//判断多少金币
				 cm.sendOk("#b金币不足");
				cm.dispose();
				} else if (!cm.haveItem(4031227,35)) {//判断物品
			    cm.sendOk("#b你没有35个#v4031227##z4031227#");
				cm.dispose();
				} else if (!cm.haveItem(1022118,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v1022118##z1022118#");
				cm.dispose();
				} else if (!cm.haveItem(4000040,2)) {//判断物品
			    cm.sendOk("#b你没有2个#v4000040##z4000040#");
				cm.dispose();
				} else if (!cm.haveItem(4000176,2)) {//判断物品
			    cm.sendOk("#b你没有2个#v4000176##z4000176#");
				cm.dispose();
				} else if (!cm.haveItem(4001176,300)) {//判断物品
			    cm.sendOk("#b你没有300个#v4001176##z4001176");
				cm.dispose();
			} else{
	            cm.gainD(-5000);//抵用券
				cm.gainItem(1022118, -1);// 
				cm.gainMeso(- 3000000 );//扣除多少金币
				cm.gainItem(4031227, -35);//给物品
				cm.gainItem(4000040, -2);//给物品
				cm.gainItem(4000176, -2);//给物品
			   cm.gainItem(4001176, -300);//给物品
				var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1022233); //获得装备的类形
				var toDrop = ii.randomizeStats(ii.getEquipById(1022233)).copy(); // 生成一个Equip类
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//上锁
				toDrop. setStr(5);//给力量
				toDrop. setDex(5);//给敏捷 
				toDrop. setInt(10);//给智力
				toDrop. setLuk(5);//给运气
				//toDrop. setHp(50);//给HP
				//toDrop. setMp(50);//给MP
				toDrop. setWatk(0);//攻击
				toDrop. setMatk(0);//魔法力
				/*toDrop. setWdef(99);//物理防御
				toDrop. setMdef(99);//魔法防御
				toDrop. setAcc(99);//命中
				toDrop. setAvoid(99);//回避
				toDrop. setHands(99);//手技
				toDrop. setSpeed(99);//移动
				toDrop. setJump(99);//跳跃*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
				cm.sendOk("兑换成功!");
	 status = -1;
				 }
				 
	}
	}
	}
	