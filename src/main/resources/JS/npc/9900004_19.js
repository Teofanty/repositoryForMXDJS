var status = 0;
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		var Editing = false //true=��ʾ;false=��ʼ�
          if(Editing){
          cm.sendOk("��ͣ����");
          cm.dispose();
          return;
        } 
			cm.sendSimple("������ֵ1000��ȯ�ɻ��10������Դ����ơ�\r\n ���ĵ�ǰ����Ϊ��#r"+ cm.getcz() +"#k\r\n#L0#20���ֶһ�#v4000463##l\r\n\r\n#L1#100���ֶһ�#v3012024##l\r\n\r\n#L2#500���ֶһ�#v3010070##l\r\n\r\n#L3#1000���ֶһ�#v4251202##l");
        } else if (status == 1) {
            if (selection == 0) {
			 if (cm.getcz() >= 20 ) {
                    cm.gaincz(-20);                   
		            cm.gainItem(4000463, 1);
					 cm.sendOk("��ϲ��,�ɹ��һ���#v4000463##z4000463#!\r\n");
                    cm.worldMessage(6,"��ϲ[ " + cm.getPlayer().getName() + "] �ɹ��һ��˹���� �����һ��ף����(��)��!");
                    cm.dispose();
                } else {
                    cm.sendOk("���ֲ���!");
                    cm.dispose();
                }
            } else if (selection == 1) {
				if (cm.getcz() >= 100 ) {
                    cm.gaincz(-100);                   
		            cm.gainItem(3012024, 1);
					cm.sendOk("��ϲ��,�ɹ��һ���#v3012024##z3012024#!\r\n");
                    cm.worldMessage(6,"��ϲ[ " + cm.getPlayer().getName() + "] �ɹ��һ���ɳ̲������ �����һ��ף����(��)��!");
                    cm.dispose();
                } else {
                    cm.sendOk("���ֲ���!");
                    cm.dispose();
                }
            } else if (selection == 2) {
                if (cm.getcz() >= 500 ) {
                    cm.gaincz(-500);                   
		            cm.gainItem(3010070, 1);
					cm.sendOk("��ϲ��,�ɹ��һ���#v3010070##z3010070#!\r\n");
                    cm.worldMessage(6,"��ϲ[ " + cm.getPlayer().getName() + "] �ɹ��һ��˾��ް�Ʒ���� �����һ��ף����(��)��!");
                    cm.dispose();
                } else {
                    cm.sendOk("���ֲ���!");
                    cm.dispose();
                }	
				} else if (selection == 3) {
                if (cm.getcz() >= 1000 ) {
                    cm.gaincz(-10);                   
		            cm.gainItem(4251202, 1);
					cm.sendOk("��ϲ��,�ɹ��һ���#v4251202##z4251202#!\r\n");
                    cm.worldMessage(6,"��ϲ[ " + cm.getPlayer().getName() + "] �ɹ��һ��˸ߵ����ˮ�� �����һ��ף����(��)��!");
                    cm.dispose();
                } else {
                    cm.sendOk("���ֲ���!");
                    cm.dispose();
                }	
                } else if (selection == 4) {
                if (cm.getcz() >= 10 ) {
                    cm.gaincz(-10);                   
		            cm.gainItem(4001002, 5);
					cm.sendOk("��ϲ��,�ɹ��һ���#v4001002##z4001002#!\r\n");
                    cm.worldMessage(6,"��ϲ[ " + cm.getPlayer().getName() + "] �ɹ��һ���С˵ �����һ��ף����(��)��!");
                    cm.dispose();
                } else {
                    cm.sendOk("���ֲ���!");
                    cm.dispose();
                }					
}}}}
