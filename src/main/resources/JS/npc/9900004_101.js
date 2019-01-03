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
           
            text += "#L2##e#d需>=10级才能领取#v1302017##l\r\n\r\n"
			text += "#L2##e#d需>=10级才能领取#v1142445##l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.dispose();
        } else if (selection == 2) {
			if(cm.getLevel() < 10){
			cm.sendOk("你等级还不够10级以上!");
            cm.dispose();	
		} else if(cm.getPlayer().getOneTimeLog("10xianglian") > 0){
			cm.sendOk("你已经领取过过了！");
            cm.dispose();				
	    } else {
        cm.gainItem(1302017, 1);
		cm.gainItem(1142445, 1);
		cm.getPlayer().setOneTimeLog("10xianglian");
		cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了10级等级奖励,大家一起恭喜他吧！");
		cm.dispose();	
	}
	}
    }
}


