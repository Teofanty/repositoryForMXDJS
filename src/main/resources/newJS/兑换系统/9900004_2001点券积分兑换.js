importPackage(net.sf.odinms.client);
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
importPackage(Packages.client.inventory);


var award1 = [2340000, 2049100];
var amount1 = [10, 10];
var need1 = [150];

var award2 = [1112793];
var amount2 = [1];
var need2 = [200];

var award3 = [2340000, 2049100];
var amount3 = [20, 20];
var need3 = [300];

var allNeed = [need1, need2, need3];
var allAward = [award1, award2, award3];
var allAmount = [amount1, amount2, amount3];
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

            var text = "";

            text += "\t\t\t#e��ӭ����#b��ֵ�����һ����� #k!#n\r\n\r\n";

            for( i = 0; i < allNeed.length; i++) {
                text += "#L" + i + "#" + allNeed[i][0] + '���������һ�:#l  \r\n\r\n'+ getNeedStr( allAward[i], allAmount[i]) + "\r\n\r\n";
            }
            cm.sendSimple(text);
        }  else if (selection != -1) {
            var targetNeed = allNeed[selection];
            var targetAward = allAward[selection];
            var targetAmont = allAmount[selection];

            if (cm.getPlayer().getBeans() < targetNeed[0]){
                cm.sendOk("�����������㣡��ȷ�Ϻ����������������һ��󶹶���ʾ������Ҫ���߻��صǲŻ�ˢ�£�")
                cm.dispose();
                return;
        }

        cm.getPlayer().gainBeans(-targetNeed[0]);

        for (var i = 0; i < targetAward.length; i++) {
            cm.gainItem(targetAward[i], targetAmont[i]);
        }

        cm.sendOk("�һ��ɹ���");
            cm.dispose();
        }
    }
}


function getNeedStr(award, amount) {
    var str = "";
    for (var i = 0; i < award.length; i++) {
        str += "     " + amount[i] + '��#r#v' + award[i] + '#' + "#z" + award[i] + "##b#l\r\n\r\n";
    }
    return str;
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
    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
}
