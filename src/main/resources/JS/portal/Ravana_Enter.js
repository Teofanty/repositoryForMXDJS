/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	var to_spawn = 9500390;
	if (pi.getPlayer().getMapId() == 809061000) {
		to_spawn = 9409018; //mirror mode
	} else if (pi.getPlayer().getLevel() > 120) {
		to_spawn = 9500392;
	} else if (pi.getPlayer().getLevel() > 90) {
		to_spawn = 9500391;
	} else if (pi.getPlayer().getLevel() < 50) {
		pi.playerMessage(5, "至少等级应该大于 50.");
		return false;
	}
	var rav = "EASY";
	if (to_spawn == 9500391) {
		rav = "MED";
	} else if (to_spawn == 9500392) {
		rav = "HARD";
	} else if (to_spawn == 9409018) {
		rav = "HELL";
	}
	var eim = pi.getDisconnected("Ravana_" + rav);
	if (eim != null && pi.getPlayer().getParty() != null) { //only skip if not null
		eim.registerPlayer(pi.getPlayer());
		return true;
	}
    if (pi.getPlayer().getParty() == null || !pi.isLeader()) {
	pi.playerMessage(5, "队伍的队长必须在这里.");
	return false;
}
	//9500390 = level 50-90, 9500391 = level 90-120, 9500392 = level 120+

	var party = pi.getPlayer().getParty().getMembers();
	var mapId = pi.getPlayer().getMapId();
	var next = true;
	var it = party.iterator();
	while (it.hasNext()) {
		var cPlayer = it.next();
		var ccPlayer = pi.getPlayer().getMap().getCharacterById(cPlayer.getId());
		if (ccPlayer == null || !ccPlayer.haveItem(4001433,30,true,true)) {
			next = false;
			break;
		} else {
			if (to_spawn == 9409018 && ccPlayer.getLevel() <= 140) {
				next = false;
				break;
			} else if (to_spawn == 9500392 && ccPlayer.getLevel() <= 120) {
				next = false;
				break;
			} else if (to_spawn == 9500391 && (ccPlayer.getLevel() > 120 || ccPlayer.getLevel() <= 90)) {
				next = false;
				break;
			} else if (to_spawn == 9500390 && (ccPlayer.getLevel() < 50 || ccPlayer.getLevel() > 90)) {
				next = false;
				break;
			}
		}	
	}
	if (next) {
		var em1 = pi.getEventManager("Ravana_EASY");
		var em2 = pi.getEventManager("Ravana_MED");
		var em3 = pi.getEventManager("Ravana_HARD");
		var em = pi.getEventManager("Ravana_" + rav);
		if (em == null || em1 == null || em2 == null || em3 == null) {
			pi.playerMessage(5, "此活动目前正在进行 不可用.");
		} else {
			var prop1 = em1.getProperty("state");
			var prop2 = em2.getProperty("state");
			var prop3 = em3.getProperty("state");
			var prop = em.getProperty("state");
			if (prop1 != null && !prop1.equals("0")) {
				pi.playerMessage(5, "有人已经尝试这个boss.");
			} else if (prop2 != null && !prop2.equals("0")) {
				pi.playerMessage(5, "有人已经尝试这个boss.");
			} else if (prop3 != null && !prop3.equals("0")) {
				pi.playerMessage(5, "有人已经尝试这个boss.");
			} else if (prop != null && !prop.equals("0")) {
				pi.playerMessage(5, "有人已经尝试这个boss.");
			} else {
				em.startInstance(pi.getParty(), pi.getMap());
			}
		}
	} else {
		pi.playerMessage(5, "确保所有队员都在这张地图上，并且所有的至少30个Sunbursts（你会失去所有30的Sunbursts）。 它们也必须与您在同一水平范围内（水平范围：50-90,91-120,121+，141+)");
		return false;
	}
    return true;
}