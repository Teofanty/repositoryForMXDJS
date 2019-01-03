/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    var level = pi.getPlayerStat("LVL");
    if (level >= 10) {
	pi.playPortalSE();
	pi.warp(106020000, 1);
    } else {
	pi.playerMessage(5, "未知的力量无法进入");
    }
}