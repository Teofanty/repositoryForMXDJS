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
    cm.sendYesNo("��ȷ����Ҫʹ��30����#v4011000#+#v4011001#+#v4011002#+#v4011003#+#v4011004#+#v4011005#+#v4011006#�����жһ�#r#v1132000#��ά����+3#k��");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("��... �������㲢û��׼���á�");
	cm.dispose();
	   } else if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
		cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
		cm.dispose();
	   } else if (!cm.haveItem(4011000, 30)) {
       cm.sendOk("��û��30��#v4011000#!");
       cm.dispose();
	   } else if (!cm.haveItem(4011001, 30)) {
       cm.sendOk("��û��30��#v4011001#!");
       cm.dispose();
	   } else if (!cm.haveItem(4011002, 30)) {
       cm.sendOk("��û��30��#v4011002#!");
       cm.dispose();
	   } else if (!cm.haveItem(4011003, 30)) {
       cm.sendOk("��û��30��#v4011003#!");
       cm.dispose();
	   } else if (!cm.haveItem(4011004, 30)) {
       cm.sendOk("��û��30��#v4011004#!");
       cm.dispose();
	   } else if (!cm.haveItem(4011005, 30)) {
       cm.sendOk("��û��30��#v4011005#!");
       cm.dispose();
	   } else if (!cm.haveItem(4011006, 30)) {
       cm.sendOk("��û��30��#v4011006#!");
       cm.dispose();

	} else {
	cm.gainItem(4011000, -30);
	cm.gainItem(4011001, -30);
	cm.gainItem(4011002, -30);
	cm.gainItem(4011003, -30);
	cm.gainItem(4011004, -30);
	cm.gainItem(4011005, -30);
	cm.gainItem(4011006, -30);
	var ii = MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1132000); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1132000)).copy(); // ����һ��Equip��
//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
//toDrop.setExpiration(temptime); 
//toDrop. setFlag(1);//����
toDrop. setStr(3);//������
toDrop. setDex(3);//������ 
toDrop. setInt(3);//������
toDrop. setLuk(3);//������
toDrop. setHp(0);//��HP
toDrop. setMp(0);//��MP
toDrop. setWatk(0);//����
toDrop. setMatk(0);//ħ����
toDrop. setWdef(0);//�������
toDrop. setMdef(0);//ħ������
toDrop. setAcc(0);//����
toDrop. setAvoid(0);//�ر�
toDrop. setHands(0);//�ּ�
toDrop. setSpeed(0);//�ƶ�
toDrop. setJump(0);//��Ծ
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
cm.sendOk("�һ�#v1113164#�ɹ���");
cm.dispose();
    }
}
