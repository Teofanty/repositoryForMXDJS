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

            cm.sendOk("¸ĞĞ»ÄãµÄ¹âÁÙ£¡");
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
			text += "#e#r»¶Ó­À´µ½Â³±Ì°²¶Ò»»ÏµÍ³!!#k\r\n\r\n"
            text += "#L1##bÎäÆ÷¶Ò»»#l\r\n\r\n"
			text += "#L2#·À¾ßÊÎÆ·¶Ò»»#l\r\n\r\n"
			text += "#L3#¾íÖá¶Ò»»#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9900004, 777);
        } else if (selection == 2) {
		cm.openNpc(9900004, 888);
        } else if (selection == 3) {
		cm.openNpc(9900004, 999);
		}
	}
    }



