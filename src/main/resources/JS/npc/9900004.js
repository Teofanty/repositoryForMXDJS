function start() {
    status = -1;

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            if (cm.getPlayer().getMapId() == 108010101 || cm.getPlayer().getMapId() == 108010201 || cm.getPlayer().getMapId() == 108010301 || cm.getPlayer().getMapId() == 108010401 || cm.getPlayer().getMapId() == 108010501) {
                cm.sendOk("����ͼ��ʱ�޷�ʹ��ʹ����������");
                cm.dispose();
                return;
            }

            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }

            text += "             #v3991028##v3991017##v3994071##v3994082##v3994062#\r\n"
            text += "               #e#d��������ʱ����" + cm.getPlayer().getzxsj() + " ����\r\n"
            text += "#n��ǰ���#r" + cm.getPlayer().getCSPoints(1) + "#d��           #n����ȯ��#r" + cm.getPlayer().getCSPoints(2) + "#d�� \r\n" //  #d#e������#r" + cm.getPlayer().getBeans() + "#d#e��

            text += "#L1##e#dÿ��ǩ��#l     #L2##e#d���߽���#l     #L3##e#r������ֵ#l\r\n\r\n"
            text += "#L5##e#dɾ������#l     #L6##e#d���а�#l       #L4##e#d�ƹ�ϵͳ#l\r\n\r\n"
            text += "#L7##e#dѫ����ȡ#l     #L8##e#r�����Ƽ�#l     #L9##e#dͬ���̳�#l\r\n\r\n"
            //text += "#L10##e#d��������#l\r\n\r\n"
            text += "#L14##e#d���Ǵ���#l\r\n\r\n"
            text += " #e#r   ���� : #e#d���ȼ��ϵ�Ϊ70��,�����ϵ�Ϊ6��                      "
            if (cm.getPlayer().isGM()) {
                text += "-----------#k���¹���ֻ��GM�ſ��ü�-----------\r\n"
                text += "#L18##e#r����ϵͳ#l       #L19##e#r�������#l     #L20##e#r������#l\r\n\r\n"
                text += "#L21##e#r���͵�ͼ#l       #L22##e#r��������#l     #L23##e#r����#l"
            }
            cm.sendOk(text);

        } else if (selection == 1) {
            cm.openNpc(9900004, 1);//ǩ��
        } else if (selection == 2) {
            //	if(cm.getLevel() >= 70){//�жϵȼ�
            cm.openNpc(9900004, 2);
            //} else {
            //cm.openNpc(9900004, 21);
            //	}
        } else if (selection == 3) {
            cm.openNpc(9900004, 1000);//��ֵ
        } else if (selection == 4) {
            cm.openNpc(9900004, 888);//�Ƽ���ϵͳ
        } else if (selection == 5) {
            cm.openNpc(9900004, 10);//ɾ������
        } else if (selection == 6) {
            cm.openNpc(9900004, 6);//���а�
        } else if (selection == 7) {
            cm.openNpc(9900004, 25);//ѫ��
        } else if (selection == 7) {
            cm.openNpc(9900004, 14);//ѫ��
        } else if (selection == 9) {
            cm.openNpc(9900004, 34);//ͬ���̳�
        } else if (selection == 8) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "����ѵ����-----------------�ʺ� 1 ~ 30 ��(�Ƽ�)\r\n"
            text += "��ĺ���-------------------�ʺ� 10 ~ 20 ��\r\n"
            text += "����һ����<��1����>--------�ʺ� 20 ~ 30 ��\r\n"
            text += "Ұ�������-----------------�ʺ� 20 ~ 35 ��\r\n"
            text += "����֮��IV---------------�ʺ� 25 ~ 40 ��(�Ƽ�)\r\n"
            text += "Ұ���������---------------�ʺ� 20 ~ 35 ��\r\n"
            text += "���Ϲ㳡-------------------�ʺ� 20 ~ 40 ��\r\n"
            text += "¶̨����-------------------�ʺ� 40 ~ 70 ��\r\n"
            text += "Σ�յ�Ͽ�Ȣ�---------------�ʺ� 40 ~ 60 ��\r\n"
            text += "��Ѩ-----------------------�ʺ� 40 ~ 70 ��\r\n"
            text += "����һ����<��4����>--------�ʺ� 50 ~ 70 ��\r\n"
            text += "����֮��-------------------�ʺ� 60 ~ 80 ��\r\n"
            text += "����֮�֢�-----------------�ʺ� 55 ~ 70 ��\r\n"
            text += "ʮ��ҩ�ݵ�-----------------�ʺ� 45 ~ 60 ��\r\n"
            text += "����������-----------------�ʺ� 50 ~ 60 ��\r\n"
            text += "��������-----------------�ʺ� 50 ~ 70 ��\r\n"
            text += "�Ʋʹ�԰��-----------------�ʺ� 35 ~ 60 ��\r\n"
            text += "���鴬��-------------------�ʺ� 60 ~ 90 ��\r\n"
            text += "�ڰ�ͥԺ��-----------------�ʺ� 70 ~ 90 ��\r\n"
            text += "���붴Ѩ��----------------�ʺ� 80 ~ 120 ��\r\n"
            text += "��������ս��--------------�ʺ� 85 ~ 120 ��\r\n"
            text += "��ʧ��ʱ��----------------�ʺ� 85 ~ 120 ��\r\n"
            text += "ʱ��ֹ֮ͣ��--------------�ʺ� 95 ~ 120 ��\r\n"
            text += "��ɭ�������--------------�ʺ� 95 ~ 120 ��\r\n"
            text += "��³�����----------------�ʺ� 95 ~ 150 ��\r\n"
            text += "��֮��Ѩ���-------------�ʺ� 100 ~ 150 ��\r\n"
            text += "��ȴ֮·5----------------�ʺ� 120 ~ 150 ��\r\n"
            cm.sendOk(text);
            cm.dispose();
        } else if (selection == 18) { //����ϵͳ
            if (cm.getPlayer().getCloneSize() != 0) {
                cm.getPlayer().dropMessage(5, "���ķ����Ѿ�����");
                cm.dispose();
                return;
            } else {
                cm.fs();
                cm.dispose();
                return;
            }
        } else if (selection == 19) { //���ͶԷ����
            cm.openNpc(9900004, 766);
        } else if (selection == 10) { //���ͶԷ����
            cm.openNpc(9900004, 9997);
        } else if (selection == 20) { //���ͶԷ����
            cm.openNpc(9900004, 997);
        } else if (selection == 21) { //����
            cm.openNpc(9900004, 996);
        } else if (selection == 22) { //��������
            cm.openNpc(9900004, 995);
        } else if (selection == 23) { //�����̳�
            cm.openNpc(9900004, 889);

            //cm.showfame();
            //cm.dispose();
        }
    }
}