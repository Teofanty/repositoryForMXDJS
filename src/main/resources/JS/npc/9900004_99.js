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
		     //cm.deleteNullItem();
			if(cm.getPlayer().getMapId() == 108010101 || cm.getPlayer().getMapId() == 108010201 || cm.getPlayer().getMapId() == 108010301 || cm.getPlayer().getMapId() == 108010401 || cm.getPlayer().getMapId() == 108010501){
	cm.sendOk("����ͼ��ʱ�޷�ʹ��ʹ����������");
cm.dispose();
return;
}		
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "                 #r#k��������ж�Ӧ�Ĳ��϶һ�\r\n"
			text += "                 #r#r�������ƾ֤��?\r\n"
         text += "#L1##e#r#v4001126#�һ�#v1432047##l\r\n\r\n" //������ʥǹ
		 text += "#L2##e#r#v4001126#�һ�#v1452057##l\r\n\r\n" //���㾪�繭
		 text += "#L3##e#r#v4001126#�һ�#v1462050##l\r\n\r\n" //����ڤ����
		 text += "#L4##e#r#v4001126#�һ�#v1472068##l\r\n\r\n" //����󱯸�
		 text += "#L5##e#r#v4001126#�һ�#v1482023##l\r\n\r\n" //�����ȸ��
	     text += "#L6##e#r#v4001126#�һ�#v1492023##l\r\n\r\n" //�������
		 text += "#L7##e#r#v4001126#�һ�#v1422037##l\r\n\r\n" //����������
		 text += "#L7##e#r#v4001126#�һ�#v1412033##l\r\n\r\n" //����������
		 text += "#L7##e#r#v4001126#�һ�#v1402046##l\r\n\r\n" //������ڤ��
		 text += "#L7##e#r#v4001126#�һ�#v1382057##l\r\n\r\n" //���������
		 text += "#L7##e#r#v4001126#�һ�#v1372044##l\r\n\r\n" //���������
		 
	
			cm.sendSimple(text);
        } else if (selection == 1) {
        cm.openNpc(9900004, 111);//ͬ����װ
        } else if (selection == 2) {
		cm.openNpc(9900004, 112);//���߸���
		} else if (selection == 3) {
		cm.openNpc(9900004, 113);//��ֵ��ȡ+
		} else if (selection == 4) {
		cm.openNpc(9900004, 114);//�����
		} else if (selection == 5) {
		cm.openNpc(9900004, 115);//ÿ������+
        } else if (selection == 6) {
		cm.openNpc(9900004, 116);//�� �� ��+
		} else if (selection == 7) {
		cm.openNpc(9900004, 117);//�����ϳ�+
		} else if (selection == 9) {
		cm.openNpc(9120106, 0);//���κϳ�
		} else if (selection == 10) {
		cm.openNpc(9900004, 10);//ɾ��ָ����Ʒ+
        } else if (selection == 11) {
		cm.openNpc(9900004, 5);//���Ҷһ�+
		} else if (selection == 12) {
		cm.openNpc(9900004, 2);//���϶һ�
		} else if (selection == 13) {
		cm.openNpc(9900004, 14);//��Ҷ�黻����
		
        
		
		
		
        
		
        } else if (selection == 9) {
		cm.openNpc(9900004, 13);//�µ�װ�̳�
		
        } else if (selection == 9) {
		cm.openNpc(9900004, 9);//��������
	}
    }
}


