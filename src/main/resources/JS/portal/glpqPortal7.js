/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	pi.warp(610030800, 0);
    if (pi.getPlayer().getEventInstance() != null && pi.getPlayer().getEventInstance().getName().startsWith("CWKPQ")) {
	pi.gainNX(4000);
	pi.getPlayer().finishAchievement(37);
    }
}