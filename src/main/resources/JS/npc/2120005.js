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
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            if (cm.getPlayer().getMapId() == 108010101 || cm.getPlayer().getMapId() == 108010201 || cm.getPlayer().getMapId() == 108010301 || cm.getPlayer().getMapId() == 108010401 || cm.getPlayer().getMapId() == 108010501) {
                cm.sendOk("本地图暂时无法使用使用拍卖功能");
                cm.dispose();
                return;
            }
            //cm.laba(cm.getName() + "" + " : " + "成功进行了第二次转职" + jobName + ".....~",11);				
            //cm.laba(cm.getPlayer().getName() + " [征集令]" + " : " + "[废弃都市组队任务]需要勇士一起完成",9);
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "               #v3994071##v3994084##v3994062##v3994071##v3994082##v3994062#\r\n" //showghrs
            //text += "               #e#d当天在线时长：" + cm.getPlayer().getzxsj() + " 分钟\r\n"//2
			
			   text += "#L23##e#d1000抵用可兑换#v1002544##l\r\n\r\n"
			    text += "#L24##e#d1500抵用可兑换#v1012081##l\r\n\r\n"
				text += "#L25##e#d5000抵用可兑换万圣节之星#v1142542#四维属性5#l\r\n\r\n"
				text += "#L26##e#d5000抵用可兑换#v1003149##l\r\n\r\n"
			//text += "#L13##e#d#v1382047#可兑换25*#v4000245#+25*#v4000244#+10*#v4020009##4000175
			//text += "#L14##e#d#v1382045#可兑换25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"4001083
			//text += "#L15##e#d#v1382046#可兑换25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"1003149
			//text += "#L16##e#d#v1382048#可兑换25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"4001241
            cm.sendOk(text); 
			//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
        } else if (selection == 1) {
			if(cm.getPlayer().getBossLog("签到") >= 1){//判断签到记录
			    cm.sendOk("你今天已经签过到,请明天再来签到!");
                cm.dispose();
			} else if(cm.getLevel() < 70){//判断等级
					cm.sendOk("你没有达到70级无法签到!70级以后在来找我吧!");
					cm.dispose();
			} else if (!cm.haveItem(4000487, 10)) {//判断物品
					cm.sendOk("你没有10个#v4000487##z4000487#,无法进行签到!");
					cm.dispose();
			} else{
					cm.gainItem(4000487, -10);//扣除物品
					cm.gainExp(50000);//给5万经验的意思
					cm.gainItem(4032398, 1);//给物品
					cm.sendOk("恭喜你,签到成功!");
					cm.getPlayer().setBossLog('签到');//给签到记录
					cm.worldMessage(5,"玩家：["+cm.getName()+"]成功进行了签到,大家恭喜他/她吧.");
					cm.dispose();
			
	
	}
	} else if (selection == 19) {
			if (cm.getInventory(4).isFull(1)){
				cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4001084,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4001084##z4001084#");
				cm.dispose();
			} else{
				
				cm.gainItem(4001084, -1);//给物
				cm.gainItem(4001128, 1000);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 20) {
			if (cm.getInventory(4).isFull(1)){
				cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4000175,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4000175##z4000175#");
				cm.dispose();
			} else{
				
				cm.gainItem(4000175, -1);//给物
				cm.gainItem(4001128, 1000);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 21) {
			if (cm.getInventory(4).isFull(1)){
				cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4001083,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4001083##z4001083#");
				cm.dispose();
			} else{
				
				cm.gainItem(4001083, -1);//给物
				cm.gainItem(4001128, 9999);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 22) {
			if (cm.getInventory(4).isFull(1)){
				cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4001241,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4001241##z4001241#");
				cm.dispose();
			} else{
				
				cm.gainItem(4001241, -1);//给物
				cm.gainItem(4001128, 8000);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 23) {
			if (cm.getInventory(1).isFull(1)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
				} else if(!cm.getPlayer().getCSPoints(2) > 1000){//判断抵用券
			cm.sendOk("#b你没有足够的抵用券");
				cm.dispose();
			} else{
				
					cm.gainD(-1000);//抵用券
				cm.gainItem(1002544, 1);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 24) {
			if (cm.getInventory(1).isFull(1)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
				} else if(!cm.getPlayer().getCSPoints(2) > 1500){//判断抵用券
			cm.sendOk("#b你没有足够的抵用券");
				cm.dispose();
			} else{
				
					cm.gainD(-1500);//抵用券
				cm.gainItem(1012081, 1);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 25) {
			if (cm.getInventory(1).isFull(1)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
				} else if(!cm.getPlayer().getCSPoints(2) > 5000){//判断抵用券
			    cm.sendOk("#b你没有足够的抵用券");
				cm.dispose();
			} else{
				cm.gainD(-5000);//抵用券
				var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1142653); //获得装备的类形
				var toDrop = ii.randomizeStats(ii.getEquipById(1142653)).copy(); // 生成一个Equip类
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//上锁
				toDrop. setStr(5);//给力量
				toDrop. setDex(5);//给敏捷 
				toDrop. setInt(5);//给智力
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
		cm.sendOk("#b恭喜你,兑换#v1142653#成功！");
		cm.dispose();
		}
	} else if (selection == 26) {
			if (cm.getInventory(1).isFull(1)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
				} else if(!cm.getPlayer().getCSPoints(2) > 5000){//判断抵用券
			cm.sendOk("#b你没有足够的抵用券");
				cm.dispose();
			} else{
				cm.gainD(-5000);//抵用券
				cm.gainItem(1003149, 1);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
		} else if (selection == 2) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b请保证其他栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if(cm.getPlayer().getCSPoints(2) >= 100){//判断抵用券
				cm.gainD(-100);//抵用券
				cm.gainItem(4000487, 10);//给物品
				cm.sendOk("消费100抵用券兑换了10朵#v4000487##z4000487#!");
				cm.dispose();
			} else if(cm.getPlayer().getCSPoints(1) >= 100){//判断点券
				cm.gainDJ(-100);//点券
				cm.gainItem(4000487, 10);//给物品
				cm.sendOk("消费100点券兑换了10朵#v4000487##z4000487#!");
				cm.dispose();
			} else{
				cm.sendOk("你没有点券或抵用券!");
				cm.dispose();
			}
		} else if (selection == 3) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b请保证其他栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (cm.haveItem(4000074, 200)) {//判断物品
				cm.gainItem(4000074, -200);//给物品
				cm.gainItem(4000487, 10);//给物品
				cm.sendOk("成功将200个#v4000074##z4000074#兑换了10个#v4000487##z4000487#!");
				cm.dispose();
			} else{
				cm.sendOk("你没有200个#v4000074##z4000074#!");
				cm.dispose();
			}
				} else if (selection == 5) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b请保证其他栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (cm.haveItem(4031025, 10)) {//判断物品
				cm.gainItem(4031025, -10);//给物品
				cm.gainItem(4000487, 10);//给物品
				cm.sendOk("成功将10个#v4031025##z4031025#兑换了10个#v4000487##z4000487#!");
				cm.dispose();
			} else{
				cm.sendOk("你没有10个#v4031025##z4031025#!");
				cm.dispose();
			}
		} else if (selection == 9) {
			if (cm.getInventory(2).isFull(0)){
				cm.sendOk("#b请保证消耗栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4032398,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4032398##z4032398#");
				cm.dispose();
			} else if (cm.getMeso() < 2500000){//判断多少金币
			    cm.sendOk("#b你的金币小于2500000元");
				cm.dispose();
			} else{
				cm.gainMeso(-2500000);//给物品
				cm.gainItem(4032398, -1);//给物品
				cm.gainItem(2340000, 1);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
			
			}
			} else if (selection == 88) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b请保证消耗栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4032398,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4032398##z4032398#");
				cm.dispose();
			
			} else{
				
				cm.gainItem(4032398, -1);//给物品
				cm.gainItem(4031179, 1);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
			
			}
				} else if (selection == 10) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4032398,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4032398##z4032398#");
				cm.dispose();
			} else if (!cm.haveItem(4000039,200)) {//判断物品
			    cm.sendOk("#b你没有200个#v4000039##z4000039#");
				cm.dispose();
			} else if (!cm.haveItem(4000176,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4000176##z4000176#");
				cm.dispose();
			} else{
				cm.gainItem(4032398, -1);//给物品4000176
				cm.gainItem(4000176, -1);//给物品4000176
				cm.gainItem(4000039, -200);//给物品
				cm.gainItem(4020009, 1);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
			
			}
			} else if (selection == 11) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4000232,200)) {//判断物品
			    cm.sendOk("#b你没有200个#v4000232##z4000232#");
				cm.dispose();
			} else if (!cm.haveItem(4000234,200)) {//判断物品
			    cm.sendOk("#b你没有200个#v4000234##z4000234#");
				cm.dispose();
			} else if (!cm.haveItem(4000231,200)) {//判断物品
			    cm.sendOk("#b你没有200个#v4000176##z4000176#");
				cm.dispose();
			} else{
				cm.gainItem(4000232, -200);//给物品4000176
				cm.gainItem(4000234, -200);//给物品4000176
				cm.gainItem(4000231, -200);//给物品
				cm.gainItem(4000245, 1);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
			
		}
		} else if (selection == 12) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4000232,200)) {//判断物品
			    cm.sendOk("#b你没有200个#v4000232##z4000232#");
				cm.dispose();
			} else if (!cm.haveItem(4000234,200)) {//判断物品
			    cm.sendOk("#b你没有200个#v4000234##z4000234#");
				cm.dispose();
			} else if (!cm.haveItem(4000231,200)) {//判断物品
			    cm.sendOk("#b你没有200个#v4000176##z4000176#");
				cm.dispose();
			} else{
				cm.gainItem(4000232, -200);//给物品4000176
				cm.gainItem(4000234, -200);//给物品4000176
				cm.gainItem(4000231, -200);//给物品
				cm.gainItem(4000244, 1);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
			
		}	
		} else if (selection == 13) {
			if (cm.getInventory(4).isFull(2)){
				cm.sendOk("#b请保证其它栏位至少有3个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(1382047,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v1382047##z1382047#");
				cm.dispose();
			} else{
				
				cm.gainItem(1382047, -1);//给物品
				cm.gainItem(4000244, 25);//给物品
				cm.gainItem(4000245, 25);//给物品
				cm.gainItem(4020009, 10);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 14) {
			if (cm.getInventory(4).isFull(2)){
				cm.sendOk("#b请保证其它栏位至少有3个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(1382045,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v1382045##z1382045#");
				cm.dispose();
			} else{
				
				cm.gainItem(1382045, -1);//给物品
				cm.gainItem(4000244, 25);//给物品
				cm.gainItem(4000245, 25);//给物品
				cm.gainItem(4020009, 10);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 15) {
			if (cm.getInventory(4).isFull(2)){
				cm.sendOk("#b请保证其它栏位至少有3个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(1382046,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v1382046##z1382046#");
				cm.dispose();
			} else{
				
				cm.gainItem(1382046, -1);//给物品
				cm.gainItem(4000244, 25);//给物品
				cm.gainItem(4000245, 25);//给物品
				cm.gainItem(4020009, 10);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 16) {
			if (cm.getInventory(4).isFull(2)){
				cm.sendOk("#b请保证其它栏位至少有3个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(1382048,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v1382048##z1382048#");
				cm.dispose();
			} else{
				
				cm.gainItem(1382048, -1);//给物品
				cm.gainItem(4000244, 25);//给物品
				cm.gainItem(4000245, 25);//给物品
				cm.gainItem(4020009, 10);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
}}}