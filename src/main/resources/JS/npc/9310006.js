/*
	公安C - 上海滩 - 通道 (701010323)
**/

function start() {
    if (cm.getParty() == null) { // No Party
	cm.sendOk("请组队再来找我!");
	cm.dispose();
    } else if (!cm.isLeader()) { // Not Party Leader
	cm.sendOk("请叫你的队长来找我!");
	cm.dispose();
	} else if (cm.getPlayerCount(701010323) >= 1 ){//判断地图有没有人
	cm.sendOk("里面有人在挑战!");
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
		cm.sendOk("当前副本有问题，请联络管理员....");
		cm.dispose();
	    } else {
		var prop = em.getProperty("state");
		if (prop.equals("0") || prop == null) {
		    em.startInstance(cm.getParty(),cm.getMap());
			cm.getPlayer().setBossLog('wugong');
	            cm.dispose();
		    return;
		} else {
		    cm.sendOk("里面已经有人在挑战...");
			cm.dispose();
		}
	    }
	} else {
	    cm.sendOk("等级尚未达到 #r35#k 或者已经超过 #r200#k");
		cm.dispose();
	}
    }
    cm.dispose();
}

function action(mode, type, selection) {
}