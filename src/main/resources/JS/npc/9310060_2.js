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
    cm.sendYesNo("��ȷ����Ҫʹ��#v1113013#+35����#v4021000#+#v4021001#+#v4021002#+#v4021003#+#v4021004#+#v4021005#+#v4021006#+#v4021007#+#v4021008#��+2000��#v4001126#+1000W��ҽ��жһ�#r#v1113013#��ά����+6 ����/ħ����+6#k��");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("��... �������㲢û��׼���á�");
	cm.dispose();
	   } else if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
		} else if (!cm.haveItem(1113013, 1)) {
       cm.sendOk("��û��#v1113013#!");
       cm.dispose();
		} else if (!cm.haveItem(4021000, 35)) {
       cm.sendOk("��û��35��#v4021000#!");
       cm.dispose();
	   } else if (!cm.haveItem(4021001, 35)) {
       cm.sendOk("��û��35��#v4021001#!");
       cm.dispose();
	   } else if (!cm.haveItem(4021002, 35)) {
       cm.sendOk("��û��35��#v4011002#!");
       cm.dispose();
	   } else if (!cm.haveItem(4021003, 35)) {
       cm.sendOk("��û��35��#v4011003#!");
       cm.dispose();
	   } else if (!cm.haveItem(4021004, 35)) {
       cm.sendOk("��û��35��#v4011004#!");
       cm.dispose();
	   } else if (!cm.haveItem(4021005, 35)) {
       cm.sendOk("��û��35��#v4011005#!");
       cm.dispose();
	   } else if (!cm.haveItem(4021006, 35)) {
       cm.sendOk("��û��35��#v4011006#!");
       cm.dispose();
	   } else if (!cm.haveItem(4021007, 35)) {
       cm.sendOk("��û��35��#v4011007#!");
       cm.dispose();
	   } else if (!cm.haveItem(4021008, 35)) {
       cm.sendOk("��û��35��#v4011008#!");
       cm.dispose();
	   } else if (!cm.haveItem(4001126, 2000)) {
       cm.sendOk("��û��2000��#v4001126#!");
       cm.dispose();
	   } else if (cm.getMeso() < 10000000){//�ж϶��ٽ��
       cm.sendOk("��û��1000W���!");
       cm.dispose();
	} else {
	cm.gainItem(1113013, -1);
	cm.gainItem(4021000, -35);
	cm.gainItem(4021001, -35);
	cm.gainItem(4021002, -35);
	cm.gainItem(4021003, -35);
	cm.gainItem(4021004, -35);
	cm.gainItem(4021005, -35);
	cm.gainItem(4021006, -35);
	cm.gainItem(4021007, -35);
	cm.gainItem(4021008, -35);
	cm.gainItem(4001126, -2000);
    cm.gainMeso(- 10000000);//�۳����ٽ��
	var ii = MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1113166); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1113166)).copy(); // ����һ��Equip��
//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
//toDrop.setExpiration(temptime); 
toDrop. setFlag(1);//����
toDrop. setStr(6);//������
toDrop. setDex(6);//������ 
toDrop. setInt(6);//������
toDrop. setLuk(6);//������
toDrop. setHp(0);//��HP
toDrop. setMp(0);//��MP
toDrop. setWatk(6);//����
toDrop. setMatk(6);//ħ����
toDrop. setWdef(0);//�������
toDrop. setMdef(0);//ħ������
toDrop. setAcc(0);//����
toDrop. setAvoid(0);//�ر�
toDrop. setHands(0);//�ּ�
toDrop. setSpeed(0);//�ƶ�
toDrop. setJump(0);//��Ծ
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
cm.sendOk("�һ�#v1113013#�ɹ���");
cm.dispose();
    }
}
