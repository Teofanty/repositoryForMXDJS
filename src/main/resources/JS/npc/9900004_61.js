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
            text += "#L1##e#d1个#v1142081##z1142081#+300万金币+500个#v4001126##z4001126#+50个#v4031456##z4031456#+20个#v4000487##z4000487#+5个#v4000040##z4000040#兑换#v1142296#攻击/魔法+5,4维属性+10,HP/MP300#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
		if (cm.getInventory(1).isFull(0)){//判断第四个也就是其它栏的装备栏是否有一个空格
        cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法抽奖.");
        cm.dispose();
        } else if (!cm.haveItem(1142081, 1)) {//判断物品
		cm.sendOk("#b#v1142081##z1142081#不足.");
        cm.dispose();
		} else if (!cm.haveItem(4001126, 500)) {//判断物品
		cm.sendOk("#b#v4001126##z4001126#不足.");
        cm.dispose();
		} else if (!cm.haveItem(4031456, 50)) {//判断物品
		cm.sendOk("#b#v4031456##z4031456#不足.");
        cm.dispose();
		} else if (!cm.haveItem(4000487, 20)) {//判断物品
		cm.sendOk("#b#v4000487##z4000487#不足.");
        cm.dispose();
		} else if (!cm.haveItem(4000040, 5)) {//判断物品
		cm.sendOk("#b#v4000040##z4000040#不足.");
        cm.dispose();
		} else if (!cm.getMeso() >= 3000000) {//判断物品
		cm.sendOk("#b金币不足300万不足.");
        cm.dispose();
		} else{
		cm.gainItem(1142081, -1);//扣除物品
		cm.gainItem(4001126, -500);//扣除物品
		cm.gainItem(4031456, -50);//扣除物品
		cm.gainItem(4000487, -20);//扣除物品
		cm.gainItem(4000040, -5);//扣除物品
		cm.gainMeso(- 3000000);//扣除多少金币
		cm.gainItem(1142296,15,15,15,15,300,300,5,5,0,0,0,0,0,0);//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
		cm.sendOk("#b成功兑换#v1142296##z1142296#.");
        cm.dispose();
		}
	}
    }
}


