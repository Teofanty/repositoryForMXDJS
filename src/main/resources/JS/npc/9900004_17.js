/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����     
 ��ϵ��ʽ��2412614144
 =====================
 */
var mingzi = "�齱��";

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
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t��ӭ����#e#r" + cm.getChannelServer().getServerName() + "#k-#d" + mingzi + "\r\n"
			text += "\t\t#n#k���#r"+cm.getPlayer().getCSPoints(1) + "#k��\t  #k��ǰ�����㣺#r" + cm.getPlayer().getBeans() + "#k��\r\n\r\n"
            text += "#L1##e#r�齱#l"//3\t#L2##e#r������ĵ��齱#l\t#L3##e#r���齱#l\r\n\r\n
			
			cm.sendSimple(text);
        } else if (selection == 1) {
        cm.openNpc(9900004, 171);//�����齱
 /*       } else if (selection == 2) {
		cm.openNpc(9900004, 172);//������ĵ��齱
        } else if (selection == 3) {
		cm.openNpc(9900004, 173);//���齱	*/	
				} 
	}
	}
    



