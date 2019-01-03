importPackage(net.sf.odinms.client);
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);


var level_1 = [4000019, 4000000, 4000016];
var amount_1 = [50, 50, 20];
var property_1 = [1, 0];

var level_2 = [4000001, 4000012, 4000010, 2210006];
var amount_2 = [50, 50, 200, 1];
//��ά������
var property_2 = [1, 1];

var level_3 = [4000007, 4000020, 4000037];
var amount_3 = [100, 200, 200, 1];
var property_3 = [1, 2];

var level_4 = [4000106, 4000095, 4000168];
var amount_4 = [200, 100, 100];
var property_4 = [2, 2];

var level_5 = [4000083, 4000059, 4000060];
var amount_5 = [100, 100, 100];
var property_5 = [2, 3];

var level_6 = [4000070, 4000071, 4000072];
var amount_6 = [200, 200, 200];
var property_6 = [3, 3];

var level_7 = [4000040, 4000176, 4002000];
var amount_7 = [1, 1, 5];
var property_7 = [4, 4];

var level_8 = [4000177, 4000025, 4002000];
var amount_8 = [200, 200, 10];
var property_8 = [5, 4];

var all_level = [level_1, level_2, level_3, level_4, level_5, level_6, level_7, level_8];
var all_amount = [amount_1, amount_2, amount_3, amount_4, amount_5, amount_6, amount_7, amount_8];
var all_property = [property_1, property_2, property_3, property_4, property_5, property_6, property_7, property_8];

var ring_list = [1112446, 1112447, 1112448, 1112449, 1112450, 1112451, 1112452, 1112453];

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "\t\t\t#e��ӭ����#b���Ž�ָ�һ����� #k!#n\r\n\r\n"
            text += "#L1#" + getNeedStr(level_1, amount_1) + "��ȡ#r#v1112446##b#l\r\n"
            text += "#L2#" + getNeedStr(level_2, amount_2) + "����#r#v1112446##z1112446##b#l\r\n"
            text += "#L3#" + getNeedStr(level_3, amount_3) + "����#r#v1112447##z1112447##b#l\r\n"
            text += "#L4#" + getNeedStr(level_4, amount_4) + "����#r#v1112448##z1112448##b#l\r\n"
            text += "#L5#" + getNeedStr(level_5, amount_5) + "����#r#v1112449##z1112449##b#l\r\n"
            text += "#L6#" + getNeedStr(level_6, amount_6) + "����#r#v1112450##z1112450##b#l\r\n"
            text += "#L7#" + getNeedStr(level_7, amount_7) + "����#r#v1112451##z1112451##b#l\r\n"
            text += "#L8#" + getNeedStr(level_8, amount_8) + "����#r#v1112452##z1112452##b#l\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.getPlayer().getOneTimeLog("GPRing") > 0) { //�ж���Ʒ
                cm.sendOk("һ��ֻ�ܻ�һ�ι��Ž�ָ����Ҫ̰��Ŷ");
                cm.dispose();
            } else if (!cm.haveItem(4000019, 50)) { //�ж���Ʒ
                cm.sendOk("#v4000019##z4000019#���㣡");
                cm.dispose();
            } else if (!cm.haveItem(4000000, 50)) {//�����ж���Ʒ
                cm.sendOk("#v4000000##z4000000#���㣡");
                cm.dispose();
            } else if (!cm.haveItem(4000016, 20)) {//�����ж���Ʒ
                cm.sendOk("#v4000016##z4000016#���㣡");
                cm.dispose();
            } else {
                cm.getPlayer().setOneTimeLog("GPRing");
                cm.gainItem(4000019, -50);
                cm.gainItem(4000000, -50);
                cm.gainItem(4000016, -20);
                giveEquipment(property_1[0], property_1[1], 1112446);
                cm.sendOk("�ɹ�����Ϲ����Ž�ָ��");
                cm.dispose();
            }
        } else if (selection != 1) {
            selection = selection - 1;
            var levelList = all_level[selection];
            var amountList = all_amount[selection];
            var flag = true;
            var notHaveIndex;
            for (var i = 0; i < levelList.length; i++) {
                flag = flag && cm.haveItem(levelList[i], amountList[i])
                if (!flag) {
                    notHaveIndex = i;
                    break;
                }
            }

            if (!flag) {
                cm.sendOk("��Ʒ #v" + levelList[notHaveIndex] + "#  ���㣬���ռ���������")
                cm.dispose();
                return;
            }

            if(!cm.haveItem(ring_list[selection - 1], 1)){
                cm.sendOk("��Ʒ #v" + ring_list[selection - 1] + "#  ���㣬���ռ���������");
                cm.dispose();
                return;
            }

            for (var i = 0; i < levelList.length; i++) {
                cm.gainItem(levelList[i], 0 - amountList[i]);
            }
            cm.gainItem(ring_list[selection - 1], -1);
            var propertyX = all_property[selection];
            giveEquipment(propertyX[0], propertyX[1], ring_list[selection]);
            cm.sendOk("�ɹ������Ϲ����Ž�ָ��");
            cm.dispose();

        }
    }
}


function getNeedStr(levelList, amountList) {
    var str = '�ã�';
    for (var i = 0; i < levelList.length; i++) {
        var fuhao = '';
        if (i != 0) {
            fuhao = ','
        }
        str = str + fuhao + '#v' + levelList[i] + '#  * ' + amountList[i]
    }
    return str;
}

function giveEquipment(siwei, property, zhuangbeima) {
    var ii = MapleItemInformationProvider.getInstance();
    var type = ii.getInventoryType(zhuangbeima); //���װ��������
    var toDrop = ii.randomizeStats(ii.getEquipById(zhuangbeima)).copy(); // ����һ��Equip��
    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
    //toDrop.setExpiration(temptime);
    toDrop.setFlag(1);//����
    toDrop.setStr(siwei); //������
    toDrop.setDex(siwei); //������
    toDrop.setInt(siwei); //������
    toDrop.setLuk(siwei); //������
    //toDrop. setHp(hpmp);//��HP
    //toDrop. setMp(hpmp);//��MP

    toDrop.setMatk(property); //����
    toDrop.setWatk(property); //ħ����

    //toDrop. setWdef(fangyu);//�������
    //toDrop. setAcc(99);//����
    /*toDrop. setMdef(99);//ħ������
     toDrop. setAvoid(99);//�ر�
     toDrop. setHands(99);//�ּ�
     toDrop. setSpeed(99);//�ƶ�
     toDrop. setJump(99);��Ծ
     toDrop.setUpgradeSlots(7);���Ҿ����*/
    cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
    cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop, false)); //ˢ�±���
    CWvsContext.InventoryPacket.addInventorySlot
}
