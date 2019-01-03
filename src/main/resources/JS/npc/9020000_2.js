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
			sl = cm.getPlayer().getItemQuantity(4001129, false);
			text += "\t\t\t#v5160006##e我是副本达人,欢迎#k!#n\r\n"
			text += " #b#n   角色纪念币剩余:" + sl + " 颗#k\r\n\r\n"//3
            text += "#L1##b50个#v4001129#兑换1张#v2049002##z2049002##l\r\n"
			text += "#L2##b30个#v4001129#兑换10个#v4020009##z4020009##l\r\n"
			text += "#L3##b150个#v4001129#兑换1个#v1022073##z1022073##l\r\n"
			text += "#L4##b200个#v4001129#兑换1个#v1082232##z1082232##l\r\n"
			text += "#L5##b150个#v4001129#兑换1个#v1072455##z1072455##l\r\n"
			text += "#L6##b350个#v4001129#兑换1个#v1082322#攻击/魔法+1#l\r\n"
			text += "#L7##b350个#v4001129#兑换1个#v1072534##z1072534##l\r\n"
			text += "#L8##b450个#v4001129#兑换1个#v1122118#攻击/魔法+1 四维属性+9 \r\n   回避/命中+20 移动+10 跳跃+5#l\r\n\r\n"
			text += "#L9##b450个#v4001129#兑换1个#v1032186##z1032186##l\r\n\r\n"
			//text += "\t\t\t\r\n#e温馨提示： \r\n#r货币兑换的时候记得在背包其他栏流出两个以上的空格，\r\n如果造成货币未能收入背包的情况GM概不负责\r\n#k#n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { 
		if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
        cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");	
        cm.dispose();
		} else if (cm.haveItem(4001129, 50)) {//判断物品
	    cm.gainItem(4001129, -50);//扣除物品
		cm.gainItem(4000463,1);
		cm.sendOk("恭喜你兑换成功了1张#v2049002##z2049002#");
		cm.worldMessage(6,"玩家：["+cm.getName()+"]在自由市场副本达人,使用50个冒险岛纪念币兑换了1张白医卷轴.");
        cm.dispose();
		 } else {
        cm.sendOk("你的#v4001129#不足50个。");
        cm.dispose();
		}
        } else if (selection == 2) {
        if (cm.getInventory(4).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
        cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换.");	
        cm.dispose();
		} else if (cm.haveItem(4001129, 30)) {//判断物品
	    cm.gainItem(4001129, -30);//扣除物品
		cm.gainItem(4020009,10);
		cm.sendOk("恭喜你兑换成功了10个#v4020009##z4020009#");
		cm.worldMessage(6,"玩家：["+cm.getName()+"]在自由市场副本达人,使用30个冒险岛纪念币兑换了10个时间碎片.");
        cm.dispose();
		 } else {
        cm.sendOk("你的#v4001129#不足30个。");
        cm.dispose();
		}
		} else if (selection == 3) { 
		if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
        cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");	
        cm.dispose();
		} else if (cm.haveItem(4001129, 150)) {//判断物品
	    cm.gainItem(4001129, -150);//扣除物品
		cm.gainItem(1022073,1,true);
		cm.sendOk("恭喜你兑换成功了一个#v1022073##z1022073#");
		cm.worldMessage(6,"玩家：["+cm.getName()+"]在自由市场副本达人,使用150个冒险岛纪念币兑换了划痕眼镜.");
        cm.dispose();
		 } else {
        cm.sendOk("你的#v4001129#不足150个。");
        cm.dispose();
		}
        } else if (selection == 4) {
        if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
        cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");	
        cm.dispose();
		} else if (cm.haveItem(4001129, 200)) {//判断物品
	    cm.gainItem(4001129, -200);//扣除物品
		cm.gainItem(1082232,1,true);
		cm.sendOk("恭喜你兑换成功了一个#v1082232##z1082232#");
		cm.worldMessage(6,"玩家：["+cm.getName()+"]在自由市场副本达人,使用200个冒险岛纪念币兑换了女神的手镯.");
        cm.dispose();
		 } else {
        cm.sendOk("你的#v4001129#不足200个。");
        cm.dispose();
		}
						} else if (selection == 5) { 
		if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
        cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");	
        cm.dispose();
		} else if (cm.haveItem(4001129, 150)) {//判断物品
	    cm.gainItem(4001129, -150);//扣除物品
		cm.gainItem(1072455,1,true);
		cm.sendOk("恭喜你兑换成功了一个#v1072455##z1072455#");
		cm.worldMessage(6,"玩家：["+cm.getName()+"]在自由市场副本达人,使用150个冒险岛纪念币兑换了女神的靴子.");
        cm.dispose();
		 } else {
        cm.sendOk("你的#v4001129#不足150个。");
        cm.dispose();
		}
        } else if (selection == 6) {
        if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
        cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");	
        cm.dispose();
		} else if (cm.haveItem(4001129, 350)) {//判断物品
	    cm.gainItem(4001129, -350);//扣除物品
		cm.gainItem(1082322,1);
		cm.sendOk("恭喜你兑换成功了一个#v1082322##z1082322#");
		cm.worldMessage(6,"玩家：["+cm.getName()+"]在自由市场副本达人,使用350个冒险岛纪念币兑换了雅典娜女神的手镯.");
        cm.dispose();
		 } else {
        cm.sendOk("你的#v4001129#不足350个。");
        cm.dispose();
		}
		} else if (selection == 7) {
        if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
        cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");	
        cm.dispose();
		} else if (cm.haveItem(4001129, 350)) {//判断物品
	    cm.gainItem(4001129, -350);//扣除物品
		cm.gainItem(1072534,1,true);
		cm.sendOk("恭喜你兑换成功了一个#v1072534##z1072534#");
		cm.worldMessage(6,"玩家：["+cm.getName()+"]在自由市场副本达人,使用350个冒险岛纪念币兑换了雅典娜女神的鞋子.");
        cm.dispose();
		 } else {
        cm.sendOk("你的#v4001129#不足350个。");
        cm.dispose();
		}
		} else if (selection == 8) {
        if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
        cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");	
        cm.dispose();
		} else if (cm.haveItem(4001129, 450)) {//判断物品
	    cm.gainItem(4001129, -450);//扣除物品
		cm.gainItem(1122118,1);
		cm.sendOk("恭喜你兑换成功了一个#v1122118##z1122118#");
		cm.worldMessage(6,"玩家：["+cm.getName()+"]在自由市场副本达人,使用450个冒险岛纪念币兑换了永恒爱情证物.");
        cm.dispose();
		 } else {
        cm.sendOk("你的#v4001129#不足450个。");
        cm.dispose();
		}
		} else if (selection == 9) {
        if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
        cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");	
        cm.dispose();
		} else if (cm.haveItem(4001129, 450)) {//判断物品
	    cm.gainItem(4001129, -450);//扣除物品
		cm.gainItem(1032186,1,true);
		cm.sendOk("恭喜你兑换成功了一个#v1032186##z1032186#");
		cm.worldMessage(6,"玩家：["+cm.getName()+"]在自由市场副本达人,使用450个冒险岛纪念币兑换了灿烂的阿尔泰耳环.");
        cm.dispose();
		 } else {
        cm.sendOk("你的#v4001129#不足450个。");
        cm.dispose();
		}
		}
		}}
