/* ==================
 �ű�����: NPC	    
 �ű����ߣ��þ�    
 ��ϵ��ʽ��121418194
 =====================
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    var em = cm.getEventManager("CWKPQ");
    if (em == null) {
	cm.sendNext("糺������¼�δ������");
	cm.dispose();
	return;
    }
    switch(cm.getPlayer().getMapId()) {
	case 803010700:
	    if (status == 0) {
		cm.sendNext("�������Ѿ������ˡ�����ʵ��������ɣ������Ѿ����������ˡ��������Ͼ�Ҫ���ˡ�������ÿ�㡣");
	    } else if (status == 1) {
		cm.sendNext("ǰ��ʥ���·�Ѿ����ݻ��ˣ����Ǳ����ҵ���һ��·�����������Ǵ�������������塣");
	    } else if (status == 2) {
		cm.sendNext("������ڸ����ҵ�һ����ڡ�������ҵ������졣�һ���ϵġ�");
		cm.dispose();
		em.setProperty("glpq1", "1");
	    }
	    break;
	case 803010800:
	   if (status == 0) {
		cm.sendNext("���ǳɹ��������ˣ����ڣ�����������ÿһ��ð�ռҶ��ܴ�����Щ�������塣");
	   } else if (status == 1) {
		cm.sendNext("ʥ̳��Ҫʹ�ò�ͬð�ռҵļ��������һ������˶��ɹ������ˣ����ǾͿ���ͨ���������ˡ�");
		cm.dispose();
	   }
	   break;
	case 803010900:
	   if (status == 0) {
		cm.sendNext("�����������ʥ̳��ÿ��ð�ռҶ��ܹ�����һ��ʥ̳��������ʥ̳������֮�����ð���߶�����������ˣ�Ȼ����봫����������ȷ�ϣ�");
	   } else if (status == 1) {
		cm.sendNext("������Щ�������壺��ʯ�����������˺���ǳ��ߣ�");
		cm.dispose();
	   }
	   break;
	case 803011000:
	   if (status == 0) {
		cm.sendNext("�����㿴�������ʥ̳��Ȼ���������е�һЩ�������ˡ�");
	   } else if (status == 1) {
		cm.sendNext("ĳЩ���ػ������·�ϱ���������Ȼ��Щ���ػ�Ӱ�����ʥ̳��������Щʥ̳����������������");
		cm.dispose();
	   }
	   break;
	case 803011100:
	   if (status == 0) {
		cm.sendNext("�ܾ����㾹Ȼ������ôԶ����������������￴������ս�����˵ĵ��񣬵���û���κε�������");
	   } else if (status == 1) {
		cm.sendNext("������Χ��������䣬�����Ա߶���һ����������Χ�����������˵���.");
	   } else if (status == 2) {
		cm.sendNext("�һ���ÿ�����䶼�е���������������֮һ��");
	   } else if (status == 3) {
		cm.sendNext("����������������������Щ����ָ��������ϣ�");
		cm.dispose();
	   }
	   break;
	case 803011200:
		cm.dispose();
		cm.openNpc(9201115,0);
		break;

    }
}
