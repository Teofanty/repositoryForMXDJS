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
var selStr = "���ã���ѡ������Ҫ�һ�����Ʒ\r\n��#r��ɫʣ��:#v4310018# x " + cm.getPlayer().getItemQuantity(4310018, false) + " ö!  #v4310019# x " + cm.getPlayer().getItemQuantity(4310019, false) + " ö!  #v4310014# x " + cm.getPlayer().getItemQuantity(4310014, false) + " ö!";
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
} else if (cm.haveItem(ItemId[selection][1], ItemId[selection][2])) {
                    cm.gainItem(ItemId[selection][1], -ItemId[selection][2]);
                    cm.gainItem(ItemId[selection][0], 1);
                    cm.getPlayer().saveToDB(true, true);
                    cm.sendOk("�һ��ɹ�,��Ʒ#i" + ItemId + ":# #b#t" + ItemId + "##k������������");
                    cm.dispose();
                    } else {
                    cm.sendOk("��û���㹻��#v4031456##z4031456#�һ���");
                    cm.dispose();
						    return;
}
status = -1;
    }}}}
