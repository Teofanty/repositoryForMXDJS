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
            text +="#kһ��һ�ȵĶ�����ֵ��ˣ�����ףԸ��ҽ��տ��֣��������գ����������µ��������Ҳ�ܲ����ء�\r\n";
            text +="#r�һ�#v1142146#������ѫ�����������ݣ�������������+5��HP,MP+50����Ҫǰ�����㳡���:#v2022034#\r\n";
            text +="#v2022034#*30\r\n";
			text +="#b�ռ�����,��Ҫ����\r\n#L1##e#rȷ��ǰ��ȷ��װ����Ŀ������λ"
			cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(2022034, 30)) {
                cm.gainItem(2022034,-30);
        var ii = MapleItemInformationProvider.getInstance();		                
        var type = ii.getInventoryType(1142146); //���װ��������
        var toDrop = ii.randomizeStats(ii.getEquipById(1142146)).copy(); // ����һ��Equip��
		//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
		//toDrop.setExpiration(temptime); 
		//toDrop. setFlag(1);//����
		toDrop. setStr(5);//������
		toDrop. setDex(5);//������ 
		toDrop. setInt(5);//������
		toDrop. setLuk(5);//������
		toDrop. setHp(50);//��HP
		toDrop. setMp(50);//��MP
		toDrop. setMatk(0);//����
		toDrop. setWatk(0);//ħ����
		toDrop. setWdef(0);//�������
		toDrop. setMdef(0);//ħ������
		toDrop. setAcc(0);//����
		toDrop. setAvoid(0);//�ر�
		toDrop. setHands(0);//�ּ�
		toDrop. setSpeed(0);//�ƶ�
		toDrop. setJump(0);//��Ծ
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                cm.sendOk("�һ�#v1142146#�ɹ���");
				cm.worldMessage(6,"-["+cm.getName()+"]�ɹ��һ��˵�����ѫ��");
                cm.dispose();
            } else {
                cm.sendOk("����ʧ�ܣ����ϲ���������!");
                cm.dispose();
            }
            }
			}
		}
    


