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
    cm.sendYesNo("��ȷ����Ҫʹ��35����#v4011000#+#v4011001#+#v4011002#+#v4011003#+#v4011004#+#v4011005#+#v4011006#��+1000��#v4001126#+500W��ҽ��жһ�#r#v1113013#��ά����+3 ����/ħ����+3#k��");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("��... �������㲢û��׼���á�");
	cm.dispose();
	   } else if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
	   } else if (!cm.haveItem(4011000, 35)) {
       cm.sendOk("��û��35��#v4011000#!");
       cm.dispose();
	   } else if (!cm.haveItem(4011001, 35)) {
       cm.sendOk("��û��35��#v4011001#!");
       cm.dispose();
	   } else if (!cm.haveItem(4011002, 35)) {
       cm.sendOk("��û��35��#v4011002#!");
       cm.dispose();
	   } else if (!cm.haveItem(4011003, 35)) {
       cm.sendOk("��û��35��#v4011003#!");
       cm.dispose();
	   } else if (!cm.haveItem(4011004, 35)) {
       cm.sendOk("��û��35��#v4011004#!");
       cm.dispose();
	   } else if (!cm.haveItem(4011005, 35)) {
       cm.sendOk("��û��35��#v4011005#!");
       cm.dispose();
	   } else if (!cm.haveItem(4011006, 35)) {
       cm.sendOk("��û��35��#v4011006#!");
       cm.dispose();
	   } else if (!cm.haveItem(4001126, 1000)) {
       cm.sendOk("��û��1000��#v4001126#!");
       cm.dispose();
	   } else if (cm.getMeso() < 5000000){//�ж϶��ٽ��
       cm.sendOk("��û��500W���!");
       cm.dispose();
	} else {
	cm.gainItem(4011000, -35);
	cm.gainItem(4011001, -35);
	cm.gainItem(4011002, -35);
	cm.gainItem(4011003, -35);
	cm.gainItem(4011004, -35);
	cm.gainItem(4011005, -35);
	cm.gainItem(4011006, -35);
	cm.gainItem(4001126, -1000);
    cm.gainMeso(- 5000000);//�۳����ٽ��
	var ii = MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1113013); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1113013)).copy(); // ����һ��Equip��
//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
//toDrop.setExpiration(temptime); 
//toDrop. setFlag(1);//����
toDrop. setStr(3);//������
toDrop. setDex(3);//������ 
toDrop. setInt(3);//������
toDrop. setLuk(3);//������
toDrop. setHp(0);//��HP
toDrop. setMp(0);//��MP
toDrop. setWatk(3);//����
toDrop. setMatk(3);//ħ����
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
