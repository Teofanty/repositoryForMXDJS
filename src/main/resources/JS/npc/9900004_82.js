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
            text +="#e1��  #v4000378# �����г�200��#v4000377#\r\n";
			text +="200��#v4000377# �������1��  #v4000378#\r\n\r\n";
			text +="��:ΪʲôҪ��������?!   -- ��:�㲻�±���������?\r\n";
			text +="#L1##e#v4000377#����#l       #L2##v4000378#�з��#l\r\n\r\n";
			text +="ִ�д˲���֮ǰ�������Ƿ񱳰�����Ӧ�ո�,���ϵͳ����GM������!��������˭��Ը�������ǵ�����...��";
			cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(4000377, 200) &&cm.getMeso() >=0) {
                cm.gainItem(4000377,-200);
				cm.gainItem(4000378, 1);
                cm.sendOk("����ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("����費��!");
                cm.dispose();
            }
			} else if (selection == 2) {
            if (cm.haveItem(4000378, 1) &&cm.getMeso() >=0) {
                cm.gainItem(4000378,-1);
				cm.gainItem(4000377, 200);
                cm.sendOk("�����ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("����費��!");
                cm.dispose();
            }
            }
			}
		}
    


