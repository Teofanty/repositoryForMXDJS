/* global cm */
importPackage(net.sf.odinms.client);
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);

var newWeapon = [1302105,1312039,1322065,1432050,1442071,1402053,1412035,1422039,1332081,1472077,1372046,1382062,1452062,1462056,1482029,1492030]
var oldWeapon = [1302182,1302182,1302182,1302182,1302182,1302182,1302182,1302182,1332063,1472061,1372107,1372107,1452051,1452051,1452051,1452051]//�������������û��

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var text = "";
			text += "#e#r	\r\n\r\n			��֮��ר���������� #l#n\r\n\r\n#e#d��֮����������,Ϊ�˵ֿ���֮����ǿ����޴��ɾ�������������Ϊ����������ڴ�,��֮������ʿ��ͨ�����Լ��ɻ�ø�ǿ���ר������!!";
			text += "\r\n	#L1#ר������������һ�׶�#l \r\n\r\n ";
			text += "\r\n   #L2#ר�����������ڶ��׶�#l\r\n\r\n\r\n ";
            cm.sendOk(text);
		} else if (selection == 1) {
			if(cm.getPlayer().getOneTimeLog("��һ�׶�ר������") == 0){//�ж����ü�¼
				cm.openNpc(2111025, 1);
			}else{
				cm.sendOk("��һ�׶���������ɡ�")
				cm.dispose();
			}
        } else if (selection == 2) {
			if ((cm.getPlayer().getOneTimeLog("��һ�׶�ר������")  == 1) && (cm.getPlayer().getOneTimeLog("�ڶ��׶�ר������")  == 0)) {
				cm.openNpc(2111025, 2);
			}else{
				cm.sendOk("ǰ�ý׶�δ��ɻ�ڶ��׶���������ɡ�")
				cm.dispose();
			}
        } else if (selection == 3) {
           cm.openNpc(2111025, 3);
        } else if (selection == 4) {
           cm.openNpc(2111025, 4);
        }
    }
}

//4031123 ����
//1122006 ����
//1112402 �ݱ˵�����ָ
//						��ά   ��GħG  HP   ����	 ����
function giveEquipment(siwei, gongji, hpmp, fangyu, zhuangbeima) {
    var ii = MapleItemInformationProvider.getInstance();
    var type = ii.getInventoryType(zhuangbeima); //���װ��������
    var toDrop = ii.randomizeStats(ii.getEquipById(zhuangbeima)).copy(); // ����һ��Equip��
    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
    //toDrop.setExpiration(temptime); 
    //toDrop. setFlag(1);//����
    toDrop.setStr(siwei); //������
    toDrop.setDex(siwei); //������ 
    toDrop.setInt(siwei); //������
    toDrop.setLuk(siwei); //������
    toDrop. setHp(hpmp);//��HP
    //toDrop. setMp(hpmp);//��MP
    toDrop.setMatk(gongji); //����
    toDrop.setWatk(gongji); //ħ����
    toDrop. setWdef(fangyu);//�������
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


function beibao(nayilan,kongjige){
	kongjige--;
	return cm.getInventory(nayilan).isFull(kongjige);
}	