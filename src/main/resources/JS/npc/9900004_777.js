/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����     
 ��ϵ��ʽ��2412614144
 =====================
 */
var ��ɫ��ͷ = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2# ";

importPackage(net.sf.sunms.client);
var status = 0;
var zones = 0;
var ItemId = Array(
        //��Ʒ1         ��Ʒ2    ����    ����
	Array(1302224,4001024,20, "0"),
    Array(1442181,4001024,20, "1"),
	Array(1452168,4001024,20, "2"),
	Array(1432137,4001024,20, "3"),
	Array(1322161,4001024,20, "4"),
    Array(1372137,4001024,20, "4"),
    Array(1462157,4001024,20, "5"),
	Array(1382167,4001024,20, "6"),
	Array(1422106,4001024,20, "7"),
    Array(1402150,4001024,20, "8"),
	Array(1472178,4001024,20, "0"),
    Array(1312115,4001024,20, "1"),
	Array(1332192,4001024,20, "2"),
	Array(1092110,4001024,10, "3"),
	Array(1092111,4001024,10, "4"),
    Array(1092109,4001024,10, "4"),
    //Array(1332025,4001024,10, "5"),
	//Array(1382012,4001024,10, "6"),
	//Array(1452022,4001024,10, "7"),
    //Array(1462019,4001024,10, "8"),
    Array(1412103,4001024,20, "9")
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
            sl = cm.getPlayer().getItemQuantity(4001024, false);
            StringS = "#b#n   ��ɫʣ��:" + sl + " ��#v4001024#";
            for (var i = 0; i < ItemId.length; i++) {
                StringS += "\r\n#L" + i + "##b" + ��ɫ��ͷ + "#b#v " + ItemId[i][1] + " #" + ItemId[i][2] + "#n��#k �һ� #r#v" + ItemId[i][0] + "##z" + ItemId[i][0] + "##k#l";
            }
            cm.sendSimple(StringS, 2);
            zones == 0;

        } else if (status == 1) {
            if (zones == 0) {
                    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b�뱣֤װ����λ������2���ո�,�����޷�����.");
                        cm.dispose();
                    } else if (cm.getInventory(2).isFull()){
                        cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷�����.");
                        cm.dispose();
                    } else if (cm.getInventory(3).isFull()){
                        cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷�����.");
                        cm.dispose();
                    } else if (cm.getInventory(4).isFull()){
                        cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷�����.");
                        cm.dispose();
                } else if (cm.haveItem(ItemId[selection][1], ItemId[selection][2])) {
                    cm.gainItem(ItemId[selection][1], -ItemId[selection][2]);
                    cm.gainItem(ItemId[selection][0], 1);
                    cm.sendOk("�һ��ɹ�����챳��!"); 
                    cm.dispose();
                } else {
                    cm.sendOk("#v4001024#���㣡");
                    cm.dispose();
                }
            }
        }
    }
}	