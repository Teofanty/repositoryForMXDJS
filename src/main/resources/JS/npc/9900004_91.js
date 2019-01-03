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
			//显示物品ID图片用的代码是  #v这里写入ID#
			text += "#e#r    亲. 领取点卷 之前记得 #b#b先将包包腾出空间  #k\r\n\r\n否则落了物品! #b#b咱可不负责赔偿的哟!!!#k\r\n\r\n\r\n"
            text += "#L1##e#d 3小时权双倍经验卡 or 3小时权1天权双倍爆率卡 #l\r\n\r\n"//3
            text += "#L2##d#v4170000#领取100元点卷！#l\r\n\r\n"//3
            text += "#L3##d#v4170001#领取300元点卷！#l\r\n\r\n"//3
            text += "#L4##d#v4170002#领取500元点卷！#l\r\n\r\n"//3
            text += "#L5##d#v4170003#领取1000元点卷！#l\r\n\r\n"//3
			text += "#L6##d#v4170004#领取3000元点卷！#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(1052015, 0);
        } else if (selection == 2) {
		cm.openNpc(9900004, 71);
        } else if (selection == 3) {
		cm.openNpc(9900004, 72);
        } else if (selection == 4) {
		cm.openNpc(9900004, 73);
		} else if (selection == 5) {
		cm.openNpc(9900004, 74);
		} else if (selection == 6) {
		cm.openNpc(9900004, 75);
	}
    }
}


