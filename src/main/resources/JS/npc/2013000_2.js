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
            text +=" �һ�Ů�񸱱�����#v1142003# ����ά+1��\r\n ��Ҫ50��Ů�񸱱���Ʊ#v4031560#\r\n";
            text += "#L1##r�һ�#v1142003#Ů�񸱱�����\r\n";
            //text += "#v1112915#*1 #v4031560#*25 #v4001222#*25 #v4001223#*10 #v4001224#*10 #v4001225#*10 #v4021000#*5 #v4021001#*5 #v4021002#*5 #v4021003#*5 #v4021004#*5 #v4021005#*5 #v4021006#*5 #v4021007#*5 +���200��\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(4031560, 30) &&cm.getMeso() >=1) {
                cm.gainItem(4031560,-30);
                cm.gainMeso(-1);
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1142003); //���װ��������
		var toDrop = ii.randomizeStats(ii.getEquipById(1142003)).copy(); // ����һ��Equip��
		//toDrop. setFlag(1);//����
		toDrop. setStr(3);//������
		toDrop. setDex(3);//������ 
		toDrop. setInt(3);//������
		toDrop. setLuk(3);//������
		toDrop. setHp(20);//��HP
		toDrop. setMp(20);//��MP
		toDrop. setMatk(3);//����
		toDrop. setWatk(3);//ħ����
		toDrop. setWdef(0);//�������
		toDrop. setMdef(0);//ħ������
		toDrop. setAcc(0);//����
		toDrop. setAvoid(0);//�ر�
		toDrop. setHands(0);//�ּ�
		toDrop. setSpeed(0);//�ƶ�
		toDrop. setJump(0);//��Ծ
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                cm.sendOk("�ϳ�#v1142003#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ���!");
                cm.dispose();
            }
            }
			}
		}
    


