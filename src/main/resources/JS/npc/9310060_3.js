/* ==================
 �ű�����: NPC    
 �ű���Ȩ��һ�ߺ��Ŷ�-ά��
 ��ϵ�ۿۣ�297870163
 =====================
 */
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
function start() {
    cm.sendYesNo("��ȷ����Ҫʹ��#v1113013#+55����#v4004000#+#v4004001#+#v4004002#+#v4004003#+#v4004004#��+3000��#v4001126#+2500W��ҽ��жһ�#r#v1113013#��ά����+10  ����/ħ����+10 �ּ�+15#k��");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("��... �������㲢û��׼���á�");
	cm.dispose();
	   } else if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		} else if (!cm.haveItem(1113166, 1)) {
       cm.sendOk("��û��#v1113166#!");
       cm.dispose();
		} else if (!cm.haveItem(4004000, 55)) {
       cm.sendOk("��û��55��#v4004000#!");
       cm.dispose();
	   } else if (!cm.haveItem(4004001, 55)) {
       cm.sendOk("��û��55��#v4004001#!");
       cm.dispose();
	   } else if (!cm.haveItem(4004002, 55)) {
       cm.sendOk("��û��55��#v4004002#!");
       cm.dispose();
	   } else if (!cm.haveItem(4004003, 55)) {
       cm.sendOk("��û��55��#v4004003#!");
       cm.dispose();
	   } else if (!cm.haveItem(4004004, 55)) {
       cm.sendOk("��û��55��#v4004004#!");
       cm.dispose();
	   } else if (!cm.haveItem(4001126, 3000)) {
       cm.sendOk("��û��3000��#v4001126#!");
       cm.dispose();
	   } else if (cm.getMeso() < 25000000){//�ж϶��ٽ��
       cm.sendOk("��û��2500W���!");
       cm.dispose();
	} else {
	cm.gainItem(1113166, -1);
	cm.gainItem(4004000, -55);
	cm.gainItem(4004001, -55);
	cm.gainItem(4004002, -55);
	cm.gainItem(4004003, -55);
	cm.gainItem(4004004, -55);
	cm.gainItem(4001126, -3000);
    cm.gainMeso(- 25000000);//�۳����ٽ��
	var ii = MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1113167); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1113167)).copy(); // ����һ��Equip��
//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
//toDrop.setExpiration(temptime); 
//toDrop. setFlag(1);//����
toDrop. setStr(10);//������
toDrop. setDex(10);//������ 
toDrop. setInt(10);//������
toDrop. setLuk(10);//������
toDrop. setHp(0);//��HP
toDrop. setMp(0);//��MP
toDrop. setWatk(10);//����
toDrop. setMatk(10);//ħ����
toDrop. setWdef(0);//�������
toDrop. setMdef(0);//ħ������
toDrop. setAcc(0);//����
toDrop. setAvoid(0);//�ر�
toDrop. setHands(15);//�ּ�
toDrop. setSpeed(0);//�ƶ�
toDrop. setJump(0);//��Ծ
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
cm.sendOk("�һ�#v1113013#�ɹ���");
cm.dispose();
    }
}
