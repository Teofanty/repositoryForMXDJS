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
            text +=" ��Ҫ35��#b#v4002000##z4002000##k\r\nÿͨ��һ�ط������һ��#v4002000##z4002000#\r\n";
            text += "#L1##r�һ�#v1072634##z1072634#\r\n";
            cm.sendOk(text);
        } else if (selection == 1) {
			if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�	
            cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��齱.");		
            cm.dispose();		
        } else if (cm.haveItem(4002000, 35)) {
                cm.gainItem(4002000,-35);
                cm.gainMeso(-1);
                cm.gainItem(1072634,1);
                cm.sendOk("�ϳ�#v1072634#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ���!");
                cm.dispose();
            }
            }
			}
		}
    


