/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function enter(pi) {
try {
	if (pi.getPlayer().getParty() != null && pi.getMap().getMonsterById(9300438) == null && pi.isLeader()) {
		//if (pi.getPlayer().getEventInstance() != null) {
		//	pi.warpParty_Instanced(((pi.getPlayer().getMapId() / 100) + 1) * 100 - (pi.getPlayer().getMapId() % 100));
		//} else {
			pi.warpParty(((pi.getPlayer().getMapId() / 100) + 1) * 100 - (pi.getPlayer().getMapId() % 100));
		//}
		pi.playPortalSE();
	} else {
		pi.playerMessage(5,"请让队长进入这个门, 并确保冰骑士在这里.");
	}
} catch (e) {
	pi.playerMessage(5, "错误: " + e);
}
}