/* ==================
 �ű�����: NPC	    
 �ű����ߣ�һ�ߺ�-ά��   
 ��ϵ��ʽ��297870163
 =====================
 */
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
			var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "\t\t\t#e#r"+cm.getChannelServer().getServerName()+"ð�յ�#k,#r�Ĳ�ϵͳ#k\r\n" 
			text += "#n#k��ǰӵ�е�ȯ��#r" + cm.getPlayer().getCSPoints(1) + "#k��\t\t��ǰӵ�е���ȯ��#r" + cm.getPlayer().getCSPoints(2) + "#k��\r\n"
            text += "#n#k��ǰӵ�н�ң�#r" + cm.getMeso() + "#kԪ\r\n"
			text += "#L1##e#d��ȯ�Ĳ�#l       #L2##e#d����ȯ�Ĳ�#l       #L3##e#d��ҶĲ�#l\r\n\r\n"
            cm.sendOk(text); 
        } else if (selection == 1) {//��ȯ�Ĳ�	
            cm.openNpc(9900004, 231); 
        } else if (selection == 2) {//����ȯ�Ĳ�
            cm.openNpc(9900004, 232); 	
        } else if (selection == 3) {//��ҶĲ�
            cm.openNpc(9900004, 233); 
        }
    }
}