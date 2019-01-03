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
			if(cm.getPlayer().getMapId() == 108010101 || cm.getPlayer().getMapId() == 108010201 || cm.getPlayer().getMapId() == 108010301 || cm.getPlayer().getMapId() == 108010401 || cm.getPlayer().getMapId() == 108010501){
			cm.sendOk("本地图暂时无法使用使用拍卖功能");
			cm.dispose();
			return;
		}		
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "这里是蘑菇石像,里面有很多好东西噢。\r\n\r\n"
			text += "#L1##e#r点券抽奖#l\r\n\r\n"
			text += "#L2##e#r金币抽奖#l\r\n\r\n"     
            cm.sendSimple(text);
        } else if (selection == 1) {
			cm.openNpc(9110010, 1);
		} else if (selection == 2) {
			cm.openNpc(9110010, 2);
		}
    }
}


