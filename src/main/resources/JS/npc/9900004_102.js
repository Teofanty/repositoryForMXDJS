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
            
            text += "#L2##e#d��>=30��������ȡ#v1142446##l\r\n\r\n"//3
			text += "#L2##e#d��>=30��������ȡ#v5010000##l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.dispose();
        } else if (selection == 2) {
			if(cm.getLevel() < 30){
			cm.sendOk("��ȼ�������30������!");
            cm.dispose();	
		} else if(cm.getPlayer().getOneTimeLog("30xianglian") > 0){
			cm.sendOk("���Ѿ���ȡ�����ˣ�");
            cm.dispose();				
	    } else {
        cm.gainItem(1142446, 1);
		cm.gainItem(5010000, 1);
		cm.getPlayer().setOneTimeLog("30xianglian");
		cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��30���ȼ�����,���һ��ϲ���ɣ�");
		cm.dispose();	
	}
	}
    }
}


