/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 var baseid = 221040000;
var dungeonid = 221040001;

function enter(pi) {
try {
    if (pi.getMapId() == baseid) {
		if (pi.getParty() != null) {
			if (pi.isLeader()) {
				if (pi.getPlayerCount(dungeonid) == 0) {
					pi.warpParty(dungeonid);
					return;
				}
			} else {
				pi.playerMessage(5, "你不是队伍的队长.");
			}
		} else {
			if (pi.getPlayerCount(dungeonid) == 0) {
				pi.warp(dungeonid);
				return;
			}
		}
		pi.playerMessage(5, "现在正在使用,请稍后再试.");
    } else {
		pi.playPortalSE();
		pi.warp(baseid, "MD00");
    }
} catch (e) {
    pi.playerMessage("错误: " + e);
}
}