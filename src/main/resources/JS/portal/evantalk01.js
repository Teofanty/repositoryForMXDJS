/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if (pi.getEvanIntroState("dt00=o;mo00=o;mo01=o")) {
		return false;
	}
	pi.updateEvanIntroState("dt00=o;mo00=o;mo01=o");
        pi.ShowWZEffect("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon01");
	return true;
}