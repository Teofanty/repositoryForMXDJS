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
            text += "#L3##e#d1个#v1142218##z1142218#+2000万金币+8000个#v4001126##z4001126#+300个#v4031456##z4031456#+1个#v4251202##z4251202#+200个#v4000487##z4000487#+3个#v4001085##z4001085#+3个#v4001084##z4001084#+3个#v4001083##z4001083#兑换#v1142408#攻击/魔法+25,4维属性+50,HP/MP1000#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
				if (cm.getInventory(1).isFull(0)){//判断第四个也就是其它栏的装备栏是否有一个空格
        cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法抽奖.");
        cm.dispose();
        } else if (!cm.haveItem(1142218, 1)) {//判断物品
		cm.sendOk("#b#v1142296##z1142218#不足.");
        cm.dispose();
		} else if (!cm.haveItem(4001126, 8000)) {//判断物品
		cm.sendOk("#b#v4001126##z4001126#不足.");
        cm.dispose();
		} else if (!cm.haveItem(4031456, 300)) {//判断物品
		cm.sendOk("#b#v4031456##z4031456#不足.");
        cm.dispose();
		} else if (!cm.haveItem(4251202, 1)) {//判断物品
		cm.sendOk("#b#v4251201##z4251201#不足.");
        cm.dispose();
		} else if (!cm.haveItem(4000487, 200)) {//判断物品
		cm.sendOk("#b#v4000487##z4000487#不足.");
        cm.dispose();
		} else if (!cm.haveItem(4001085, 3)) {//判断物品
		cm.sendOk("#b#v4001085##z4001085#不足.");
        cm.dispose();
		} else if (!cm.haveItem(4001084, 3)) {//判断物品
		cm.sendOk("#b#v4001084##z4001084#不足.");
        cm.dispose();
		} else if (!cm.haveItem(4001083, 3)) {//判断物品
		cm.sendOk("#b#v4001083##z4001083#不足.");
        cm.dispose();
		} else if (!cm.getMeso() >= 20000000) {//判断物品
		cm.sendOk("#b金币不足2000万不足.");
        cm.dispose();
		} else{
		cm.gainItem(1142218, -1);//扣除物品
		cm.gainItem(4001126, -8000);//扣除物品
		cm.gainItem(4031456, -300);//扣除物品
		cm.gainItem(4251202, -1);//扣除物品
		cm.gainItem(4000487, -200);//扣除物品
		cm.gainItem(4001085, -3);//扣除物品
		cm.gainItem(4001084, -3);//扣除物品
		cm.gainItem(4001083, -3);//扣除物品
		cm.gainMeso(- 20000000);//扣除多少金币
		cm.gainItem(1142408,50,50,50,50,1000,1000,25,25,0,0,0,0,0,0);//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
		cm.sendOk("#b成功兑换#v1142081##z1142081#.");
        cm.dispose();
		}
	}
    }
}


