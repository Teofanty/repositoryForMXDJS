/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
importPackage(java.lang);

var mapz = Array(0, 100, 200, 300, 301, 400, 401, 410, 420, 430, 431, 440, 500, 501, 502, 600, 610, 611, 620, 630, 631, 640, 641, 700, 800, 900, 1000, 1100, 1101);

function init() {
    em.setProperty("started", "false");
    em.setProperty("state", "0");
    em.setProperty("guildid", "-1");
}

function monsterValue(eim, mobId) {
    return -1;
}

function setup(z) {
	setup();
}

function setup() {
    em.setProperty("guildid", "-1");
    em.setProperty("started", "false");
    em.setProperty("state", "0");

    var eim = em.newInstance("GuildQuest");
	eim.setProperty("canEnter", "false");
    //shuffle reactors in two maps for stage 3
    var mapfact = eim.getMapFactory();
	
	for (var i = 0; i < mapz.length; i++) {
		var map = eim.setInstanceMap(990000000 + mapz[i]);
		if (map != null) {
			map.resetFully();
		}
	}
    mapfact.getMap(990000501).shuffleReactors();
    mapfact.getMap(990000502).shuffleReactors();

    //force no-respawn on certain map reactors
    mapfact.getMap(990000611).getReactorByName("").setDelay(-1);
    mapfact.getMap(990000620).getReactorByName("").setDelay(-1);
    mapfact.getMap(990000631).getReactorByName("").setDelay(-1);
    mapfact.getMap(990000641).getReactorByName("").setDelay(-1);
   
    mapfact.getMap(990000000).getPortal(5).setScriptName("guildwaitingenter");
    eim.startEventTimer(180000); // 3 分钟
	eim.setProperty("entryTimestamp", System.currentTimeMillis());
	return eim;
}

function scheduledTimeout(eim) {
    if (em.getProperty("state").equals("0")) {
	em.setProperty("state", "1");

	if (!disposePlayerBelow(eim, 2, 990001100, "你至少需要3个人来开始家族任务.")) {
	    var iter = players(eim).iterator();
	    while (iter.hasNext()) {
		iter.next().dropMessage(5, "家族任务已经开始了.");
	    }
    	em.setProperty("started", "true");
	eim.setProperty("canEnter", "true");
	    eim.restartEventTimer(3600000);
	}
    } else if (em.getProperty("state").equals("1")) {
	disposePlayerBelow(eim, 100, 990001100, "时间已经用完，家族任务将结束.");
	disposeAll(eim);
    return 0;
	} else if (em.getProperty("state").equals("2")) {
		finish(eim);
    }
}

function playerEntry(eim, player) {
    var map = em.getMapFactory().getMap(990000000);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function playerDead(eim, player) {
}

function disposePlayerBelow(eim, size, mapid, msg) {
	var z = players(eim);
	var map = eim.getMapFactory().getMap(mapid);
	if (z.size() <= size) {
		var iter = z.iterator();
		while (iter.hasNext()) {
			var cha = iter.next();
			eim.unregisterPlayer(cha);
			if (mapid > 0) {
				cha.changeMap(map, map.getPortal(0));
			}
			if (msg.length > 0) {
				cha.dropMessage(6, msg);
			}
		}
		em.setProperty("started", "false");
		eim.dispose();
		return true;
	}
	return false;
}

function players(eim) { //not efficient
	var z = em.newCharList();
	for (var i = 0; i < mapz.length; i++) {
		var map = eim.getMapFactory().getMap(990000000 + mapz[i]);
		if (map != null) {
			var iter = map.getCharactersThreadsafe().iterator();
			while (iter.hasNext()) {
				var chaz = iter.next();
				if (("" + chaz.getGuildId()).equals(eim.getProperty("guildid")) && chaz.getEventInstance() != null && chaz.getEventInstance().getName().equals("GuildQuest")) {
					z.add(chaz);
				}
			}
		}
	}
	return z;
}

function changedMap(eim, player, mapid) {
    if (mapid < 990000000 || mapid > 990002000) {
	eim.unregisterPlayer(player);
	if (player.getName().equals(eim.getProperty("leader"))) { //check for party leader
		disposePlayerBelow(eim, 100, 990001100, "家族任务的队长已经离开了，导致剩余的玩家被传送回去.");
	disposeAll(eim);
    return 0;
} else {
		if (disposePlayerBelow(eim, 0, 0, "")) {
			em.setProperty("started", "false");
		}
	}
    }
}

function playerDisconnected(eim, player) {
	eim.unregisterPlayer(player);
    if (player.getName().equals(eim.getProperty("leader"))) { //check for party leader
	//boot all players and end
	disposePlayerBelow(eim, 100, 990001100, "家族任务的队长已经断开，导致剩余的玩家被传送回去.");
	disposeAll(eim);
    return 0;
    } else {
	if (!em.getProperty("state").equals("0")) {
		disposePlayerBelow(eim, 2, 990001100, "没有足够的队员继续家族的任务，这意味着其余的队员将被传送出去.");
    disposeAll(eim);
    return 0;
	}
	}
}

function leftParty(eim, player) { //ignore for GQ
}

function disbandParty(eim) { //ignore for GQ
}

function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	if (!em.getProperty("state").equals("0")) {
	disposePlayerBelow(eim, 2, 990001100, "没有足够的队员继续家族的任务，这意味着其余的队员将被传送出去.");
	disposeAll(eim);
    return 0;
	}
}

function clearPQ(eim) {
    var iter = eim.getPlayers().iterator();
    var bonusMap = eim.getMapFactory().getMap(990001000);

    bonusMap.resetReactors();

    while (iter.hasNext()) { // Time is automatically processed
	var chr = iter.next();
	chr.changeMap(bonusMap, bonusMap.getPortal(0));
    }
	em.setProperty("state", "2");
	eim.restartEventTimer(120000); //2分钟
}

function finish(eim) {
    disposePlayerBelow(eim, 100, 990001100, "");
}

function allMonstersDead(eim) {
//do nothing; GQ has nothing to do with monster killing
}

function cancelSchedule() {
}

function timeOut() {
}