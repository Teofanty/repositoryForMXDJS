/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function enter(pi) {
	if (pi.getMapId() == 120000200 && pi.getPortal().getName().equals("bi01")) {
		pi.warp(pi.isQuestFinished(2568) ? 912060500 : 120000202,0);
	} else {
		pi.inFreeMarket();
	}
}