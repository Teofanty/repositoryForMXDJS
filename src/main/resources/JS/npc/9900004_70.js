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
            text += "#e#k	�����н����»ר��������ȡ!��\r\n\r\n"
            text += "#L1##r�����н����»ר��������ȡ!#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.getPlayer().getOneTimeLog("lixinlibao3") > 0){
			cm.sendOk("���Ѿ���ȡ���˰ɣ�");
            cm.dispose();
			}else{
			if (cm.getInventory(5).isFull(1)){
			cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷���ȡ.");
			cm.dispose();		
			} else {
			cm.gainItem(5073000, 30);//��ħ�ļ�
            cm.sendOk("��ȡ�ɹ���");
			cm.getPlayer().setOneTimeLog("lixinlibao3");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]����Ϸ���½���������ȡ�˾��»����*30.");
            cm.dispose();
			}
		}
    }
}
}	

