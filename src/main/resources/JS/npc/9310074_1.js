/* ==================
 �ű�����: NPC	    
 �ű�����: ��Ϸ���Ŷ�-ά������ 
 ��ϵ�ۿ�: 297870163
 =====================
 */
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
var status = 0;
var zones = 0;
var ItemId = Array(
        //��Ʒ1         ��Ʒ2    ����    ����
	Array(1114213,4310018,3, "0"),//��ҽ�ָ
    Array(1113164,4310019,3, "0"),//��ҽ�ָ
	Array(1112793,4310014,3, "0")//��ҽ�ָ
        //�����������߶һ����밴�մ˸�ʽ�������á�
        //����,�۸�,����
);


function start() {
	 status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
cm.dispose();
    } else {
if (status >= 0 && mode == 0) {
    cm.dispose();
    return;
}
if (mode == 1)
    status++;
else
    status--;
if (status == 0) {
var selStr = "���ã���ѡ������Ҫ�һ�����Ʒ\r\n��#r��ɫʣ��:#v4310018# x " + cm.getPlayer().getItemQuantity(4310018, false) + " ö  #v4310019# x " + cm.getPlayer().getItemQuantity(4310019, false) + " ö  #v4310014# x " + cm.getPlayer().getItemQuantity(4310014, false) + " ö\r\n#k��";
for (var i = 0; i < ItemId.length; i++) {
    selStr += "\r\n#L" + i + "##i" + ItemId[i][0] + "##z" + ItemId[i][0] + "##k = #r#v " + ItemId[i][1] + " ##k X#e" + ItemId[i][2] + "#n��#l";
   }
cm.sendSimple(selStr);
    } else if (status == 1) {
		 if (zones == 1) {
cm.sendNext("�����Ұ�����ʲô�أ�", 2);
zones = 2;
    } else if (zones == 0) {
if (cm.getInventory(1).isFull(0)){//�жϵ�2��Ҳ����װ�����Ƿ���һ���ո�	
                    cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");	
                    cm.dispose();
} else if (!cm.haveItem(ItemId[selection][1], ItemId[selection][2])) {//�ж���Ʒ
cm.sendOk("#b#v"+ItemId[selection][1]+"#����"+ItemId[selection][2]+"��.");	
 cm.dispose();
} else if (ItemId[selection][0] == 1114213) {
	if(cm.getPlayer().getOneTimeLog("jiezhiduih4") >= 1){//�ж����ü�¼
	cm.sendOk("#b#v1114213#ֻ�ܶһ�һ��..");	
    cm.dispose();
	} else{
cm.gainItem(ItemId[selection][1], -ItemId[selection][2]);
var ii = MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(ItemId[selection][0]); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(ItemId[selection][0])).copy(); // ����һ��Equip��
//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
//toDrop.setExpiration(temptime); 
toDrop. setFlag(1);//����
toDrop. setStr(5);//������
toDrop. setDex(5);//������ 
toDrop. setInt(5);//������
toDrop. setLuk(5);//������
toDrop. setHp(0);//��HP
toDrop. setMp(0);//��MP
toDrop. setWatk(5);//����
toDrop. setMatk(5);//ħ����
toDrop. setWdef(0);//�������
toDrop. setMdef(0);//ħ������
toDrop. setAcc(0);//����
toDrop. setAvoid(0);//�ر�
toDrop. setHands(0);//�ּ�
toDrop. setSpeed(0);//�ƶ�
toDrop. setJump(0);//��Ծ
toDrop. setUpgradeSlots(0);//����������
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
cm.getPlayer().setOneTimeLog("jiezhiduih4");//�����ü�¼
cm.getPlayer().saveToDB(true, true);
cm.sendOk("�һ��ɹ�,��Ʒ#i" + ItemId[selection][0] + ":# #b#t" + ItemId[selection][0] + "##k������������");
cm.dispose();
}
} else if (ItemId[selection][0] == 1113164) {
	if(cm.getPlayer().getOneTimeLog("jiezhiduih5") >= 1){//�ж����ü�¼
	cm.sendOk("#b#v1113164#ֻ�ܶһ�һ��..");	
    cm.dispose();
	} else{
cm.gainItem(ItemId[selection][1], -ItemId[selection][2]);
var ii = MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(ItemId[selection][0]); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(ItemId[selection][0])).copy(); // ����һ��Equip��
//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
//toDrop.setExpiration(temptime); 
toDrop. setFlag(1);//����
toDrop. setStr(5);//������
toDrop. setDex(5);//������ 
toDrop. setInt(5);//������
toDrop. setLuk(5);//������
toDrop. setHp(0);//��HP
toDrop. setMp(0);//��MP
toDrop. setWatk(5);//����
toDrop. setMatk(5);//ħ����
toDrop. setWdef(0);//�������
toDrop. setMdef(0);//ħ������
toDrop. setAcc(0);//����
toDrop. setAvoid(0);//�ر�
toDrop. setHands(0);//�ּ�
toDrop. setSpeed(0);//�ƶ�
toDrop. setJump(0);//��Ծ
toDrop. setUpgradeSlots(0);//����������
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
cm.getPlayer().setOneTimeLog("jiezhiduih5");//�����ü�¼
cm.getPlayer().saveToDB(true, true);
cm.sendOk("�һ��ɹ�,��Ʒ#i" + ItemId[selection][0] + ":# #b#t" + ItemId[selection][0] + "##k������������");
cm.dispose();
}
} else if (ItemId[selection][0] == 1112793) {
                    cm.gainItem(ItemId[selection][1], -ItemId[selection][2]);
var ii = MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(ItemId[selection][0]); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(ItemId[selection][0])).copy(); // ����һ��Equip��
//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
//toDrop.setExpiration(temptime); 
toDrop. setFlag(1);//����
toDrop. setStr(5);//������
toDrop. setDex(5);//������ 
toDrop. setInt(5);//������
toDrop. setLuk(5);//������
toDrop. setHp(0);//��HP
toDrop. setMp(0);//��MP
toDrop. setWatk(5);//����
toDrop. setMatk(5);//ħ����
toDrop. setWdef(0);//�������
toDrop. setMdef(0);//ħ������
toDrop. setAcc(0);//����
toDrop. setAvoid(0);//�ر�
toDrop. setHands(0);//�ּ�
toDrop. setSpeed(0);//�ƶ�
toDrop. setJump(0);//��Ծ
toDrop. setUpgradeSlots(0);//����������
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
cm.getPlayer().setOneTimeLog("jiezhiduih6");//�����ü�¼
                    cm.getPlayer().saveToDB(true, true);
                    cm.sendOk("�һ��ɹ�,��Ʒ#i" + ItemId[selection][0] + ":# #b#t" + ItemId[selection][0] + "##k������������");
                    cm.dispose();
					}
}
    }}}
