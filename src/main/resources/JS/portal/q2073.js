/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if (pi.getQuestStatus(2073) == 1) {
		pi.warp(900000000,0);
		return true;
	} else {
		pi.playerMessage(5,"你似乎无法进入到里面...");
		return false;
	}
}