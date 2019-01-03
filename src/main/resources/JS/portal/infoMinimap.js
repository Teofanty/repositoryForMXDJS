/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	//if (pi.isQuestActive(1031)){
		if (pi.isQuestFinished(1031)) {
		return true;
		} else {
		pi.ShowWZEffect("UI/tutorial.img/25");
		return true;
	}}
