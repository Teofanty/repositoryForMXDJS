/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.isQuestFinished(24002) && !pi.isQuestActive(24093)) {
		pi.openNpc(1033205);
	} else {
		pi.warp(101050100,0);
	}
}