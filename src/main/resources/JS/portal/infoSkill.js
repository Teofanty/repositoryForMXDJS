/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if (pi.isQuestFinished(1035)) {
	//	pi.ShowWZEffect("UI/tutorial.img/21");//显示的效果
		return true;
		} else {
		pi.ShowWZEffect("UI/tutorial.img/23");//显示的效果
		return true;
	}
}