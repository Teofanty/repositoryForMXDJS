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
          
            text += "#L2##e#d��>=70��������ȡ#v1122058##l\r\n\r\n"//3
			text += "#L2##e#d��>=70��������ȡ#v1142447##l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.dispose();
        } else if (selection == 2) {
			if(cm.getLevel() < 70){
			cm.sendOk("��ȼ�������70������!");
            cm.dispose();	
		} else if(cm.getPlayer().getOneTimeLog("70xianglian") > 0){
			cm.sendOk("���Ѿ���ȡ�����ˣ�");
            cm.dispose();				
	    } else {
        cm.gainItem(1122058, 1);
		cm.gainItem(1142447, 1);
		cm.getPlayer().setOneTimeLog("70xianglian");
		cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��70���ȼ�����,���һ��ϲ���ɣ�");
		cm.dispose();	
	}
	}
    }
}


