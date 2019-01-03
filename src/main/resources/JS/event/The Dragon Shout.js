/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    eim = em.newInstance("The Dragon Shout");
    var map = eim.setInstanceMap(551030200);
    map.resetFully();
    em.setProperty("state", "1");

    eim.startEventTimer(600000); // 10 分钟
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(910025200);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 390009999);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
        em.broadcastServerMsg(-5, "Hyperious: 恭喜你，你已经通过了我的测试。现在奖励...", false);
}

function changedMap(eim, player, mapid) {
    if (mapid != 910025200) {
        eim.unregisterPlayer(player);

        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 390009999)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
        em.broadcastServerMsg(-5, "Hyperious: 恭喜你，你已经通过了我的测试。现在奖励...", false);
    }
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty (eim, player) {}
function disbandParty (eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}