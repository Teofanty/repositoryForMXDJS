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
            text += "#e#k	本期有奖竞猜活动专用喇叭领取!。\r\n\r\n"
            text += "#L1##r本期有奖竞猜活动专用喇叭领取!#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.getPlayer().getOneTimeLog("lixinlibao3") > 0){
			cm.sendOk("你已经领取过了吧！");
            cm.dispose();
			}else{
			if (cm.getInventory(5).isFull(1)){
			cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法领取.");
			cm.dispose();		
			} else {
			cm.gainItem(5073000, 30);//恶魔文件
            cm.sendOk("领取成功！");
			cm.getPlayer().setOneTimeLog("lixinlibao3");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]在游戏右下角拍卖中领取了竞猜活动喇叭*30.");
            cm.dispose();
			}
		}
    }
}
}	

