/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if (pi.isQuestActive(1008))
		pi.ShowWZEffect("UI/tutorial.img/22");
	else if (pi.isQuestActive(1020) || pi.isQuestFinished(1020))
		pi.ShowWZEffect("UI/tutorial.img/27");
	return false;
}