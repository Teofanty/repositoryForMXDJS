﻿
importPackage(Packages.tools);

var exitMap = 0;
var waitingMap = 1;
var reviveMap = 2;
var fieldMap = 3;
var winnerMap = 4;
var loserMap = 5;

function init() {
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup(mapid) {
    var map = parseInt(mapid);
    var eim = em.newInstance("cpq" + mapid);
    eim.setInstanceMap(980000000); // <exit>
    eim.setInstanceMap(map);
    eim.setInstanceMap(map+2);
    eim.setInstanceMap(map+1).resetFully();
    eim.setInstanceMap(map+3);
    eim.setInstanceMap(map+4);
    eim.setProperty("forfeit", "false");
    eim.setProperty("blue", "-1");
    eim.setProperty("red", "-1");
    var portal = eim.getMapInstance(reviveMap).getPortal("pt00");
    portal.setScriptName("MCrevive1");
    //em.schedule("timeOut", 30 * 60000);
    eim.setProperty("started", "false");
    return eim;
}

/*
 * 参加事件人员
 */
function playerEntry(eim, player) {
    player.disposeClones();
    player.changeMap(eim.getMapInstance(waitingMap), eim.getMapInstance(waitingMap).getPortal(0));
    player.tryPartyQuest(1301);
}

/*
 * 嘉年华副本定时器
 */
function registerCarnivalParty(eim, carnivalParty) {
    if (eim.getProperty("red").equals("-1")) {
        eim.setProperty("red", carnivalParty.getLeader().getId() + "");
        eim.schedule("end", 3 * 60 * 1000); // 3 minutes
		eim.broadcastPlayerMsg(5, "接下来的三分您的队伍可以找寻其他人进行挑战");
    } else {
        eim.setProperty("blue", carnivalParty.getLeader().getId() + "");
		eim.schedule("check", 10000);
		eim.broadcastPlayerMsg(5, "正在检测是否异常.");
    }
}

/*
 * 组员死亡后
 */
function playerDead(eim, player) {
	return true;
}

/*
 * 剩下的队伍
 */
function leftParty(eim, player) {
    disbandParty(eim);
}

/*
 * 解散队伍后
 */
function disbandParty(eim) {
    //if (eim.getProperty("started").equals("true")) {
    //    warpOut(eim);
    //} else {
	disposeAll(eim);
    //}
}

/*
 * 处理全部
 */
function disposeAll(eim) {
    	var iter = eim.getPlayers().iterator();
    	while (iter.hasNext()) {
	    var player = iter.next();
            eim.unregisterPlayer(player);
            player.changeMap(eim.getMapInstance(exitMap), eim.getMapInstance(exitMap).getPortal(0));
				player.getCarnivalParty().removeMember(player);
        }
        eim.dispose();
}

/*
 * 玩家退出
 */
function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.getCarnivalParty().removeMember(player);
    player.changeMap(eim.getMapInstance(exitMap), eim.getMapInstance(exitMap).getPortal(0));
    eim.disposeIfPlayerBelow(0, 0);
}

/*
 * 玩家离线
 */
function removePlayer(eim, player) {
    eim.unregisterPlayer(player);
    player.getCarnivalParty().removeMember(player);
    player.getMap().removePlayer(player);
    player.setMap(eim.getMapInstance(exitMap));
    eim.disposeIfPlayerBelow(0, 0);
}

/*
 * 得到组队
 */
function getParty(eim, property) {
	var chr = em.getChannelServer().getPlayerStorage().getCharacterById(parseInt(eim.getProperty(property)));
    if (chr == null) {
	eim.broadcastPlayerMsg(5, "队伍的队长 " + property + " 找不到.");
	disposeAll(eim);
	return null;
    } else {
	return chr.getCarnivalParty();
    }
}

/*
 * 事件开始
 */
function start(eim) {
    eim.setProperty("started", "true");
    eim.startEventTimer(10 * 60 * 1000);
    var blueP = getParty(eim, "blue");
    if ( blueP != null )
        blueP.warp(eim.getMapInstance(fieldMap), "blue00");
    var redP = getParty(eim, "red");
    if( redP != null )
        redP.warp(eim.getMapInstance(fieldMap), "red00");
}

/*
 * 检测异常
 */
function check(eim) {
	var ck = eim.check();
	if(ck) {
		eim.broadcastPlayerMsg(5, "检测无异常.");
		eim.schedule("start", 10000);
		eim.broadcastPlayerMsg(5, "10秒后将开始对战!");
	} else {
		eim.broadcastPlayerMsg(5, "发现异常,即将传送出去!");
		disposeAll(eim);
	}
}

/*
 * 杀死怪物后
 */
function monsterKilled(eim, chr, cp) {
    chr.getCarnivalParty().addCP(chr, cp);
    chr.CPUpdate(false, chr.getAvailableCP(), chr.getTotalCP(), 0);
    var iter = eim.getPlayers().iterator();
    while (iter.hasNext()) {
        iter.next().CPUpdate(true, chr.getCarnivalParty().getAvailableCP(), chr.getCarnivalParty().getTotalCP(), chr.getCarnivalParty().getTeam());
    }
}

/*
 * 怪物数值
 */
function monsterValue(eim, mobId) {
    return 0;
}

/*
 * 事件结束
 */
function end(eim) {
    if (!eim.getProperty("started").equals("true")) {
        disposeAll(eim);

    }
}

/*
 * 传送离开
 */
function warpOut(eim) {
    if (!eim.getProperty("started").equals("true")) {
	if (eim.getProperty("blue").equals("-1")) {
            disposeAll(eim);
	}
    } else {
	var blueParty = getParty(eim, "blue");
	var redParty = getParty(eim, "red");
    	if (blueParty.isWinner()) {
    	    blueParty.warp(eim.getMapInstance(winnerMap), 0);
    	    redParty.warp(eim.getMapInstance(loserMap), 0);
    	} else {
    	    redParty.warp(eim.getMapInstance(winnerMap), 0);
    	    blueParty.warp(eim.getMapInstance(loserMap), 0);
    	}
    	eim.disposeIfPlayerBelow(100,0);
    }
}

/*
 * 双方胜利 失败 后 传入地图
 */
function scheduledTimeout(eim) {
    eim.stopEventTimer();
    if (!eim.getProperty("started").equals("true")) {
	if (eim.getProperty("blue").equals("-1")) {
            disposeAll(eim);
	}
    } else {
        var blueParty = getParty(eim, "blue");
        var redParty = getParty(eim, "red");
        if( blueParty != null && redParty != null ) {
            if (blueParty.getTotalCP() > redParty.getTotalCP()) {
                blueParty.setWinner(true);
            } else if (redParty.getTotalCP() > blueParty.getTotalCP()) {
                redParty.setWinner(true);
            }
            blueParty.displayMatchResult();
            redParty.displayMatchResult();
        }
        eim.schedule("warpOut", 10000);
    }
}

/*
 * 玩家复活
 */
function playerRevive(eim, player) {
    //player.getCarnivalParty().useCP(player,0);
    var iter = eim.getPlayers().iterator();
    while (iter.hasNext()) {
        iter.next().CPUpdate(true, player.getCarnivalParty().getAvailableCP(), player.getCarnivalParty().getTotalCP(), player.getCarnivalParty().getTeam());
    }
	player.addHP(500);
	player.addMP(500);
    player.changeMap(eim.getMapInstance(reviveMap), eim.getMapInstance(reviveMap).getPortal(0));
	return true;
}

/*
 * 组队消失后
 */
function playerDisconnected(eim, player) {
    //player.setMap(eim.getMapInstance(exitMap));
    //eim.unregisterPlayer(player);
    //player.getCarnivalParty().removeMember(player);
    eim.broadcastPlayerMsg(5, player.getName() + " 离开了怪物嘉年华");
    disposeAll(eim);
	 return 0;
}

/*
 * 当地图加载
 */
function onMapLoad(eim, chr) {
    if (!eim.getProperty("started").equals("true")) {
        disposeAll(eim);
    } else if (chr.getCarnivalParty().getTeam() == 0) {
	var blueParty = getParty(eim, "blue");
        chr.startMonsterCarnival(blueParty.getAvailableCP(), blueParty.getTotalCP());
    } else {
	var redParty = getParty(eim, "red");
        chr.startMonsterCarnival(redParty.getAvailableCP(), redParty.getTotalCP());
    }
}

function cancelSchedule() {
}

function clearPQ(eim) {
}

function allMonstersDead(eim) {
}

function changedMap(eim, chr, mapid) {
}