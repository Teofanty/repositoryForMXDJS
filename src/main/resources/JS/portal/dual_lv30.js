/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getPlayer().getLevel() >= 30) {
	pi.warp(103050370,0);
	pi.playPortalSE();
    } else {
	pi.playerMessage(5, "你必须等于大于 30.");
    }
}