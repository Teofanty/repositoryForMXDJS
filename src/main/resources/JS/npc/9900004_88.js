/*
 * @ά��
 * @����Ҷһ�
 */
//---------������-------
var ��ɫ��ͷ = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2# ";

importPackage(net.sf.sunms.client);
var status = 0;
var zones = 0;
//4000425
/**/
var ItemId = Array(
        //��Ʒ1         ��Ʒ2    ����    ����
    Array(4001254,4031456,500, "1"),//��ҫ��ð�յ������
    Array(2340000,4031456,500, "2"),//�һ� ף������
    Array(1082149,4031456,300, "3"),//�һ� ��������(�֣�
    Array(1102041,4031456,300, "4"),//�һ� ��������(�� )
    Array(1102042,4031456,300, "5"),//�һ� ��������(��)
    Array(2040025,4031456,200, "6"),//ͷ����������60%
    Array(2040024,4031456,200, "7"),//ͷ����������10%
    Array(2040804,4031456,200, "8"),//���׹�������60%
    Array(2040805,4031456,200, "9"),//���׹�������10%
    Array(2040817,4031456,200, "10"),//����ħ������60%
    Array(2040816,4031456,200, "11"),//����ħ������10%
    Array(2040914,4031456,200, "12"),//���ƹ�������60%
    Array(2040915,4031456,200, "13"),//���ƹ�������10%
    Array(2040919,4031456,200, "14"),//����ħ������60%
    Array(2040920,4031456,200, "15"),//����ħ������10%
    Array(2041307,4031456,200, "16"),//�������ݾ���60%
    Array(2041308,4031456,200, "17"),//�������ݾ���10%
    Array(2041301,4031456,200, "18"),//������������60%
    Array(2041302,4031456,200, "19"),//������������10%
    Array(2041310,4031456,200, "20"),//������������60%
    Array(2041311,4031456,200, "21"),//������������10%
    Array(2041304,4031456,200, "22"),//������������60%
    Array(2041305,4031456,200, "23"),//������������10%
    Array(2040301,4031456,200, "24"),//������������60%
    Array(2040302,4031456,200, "25"),//������������10%
    Array(2040317,4031456,200, "26"),//�������ݾ���60%
    Array(2040318,4031456,200, "27")//�������ݾ���10%   ���һ�Ž�βȥ��, 
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
            sl = cm.getPlayer().getItemQuantity(4031456, false);
            StringS = "#b#n   ��ɫʣ��:" + sl + " ��#v4031456#";
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
                    cm.sendOk("#v4031456#���㣡");
                    cm.dispose();
                }
            }
        }
    }
}	