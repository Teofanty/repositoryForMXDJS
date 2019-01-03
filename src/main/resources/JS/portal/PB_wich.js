/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if (pi.haveItem(1002971,1)) {
		pi.warp(980040010,0);
 		pi.playPortalSE();
	} else {
		pi.playerMessage(5, "在进入之前就需要粉红色豆.");
	}
}