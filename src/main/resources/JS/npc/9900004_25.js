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
            text += "��ӭ������֮��ѫ�½���ϵͳ\r\n" 
            text += "#L3##e#��֤Ů����ȡ#v1142574#��ȫ����+7 ����+#v5150038#��#l\r\n\r\n"
			text += "#L2##e#d�������˵�50����ȡ#v1142101#��ȫ����+5 ���ã�#l\r\n\r\n"
			text += "#L4##e#d������˵�90����ȡ#v1142220#��ȫ����+10 ���� ��#l\r\n\r\n"
			text += "#L99##e#d�Ѿ�����֮�Ӷһ�#v1142574#��ȫ����+10 ���� ��#l\r\n\r\n"
		    text += "#L555##e#d200*#v4031560#+100*#v4031558#+100*#v4001160#+50*#v4001198#��ȡ#v1142002#��ȫ����5 ���ã�#l\r\n\r\n"
			text += "#L556##e#d#v1142002#+555*#v4031456#��ȡ#v1142001#��ȫ����10���ã�#l\r\n\r\n"
			//text += "#L999##e#d��ȡ�׳�50Ԫ����#l\r\n\r\n"
			text += "#L1234##e#d�Ѿ���#v1142594#�һ�#v1142594#��ȫ����+7 ���� ��#l\r\n\r\n"
			cm.sendOk(text); 
			} else if (selection == 999) {
if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		    } else if (!cm.haveItem(4310038, 1)) {//�ж���Ʒ
			cm.sendOk("#b��û��1��#v4310038#�޷��һ�.");
		   cm.dispose();
		} else{
			cm.gainItem(4310038, -1);//�۳���Ʒ
			var ii = MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = (System.currentTimeMillis() + 1 * 12 * 60 * 60 * 1000); //ʱ��
toDrop.setExpiration(temptime); 
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
cm.sendOk("#b��ϲ��,�һ�#v1122017#�ɹ���");
		cm.dispose();
		}
		} else if (selection == 1234) {
if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		    } else if (!cm.haveItem(1142594, 1)) {//�ж���Ʒ
			cm.sendOk("#b��û��1��#v1142594#�޷��һ�.");
		   cm.dispose();
		  
		} else{
			cm.gainItem(1142594, -1);//�۳���Ʒ
			
var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1142594); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1142594)).copy(); // ����һ��Equip��
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//����
				toDrop. setStr(7);//������
				toDrop. setDex(7);//������ 
				toDrop. setInt(7);//������
				toDrop. setLuk(7);//������
				toDrop. setHp(70);//��HP
				toDrop. setMp(70);//��MP
				toDrop. setWatk(7);//����
				toDrop. setMatk(7);//ħ����
				toDrop. setWdef(10);//�������
				toDrop. setMdef(10);//ħ������
				//toDrop. setAcc(5);//����
				//toDrop. setAvoid(5);//�ر�
				//toDrop. setHands(5);//�ּ�
				toDrop. setSpeed(5);//�ƶ�
				toDrop. setJump(5);//��Ծ
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.sendOk("#b��ϲ��,�һ�#v1142001#�ɹ���");
		cm.dispose();
		}
			} else if (selection == 556) {
if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		    } else if (!cm.haveItem(1142002, 1)) {//�ж���Ʒ
			cm.sendOk("#b��û��1��#v1142002#�޷��һ�.");
		   cm.dispose();
		    } else if (!cm.haveItem(4031456, 555)) {//�ж���Ʒ
			cm.sendOk("#b��û��555��#v4031456#�޷��һ�.");
		   cm.dispose();
		} else{
			cm.gainItem(1142002, -1);//�۳���Ʒ
			cm.gainItem(4031456, -555);//�۳���Ʒ
var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1142001); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1142001)).copy(); // ����һ��Equip��
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//����
				toDrop. setStr(10);//������
				toDrop. setDex(10);//������ 
				toDrop. setInt(10);//������
				toDrop. setLuk(10);//������
				//toDrop. setHp(100);//��HP
				//toDrop. setMp(100);//��MP
				toDrop. setWatk(10);//����
				toDrop. setMatk(10);//ħ����
				/*toDrop. setWdef(99);//�������
				toDrop. setMdef(99);//ħ������
				toDrop. setAcc(99);//����
				toDrop. setAvoid(99);//�ر�
				toDrop. setHands(99);//�ּ�
				toDrop. setSpeed(99);//�ƶ�
				toDrop. setJump(99);//��Ծ*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.sendOk("#b��ϲ��,�һ�#v1142001#�ɹ���");
		cm.dispose();
		}
        } else if (selection == 99) {
			if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		    } else if (!cm.haveItem(1142574, 1)) {//�ж���Ʒ
			cm.sendOk("#b��û��һ��#v1142574#�޷��һ�.");
		   cm.dispose();
		   } else if (!cm.haveItem(1142219, 1)) {//�ж���Ʒ
			cm.sendOk("#b��û��һ��#v1142219#���޷��һ�.");
		   cm.dispose();
		} else{
var ii = MapleItemInformationProvider.getInstance();		             
var type = ii.getInventoryType(1142574); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1142574)).copy(); // ����һ��Equip��
//var temptime = (System.currentTimeMillis() + 1 * 168 * 60 * 60 * 1000); //ʱ��
//toDrop.setExpiration(temptime); 
 toDrop. setFlag(1);//����
 toDrop. setStr(10);//������
 toDrop. setDex(10);//������ 
 toDrop. setInt(10);//������
 toDrop. setLuk(10);//������
//toDrop. setHp(0);//��HP
//toDrop. setMp(0);//��MP
 toDrop. setWatk(10);//����
 toDrop. setMatk(10);//ħ����
/*toDrop. setWdef(0);//�������
 toDrop. setMdef(0);//ħ������
 toDrop. setAcc(0);//����
 toDrop. setAvoid(0);//�ر�
 toDrop. setHands(99);//�ּ�
 toDrop. setSpeed(99);//�ƶ�
 toDrop. setJump(99);//��Ծ*/
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.sendOk("#b��ϲ��,�һ�#v1142574#�ɹ���");
		cm.dispose();
		}
		} else if (selection == 555) {
if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		    } else if (!cm.haveItem(4031560, 200)) {//�ж���Ʒ
			cm.sendOk("#b��û��200��#v4031560#�޷��һ�.");
		   cm.dispose();
		    } else if (!cm.haveItem(4031558, 100)) {//�ж���Ʒ
			cm.sendOk("#b��û��100��#v4031558#�޷��һ�.");
		   cm.dispose();
		    } else if (!cm.haveItem(4001160, 100)) {//�ж���Ʒ
			cm.sendOk("#b��û��100��#v4001160#�޷��һ�.");
		   cm.dispose();
		    } else if (!cm.haveItem(4001198, 50)) {//�ж���Ʒ
			cm.sendOk("#b��û��50��#v4001198#�޷��һ�.");
		   cm.dispose();
		} else{
			cm.gainItem(4031560, -200);//�۳���Ʒ
			cm.gainItem(4031558, -100);//�۳���Ʒ
			cm.gainItem(4001160, -100);//�۳���Ʒ
			cm.gainItem(4001198, -50);//�۳���Ʒ
var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1142002); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1142002)).copy(); // ����һ��Equip��
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//����
				toDrop. setStr(5);//������
				toDrop. setDex(5);//������ 
				toDrop. setInt(5);//������
				toDrop. setLuk(5);//������
				//toDrop. setHp(50);//��HP
				//toDrop. setMp(50);//��MP
				toDrop. setWatk(5);//����
				toDrop. setMatk(5);//ħ����
				/*toDrop. setWdef(99);//�������
				toDrop. setMdef(99);//ħ������
				toDrop. setAcc(99);//����
				toDrop. setAvoid(99);//�ر�
				toDrop. setHands(99);//�ּ�
				toDrop. setSpeed(99);//�ƶ�
				toDrop. setJump(99);//��Ծ*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.sendOk("#b��ϲ��,�һ�#v1142002#�ɹ���");
		cm.dispose();
		}
		} else if (selection == 2) {
if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		    } else if (!cm.haveItem(4310002, 1)) {//�ж���Ʒ
			cm.sendOk("#b��û��һ��#v4310002#�޷��һ�.");
		   cm.dispose();
		} else{
			cm.gainItem(4310002, -1);//�۳���Ʒ
var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1142101); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1142101)).copy(); // ����һ��Equip��
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//����
				toDrop. setStr(5);//������
				toDrop. setDex(5);//������ 
				toDrop. setInt(5);//������
				toDrop. setLuk(5);//������
				//toDrop. setHp(50);//��HP
				//toDrop. setMp(50);//��MP
				toDrop. setWatk(5);//����
				toDrop. setMatk(5);//ħ����
				/*toDrop. setWdef(99);//�������
				toDrop. setMdef(99);//ħ������
				toDrop. setAcc(99);//����
				toDrop. setAvoid(99);//�ر�
				toDrop. setHands(99);//�ּ�
				toDrop. setSpeed(99);//�ƶ�
				toDrop. setJump(99);//��Ծ*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.sendOk("#b��ϲ��,�һ�#v1142101#�ɹ���");
		cm.dispose();
		}
		} else if (selection == 88) {
if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		    } else if (!cm.haveItem(4310088, 1)) {//�ж���Ʒ
			cm.sendOk("#b��û��һ��#v4310088#�޷��һ�.");
		   cm.dispose();
		} else{
			cm.gainItem(4310088, -1);//�۳���Ʒ
var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1142219); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1142219)).copy(); // ����һ��Equip��
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//����
				toDrop. setStr(10);//������
				toDrop. setDex(10);//������ 
				toDrop. setInt(10);//������
				toDrop. setLuk(10);//������
				//toDrop. setHp(50);//��HP
				//toDrop. setMp(50);//��MP
				toDrop. setWatk(10);//����
				toDrop. setMatk(10);//ħ����
				/*toDrop. setWdef(99);//�������
				toDrop. setMdef(99);//ħ������
				toDrop. setAcc(99);//����
				toDrop. setAvoid(99);//�ر�
				toDrop. setHands(99);//�ּ�
				toDrop. setSpeed(99);//�ƶ�
				toDrop. setJump(99);//��Ծ*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.sendOk("#b��ϲ��,�һ�#v1142219#�ɹ���");
		cm.dispose();
		}
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
		} else if (selection == 3) {
if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		    } else if (!cm.haveItem(4310023, 1)) {//�ж���Ʒ
			cm.sendOk("#b��û��һ��#v4310023#�޷��һ�.");
		   cm.dispose();
		} else{
			cm.gainItem(4310023, -1);//�۳���Ʒ5150038
			cm.gainItem(5150038, 1)
var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1142574); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1142574)).copy(); // ����һ��Equip��
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//����
				toDrop. setStr(7);//������
				toDrop. setDex(7);//������ 
				toDrop. setInt(7);//������
				toDrop. setLuk(7);//������
				//toDrop. setHp(50);//��HP
				//toDrop. setMp(50);//��MP
				toDrop. setWatk(7);//����
				toDrop. setMatk(7);//ħ����
				/*toDrop. setWdef(99);//�������
				toDrop. setMdef(99);//ħ������
				toDrop. setAcc(99);//����
				toDrop. setAvoid(99);//�ر�
				toDrop. setHands(99);//�ּ�
				toDrop. setSpeed(99);//�ƶ�
				toDrop. setJump(99);//��Ծ*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.sendOk("#b��ϲ��,�һ�#v1142574#�ɹ���");
		cm.dispose();
		}
		} else if (selection == 4) {
if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		    } else if (!cm.haveItem(4310088, 1)) {//�ж���Ʒ
			cm.sendOk("#b��û��һ��#v4310088#�޷��һ�.");
		   cm.dispose();
		} else{
			cm.gainItem(4310088, -1);//�۳���Ʒ
var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1142220); //���װ��������
				var toDrop = ii.randomizeStats(ii.getEquipById(1142220)).copy(); // ����һ��Equip��
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//����
				toDrop. setStr(10);//������
				toDrop. setDex(10);//������ 
				toDrop. setInt(10);//������
				toDrop. setLuk(10);//������
				//toDrop. setHp(50);//��HP
				//toDrop. setMp(50);//��MP
				toDrop. setWatk(10);//����
				toDrop. setMatk(10);//ħ����
				/*toDrop. setWdef(99);//�������
				toDrop. setMdef(99);//ħ������
				toDrop. setAcc(99);//����
				toDrop. setAvoid(99);//�ر�
				toDrop. setHands(99);//�ּ�
				toDrop. setSpeed(99);//�ƶ�
				toDrop. setJump(99);//��Ծ*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.sendOk("#b��ϲ��,�һ�#v1142220#�ɹ���");
		cm.dispose();
		}
         
        }
    }
}