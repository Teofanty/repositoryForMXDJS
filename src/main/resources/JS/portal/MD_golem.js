/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

var baseid = 105040304;
var dungeonid = 105040320;
var dungeons = 30;

function enter(pi) {
        if (pi.getMapId() == baseid) {
            for(var i = 0; i < dungeons; i++) {
                if (pi.getPlayerCount(dungeonid + i) == 0) {
                    pi.warp(dungeonid + i, 0);
                    return true;
                }
            }
            pi.playerMessage(5, "正在使用中，请稍后再尝试。");
        } else {
        pi.warp(baseid, "MD00");
        }
        return true;
}
