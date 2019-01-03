/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function enter(pi) {
    var morph = pi.getMorphState();
    if (morph == 2210003) {
	pi.cancelItem(2210003);
    }
    pi.playPortalSE();
    pi.warp(240040600, "east00");
}
