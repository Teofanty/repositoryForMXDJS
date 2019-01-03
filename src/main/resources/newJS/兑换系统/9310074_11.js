importPackage(net.sf.odinms.client);
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);

var level_1 = [4031558];
var amount_1 = [200];
var property_1 = [1, 1, 20];

var level_2 = [4031559];
var amount_2 = [300];
             //��ά������
var property_2 = [3, 4, 50];

var level_3 = [4310014];
var amount_3 = [30];
var property_3 = [5, 1, 80];

var level_4 = [4031560];
var amount_4 = [800];
var property_4 = [8, 6, 100];

var all_level = [level_1, level_2, level_3, level_4];
var all_amount = [amount_1, amount_2, amount_3, amount_4];
var all_property = [property_1, property_2, property_3, property_4];

var ring_list = [1032149, 1082245, 1072455, 1012474];

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
            text += "#L1#" + getNeedStr(level_1, amount_1, ring_list[0]) + "\r\n\r\n(��ά����+1 ��/ħ+1 Ѫ/��+20)�����������#b#l\r\n";
            text += "#L2#" + getNeedStr(level_2, amount_2, ring_list[1]) + "\r\n\r\n(��ά����+3 ��/ħ+4 Ѫ/��+50)��߸������#b#l\r\n";
            text += "#L3#" + getNeedStr(level_3, amount_3, ring_list[2]) + "\r\n\r\n(��ά����+5 ��/ħ+1 Ѫ/��+80)Ů�񸱱����#b#l\r\n";
            text += "#L4#" + getNeedStr(level_4, amount_4, ring_list[3]) + "\r\n\r\n(��ά����+8 ��/ħ+4 Ѫ/��+100)�����������#b#l\r\n";
            cm.sendSimple(text);
        }  else if (selection != 0) {
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

            for (var i = 0; i < levelList.length; i++) {
                cm.gainItem(levelList[i], 0 - amountList[i]);
            }

            var propertyX = all_property[selection];
            giveEquipment(propertyX[0], propertyX[1], propertyX[2], ring_list[selection]);
            cm.sendOk("�ɹ��һ�����װ����");
            cm.dispose();

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

function giveEquipment(siwei, property,hmp, zhuangbeima) {
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
}
