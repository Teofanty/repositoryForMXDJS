 
importPackage(Packages.client);
importPackage(Packages.client.inventory);


var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var mats;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("�����Ҫ���þ��н�����������Ұɡ�");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            var gsjb = "";
            gsjb ="  #e�˴��һ� #b- �ҹ���Ա -\r\n\r\n";
			gsjb +="#L1##b��Ҷһ�#v4310018# #fUI/Basic/BtHide3/mouseOver/0# #b���� - (#r600W = 1#b)#l\r\n\r\n";
            gsjb +="#L2##b����һ�#v4310019# #fUI/Basic/BtHide3/mouseOver/0# #b���� - (#r1000W = 1#b)#l\r\n\r\n";
			gsjb +="#L3##b��ȯ�һ�#v4310014# #fUI/Basic/BtHide3/mouseOver/0# #b���� - (#r1500 = 1#b)#l\r\n\r\n";
			

			cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (selection == 1) {
               var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4310018).iterator();
               if (cm.getMeso() < 6000000){//�ж϶��ٽ��
                    cm.sendNext("�����ʻ���Ҳ���600��");
                     cm.dispose();
				} else if (cm.getInventory(4).isFull(0)){//�жϵ��ĸ�Ҳ������������װ�����Ƿ���һ���ո�
		        cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�.");
		        cm.dispose();
                } else {
                    beauty = 1;
                    cm.sendGetNumber("������#b#z4310018##k�һ�#r���#k������:\r\n#b���� - (#r6000000 = 1#b)\r\n����˻���Ϣ - \r\n    �������: " +
                            cm.getMeso() + "\r\n", 1, 1,cm.getMeso() );

                }
			} else if (selection == 2) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4310019).iterator();
                if (cm.getPlayer().getExp() < 1000000){//�ж϶��پ���
                    cm.sendNext("���ľ��鲻��1000��");
                     cm.dispose();
				} else if (cm.getInventory(4).isFull(0)){//�жϵ��ĸ�Ҳ������������װ�����Ƿ���һ���ո�
		        cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�.");
		        cm.dispose();
                } else {
                    beauty = 2;
                    cm.sendGetNumber("������#b#z4310019##k�һ�#r����#k������:\r\n#b���� - (#r100W = 1#b)\r\n����˻���Ϣ - \r\n    ��������: " +
                             cm.getPlayer().getExp() + "\r\n", 1, 1,cm.getPlayer().getExp());

                }
            } else if (selection == 3) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4310014).iterator();
                if (cm.getPlayer().getCSPoints(1) < 1500) {
                    cm.sendNext("�����ʻ���ȯ����1500�㡣");
                    cm.dispose();
				} else if (cm.getInventory(4).isFull(0)){//�жϵ��ĸ�Ҳ������������װ�����Ƿ���һ���ո�
		        cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�.");
		        cm.dispose();
                } else {
                    beauty = 3;
                    cm.sendGetNumber("������#b#z4310014##k�һ�#r��ȯ#k������:\r\n#b���� - (#r1500 = 1#b)\r\n����˻���Ϣ - \r\n��ȯ����: #r" +
                            cm.getPlayer().getCSPoints(1) + "   \r\n", 1, 1, cm.getPlayer().getCSPoints(1));

                }

            }


        } else if (status == 2) {
            if (beauty == 1) {
                 if (cm.getMeso() >= 6000000*selection){//�ж϶��ٽ��
                    cm.gainMeso(- 6000000*selection);//�۳����ٽ��
                    cm.gainItem(4310018, selection);
                    cm.sendOk("���ɹ��� #r " + 6000000*selection + " #k��� �һ���#r" + selection + " ��#v4310018#")
					status = -1;
                } else {
                    cm.sendNext("��û��#r " + 6000000*selection + "#k��ҽ��жһ���");
                    status = -1;
                }
            } else if (beauty == 2) {
                if (cm.getPlayer().getExp() >= 1000000*selection){//�ж϶��ٽ��
                    cm.gainExp(- 1000000*selection);//�۳����ٽ��
                    cm.gainItem(4310019, selection);
                    cm.sendOk("���ɹ��� #r " + 1000000*selection + " #k���� �һ���#r" + selection + " ��#v4310019#")
					status = -1;
                } else {
                    cm.sendNext("��û��#r " + 1000000*selection + "#k������жһ���");
                    status = -1;
                }
            } else if (beauty == 3) {
                if(cm.getPlayer().getCSPoints(1) >= 1500*selection){//�ж϶��ٽ��
                    cm.gainDJ(- 1500*selection);//�۳����ٽ��
                    cm.gainItem(4310014, selection);
                    cm.sendOk("���ɹ��� #r " + 1500*selection + " #k��ȯ �һ���#r" + selection + " ��#v4310014#")
					status = -1;
                } else {
                    cm.sendNext("��û��#r " + 1500*selection + "#k��ȯ���жһ���");
                    status = -1;
                }
			
        }
    }
}}
