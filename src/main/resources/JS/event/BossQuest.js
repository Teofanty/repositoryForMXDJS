/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
importPackage(java.lang);

var monster;
var mapid = 551030200;

monster = new Array(
    3220000, // Stumpy,
    9300003, // Slime King
    4130103, // Rombot
    9300012, // Alishar
    8220001, // Yeti on Skis
    8220000, // Elliza
    9300119, // Lord Pirate
    9300152, // Angry Franken Lloyd
    9300039, // Papa Pixie
    9300032, // Knight Statue B
    9300028, // Ergoth
    9400549, // Headless Horseman
    8180001, // Griffey
    8180000, // Manon
    8500001, // Papulatus
    9400014, // Black Crow
    9420544, // Targa
    9420549, // Scarlion
    9400121, // Female Boss
    9400300 // The Boss
    );


function init() {
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup(partyid) {
    var instanceName = "BossQuest" + partyid;

    var eim = em.newInstance(instanceName);
    // If there are more than 1 map for this, you'll need to do mapid + instancename
    var map = eim.createInstanceMap(mapid);
    map.toggleDrops();

    eim.setProperty("points", 0);
    eim.setProperty("monster_number", 0);

    eim.schedule("beginQuest", 5000);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(mapid, 0);
    player.changeMap(map, map.getPortal(0));
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) { 
    player.setHp(player.getMaxHp());
    playerExit(eim, player);
    return false;
}

function playerDisconnected(eim, player) {
    return 0;
}

function leftParty(eim, player) {			
    playerExit(eim, player);
}

function disbandParty(eim) {
    var party = eim.getPlayers();
    for (var i = 0; i < party.size(); i++) {
	playerExit(eim, party.get(i));
    }
}

function playerExit(eim, player) {
    var party = eim.getPlayers();
    var dispose = false;
    if (party.size() == 1) {
	dispose = true;
    }
    eim.saveBossQuestPoints(parseInt(eim.getProperty("points")), player);
	eim.broadcastPlayerMsg(6, "[BossPQ] 您目前的积分已经获得，如你所愿。更好的运气下一次！");
    eim.unregisterPlayer(player);

    if (dispose) {
	eim.dispose();
    }
}

function removePlayer(eim, player) {
    var party = eim.getPlayers();
    var dispose = false;
    if (party.size() == 1) {
	dispose = true;
    }
    eim.saveBossQuestPoints(parseInt(eim.getProperty("points")), player);
    eim.unregisterPlayer(player);
    player.getMap().removePlayer(player);

    if (dispose) {
	eim.dispose();
    }
}

function clearPQ(eim) {
    var party = eim.getPlayers();
    for (var i = 0; i < party.size(); i++) {
	playerExit(eim, party.get(i));
    }
}

function allMonstersDead(eim) {
    var monster_number = parseInt(eim.getProperty("monster_number"));
    var points = parseInt(eim.getProperty("points"));
	
    var monster_end = java.lang.System.currentTimeMillis();
    var monster_time = Math.round((monster_end - parseInt(eim.getProperty("monster_start"))) / 1000);
	
    if (3600 - monster_time <= 0)
	points += monster_number * 10000;
    else
	points += (monster_number * 10000) + ((3600 - monster_time) * (monster_number + 1));
	
    monster_number++;
	
    eim.setProperty("points", points);
    eim.setProperty("monster_number", monster_number);
	
    var map = eim.getMapInstance(mapid, 0);

    if (monster_number > 19) {
	map.broadcastMessage(tools.MaplePacketCreator.serverNotice(6, "[BOSS任务]恭喜！你的团队已经击败所有的老板与 " + points + " 点!"));
	map.broadcastMessage(tools.MaplePacketCreator.serverNotice(6, "[BOSS任务]积分已经奖励，你愿意花费他们."));
	disbandParty();
    } else {
	map.broadcastMessage(tools.MaplePacketCreator.serverNotice(6, "[BOSS任务] 你的团队现在有 " + points + " 分！接下来的BOSS会在10秒内产卵."));
	map.broadcastMessage(tools.MaplePacketCreator.getClock(10));
	eim.schedule("monsterSpawn", 1000);
    }
}

function monsterSpawn(eim) {
    var mob = em.getMonster(monster[parseInt(eim.getProperty("monster_number"))]);
    var overrideStats = new server.life.MapleMonsterStats();

    if (parseInt(eim.getProperty("monster_number")) > 14)
	overrideStats.setHp(mob.getHp() / 2);
    else
	overrideStats.setHp(mob.getHp() * 2);

    overrideStats.setExp(mob.getExp());
    overrideStats.setMp(mob.getMaxMp());
    mob.setOverrideStats(overrideStats);

    if (parseInt(eim.getProperty("monster_number")) > 14)
	mob.setHp(mob.getHp() / 2);
    else
	mob.setHp(mob.getHp() * 2);

    eim.registerMonster(mob);

    var map = eim.getMapInstance(mapid, 0);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(100, 100));
    eim.setProperty("monster_start", java.lang.System.currentTimeMillis());
}

function beginQuest(eim) {
    var map = eim.getMapInstance(mapid, 0);
    map.broadcastMessage(tools.MaplePacketCreator.serverNotice(6, "[BOSS任务]黑暗中的生物都在30秒到来。准备最坏的打算!"));
    eim.schedule("monsterSpawn", 30000);
    map.broadcastMessage(tools.MaplePacketCreator.getClock(30));
}

function cancelSchedule() {
}