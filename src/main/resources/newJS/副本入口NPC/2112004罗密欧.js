?/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����     
 ��ϵ��ʽ��2412614144
 =====================
 */

var fbmc = "����ŷ��Ӹ���";//��������
var maxjinbi = 50000;//�ж���������
var minLevel = 50;
var maxLevel = 200;//�ȼ�����
var minPartySize = 1;
var maxPartySize = 6;//��������
var cishuxianzhi = 10;//���ƴ���
var eventname = "Romeo";//���������ļ�

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

            cm.sendOk("��ӭ�´�������ս��");
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
            if (cm.getMapId() == 926100000) { //inside orbis pq
                cm.sendOk("���ҳ����ص��ŷ⡣");
                cm.dispose();
                return;
            }
            if (cm.getMapId() == 926100001) { //inside orbis pq
                cm.sendOk("���������еĹ��");
                cm.dispose();
                return;
            }
            if (cm.getMapId() == 926100100) { //inside orbis pq
                cm.sendOk("����ձ��������װ����");
                cm.dispose();
                return;
            }
            if (cm.getMapId() == 926100200) { //inside orbis pq

                if (cm.haveItem(4001130, 1)) {
                    var em = cm.getEventManager("Romeo");
                    cm.sendOk("Ŷ���ҵ����ҵ��ˣ�лл��");
                    cm.gainItem(4001130, -1);
                    em.setProperty("stage", "1");
                    cm.dispose();
                } else if (cm.haveItem(4001134, 1)) {
                    var em = cm.getEventManager("Romeo");
                    cm.gainItem(4001134, -1);
                    cm.sendOk("лл�㣬���ڰ�����#t4001135#.");
                    em.setProperty("stage4", "1");
                    cm.dispose();
                } else if (cm.haveItem(4001135, 1)) {
                    var em = cm.getEventManager("Romeo");
                    cm.gainItem(4001135, -1);
                    cm.sendOk("лл�㣬�Ѿ������ˡ�.");
                    em.setProperty("stage4", "2");
                    cm.getMap().getReactorByName("rnj3_out3").hitReactor(cm.getClient());
                    cm.dispose();
                } else {
                    cm.sendOk("���Ǳ����ҵ��ļ���������ҳ�#v4001134# �� #v4001135#��");
                    cm.dispose();
                    return;
                }

            }
            if (cm.getMapId() == 926100300) { //inside orbis pq
                cm.sendOk("����һ��Ҫ��ʵ���ҵĶ�����");
                cm.dispose();
                return;
            }
            if (cm.getMapId() == 926100400) { //inside orbis pq
                cm.sendOk("����׼�����ˣ�����Ҫ��ȥ�Ⱦ��ҵİ���.");
                cm.dispose();
                return;
            }
            if (cm.getMapId() == 926100401) { //inside orbis pq
                cm.warpParty(926100600); //urete
                cm.dispose();
                return;
            }
            if (cm.getMapId() == 926100000) { //inside orbis pq
                cm.sendOk("��Ӧ�ó��������������ء��������е��ļ���ֱ��������ҵ����ʵ����.");
                cm.dispose();
                return;
            }
            text += "#k\t\t\t\t��ӭ����#r" + fbmc + "#k\r\n��������Ҫ�����£�\r\n����������:#r " + minPartySize + " #b- #r" + maxPartySize + "#k��Ա\t�ڵȼ����ƣ�#r " + minLevel + " #b- #r" + maxLevel + "�� #k\r\n"
            text += "#k�������ս:#r" + cm.getPlayer().getOneTimeLog("Romeo") + "#k��   ÿ��ֻ����ս:#b" + cishuxianzhi + "#k�� ������ѽ���:#b" + cm.getPlayer().getBossLog("Romeocs") + "#k��#k\r\n"
            text += "#L1##r��ʼ��Ӹ���#l      #L2##r����������#k" + maxjinbi + "���/��#l\r\n\r\n"
            text += "#L3##r��ս��50����ȡ#v1122010##z1122010##l\r\n\r\n"
            cm.sendSimple(text);

        } else if (selection == 1) {
            cm.removeAll(4001130);
            cm.removeAll(4001131);
            cm.removeAll(4001132);
            cm.removeAll(4001133);
            cm.removeAll(4001134);
            cm.removeAll(4001135);
            if (cm.getParty() == null) { // No Party
                cm.sendSimple("��ò��û�дﵽҪ��...:\r\n\r\n#r��ҳ�ԱҪ��: " + minPartySize + " , ÿ���˵ĵȼ������� " + minLevel + " �� �ȼ� " + maxLevel + ".");
                cm.dispose();
            } else if (!cm.isLeader()) { // Not Party Leader
                cm.sendSimple("���������������#b�ӳ�#k ����̸.");
                cm.dispose();
            } else if (cm.getPartyBosslog("Romeocs", (cishuxianzhi - 1)) == false) {//�ж�����Ƿ�2��
                cm.sendOk("�����ж�����ս�����Ѿ�����10�Σ�");
                cm.dispose();
                return;
            } else if (cm.getPlayer().getBossLog("Romeocs") >= cishuxianzhi) {
                cm.sendOk("����,�޶�ÿ��ֻ����ս" + cishuxianzhi + "�Σ�");
                cm.dispose();
                return;
            } else {
                // Check if all ��Ա are within PQ levels
                var party = cm.getParty().getMembers();
                var mapId = cm.getMapId();
                var next = true;
                var levelValid = 0;
                var inMap = 0;
                var it = party.iterator();

                while (it.hasNext()) {
                    var cPlayer = it.next();
                    if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
                        levelValid += 1;
                    } else {
                        next = false;
                    }
                    if (cPlayer.getMapid() == mapId) {
                        inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
                    }
                }
                if (party.size() > maxPartySize || inMap < minPartySize) {
                    next = false;
                }
                if (next) {
                    var em = cm.getEventManager("Romeo");
                    if (em == null) {
                        cm.sendSimple("�Ҳ����ű�������GM#b\r\n");
                    } else {
                        var prop = em.getProperty("state");
                        if (prop.equals("0") || prop == null) {
                            em.startInstance(cm.getParty(), cm.getMap());
                            cm.setPartyBosslog("Romeocs");//���ŶӴ���
                            cm.dispose();
                            return;
                        } else {
                            cm.sendSimple("���������Ѿ��������� #r���������#k �볢�Ի�Ƶ�����ߵ�����������ɡ�");
                            cm.dispose();
                        }
                    }
                } else {
                    cm.sendSimple("��Ķ���ò��û�дﵽҪ��...:\r\n\r\n#rҪ��: " + minPartySize + " ��ҳ�Ա, ÿ���˵ĵȼ������� " + minLevel + " �� �ȼ� " + maxLevel + ".");
                }
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.getMeso() >= maxjinbi) {//�ж϶��ٽ��
                cm.gainMeso(-maxjinbi);//�۳����ٽ��
                cm.laba(cm.getPlayer().getName() + " [������]" + " : " + "[" + fbmc + "]��Ҫ��ʿһ�����", 11);
                cm.dispose();
            } else {
                cm.sendOk("���ð�ձҲ���" + maxjinbi + "���޷�����������");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.getInventory(1).isFull(0)) {//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
                cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
                cm.dispose();
            } else if (cm.getPlayer().getOneTimeLog("Romeo1") >= 1) {//�ж����ü�¼
                cm.sendOk("���Ѿ���ȡ����,�޷����ظ���ȡ!");
                cm.dispose();
            } else if (cm.getPlayer().getOneTimeLog("Romeo") < 50) {//�ж����ü�¼
                cm.sendOk("�㻹û�гɹ���ս��50��,��ǰ�Ѿ���ս�ɹ���:" + cm.getPlayer().getOneTimeLog("Romeo") + "��!");
                status = -1;
            } else {
                cm.getPlayer().setOneTimeLog("Romeo1");//�����ü�¼
                cm.gainItem(1122010, 1, true);//��Ʒ����,����,�������
                cm.sendOk("��ϲ��,�ɹ�����ȡ��#v1122010##z1122010#!");
                cm.worldMessage(6, "��ϲ��ң�[" + cm.getName() + "]������ŷ�����гɹ��Ķһ��˺�¶˹֮��!");
                status = -1;
            }
        }
    }
}

