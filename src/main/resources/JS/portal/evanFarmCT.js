/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if(pi.isQuestActive(22010) || pi.getPlayer().getJob() != 2001) {
		pi.warp(100030310);
	} else {
		pi.playerMessage("没有理由进入茂密的森林.");
	}
	return true;
}