/* ==================
 脚本类型:  NPC	    
 脚本作者：月亮     
 联系方式：2412614144
 =====================
 */

var baseid = 105090311;
var dungeonid = 105090320;
var dungeons = 1;

function enter(pi) {
    if (pi.getMapId() == baseid) {
        for (var i = 0; i < dungeons; i++)
            if (pi.getPlayerCount(dungeonid + i) == 0) {
                pi.warp(dungeonid + i, 0);
                return true;
            }
		pi.playerMessage(5, "所有的地下城都在使用中，请稍后再尝试。");
    } else
        pi.warp(baseid, "MD00");
    return true;
}
