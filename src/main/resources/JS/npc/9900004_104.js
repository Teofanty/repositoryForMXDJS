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

            cm.sendOk("��л��Ĺ��٣�");
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
           
            text += "#L2##e#d��>=120��������ȡ#v4000463##l\r\n\r\n"//3
			text += "#L2##e#d��>=120��������ȡ#v1142448##l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.dispose();
        } else if (selection == 2) {
			if(cm.getLevel() < 120){
			cm.sendOk("��ȼ�������120������!");
            cm.dispose();	
		} else if(cm.getPlayer().getOneTimeLog("120xianglian") > 0){
			cm.sendOk("���Ѿ���ȡ�����ˣ�");
            cm.dispose();				
	    } else {
        cm.gainItem(4000463, 1);
		cm.gainItem(1142448, 1);
		cm.getPlayer().setOneTimeLog("120xianglian");
		cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��120���ȼ�����,���һ��ϲ���ɣ�");
		cm.dispose();	
	}
	}
    }
}


