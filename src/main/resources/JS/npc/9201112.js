/* ==================
 �ű�����: NPC	    
 �ű����ߣ��þ�    
 ��ϵ��ʽ��121418194
 =====================
 */
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
			if(cm.getPlayer().getMapId()==803000502){
				cm.sendOk("�������糺���ʦ����֮�����䱸ɭ�ϣ�");
				cm.dispose();
				return;
			}
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t��ӭ����糺츱����� ��ѡ������Ҫ��ս���Ѷ� \r\n\r\n"//3       
			text += "#L1##b糺���ӣ����ѣ�#l        #L2##b糺���ӣ��򵥣�#l\r\n\r\n"//3 
            cm.sendSimple(text);
        } else if (selection == 1) { 
			cm.warp(803000519);//��ʱ
			cm.dispose();
        } else if (selection == 2) {  
			cm.sendOk("��δ����");
			cm.dispose();
			}
		}
}
