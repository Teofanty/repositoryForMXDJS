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
			text += "\t\t\t#v5160006##e我是中介商人,欢迎#k!#n\r\n"
			text += "              #d#e点卷余额：#r" +cm.getPlayer().getCSPoints(1) +  "#d#e点#k\r\n\r\n"//3
            text += "#L1##b100点卷兑换#v4000463#1个#l    #L2##b1个#v4000463#兑换100点卷#l\r\n\r\n"
			text += "#L3##b1000点卷兑换#v4000463#10个#l  #L4##b10个#v4000463#兑换1000点卷#l\r\n\r\n"
			text += "#L5##b1W点卷兑换#v4000463#100个#l   #L6##b100个#v4000463#兑换10000点卷#l\r\n\r\n"//3
			//text += "\t\t\t\r\n#e温馨提示： \r\n#r货币兑换的时候记得在背包其他栏流出两个以上的空格，\r\n如果造成货币未能收入背包的情况GM概不负责\r\n#k#n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { 
		if (cm.getInventory(4).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
        cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换.");	
        cm.dispose();
		} else if(cm.getPlayer().getCSPoints(1) >= 100){//判断点券
	    cm.getPlayer().modifyCSPoints(1, -100, true);//给点券第一种函数
		cm.gainItem(4000463,1);
		cm.sendOk("恭喜你兑换成功了一个#v4000463#");
		cm.worldMessage(6,"玩家：["+cm.getName()+"]在自由市场中介达人,使用100点券兑换了1个国庆币.");
        cm.dispose();
		 } else {
        cm.sendOk("你的点卷不足100点。");
        cm.dispose();
		}
        } else if (selection == 2) {
        if (cm.haveItem(4000463, 1)) {
		cm.gainItem(4000463,-1);
        cm.getPlayer().modifyCSPoints(1, +100, true);//给点券第一种函数
		cm.sendOk("恭喜你成功兑换了100点");
		cm.worldMessage(6,"玩家：["+cm.getName()+"]在自由市场中介达人,使用1个国庆币兑换了100点券.");
        cm.dispose();
		 } else {
        cm.sendOk("你的没有#v4000463#");
        cm.dispose();
		}
		} else if (selection == 3) { 
		if (cm.getInventory(4).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
        cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换.");	
        cm.dispose();
		} else if(cm.getPlayer().getCSPoints(1) >= 1000){//判断点券
	    cm.getPlayer().modifyCSPoints(1, -1000, true);//给点券第一种函数
		cm.gainItem(4000463,10);
		cm.sendOk("恭喜你兑换成功了10个#v4000463#");
		cm.worldMessage(6,"玩家：["+cm.getName()+"]在自由市场中介达人,使用1000点券兑换了10个国庆币.");
        cm.dispose();
		 } else {
        cm.sendOk("你的点卷不足100点。");
        cm.dispose();
		}
        } else if (selection == 4) {
        if (cm.haveItem(4000463, 10)) {
		cm.gainItem(4000463,-10);
        cm.getPlayer().modifyCSPoints(1, +1000, true);//给点券第一种函数
		cm.sendOk("恭喜你成功兑换了1000点");
		cm.worldMessage(6,"玩家：["+cm.getName()+"]在自由市场中介达人,使用10个国庆币兑换了1000点券.");
        cm.dispose();
		 } else {
        cm.sendOk("你的没有10个#v4000463#");
        cm.dispose();
				}
						} else if (selection == 5) { 
		if (cm.getInventory(4).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
        cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换.");	
        cm.dispose();
		} else if(cm.getPlayer().getCSPoints(1) >= 10000){//判断点券
	    cm.getPlayer().modifyCSPoints(1, -10000, true);//给点券第一种函数
		cm.gainItem(4000463,100);
		cm.sendOk("恭喜你兑换成功了100个#v4000463#");
		cm.worldMessage(6,"玩家：["+cm.getName()+"]在自由市场中介达人,使用10000点券兑换了100个国庆币.");
        cm.dispose();
		 } else {
        cm.sendOk("你的点卷不足1W点。");
        cm.dispose();
		}
        } else if (selection == 6) {
        if (cm.haveItem(4000463, 100)) {
		cm.gainItem(4000463,-100);
        cm.getPlayer().modifyCSPoints(1, +10000, true);//给点券第一种函数
		cm.worldMessage(6,"玩家：["+cm.getName()+"]在自由市场中介达人,使用100个国庆币兑换了10000点券.");
		cm.sendOk("恭喜你成功兑换了1W点");
        cm.dispose();
		 } else {
        cm.sendOk("你的没有100个#v4000463#");
        cm.dispose();
				}
		}
		}}
