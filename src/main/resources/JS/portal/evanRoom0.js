/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if (pi.getEvanIntroState("mo30=o")) {
		return false;
	}
	pi.updateEvanIntroState("mo30=o");
	pi.ShowWZEffect("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon30");
	return true;
}