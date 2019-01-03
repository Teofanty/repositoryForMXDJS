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
			text += "#e#r欢迎来到勋章合成!!#k\r\n\r\n"
			text += "#L2##e#d1个#v1142296##z1142296#+800万金币+500个#v4001126##z4001126#+150个#v4031456##z4031456#+2个#v4251201##z4251201#+100个#v4000487##z4000487#+10个#v4001111##z4001111#+10个#v4000243##z4000243#兑换#v1142218#攻击/魔法+15,4维属性+30,HP/MP500#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
				if (cm.getInventory(1).isFull(0)){//判断第四个也就是其它栏的装备栏是否有一个空格
        cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法抽奖.");
        cm.dispose();
        } else if (!cm.haveItem(1142296, 1)) {//判断物品
		cm.sendOk("#b#v1142296##z1142296#不足.");
        cm.dispose();
		} else if (!cm.haveItem(4001126, 500)) {//判断物品
		cm.sendOk("#b#v4001126##z4001126#不足.");
        cm.dispose();
		} else if (!cm.haveItem(4031456, 150)) {//判断物品
		cm.sendOk("#b#v4031456##z4031456#不足.");
        cm.dispose();
		} else if (!cm.haveItem(4251201, 2)) {//判断物品
		cm.sendOk("#b#v4251201##z4251201#不足.");
        cm.dispose();
		} else if (!cm.haveItem(4000487, 100)) {//判断物品
		cm.sendOk("#b#v4000040##z4000040#不足.");
        cm.dispose();
		} else if (!cm.haveItem(4001111, 10)) {//判断物品
		cm.sendOk("#b#v4001111##z4001111#不足.");
        cm.dispose();
		} else if (!cm.haveItem(4000243, 10)) {//判断物品
		cm.sendOk("#b#v4000243##z4000243#不足.");
        cm.dispose();
		} else if (!cm.getMeso() >= 8000000) {//判断物品
		cm.sendOk("#b金币不足800万不足.");
        cm.dispose();
		} else{
		cm.gainItem(1142296, -1);//扣除物品
		cm.gainItem(4001126, -500);//扣除物品
		cm.gainItem(4031456, -150);//扣除物品
		cm.gainItem(4251201, -2);//扣除物品
		cm.gainItem(4000487, -100);//扣除物品
		cm.gainItem(4001111, -10);//扣除物品
		cm.gainItem(4000243, -10);//扣除物品
		cm.gainMeso(- 8000000);//扣除多少金币
		cm.gainItem(1142218,30,30,30,30,500,500,15,15,0,0,0,0,0,0);//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
		cm.sendOk("#b成功兑换#v1142218##z1142218#.");
        cm.dispose();
		}
	}
    }
}


