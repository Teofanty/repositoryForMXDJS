/*�ϳ�NPC ����:bay ��*/
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
			text += "#L7##d��ά/��/ħ +25 �ر�+100 HP/MP+100 ����+100 #v1402037##k#l\r\n";
            cm.sendSimple(text);
			        } else if (selection == 7) {
            if (cm.haveItem(1113084, 3) && cm.haveItem(4000313, 1250) && cm.haveItem(4011004, 50) && cm.haveItem(4021007, 50) && cm.haveItem(4011006, 50) && cm.haveItem(4021005, 50) && cm.haveItem(4021002, 50) && cm.haveItem(4251202, 5) && cm.haveItem(4001083, 5) && cm.haveItem(4001084, 15) && cm.haveItem(4001085, 15) && cm.haveItem(4000175, 15) && cm.haveItem(4001126, 12500) && cm.haveItem(4000487, 30) && cm.haveItem(4002000, 500) && cm.haveItem(4002001, 75) && cm.haveItem(4002002, 25) && cm.haveItem(4002003, 15) && cm.haveItem(4031559, 50) && cm.getMeso() >=50000000) {
                cm.gainItem(1113084,-3);
				cm.gainItem(4000313,-1250);
				cm.gainItem(4011004,-50);
                cm.gainItem(4021007,-50);
				cm.gainItem(4011006,-50);
				cm.gainItem(4021005,-50);
				cm.gainItem(4021002,-50);
				cm.gainItem(4251202,-5);
				cm.gainItem(4001083,-5);
				cm.gainItem(4001084,-15);
				cm.gainItem(4001085,-15);
				cm.gainItem(4000175,-15);
				cm.gainItem(4001126,-12500);
				cm.gainItem(4000487,-50);
				cm.gainItem(4002000,-500);
				cm.gainItem(4002001,-100);
				cm.gainItem(4002002,-25);
				cm.gainItem(4002003,-15);
				cm.gainItem(4031559,-50);
                cm.gainMeso(-50000000);
				cm.gainItem(1402037,25,25,25,25,100,100,25,25,0,0,100,100,0,0);
                cm.sendOk("�ϳ�#v1402037#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*1250�� #v1113084#*3�� #v4011004#*50�� #v4021007#*50�� #v4011006#*50�� #v4021005#*50�� #v4021002#*50�� #v4251202#*5��  #v4001083#*5��   #v4001084#*15��   #v4001085#*15��   #v4000175#*15��  #v4001126#*12500��  #v4000487#*50��  #v4002000#*500��  #v4002001#*100��  #v4002002#*25�� #v4002003#*3�� #v4031559#*50�� 5000����");
                cm.dispose();
            }
			}
		}
    }


