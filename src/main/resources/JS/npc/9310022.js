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
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��ӭ���٣�");
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
            for (i = 0; i < 60; i++) {
                text += "";
            }
            text +="��Һ�,���Ǻϳ�NPC\r\n#r60%#k�ĸ���ǿ��һ�ν�ָ��ȫ����+1��������+1��HP+5��MP+5\r\n#r10%#k�ĸ���ǿ��һ�ν�ָ��ȫ����+2��������+2��hp+15,mp+15\r\nע:��ָ���ǿ��5��\r\n";
            text +="#L1##d100��#v4020009##z4020009#�һ�1��#v1113072#4ά����+1 ��/ħ+1 HP/MP+15#k#l\r\n";
            text +="#L2##d50��#v4020009##z4020009#60%����ǿ����ָ#k#l\r\n";
			text +="#L3##d75��#v4020009##z4020009#10%����ǿ����ָ#k#l\r\n";
            /*text += "#L3##dȫ���� +10 HP/MP +300 #v1112677##k#l\r\n";
            text += "#L4##dȫ���� +15 HP/MP +400 #v1112678##k#l\r\n";
            text += "#L5##dȫ���� +20 HP/MP +500 #v1112679##k#l\r\n";
            text += "#L6##dȫ���� +25 HP/MP+600 #v1113178##k#l\r\n";
			text += "#L7##dȫ���� +30 HP/MP+700 #v1113037##k#l\r\n";*/
            cm.sendSimple(text);
        } else if (selection == 1) {
         if (cm.haveItem(1113072, 1) || cm.getPlayer().hasEquipped(1113072)) {//�ж���Ʒ
		    cm.sendOk("#b1����ɫֻ��ӵ��һ��#v1113072#.");
		    cm.dispose();
		} else if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		    cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��齱.");
		    cm.dispose();
		} else if (!cm.haveItem(4020009, 100)) {
			cm.sendOk("#b��û��100��#v4020009##z4020009#.");
		    cm.dispose();
			} else {
		cm.gainItem(4020009,-100);
		var ii = MapleItemInformationProvider.getInstance();		                
        var type = ii.getInventoryType(1113072); //���װ��������
        var toDrop = ii.randomizeStats(ii.getEquipById(1113072)).copy(); // ����һ��Equip��
		//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
		//toDrop.setExpiration(temptime); 
		//toDrop. setFlag(1);//����
		toDrop. setStr(1);//������
		toDrop. setDex(1);//������ 
		toDrop. setInt(1);//������
		toDrop. setLuk(1);//������
		toDrop. setHp(15);//��HP
		toDrop. setMp(15);//��MP
		toDrop. setMatk(1);//����
		toDrop. setWatk(1);//ħ����
		toDrop. setWdef(0);//�������
		toDrop. setMdef(0);//ħ������
	    toDrop. setAcc(0);//����
		toDrop. setAvoid(0);//�ر�
		toDrop. setHands(0);//�ּ�
		toDrop. setSpeed(0);//�ƶ�
		toDrop. setJump(0);//��Ծ
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                cm.sendOk("�ϳ�#v1113072#�ɹ���");
                cm.dispose();
				}
        } else if (selection == 2) {
            if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		    cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��齱.");
		    cm.dispose();
		} else if (cm.haveItem(1113072, 1)&& cm.haveItem(4011004, 3) && cm.haveItem(4021007, 3) && cm.haveItem(4011006, 3) && cm.haveItem(4021005, 3) && cm.haveItem(4021002, 3) && cm.haveItem(4005000, 3) && cm.haveItem(4005001, 3) && cm.haveItem(4005002, 3) && cm.haveItem(4005003, 3) && cm.haveItem(4011004, 3) && cm.haveItem(4000029, 100) && cm.haveItem(4001126, 1000) && cm.haveItem(4002000, 30) && cm.haveItem(4170005, 10) && cm.haveItem(4001158, 15) && cm.getMeso() >=5000000) {
                cm.gainItem(1113072,-1);
				cm.gainItem(4011004,-3);
                cm.gainItem(4021007,-3);
				cm.gainItem(4011006,-3);
				cm.gainItem(4021005,-3);
				cm.gainItem(4021002,-3);
				cm.gainItem(4005000,-3);
				cm.gainItem(4005001,-3);
				cm.gainItem(4005002,-3);
				cm.gainItem(4005003,-3);
				cm.gainItem(4005004,-3);
				cm.gainItem(4000029,-100);
				cm.gainItem(4001126,-1000);
				cm.gainItem(4002000,-30);
				cm.gainItem(4170005,-10);
				cm.gainItem(4001158,-15);
                cm.gainMeso(-5000000);
		var ii = MapleItemInformationProvider.getInstance();		                
        var type = ii.getInventoryType(1112793); //���װ��������
        var toDrop = ii.randomizeStats(ii.getEquipById(1112793)).copy(); // ����һ��Equip��
		//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
		//toDrop.setExpiration(temptime); 
		toDrop. setFlag(1);//����
		toDrop. setStr(5);//������
		toDrop. setDex(5);//������ 
		toDrop. setInt(5);//������
		toDrop. setLuk(2);//������
		toDrop. setHp(200);//��HP
		toDrop. setMp(200);//��MP
		toDrop. setMatk(5);//����
		toDrop. setWatk(5);//ħ����
		toDrop. setWdef(5);//�������
		toDrop. setMdef(5);//ħ������
		toDrop. setAcc(5);//����
		toDrop. setAvoid(5);//�ر�
		toDrop. setHands(5);//�ּ�
		toDrop. setSpeed(5);//�ƶ�
		toDrop. setJump(5);//��Ծ
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                cm.sendOk("�ϳ�#v1112793#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�Ժ��ܻ��ڿ�����");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		    cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��齱.");
		    cm.dispose();
		} else if (cm.haveItem(1112793, 1) && cm.haveItem(4011004, 5) && cm.haveItem(4021007, 5) && cm.haveItem(4011006, 5) && cm.haveItem(4021005, 5) && cm.haveItem(4021002, 5) && cm.haveItem(4251200, 1) && cm.haveItem(4000040, 20) && cm.haveItem(4000176, 20) && cm.haveItem(4000027, 100) && cm.haveItem(4000036, 100) && cm.haveItem(4001126, 1500) && cm.haveItem(4002000, 60) && cm.haveItem(4170005, 15) && cm.haveItem(4001158, 20) && cm.getMeso() >=10000000) {
                cm.gainItem(1112793,-1);
				cm.gainItem(4011004,-5);
                cm.gainItem(4021007,-5);
				cm.gainItem(4011006,-5);
				cm.gainItem(4021005,-5);
				cm.gainItem(4021002,-5);
				cm.gainItem(4251200,-1);
				cm.gainItem(4000040,-20);
				cm.gainItem(4000176,-20);
				cm.gainItem(4000027,-100);
				cm.gainItem(4000036,-100);
				cm.gainItem(4001126,-1500);
				cm.gainItem(4002000,-60);
				cm.gainItem(4170005,-15);
				cm.gainItem(4001158,-20);
                cm.gainMeso(-10000000);
		var ii = MapleItemInformationProvider.getInstance();		                
        var type = ii.getInventoryType(1112677); //���װ��������
        var toDrop = ii.randomizeStats(ii.getEquipById(1112677)).copy(); // ����һ��Equip��
		//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
		//toDrop.setExpiration(temptime); 
		toDrop. setFlag(1);//����
		toDrop. setStr(10);//������
		toDrop. setDex(10);//������ 
		toDrop. setInt(10);//������
		toDrop. setLuk(2);//������
		toDrop. setHp(300);//��HP
		toDrop. setMp(300);//��MP
		toDrop. setMatk(10);//����
		toDrop. setWatk(10);//ħ����
		toDrop. setWdef(10);//�������
		toDrop. setMdef(10);//ħ������
		toDrop. setAcc(10);//����
		toDrop. setAvoid(10);//�ر�
		toDrop. setHands(10);//�ּ�
		toDrop. setSpeed(10);//�ƶ�
		toDrop. setJump(10);//��Ծ
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                cm.sendOk("�ϳ�#v1112677#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�Ժ��ܻ��ڿ�����");
				cm.dispose();
            }
        } else if (selection == 4) {
            if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		    cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��齱.");
		    cm.dispose();
		} else if (cm.haveItem(1112677, 1) && cm.haveItem(4011004, 7) && cm.haveItem(4021007, 7) && cm.haveItem(4011006, 7) && cm.haveItem(4021005, 7) && cm.haveItem(4021002, 7) && cm.haveItem(4251201, 1) && cm.haveItem(4001111, 10) && cm.haveItem(4000152, 10) && cm.haveItem(4000074, 100) && cm.haveItem(4000057, 100) && cm.haveItem(4001126, 2000) && cm.haveItem(4002000, 80) && cm.haveItem(4170005, 20) && cm.haveItem(4001158, 3) && cm.haveItem(4001158, 25) && cm.getMeso() >=20000000) {
                cm.gainItem(1112677,-1);
				cm.gainItem(4011004,-7);
                cm.gainItem(4021007,-7);
				cm.gainItem(4011006,-7);
				cm.gainItem(4021005,-7);
				cm.gainItem(4021002,-7);
				cm.gainItem(4251201,-1);
				cm.gainItem(4001111,-10);
				cm.gainItem(4000152,-10);
				cm.gainItem(4000074,-100);
				cm.gainItem(4000057,-100);
				cm.gainItem(4001126,-2000);
				cm.gainItem(4002000,-80);
				cm.gainItem(4170005,-20);
				cm.gainItem(4001158,-25);
                cm.gainMeso(-20000000);
		var ii = MapleItemInformationProvider.getInstance();		                
        var type = ii.getInventoryType(1112678); //���װ��������
        var toDrop = ii.randomizeStats(ii.getEquipById(1112678)).copy(); // ����һ��Equip��
		//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1500); //ʱ��
		//toDrop.setExpiration(temptime); 
		toDrop. setFlag(1);//����
		toDrop. setStr(15);//������
		toDrop. setDex(15);//������ 
		toDrop. setInt(15);//������
		toDrop. setLuk(2);//������
		toDrop. setHp(400);//��HP
		toDrop. setMp(400);//��MP
		toDrop. setMatk(15);//����
		toDrop. setWatk(15);//ħ����
		toDrop. setWdef(15);//�������
		toDrop. setMdef(15);//ħ������
		toDrop. setAcc(15);//����
		toDrop. setAvoid(15);//�ر�
		toDrop. setHands(15);//�ּ�
		toDrop. setSpeed(15);//�ƶ�
		toDrop. setJump(15);//��Ծ
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                cm.sendOk("�ϳ�#v1112678#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v1112677#*1�� #v4011004#7��  #v4021007#7��  #v4011006#*7��  #v4021005#*7��  #v4021002#*7��  #v4251201#*1�� #v4001111#*10��  #v4000152#*10��   #v4000074#*100��   #v4000057#*100��  #v4001126#*2000�� #v4002000#*80�� #v4170005#*20�� #v4001158#*25�� 2000����");
                cm.dispose();
            }
        } else if (selection == 5) {
            if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		    cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��齱.");
		    cm.dispose();
		} else if (cm.haveItem(1112678, 1) && cm.haveItem(4011004, 10) && cm.haveItem(4021007, 10) && cm.haveItem(4011006, 10) && cm.haveItem(4021005, 10) && cm.haveItem(4021002, 10) && cm.haveItem(4251202, 1) && cm.haveItem(4001083, 1) && cm.haveItem(4001084, 3) && cm.haveItem(4001085, 3) && cm.haveItem(4000175, 3) && cm.haveItem(4001126, 2500) && cm.haveItem(4002000, 80) && cm.haveItem(4170005, 25) && cm.haveItem(4001158, 5) && cm.haveItem(4001158, 30) && cm.getMeso() >=30000000) {
                cm.gainItem(1112678,-1);
				cm.gainItem(4011004,-10);
                cm.gainItem(4021007,-10);
				cm.gainItem(4011006,-10);
				cm.gainItem(4021005,-10);
				cm.gainItem(4021002,-10);
				cm.gainItem(4251202,-1);
				cm.gainItem(4001083,-1);
				cm.gainItem(4001084,-3);
				cm.gainItem(4001085,-3);
				cm.gainItem(4000175,-3);
				cm.gainItem(4001126,-2500);
				cm.gainItem(4002000,-80);
				cm.gainItem(4170005,-25);
				cm.gainItem(4001158,-30);
                cm.gainMeso(-30000000);
		var ii = MapleItemInformationProvider.getInstance();		                
        var type = ii.getInventoryType(1112679); //���װ��������
        var toDrop = ii.randomizeStats(ii.getEquipById(1112679)).copy(); // ����һ��Equip��
		//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 2000); //ʱ��
		//toDrop.setExpiration(temptime); 
		toDrop. setFlag(1);//����
		toDrop. setStr(20);//������
		toDrop. setDex(20);//������ 
		toDrop. setInt(20);//������
		toDrop. setLuk(2);//������
		toDrop. setHp(500);//��HP
		toDrop. setMp(500);//��MP
		toDrop. setMatk(20);//����
		toDrop. setWatk(20);//ħ����
		toDrop. setWdef(20);//�������
		toDrop. setMdef(20);//ħ������
		toDrop. setAcc(20);//����
		toDrop. setAvoid(20);//�ر�
		toDrop. setHands(20);//�ּ�
		toDrop. setSpeed(20);//�ƶ�
		toDrop. setJump(20);//��Ծ
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                cm.sendOk("�ϳ�#v1112679#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v1112678#*1�� #v4011004#*10�� #v4021007#*10�� #v4011006#*10�� #v4021005#*10�� #v4021002#*10�� #v4251202#*1�� #v4001083#*1�� #v4001084#*3�� #v4001085#*3�� #v4000175#*3�� #v4001126#*2500�� #v4002000#*80�� #v4170005#*25�� #v4001158#*30�� 3000����");
                cm.dispose();
            }
        } else if (selection == 6) {
			if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		    cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��齱.");
		    cm.dispose();
		} else if (cm.haveItem(1112679, 3) && cm.haveItem(4011004, 50) && cm.haveItem(4021007, 50) && cm.haveItem(4011006, 50) && cm.haveItem(4021005, 50) && cm.haveItem(4021002, 50) && cm.haveItem(4251202, 5) && cm.haveItem(4001083, 5) && cm.haveItem(4001084, 15) && cm.haveItem(4001085, 15) && cm.haveItem(4000175, 15) && cm.haveItem(4001126, 12500) && cm.haveItem(4002000, 80) && cm.haveItem(4170005, 75) && cm.haveItem(4001158, 50) && cm.getMeso() >=50000000) {
                cm.gainItem(1112679,-3);
				cm.gainItem(4011004,-50);
                cm.gainItem(4021007,-50);
				cm.gainItem(4011006,-50);
				cm.gainItem(4021005,-50);
				cm.gainItem(4021002,-50);
				cm.gainItem(4251202,-5);
				cm.gainItem(4001083,-5);
				cm.gainItem(4001084,-15);
				cm.gainItem(4001085,-15);
				cm.gainItem(4000175,-15);
				cm.gainItem(4001126,-12500);
				cm.gainItem(4002000,-80);
				cm.gainItem(4170005,-100);
				cm.gainItem(4001158,-50);
                cm.gainMeso(-50000000);
				var ii = MapleItemInformationProvider.getInstance();		                
        var type = ii.getInventoryType(1113178); //���װ��������
        var toDrop = ii.randomizeStats(ii.getEquipById(1113178)).copy(); // ����һ��Equip��
		//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 2500); //ʱ��
		//toDrop.setExpiration(temptime); 
		toDrop. setFlag(1);//����
		toDrop. setStr(25);//������
		toDrop. setDex(25);//������ 
		toDrop. setInt(25);//������
		toDrop. setLuk(2);//������
		toDrop. setHp(600);//��HP
		toDrop. setMp(600);//��MP
		toDrop. setMatk(25);//����
		toDrop. setWatk(25);//ħ����
		toDrop. setWdef(25);//�������
		toDrop. setMdef(25);//ħ������
		toDrop. setAcc(25);//����
		toDrop. setAvoid(25);//�ر�
		toDrop. setHands(25);//�ּ�
		toDrop. setSpeed(25);//�ƶ�
		toDrop. setJump(25);//��Ծ
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���       cm.sendOk("�ϳ�#v1113178#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v1112679#*3�� #v4011004#*50��  #v4021007#*50��   #v4011006#*50��   #v4021005#*50��  #v4021002#*50��   #v4251202#*5�� #v4001083#*5�� #v4001084#*15�� #v4001085#*15�� #v4000175#*15��  #v4001126#*12500��  #v4002000#*80��  #v4170005#*100�� #v4001158#*50�� 5000����");
                cm.dispose();
            }
			        } else if (selection == 7) {
            if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		    cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��齱.");
		    cm.dispose();
		} else if (cm.haveItem(1112679, 3) && cm.haveItem(4011004, 50) && cm.haveItem(4021007, 50) && cm.haveItem(4011006, 50) && cm.haveItem(4021005, 50) && cm.haveItem(4021002, 50) && cm.haveItem(4251202, 5) && cm.haveItem(4001083, 5) && cm.haveItem(4001084, 15) && cm.haveItem(4001085, 15) && cm.haveItem(4000175, 15) && cm.haveItem(4001126, 12500) && cm.haveItem(4002000, 80) && cm.haveItem(4170005, 75) && cm.haveItem(4001158, 50) && cm.getMeso() >=50000000) {
                cm.gainItem(1112679,-3);
				cm.gainItem(4011004,-50);
                cm.gainItem(4021007,-50);
				cm.gainItem(4011006,-50);
				cm.gainItem(4021005,-50);
				cm.gainItem(4021002,-50);
				cm.gainItem(4251202,-5);
				cm.gainItem(4001083,-5);
				cm.gainItem(4001084,-15);
				cm.gainItem(4001085,-15);
				cm.gainItem(4000175,-15);
				cm.gainItem(4001126,-12500);
				cm.gainItem(4002000,-80);
				cm.gainItem(4170005,-100);
				cm.gainItem(4001158,-50);
                cm.gainMeso(-50000000);
		var ii = MapleItemInformationProvider.getInstance();		                
        var type = ii.getInventoryType(1113037); //���װ��������
        var toDrop = ii.randomizeStats(ii.getEquipById(1113037)).copy(); // ����һ��Equip��
		//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 3000); //ʱ��
		//toDrop.setExpiration(temptime); 
		toDrop. setFlag(1);//����
		toDrop. setStr(30);//������
		toDrop. setDex(30);//������ 
		toDrop. setInt(30);//������
		toDrop. setLuk(2);//������
		toDrop. setHp(700);//��HP
		toDrop. setMp(700);//��MP
		toDrop. setMatk(30);//����
		toDrop. setWatk(30);//ħ����
		toDrop. setWdef(30);//�������
		toDrop. setMdef(30);//ħ������
		toDrop. setAcc(30);//����
		toDrop. setAvoid(30);//�ر�
		toDrop. setHands(30);//�ּ�
		toDrop. setSpeed(30);//�ƶ�
		toDrop. setJump(30);//��Ծ
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
        
                cm.sendOk("�ϳ�#v1113037#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v1112679#*3�� #v4011004#*50�� #v4021007#*50�� #v4011006#*50�� #v4021005#*50�� #v4021002#*50�� #v4251202#*5��  #v4001083#*5��   #v4001084#*15��   #v4001085#*15��   #v4000175#*15��  #v4001126#*12500��  #v4002000#*80��  #v4170005#*100��  #v4001158#*50�� 5000����");
                cm.dispose();
            }
			}
		}
    }


