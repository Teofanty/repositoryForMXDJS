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

            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "欢迎来到节日兑换系统\r\n" 
			text += "#L66##e#d88个#v4310099#兑换#v2210020##l\r\n\r\n"
            text += "#L58##e#d888个#v4310099#兑换#v1142655#（四维5 永久 ）#l\r\n\r\n"
			text += "#L62##e#d888个#v4310099#兑换#v1003204##l\r\n\r\n"
			text += "#L63##e#d888个#v4310099#兑换#v1002548##l\r\n\r\n"
			text += "#L64##e#d888个#v4310099#兑换#v1050229#男#l\r\n\r\n"
			text += "#L65##e#d888个#v4310099#兑换#v1051280#女#l\r\n\r\n"
			text += "#L59##e#d888个#v4310099#兑换#v1702301##l\r\n\r\n"
			text += "#L60##e#d888个#v4310099#兑换#v1702400##l\r\n\r\n"
			text += "#L61##e#d888个#v4310099#兑换#v1382164#长杖(不是点状)#l\r\n\r\n"
			text += "#L69##e#d888个#v4310099#兑换#v1003149##l\r\n\r\n"
			cm.sendOk(text); 
        
		
		} else if (selection == 58) {
if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 888)) {//判断物品
			cm.sendOk("#b你没有888个#v4310099#无法兑换.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -888);//扣除物品
var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1142655); //获得装备的类形
				var toDrop = ii.randomizeStats(ii.getEquipById(1142655)).copy(); // 生成一个Equip类
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
		cm.sendOk("#b恭喜你,兑换#v1142655#成功！");
		cm.dispose();
		}
		} else if (selection == 59) {
if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 888)) {//判断物品
			cm.sendOk("#b你没有888个#v4310099#无法兑换.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -888);//扣除物品
              cm.gainItem(1702301, 1);
		cm.sendOk("#b恭喜你,兑换#v1702301#成功！");
		cm.dispose();
		}
		} else if (selection == 69) {
if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 888)) {//判断物品
			cm.sendOk("#b你没有888个#v4310099#无法兑换.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -888);//扣除物品
              cm.gainItem(1003149, 1);
		cm.sendOk("#b恭喜你,兑换#v1003149#成功！");
		cm.dispose();
		}
		} else if (selection == 60) {
if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 888)) {//判断物品
			cm.sendOk("#b你没有888个#v4310099#无法兑换.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -888);//扣除物品
              cm.gainItem(1702400, 1);
		cm.sendOk("#b恭喜你,兑换#v1702400#成功！");
		cm.dispose();
		}
		} else if (selection == 61) {
if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 888)) {//判断物品
			cm.sendOk("#b你没有888个#v4310099#无法兑换.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -888);//扣除物品
              cm.gainItem(1382164, 1);
		cm.sendOk("#b恭喜你,兑换#v1382164#成功！");
		cm.dispose();
		}
	} else if (selection == 62) {
if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 888)) {//判断物品
			cm.sendOk("#b你没有888个#v4310099#无法兑换.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -888);//扣除物品
              cm.gainItem(1003204, 1);
		cm.sendOk("#b恭喜你,兑换#v1003204#成功！");
		cm.dispose();
		}
     	
	} else if (selection == 63) {
if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 888)) {//判断物品
			cm.sendOk("#b你没有888个#v4310099#无法兑换.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -888);//扣除物品
              cm.gainItem(1002548, 1);
		cm.sendOk("#b恭喜你,兑换#v1002548#成功！");
		cm.dispose();
		}
		} else if (selection == 64) {
if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 888)) {//判断物品
			cm.sendOk("#b你没有888个#v4310099#无法兑换.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -888);//扣除物品
              cm.gainItem(1050229, 1);
		cm.sendOk("#b恭喜你,兑换#v1050229#成功！");
		cm.dispose();
		}
		} else if (selection == 65) {
if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 888)) {//判断物品
			cm.sendOk("#b你没有888个#v4310099#无法兑换.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -888);//扣除物品
              cm.gainItem(1051280, 1);
		cm.sendOk("#b恭喜你,兑换#v1051280#成功！");
		cm.dispose();
		}
		} else if (selection == 66) {
if (cm.getInventory(2).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 88)) {//判断物品
			cm.sendOk("#b你没有88个#v4310099#无法兑换.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -88);//扣除物品
              cm.gainItem(2210020, 1);
		cm.sendOk("#b恭喜你,兑换#v2210020#成功！");
		cm.dispose();
		}
        }
    } } 
