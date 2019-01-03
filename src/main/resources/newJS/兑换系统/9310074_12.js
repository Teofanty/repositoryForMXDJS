importPackage(net.sf.odinms.client);
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
importPackage(Packages.client.inventory);


var level_1 = [4031561];
var amount_1 = [1];
var property_1 = [2, 2, 0];

var level_2 = [4031560];
var amount_2 = [1];
             //��ά������
var property_2 = [4, 4, 0];

var level_3 = [4031558];
var amount_3 = [1];
var property_3 = [6, 6, 0];

var level_4 = [4031559];
var amount_4 = [1];
var property_4 = [8, 8, 100];

var all_level = [level_1, level_2, level_3, level_4];
var all_amount = [amount_1, amount_2, amount_3, amount_4];
var all_property = [property_1, property_2, property_3, property_4];

var ring_list = [1142014, 1142017, 1142022, 1142031];

var isOneTime = true;
var oneTimeName = "fubenxunzhang_"

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
            text += "\t\t\t#e��ӭ����#b����װ���һ����� #k!#n\r\n\r\n";
            text += "#L1#" + getNeedStr(level_1, amount_1, ring_list[0]) + "\r\n\r\n(��ά����+2 ��/ħ+2 )��������#b#l\r\n";
            text += "#L2#" + getNeedStr(level_2, amount_2, ring_list[1]) + "\r\n\r\n(��ά����+4 ��/ħ+4 )�����������#b#l\r\n";
            text += "#L3#" + getNeedStr(level_3, amount_3, ring_list[2]) + "\r\n\r\n(��ά����+6 ��/ħ+6 )��߸������#b#l\r\n";
            text += "#L4#" + getNeedStr(level_4, amount_4, ring_list[3]) + "\r\n\r\n(��ά����+8 ��/ħ+8 )Ů�񸱱����#b#l\r\n";
            cm.sendSimple(text);
        }  else if (selection != 0) {
            var index = selection - 1;
            var levelList = all_level[index];
            var amountList = all_amount[index];
            var flag = true;
            var notHaveIndex;
            var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(levelList[0]).iterator();
            if (!cm.haveItem(levelList[0])) {
                cm.sendNext("����#v"+ levelList[0] +"#��������һ�ѫ�¡�");
                status = -1;
            }else {
                cm.sendGetNumber("������#b#z"+ levelList[0] +"##k�һ�#rѫ��#k����Ч������1�� = 1�죩: \r\n", 1, 1, iter.next().getQuantity());
            }

            if (status == 1) {
                cm.sendOk("selection: "+ selection + ", status : "+ status);
                cm.dispose();
                if (selection <= 0) {
                    cm.sendOk("����Ķһ����ִ���");
                    cm.dispose();
                }else {
                    var resultAmount = amountList[0] * selection;
                    for (var i = 0; i < levelList.length; i++) {
                        flag = flag && cm.haveItem(levelList[i], resultAmount)
                        if (!flag) {
                            notHaveIndex = i;
                            break;
                        }
                    }
                    if (!flag) {
                        cm.sendOk("��Ʒ #v" + levelList[notHaveIndex] + "#  ���� " + selection + "�ţ����ռ���������")
                        cm.dispose();
                        return;
                    }
                    for (var i = 0; i < levelList.length; i++) {
                        cm.gainItem(levelList[i], 0 - resultAmount);
                    }
                    //TODO fix 1.�������� 2.�һ����޶Ի�
                    cm.sendOk("�ɹ��һ�����" + selection + "�죡");
                    var propertyX = all_property[index];
                    giveEquipment(propertyX[0], propertyX[1], propertyX[2], selection, ring_list[index]);
                }
                status = -1;
            }else {
                cm.dispose();
            }
        }
    }
}


function getNeedStr(levelList, amountList, zhuangbei) {
    var str = '';
    for (var i = 0; i < levelList.length; i++) {
        str = str + amountList[i] + '��#v' + levelList[i] + '# '
    }
    return str + '�һ�#r#v' + zhuangbei + '#' + "#z" + zhuangbei + "##b#l";
}

function giveEquipment(siwei, property, hmp, date, zhuangbeima) {
    var ii = MapleItemInformationProvider.getInstance();
    var type = ii.getInventoryType(zhuangbeima); //���װ��������
    var toDrop = ii.randomizeStats(ii.getEquipById(zhuangbeima)).copy(); // ����һ��Equip��
    var temptime = (System.currentTimeMillis() + date * 24 * 60 * 60 * 1000); //ʱ��
    toDrop.setExpiration(temptime);
    toDrop.setFlag(1);//����
    toDrop.setStr(siwei); //������
    toDrop.setDex(siwei); //������
    toDrop.setInt(siwei); //������
    toDrop.setLuk(siwei); //������
    toDrop. setHp(hmp);//��HP
    toDrop. setMp(hmp);//��MP

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
}
