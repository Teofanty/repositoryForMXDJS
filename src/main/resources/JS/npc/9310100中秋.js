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
            text += "��ӭ�������նһ�ϵͳ\r\n" 
			text += "#L66##e#d88��#v4310099#�һ�#v2210020##l\r\n\r\n"
            text += "#L58##e#d888��#v4310099#�һ�#v1142655#����ά5 ���� ��#l\r\n\r\n"
			text += "#L62##e#d888��#v4310099#�һ�#v1003204##l\r\n\r\n"
			text += "#L63##e#d888��#v4310099#�һ�#v1002548##l\r\n\r\n"
			text += "#L64##e#d888��#v4310099#�һ�#v1050229#��#l\r\n\r\n"
			text += "#L65##e#d888��#v4310099#�һ�#v1051280#Ů#l\r\n\r\n"
			text += "#L59##e#d888��#v4310099#�һ�#v1702301##l\r\n\r\n"
			text += "#L60##e#d888��#v4310099#�һ�#v1702400##l\r\n\r\n"
			text += "#L61##e#d888��#v4310099#�һ�#v1382164#����(���ǵ�״)#l\r\n\r\n"
			text += "#L69##e#d888��#v4310099#�һ�#v1003149##l\r\n\r\n"
			cm.sendOk(text); 
        
		
		} else if (selection == 58) {
if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 888)) {//�ж���Ʒ
			cm.sendOk("#b��û��888��#v4310099#�޷��һ�.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -888);//�۳���Ʒ
var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1142655); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1142655)).copy(); // ����һ��Equip��
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//����
				toDrop. setStr(5);//������
				toDrop. setDex(5);//������ 
				toDrop. setInt(5);//������
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
		cm.sendOk("#b��ϲ��,�һ�#v1142655#�ɹ���");
		cm.dispose();
		}
		} else if (selection == 59) {
if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 888)) {//�ж���Ʒ
			cm.sendOk("#b��û��888��#v4310099#�޷��һ�.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -888);//�۳���Ʒ
              cm.gainItem(1702301, 1);
		cm.sendOk("#b��ϲ��,�һ�#v1702301#�ɹ���");
		cm.dispose();
		}
		} else if (selection == 69) {
if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 888)) {//�ж���Ʒ
			cm.sendOk("#b��û��888��#v4310099#�޷��һ�.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -888);//�۳���Ʒ
              cm.gainItem(1003149, 1);
		cm.sendOk("#b��ϲ��,�һ�#v1003149#�ɹ���");
		cm.dispose();
		}
		} else if (selection == 60) {
if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 888)) {//�ж���Ʒ
			cm.sendOk("#b��û��888��#v4310099#�޷��һ�.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -888);//�۳���Ʒ
              cm.gainItem(1702400, 1);
		cm.sendOk("#b��ϲ��,�һ�#v1702400#�ɹ���");
		cm.dispose();
		}
		} else if (selection == 61) {
if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 888)) {//�ж���Ʒ
			cm.sendOk("#b��û��888��#v4310099#�޷��һ�.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -888);//�۳���Ʒ
              cm.gainItem(1382164, 1);
		cm.sendOk("#b��ϲ��,�һ�#v1382164#�ɹ���");
		cm.dispose();
		}
	} else if (selection == 62) {
if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 888)) {//�ж���Ʒ
			cm.sendOk("#b��û��888��#v4310099#�޷��һ�.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -888);//�۳���Ʒ
              cm.gainItem(1003204, 1);
		cm.sendOk("#b��ϲ��,�һ�#v1003204#�ɹ���");
		cm.dispose();
		}
     	
	} else if (selection == 63) {
if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 888)) {//�ж���Ʒ
			cm.sendOk("#b��û��888��#v4310099#�޷��һ�.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -888);//�۳���Ʒ
              cm.gainItem(1002548, 1);
		cm.sendOk("#b��ϲ��,�һ�#v1002548#�ɹ���");
		cm.dispose();
		}
		} else if (selection == 64) {
if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 888)) {//�ж���Ʒ
			cm.sendOk("#b��û��888��#v4310099#�޷��һ�.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -888);//�۳���Ʒ
              cm.gainItem(1050229, 1);
		cm.sendOk("#b��ϲ��,�һ�#v1050229#�ɹ���");
		cm.dispose();
		}
		} else if (selection == 65) {
if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 888)) {//�ж���Ʒ
			cm.sendOk("#b��û��888��#v4310099#�޷��һ�.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -888);//�۳���Ʒ
              cm.gainItem(1051280, 1);
		cm.sendOk("#b��ϲ��,�һ�#v1051280#�ɹ���");
		cm.dispose();
		}
		} else if (selection == 66) {
if (cm.getInventory(2).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 88)) {//�ж���Ʒ
			cm.sendOk("#b��û��88��#v4310099#�޷��һ�.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -88);//�۳���Ʒ
              cm.gainItem(2210020, 1);
		cm.sendOk("#b��ϲ��,�һ�#v2210020#�ɹ���");
		cm.dispose();
		}
        }
    } } 
