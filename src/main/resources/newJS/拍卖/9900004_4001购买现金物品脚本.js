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
            var text = "";
            text += "\t\t\t#e欢迎来到#b现金道具中心 #k!#n\r\n\r\n";
            text += "#L1##e#d使用200点券购买双倍经验卡3小时(一天一次)#l\r\n\r\n";
            text += "#L2##e#d使用200抵用券购买双倍经验卡3小时(一天一次)#l\r\n\r\n";
            cm.sendSimple(text);
        }else if (cm.getPlayer().getBossLog("doubleExpCard") >= 1) {
            cm.sendOk("双倍经验卡一天只能购买一次，请明天再来");
            cm.dispose();
            return;
        }else if (selection == 1) {
            if (cm.getPlayer().getCSPoints(1) < 200) {
                cm.sendOk("您的点券不够，请核对后重试");
                cm.dispose();
                return;
            }
            cm.getPlayer().setBossLog('doubleExpCard');
            cm.gainDJ(-200);
            cm.gainItem(5211047,1,3,true);
            cm.sendOk("购买成功，换频道后生效!");
            cm.dispose();
        } else if (selection == 2) {
            if (cm.getPlayer().getCSPoints(2) < 200) {
                cm.sendOk("您的抵用券不够，请核对后重试");
                cm.dispose();
                return;
            }
            cm.getPlayer().setBossLog('doubleExpCard');
            cm.gainD(-200);
            cm.gainItem(5211047,1,3,true);
            cm.sendOk("购买成功，换频道后生效!");
            cm.dispose();
        }
    }
}
