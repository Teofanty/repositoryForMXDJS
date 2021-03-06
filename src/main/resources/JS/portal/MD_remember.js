/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
var baseid = 240040511;
var dungeonid = 240040800;
var dungeons = 19;

function enter(pi) {
    if (pi.getMapId() == baseid) {
	if (pi.getPlayer().getFame() < 10) {
	    pi.playerMessage(5, "你需要10名才能进入.");
	    return;
	}
	if (pi.getParty() != null) {
	    if (pi.isLeader()) {
		for (var i = 0; i < dungeons; i++) {
		    if (pi.getPlayerCount(dungeonid + i) == 0) {
			pi.warpParty(dungeonid + i);
			return;
		    }
		}
	    } else {
		pi.playerMessage(5, "你不是队伍的队长.");
	    }
	} else {
	    for (var i = 0; i < dungeons; i++) {
		if (pi.getPlayerCount(dungeonid + i) == 0) {
		    pi.warp(dungeonid + i);
		    return;
		}
	    }
	}
	pi.playerMessage(5, "现在正在使用,请稍后再试.");
    } else {
	pi.playPortalSE();
	pi.warp(baseid, "MD00");
    }
}