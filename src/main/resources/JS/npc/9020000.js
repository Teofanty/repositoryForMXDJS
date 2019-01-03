/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����     
 ��ϵ��ʽ��2412614144
 =====================
 */
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);

var status;
var fbmc = "��������-(��������)";//��������
var minLevel = 18;
var maxLevel = 200;
var minPartySize = 3;
var maxPartySize = 6;
var maxjinbi = 1000;//�ж���������
var eventname = "KerningPQ";//���������ļ�
var random1 = java.lang.Math.floor((Math.random() * 3)+3);
var random2 = java.lang.Math.floor((Math.random() * 3)+3);
var random3 = java.lang.Math.floor((Math.random() * 3)+3);
var random4 = java.lang.Math.floor((Math.random() * 3)+3);
var random5 = java.lang.Math.floor(Math.random() * 3);
var random6 = java.lang.Math.floor(Math.random() * 3);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.dispose();
        return;
    }
    if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#k\t\t\t  ��ӭ����#r" + fbmc + "#k\r\n��������Ҫ�����£�\r\n  1.��������:#r " + minPartySize + " #b- #r" + maxPartySize + "#k��Ա\t2.�ȼ����ƣ�#r " + minLevel + " #b- #r" + maxLevel + "�� #k\r\n 80��������ɻ��60����ҩͲ������Ʊ�Ͱ�Ӱ��#k\r\n";
		text += "#L1##r��ʼ��Ӹ���#l      #L2##r����������#k" + maxjinbi + "���/��#l  \r\n\r\n";
		text += "#L3##r�һ�#k( 20�� #v4031560# �һ�һ�� #v1072369#[�������+5] )\r\n\r\n";
		text += "#L10##r�һ�#k( 20�� #v4031560#+100���� �һ�һ�� #v4020009# )\r\n\r\n";
		
		 cm.sendSimple(text);
	} else if (selection == 1) {
		cm.removeAll(4001008);//ɾ�����е�ͨ��֤
		
        if (cm.getParty() == null) { // No Party
            cm.sendOk("��û�ж����޷����룡");
            cm.dispose();
        } else if (!cm.isLeader()) { // Not Party Leader
            cm.sendOk("������Ķӳ�����˵��~");
            cm.dispose();
        } else {
            var party = cm.getParty().getMembers();
            var inMap = cm.partyMembersInMap();
            var levelValid = 0;
            for (var i = 0; i < party.size(); i++) {
                if (party.get(i).getLevel() >= minLevel && party.get(i).getLevel() <= maxLevel)
                    levelValid++;
            }
            if (inMap < minPartySize || inMap > maxPartySize) {
                cm.sendOk("��Ķ�����������"+minPartySize+"��.�����Ķ�����Ա�ټ������������ڽ��븱��.");
                cm.dispose();
            } else if (levelValid != inMap) {
                cm.sendOk("��ȷ����Ķ�����������Ա���ڱ���ͼ������С�ȼ��� "+minLevel+" �� "+maxLevel+"֮��.");
                cm.dispose();
            } else {
                var em = cm.getEventManager("KerningPQ");
                if (em == null) {
                    cm.sendOk("��̨�����ǵ�ǰ������.");
                //} else if (em.getProperty("KPQOpen").equals("true")) {
                } else {
        if (cm.getPlayerCount(103000800) <= 0 && cm.getPlayerCount(103000801) <= 0 && cm.getPlayerCount(103000802) <= 0 && cm.getPlayerCount(103000803) <= 0 && cm.getPlayerCount(103000804) <= 0) {
		/*var papuMap = cm.getMap(103000804);
         cm.getMap(103000804).resetFully();
        cm.spawnMobOnMap(9300002,1,297,-2188,103000804);
        cm.spawnMobOnMap(9300002,1,433,-2192,103000804);
        cm.spawnMobOnMap(9300002,1,132,-2193,103000804);
		cm.spawnMobOnMap(9300000,1,-18,-1480,103000804);
		cm.spawnMobOnMap(9300000,1,80,-1486,103000804);
		cm.spawnMobOnMap(9300000,1,391,-1488,103000804);
		cm.spawnMobOnMap(9300000,1,247,-1485,103000804);
		cm.spawnMobOnMap(9300000,1,-111,-1475,103000804);
		cm.spawnMobOnMap(9300000,1,299,-1485,103000804);
		cm.spawnMobOnMap(9300003,1,162,-451,103000804);
        //var papuMap = pi.getMap(103000804);
		//pi.getPlayer().setbosslog(1);
        //pi.playPortalSE();
*/
			//}
				//em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
                em.startInstance(cm.getParty(), cm.getPlayer().getMap());
		} else {
                            cm.sendOk("���Ե�...�������ڽ�����.");
                        }
						// Capt. Lac Map
				//em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
                    // Begin the PQ.
                //    em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    // Remove Passes and Coupons GMS DOESNT DO THIS!!!
                    //party = cm.getPlayer().getEventInstance().getPlayers();
                    //cm.removeFromParty(4001008, party);
                    //cm.removeFromParty(4001007, party);
                  //  em.setProperty("KPQOpen" , "false");
                //} else {
                 //   cm.sendNext("There is already another party inside. Please wait !");
                }
                cm.dispose();
            }
        }
	} else if (selection == 2) {
            if (cm.getMeso() >= maxjinbi){//�ж϶��ٽ��
                cm.gainMeso(- maxjinbi );//�۳����ٽ��
				cm.laba(cm.getPlayer().getName() + " [������]" + " : " + "[" + fbmc + "]��Ҫ��ʿһ�����",11);
                cm.dispose();
                }else{
                    cm.sendOk("���ð�ձҲ���" + maxjinbi + "���޷�����������");
                    cm.dispose();
                            //cm.sendOk(".");
                //cm.dispose();
    }
	} else if (selection == 3) {
		if (cm.haveItem(4031560,20)){
			if (cm.getInventory(1).isFull()){
				cm.sendOk("װ�������಻��1���ո�");
				cm.dispose();
				return;
			} 
			cm.gainItem(4031560, -20);
			
			var ii = MapleItemInformationProvider.getInstance();		                
			var type = ii.getInventoryType(1072369); //���װ��������
			var toDrop = ii.randomizeStats(ii.getEquipById(1072369)).copy(); // ����һ��Equip��
			toDrop. setStr(random1);//������
			toDrop. setDex(random2);//������ 
			toDrop. setInt(random3);//������
			toDrop. setLuk(random4);//������
            toDrop. setWatk(0);//����
            toDrop. setMatk(0);//ħ����
			toDrop. setHp(random5 * 10);//��HP
			toDrop. setMp(random6 * 10);//��MP
			cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop, false)); //ˢ�±���
			cm.dispose();
		}else{
			cm.sendOk("���#v4031560#����20�����޷��һ���");
			cm.dispose();
		}
 } else if (selection == 10) { 
		  cm.openNpc(9020000, 10);//��Ʒ�һ�		
	} 
}
