/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if (pi.getEvanIntroState("dt00=o;dt01=o;mo00=o;mo01=o;mo10=o;mo02=o;mo11=o;mo20=o;hand=o") || pi.getEvanIntroState("dt00=o;dt01=o;mo00=o;mo01=o;mo10=o;mo02=o;mo11=o;mo20=o;hand=o;mo21=o")) {
		return false;
	}
	pi.updateEvanIntroState("dt00=o;dt01=o;mo00=o;mo01=o;mo10=o;mo02=o;mo11=o;mo20=o;hand=o;mo21=o");
	pi.evanTutorial("UI/tutorial/evan/0/0", -1);
	pi.ShowWZEffect("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon70");
	return true;
}