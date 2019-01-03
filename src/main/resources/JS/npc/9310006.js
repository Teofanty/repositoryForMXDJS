/*
	����C - �Ϻ�̲ - ͨ�� (701010323)
**/

function start() {
    if (cm.getParty() == null) { // No Party
	cm.sendOk("�������������!");
	cm.dispose();
    } else if (!cm.isLeader()) { // Not Party Leader
	cm.sendOk("�����Ķӳ�������!");
	cm.dispose();
	} else if (cm.getPlayerCount(701010323) >= 1 ){//�жϵ�ͼ��û����
	cm.sendOk("������������ս!");
	cm.dispose();
    } else {
	var party = cm.getParty().getMembers();
	var mapId = cm.getMapId();
	var next = true;
	var levelValid = 0;
	var inMap = 0;

	var it = party.iterator();
	while (it.hasNext()) {
	    var cPlayer = it.next();
	    if ((cPlayer.getLevel() >= 25 && cPlayer.getLevel() <= 200) || cPlayer.getJobId() == 900) {
		levelValid += 1;
	    } else {
		next = false;
	    }
	    if (cPlayer.getMapid() == mapId) {
		inMap += (cPlayer.getJobId() == 900 ? 1 : 1);
	    }
	}
	if (party.size() > 4 || inMap < 1) {
	    next = false;
	}
	if (next) {
	    var em = cm.getEventManager("WuGongPQ");
	    if (em == null) {
		cm.sendOk("��ǰ���������⣬���������Ա....");
		cm.dispose();
	    } else {
		var prop = em.getProperty("state");
		if (prop.equals("0") || prop == null) {
		    em.startInstance(cm.getParty(),cm.getMap());
			cm.getPlayer().setBossLog('wugong');
	            cm.dispose();
		    return;
		} else {
		    cm.sendOk("�����Ѿ���������ս...");
			cm.dispose();
		}
	    }
	} else {
	    cm.sendOk("�ȼ���δ�ﵽ #r35#k �����Ѿ����� #r200#k");
		cm.dispose();
	}
    }
    cm.dispose();
}

function action(mode, type, selection) {
}