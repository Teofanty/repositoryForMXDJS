/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if(pi.isQuestActive(22008)){
		pi.warp(100030103, "west00");
	} else {
		pi.playerMessage("你没有去后院的理由");
    } 
	return true;
}  