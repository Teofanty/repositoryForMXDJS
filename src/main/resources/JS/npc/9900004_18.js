/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����     
 ��ϵ��ʽ��2412614144
 =====================
 */

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || mode == 0) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		if (status == 0) {
			cm.sendSimple ("1��Ȩ ʡ����ʡ�Ļ�ʡ�� ������Ҳ���õ�����ı����� \r\n#b#L0#1��Ȩ˫�����鿨 [1000���]#l\r\n#L1#1��Ȩ˫�����ʿ� [1000���]#l\r\n");
		} else if (status == 1) {
			if (selection == 0) {
				if (cm.getPlayer().getCSPoints(1) < 1000) {		
					cm.sendOk("��û���㹻�ĵ���޷�����");
					cm.dispose();
					return;
				}
				else if (cm.getPlayer().getLevel() < 1) {
					cm.sendOk("û������� ���빺��#b1��Ȩ˫�����鿨#k.ȥȥȥ!ȥ��3СʱȨ�� ");
					cm.dispose();
					return;
				}
				    cm.gainItem(5210002,1,1);
					cm.gainDJ(-1000);
					cm.sendOk("  �θ�,����#b1��Ȩ˫�����鿨#k�ɹ��� ȥƴ�����ΰ� ����ڱ������� ˭��һ����Ȣ�� "); 
					cm.dispose(); 
					return; 	
				} 
			
			if (selection == 1) {
				if (cm.getPlayer().getCSPoints(1) < 1000) {
					cm.sendOk("��û���㹻�ĵ���޷�����");
					cm.dispose();
					return;
				}
				else if (cm.getPlayer().getLevel() < 2) {
					cm.sendOk("û������� ���빺��#b1��Ȩ˫�����ʿ�#k.ȥȥȥ!ȥ��3СʱȨ�� ");
					cm.dispose();
					return;
				}
				    cm.gainItem(5360000,1,1);
					cm.gainDJ(-1000);
					cm.sendOk("  �θ�,����#b1��Ȩ˫�����ʿ�#k�ɹ��� �౬�� ���������� �������ڵ����� "); 
					cm.dispose(); 
					return; 	
				} 
			if (selection == 2) {
				if (cm.getPlayer().getCSPoints(1) < 10000) {
					cm.sendOk("��û���㹻�ĵ���޷�����");
					cm.dispose();
					return;
				}
				else if (cm.getPlayer().getLevel() < 200) {
					cm.sendOk("��������Ҫ#b200#k���ſɹ���#b������#k.���Ͱɣ���ӭ�ٴι��٣�");
					cm.dispose();
					return;
				}
				    cm.gainItem(1912000,1);
				    cm.gainItem(1902002,1) ;
					cm.gainDJ(-10000);
					cm.teachSkill(1004,1,1);
					cm.sendOk("��ϲ�㹺��#b������#k�ɹ���"); 
					cm.dispose(); 
					return; 	
				} 
			}
	}
}
