var random = java.lang.Math.floor(Math.random() * 3000 + 1330);
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
			text += "\t\t\t\t���Ƕһ�NPC,��ӭ#k!#n\r\n"
			text += "              #d#e�����#r" +cm.getPlayer().getCSPoints(1) +  "#d#e��#k\r\n\r\n"//3
			//text += "#L1##d1000W��Ҷһ�1332-4666��ȯ#l\r\n\r\n"
			//text += "#L2##d#v4310018##v4310019##v4310014#�һ���ָ#l\t"
			//text += "#L6##d�һ�#v4310018##v4310019##v4310014##l\r\n\r\n"
			//text += "#L3##dʹ��#v4310018#����#v1114213##l\t"
			//text += "#L4##dʹ��#v4310019#����#v1113164##l\r\n\r\n"
			//text += "#L5##dʹ��#v4310014#����#v1112793##l\t"
			//text += "#L7##dʹ��#v4031456#�һ�װ��#l\r\n\r\n"
			text += "#L20##e#d#v1022088#(��ά1)��Ҫ200*#v4000004#+50*#v4001176##l\r\n\r\n"
			text += "#L21##e#d#v1022118#(��ά3����6)��Ҫ35*#v4031227#+280*#v4001176#+#v1022073#+#v1022088#+3000����+200W#l\r\n\r\n"
			text += "#L22##e#d#v1022233#(��ά5����10)��Ҫ35*#v4031227#+2*#v4000040#+2*#v4000176#+300*#v4001176#+#v1022118#+5000����+300W#l\r\n\r\n"
			text += "#L23##e#d#v1022224#(��ά8����18)��Ҫ35*#v4031227#+1*#v4000175#+1*#v4001084#+300*#v4001176#+#v1022233#+5000����+300W#l\r\n\r\n"
			text += "#L24##e#d#v1022225#(��ά8����18G3MG6)��Ҫ35*#v4031227#+1*#v4001083#+2*#v4001241#+2*#v4001242#+3*#v4032398#+600*#v4001176#+#v1022224#+5000����+600W#l\r\n\r\n"
			text += "#L25##e#d#v1022226#(��ά8����18G8MG18)��Ҫ35*#v4031227#+500��#v4001176#+#v1022225#+#v4000435#*9+1W����+6000W"
			//text += "#L17##e#d#v4001084#�ɶһ�1000*#v4001128##l\r\n\r\n"1022226
            cm.sendSimple(text);
			} else if (selection == 25) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�");
				cm.dispose();
				} else if(cm.getPlayer().getCSPoints(2) < 10000){//�жϵ���ȯ
		cm.sendOk("#b��û��10000�����ȯ.");
		cm.dispose();
				} else if (!cm.getMeso() >= 60000000){//�ж϶��ٽ��
				 cm.sendOk("#b��Ҳ���");
				cm.dispose();
				} else if (!cm.haveItem(4031227,35)) {//�ж���Ʒ
			    cm.sendOk("#b��û��35��#v4031227##z4031227#");
				cm.dispose();
				} else if (!cm.haveItem(4001176,500)) {//�ж���Ʒ
			    cm.sendOk("#b��û��500��#v4001176##z4001176#");
				cm.dispose();
				} else if (!cm.haveItem(1022225,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v1022225##z1022225#");
				cm.dispose();
				} else if (!cm.haveItem(4000435,9)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4000435##z4000435#");
				cm.dispose();
			} else{
	            cm.gainD(-10000);//����ȯ
				cm.gainItem(1022225, -1);// 
				cm.gainItem(4000435, -9);// 
				cm.gainItem(4031227, -35);
				cm.gainItem(4001176, -500);
				cm.gainMeso(- 60000000 );//�۳����ٽ��
				var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1022226); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1022226)).copy(); // ����һ��Equip��
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//����
				toDrop. setStr(8);//������
				toDrop. setDex(8);//������ 
				toDrop. setInt(18);//������
				toDrop. setLuk(8);//������
				//toDrop. setHp(30);//��HP
				//toDrop. setMp(30);//��MP
				toDrop. setWatk(8);//����
				toDrop. setMatk(18);//ħ����
				/*toDrop. setWdef(99);//�������
				toDrop. setMdef(99);//ħ������
				toDrop. setAcc(99);//����
				toDrop. setAvoid(99);//�ر�
				toDrop. setHands(99);//�ּ�
				toDrop. setSpeed(99);//�ƶ�
				toDrop. setJump(99);//��Ծ*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
				cm.sendOk("�һ��ɹ�!");
	 status = -1;
				 }
			} else if (selection == 24) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�");
				cm.dispose();
				} else if(cm.getPlayer().getCSPoints(2) < 5000){//�жϵ���ȯ
		cm.sendOk("#b��û��5000�����ȯ.");
		cm.dispose();
				} else if (!cm.getMeso() >= 6000000){//�ж϶��ٽ��
				 cm.sendOk("#b��Ҳ���");
				cm.dispose();
				} else if (!cm.haveItem(4031227,35)) {//�ж���Ʒ
			    cm.sendOk("#b��û��35��#v4031227##z4031227#");
				cm.dispose();
				} else if (!cm.haveItem(4001176,600)) {//�ж���Ʒ
			    cm.sendOk("#b��û��600��#v4001176##z4001176#");
				cm.dispose();
				} else if (!cm.haveItem(1022224,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v1022224##z1022224#");
				cm.dispose();
				} else if (!cm.haveItem(4001083,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4001083##z4001083#");
				cm.dispose();
				} else if (!cm.haveItem(4001241,2)) {//�ж���Ʒ
			    cm.sendOk("#b��û��2��#v4001241##z4001241");
				cm.dispose();
				} else if (!cm.haveItem(4001242,2)) {//�ж���Ʒ
			    cm.sendOk("#b��û��2��#v4001242##z4001242");
				cm.dispose();
				} else if (!cm.haveItem(4032398,3)) {//�ж���Ʒ
			    cm.sendOk("#b��û��3��#v4032398##z4032398");
				cm.dispose();
			} else{
	            cm.gainD(-5000);//����ȯ
				cm.gainItem(1022224, -1);// 
				cm.gainItem(4001241, -2);// 
				cm.gainItem(4001242, -2);// 
				cm.gainItem(4032398, -3);//
				cm.gainItem(4001083, -1);// 
				cm.gainMeso(- 6000000 );//�۳����ٽ��
				cm.gainItem(4031227, -35);//����Ʒ
			   cm.gainItem(4001176, -600);//����Ʒ
				var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1022225); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1022225)).copy(); // ����һ��Equip��
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//����
				toDrop. setStr(8);//������
				toDrop. setDex(8);//������ 
				toDrop. setInt(18);//������
				toDrop. setLuk(8);//������
				//toDrop. setHp(30);//��HP
				//toDrop. setMp(30);//��MP
				toDrop. setWatk(3);//����
				toDrop. setMatk(6);//ħ����
				/*toDrop. setWdef(99);//�������
				toDrop. setMdef(99);//ħ������
				toDrop. setAcc(99);//����
				toDrop. setAvoid(99);//�ر�
				toDrop. setHands(99);//�ּ�
				toDrop. setSpeed(99);//�ƶ�
				toDrop. setJump(99);//��Ծ*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
				cm.sendOk("�һ��ɹ�!");
	 status = -1;
				 }
    } else if (selection == 23) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�");
				cm.dispose();
				} else if(cm.getPlayer().getCSPoints(2) < 5000){//�жϵ���ȯ
		cm.sendOk("#b��û��5000�����ȯ.");
		cm.dispose();
				} else if (!cm.getMeso() >= 3000000){//�ж϶��ٽ��
				 cm.sendOk("#b��Ҳ���");
				cm.dispose();
				} else if (!cm.haveItem(4031227,35)) {//�ж���Ʒ
			    cm.sendOk("#b��û��35��#v4031227##z4031227#");
				cm.dispose();
				} else if (!cm.haveItem(4001176,300)) {//�ж���Ʒ
			    cm.sendOk("#b��û��300��#v4001176##z4001176#");
				cm.dispose();
				} else if (!cm.haveItem(1022233,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v1022233##z1022233#");
				cm.dispose();
				} else if (!cm.haveItem(4000175,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4000175##z4000175#");
				cm.dispose();
				} else if (!cm.haveItem(4001084,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v4001084##z4001084");
				cm.dispose();
			} else{
	            cm.gainD(-5000);//����ȯ
				cm.gainItem(1022233, -1);// 
				cm.gainItem(4000175, -1);// 
				cm.gainItem(4001084, -1);// 
				cm.gainMeso(- 3000000 );//�۳����ٽ��
				cm.gainItem(4031227, -35);//����Ʒ
			   cm.gainItem(4001176, -300);//����Ʒ
				var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1022224); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1022224)).copy(); // ����һ��Equip��
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//����
				toDrop. setStr(8);//������
				toDrop. setDex(8);//������ 
				toDrop. setInt(18);//������
				toDrop. setLuk(8);//������
				//toDrop. setHp(30);//��HP
				//toDrop. setMp(30);//��MP
				toDrop. setWatk(0);//����
				toDrop. setMatk(0);//ħ����
				/*toDrop. setWdef(99);//�������
				toDrop. setMdef(99);//ħ������
				toDrop. setAcc(99);//����
				toDrop. setAvoid(99);//�ر�
				toDrop. setHands(99);//�ּ�
				toDrop. setSpeed(99);//�ƶ�
				toDrop. setJump(99);//��Ծ*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
				cm.sendOk("�һ��ɹ�!");
	 status = -1;
				 }
	} else if (selection == 20) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�");
				cm.dispose();
				} else if (!cm.haveItem(4000004,200)) {//�ж���Ʒ
			    cm.sendOk("#b��û��200��#v4000004##z4000004#");
				cm.dispose();
				} else if (!cm.haveItem(4001176,50)) {//�ж���Ʒ
			    cm.sendOk("#b��û��50��#v4001176##z4001176");
				cm.dispose();
			} else{
	            //cm.gainD(-5000);//����ȯ
				//cm.gainItem(1022073, -1);// 
				//cm.gainMeso(- 2000000 );//�۳����ٽ��
				cm.gainItem(4000004, -200);//����Ʒ
			cm.gainItem(4001176, -50);//����Ʒ
				var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1022088); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1022088)).copy(); // ����һ��Equip��
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//����
				toDrop. setStr(1);//������
				toDrop. setDex(1);//������ 
				toDrop. setInt(1);//������
				toDrop. setLuk(1);//������
				//toDrop. setHp(50);//��HP
				//toDrop. setMp(50);//��MP
				toDrop. setWatk(0);//����
				toDrop. setMatk(0);//ħ����
				/*toDrop. setWdef(99);//�������
				toDrop. setMdef(99);//ħ������
				toDrop. setAcc(99);//����
				toDrop. setAvoid(99);//�ر�
				toDrop. setHands(99);//�ּ�
				toDrop. setSpeed(99);//�ƶ�
				toDrop. setJump(99);//��Ծ*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
				cm.sendOk("�һ��ɹ�!");
	 status = -1;
				 }				 
	} else if (selection == 21) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�");
				cm.dispose();
				} else if(cm.getPlayer().getCSPoints(2) < 3000){//�жϵ���ȯ
		cm.sendOk("#b��û��3000�����ȯ.");
		cm.dispose();
				} else if (!cm.getMeso() >= 2000000){//�ж϶��ٽ��
				 cm.sendOk("#b��Ҳ���");
				cm.dispose();
				} else if (!cm.haveItem(4031227,35)) {//�ж���Ʒ
			    cm.sendOk("#b��û��35��#v4031227##z4031227#");
				cm.dispose();
				} else if (!cm.haveItem(1022088,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v1022088##z1022088#");
				cm.dispose();
				} else if (!cm.haveItem(1022073,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v1022073##z1022073#");
				cm.dispose();
				} else if (!cm.haveItem(4001176,280)) {//�ж���Ʒ
			    cm.sendOk("#b��û��280��#v4001176##z4001176");
				cm.dispose();
			} else{
	            cm.gainD(-3000);//����ȯ
				cm.gainItem(1022073, -1);// 
				cm.gainItem(1022088, -1);// 
				cm.gainMeso(- 2000000 );//�۳����ٽ��
				cm.gainItem(4031227, -35);//����Ʒ
			   cm.gainItem(4001176, -280);//����Ʒ
				var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1022118); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1022118)).copy(); // ����һ��Equip��
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//����
				toDrop. setStr(3);//������
				toDrop. setDex(3);//������ 
				toDrop. setInt(6);//������
				toDrop. setLuk(3);//������
				//toDrop. setHp(30);//��HP
				//toDrop. setMp(30);//��MP
				toDrop. setWatk(0);//����
				toDrop. setMatk(0);//ħ����
				/*toDrop. setWdef(99);//�������
				toDrop. setMdef(99);//ħ������
				toDrop. setAcc(99);//����
				toDrop. setAvoid(99);//�ر�
				toDrop. setHands(99);//�ּ�
				toDrop. setSpeed(99);//�ƶ�
				toDrop. setJump(99);//��Ծ*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
				cm.sendOk("�һ��ɹ�!");
	 status = -1;
				 }
				 } else if (selection == 22) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�");
				cm.dispose();
				} else if(cm.getPlayer().getCSPoints(2) < 5000){//�жϵ���ȯ
		cm.sendOk("#b��û��5000�����ȯ.");
		cm.dispose();
				} else if (!cm.getMeso() >= 3000000){//�ж϶��ٽ��
				 cm.sendOk("#b��Ҳ���");
				cm.dispose();
				} else if (!cm.haveItem(4031227,35)) {//�ж���Ʒ
			    cm.sendOk("#b��û��35��#v4031227##z4031227#");
				cm.dispose();
				} else if (!cm.haveItem(1022118,1)) {//�ж���Ʒ
			    cm.sendOk("#b��û��1��#v1022118##z1022118#");
				cm.dispose();
				} else if (!cm.haveItem(4000040,2)) {//�ж���Ʒ
			    cm.sendOk("#b��û��2��#v4000040##z4000040#");
				cm.dispose();
				} else if (!cm.haveItem(4000176,2)) {//�ж���Ʒ
			    cm.sendOk("#b��û��2��#v4000176##z4000176#");
				cm.dispose();
				} else if (!cm.haveItem(4001176,300)) {//�ж���Ʒ
			    cm.sendOk("#b��û��300��#v4001176##z4001176");
				cm.dispose();
			} else{
	            cm.gainD(-5000);//����ȯ
				cm.gainItem(1022118, -1);// 
				cm.gainMeso(- 3000000 );//�۳����ٽ��
				cm.gainItem(4031227, -35);//����Ʒ
				cm.gainItem(4000040, -2);//����Ʒ
				cm.gainItem(4000176, -2);//����Ʒ
			   cm.gainItem(4001176, -300);//����Ʒ
				var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1022233); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1022233)).copy(); // ����һ��Equip��
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//����
				toDrop. setStr(5);//������
				toDrop. setDex(5);//������ 
				toDrop. setInt(10);//������
				toDrop. setLuk(5);//������
				//toDrop. setHp(50);//��HP
				//toDrop. setMp(50);//��MP
				toDrop. setWatk(0);//����
				toDrop. setMatk(0);//ħ����
				/*toDrop. setWdef(99);//�������
				toDrop. setMdef(99);//ħ������
				toDrop. setAcc(99);//����
				toDrop. setAvoid(99);//�ر�
				toDrop. setHands(99);//�ּ�
				toDrop. setSpeed(99);//�ƶ�
				toDrop. setJump(99);//��Ծ*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
				cm.sendOk("�һ��ɹ�!");
	 status = -1;
				 }
				 
	}
	}
	}
	