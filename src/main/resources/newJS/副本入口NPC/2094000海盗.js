/* ==================
 �ű�����:  NPC	    
 �ű����ߣ� ά������   
 ��ϵ��ʽ�� 297870163
 =====================
 */

var status = 0;
var fbmc = "�ٲ���-(��������)";//��������
var minLevel = 100;//��͵ȼ�
var maxLevel = 200;//��ߵȼ�
var minPartySize = 3;//��������
var maxPartySize = 6;//�������
var cishuxianzhi = 10;//���ƴ���
var maxjinbi = 50000;//�ж���������
var eventname = "Pirate";//���������ļ�


function checkMap() {
    var map = [925100000, 925100100, 925100200, 925100201, 925100202, 925100300, 925100301, 925100302, 925100400, 925100400, 925100500];
    for(var i = 0 ; i < map.length; i++) {
        if(cm.getPlayerCount(map[i]))
            return false;
    }
    return true;
}

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
            text += "#k\t\t\t\t��ӭ����#r" + fbmc + "#k\r\n��������Ҫ�����£�\r\n����������:#r " + minPartySize + " #b- #r" + maxPartySize + "#k��Ա\t�ڵȼ����ƣ�#r " + minLevel + " #b- #r" + maxLevel + "�� #k\r\n"
			text += "#k�������ս:#r"+cm.getPlayer().getOneTimeLog("haidao")+"#k��   ÿ��ֻ����ս:#b"+ cishuxianzhi +"#k�� ������ѽ���:#b"+ cm.getPlayer().getBossLog("haidaocs") +"#k��#k\r\n"
            text += "#L1##r��ʼ��Ӹ���#l      #L2##r����������#k" + maxjinbi + "���/��#l\r\n\r\n"
			text += "#L3##r�һ�����ñ��#l\r\n\r\n"
            cm.sendSimple(text);
	} else if (selection == 1) {
	cm.removeAll(4001117);
	cm.removeAll(4031437);
	cm.removeAll(4001120);
	cm.removeAll(4001121);
	cm.removeAll(4001260);
	cm.removeAll(4001122);
    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
        cm.sendOk("���Ҷӳ������ҡ�");
		cm.dispose();
	}else if(cm.getPartyBosslog("haidaocs",(cishuxianzhi-1)) == false) {//�ж�����Ƿ�2��
	            cm.sendOk("�����ж�����ս�����Ѿ�����10�Σ�");
                cm.dispose();
				return;
			}else if( cm.getPlayer().getBossLog("haidaocs") >= cishuxianzhi) {
	            cm.sendOk("����,�޶�ÿ��ֻ����ս"+ cishuxianzhi +"�Σ�");
                cm.dispose();
				return;
    } else {
        var party = cm.getPlayer().getParty().getMembers();
        var mapId = cm.getPlayer().getMapId();
        var next = true;
        var size = 0;
        var it = party.iterator();
        while (it.hasNext()) {
            var cPlayer = it.next();
            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
            if (ccPlayer == null || ccPlayer.getLevel() <  minLevel || ccPlayer.getLevel() > maxLevel) {
                next = false;
                break;
            }
            size += (ccPlayer.isGM() ? 2 : 1);
        }
        if (next && size >= minPartySize) {
            if(checkMap()) {
                var em = cm.getEventManager("Pirate");
                if (em == null) {
                    cm.sendOk("�Ҳ����ű�������ϵGM����");
					cm.dispose();
                } else {
                    em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
					cm.setPartyBosslog("haidaocs");//���ŶӴ���
					cm.dispose();
                }
            } else {
                cm.sendOk("Ŀǰ�����ڴ򆪡�");
				cm.dispose();
            }
        }else {
            cm.sendOk("��Ҫ" + minPartySize + "��" + maxPartySize + "���� �ȼ�������" + minLevel+ "��" + maxLevel + "��");
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
    }
	} else if (selection == 3) {
		cm.openNpc(2094000, 1);
	}
	}
