importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
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
            for (i = 0; i < 60; i++) {
                text += "";
            }
            text +=" �һ���߳Ǹ�������#v1142002# ����ά+1��\r\n ��Ҫ50����߳Ǹ�����Ʊ#v4031559#\r\n";
            text += "#L1##r�һ�#v1142002#��߳Ǹ�������\r\n";
            //text += "#v1112915#*1 #v4031559#*25 #v4001222#*25 #v4001223#*10 #v4001224#*10 #v4001225#*10 #v4021000#*5 #v4021001#*5 #v4021002#*5 #v4021003#*5 #v4021004#*5 #v4021005#*5 #v4021006#*5 #v4021007#*5 +���200��\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(4031559, 30) &&cm.getMeso() >=1) {
                cm.gainItem(4031559,-30);
                cm.gainMeso(-1);
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1142002); //���װ��������
		var toDrop = ii.randomizeStats(ii.getEquipById(1142002)).copy(); // ����һ��Equip��
		//toDrop. setFlag(1);//����
		toDrop. setStr(2);//������
		toDrop. setDex(2);//������ 
		toDrop. setInt(2);//������
		toDrop. setLuk(2);//������
		toDrop. setHp(10);//��HP
		toDrop. setMp(10);//��MP
		toDrop. setMatk(2);//����
		toDrop. setWatk(2);//ħ����
		toDrop. setWdef(0);//�������
		toDrop. setMdef(0);//ħ������
		toDrop. setAcc(0);//����
		toDrop. setAvoid(0);//�ر�
		toDrop. setHands(0);//�ּ�
		toDrop. setSpeed(0);//�ƶ�
		toDrop. setJump(0);//��Ծ
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                cm.sendOk("�ϳ�#v1142002#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ���!");
                cm.dispose();
            }
            }
			}
		}
    


