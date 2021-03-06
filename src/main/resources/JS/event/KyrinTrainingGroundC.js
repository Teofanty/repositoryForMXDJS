/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function init() {
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {
    em.setProperty("started", "true");

    var eim = em.newInstance("KyrinTrainingGroundC");

    var map = eim.setInstanceMap(912010100);
    map.resetFully();
    map.respawn(true);
    eim.startEventTimer(240000);

    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(912010100);
    player.changeMap(map, map.getPortal(0));
    player.dropMessage(6, "你必须忍受卡林超过2分钟的攻击!");
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) {
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 120000101);

    em.setProperty("started", "false");
}

function changedMap(eim, player, mapid) {
    if (mapid != 912010100) {
	eim.unregisterPlayer(player);

	if (eim.disposeIfPlayerBelow(0, 0)) {
	    em.setProperty("started", "false");
	}
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function leftParty(eim, player) {
    // If only 2 players are left, uncompletable:
    playerExit(eim, player);
}

function disbandParty(eim) {
    //boot whole party and end
    eim.disposeIfPlayerBelow(100, 120000101);

    em.setProperty("started", "false");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    var map = eim.getMapFactory().getMap(120000101);
    player.changeMap(map, map.getPortal(0));
}

function clearPQ(eim) {
    eim.disposeIfPlayerBelow(100, 120000101);

    em.setProperty("started", "false");
}

function allMonstersDead(eim) {
//has nothing to do with monster killing
}

function cancelSchedule() {
}