/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getInfoQuest(21002).equals("mo1=o;mo2=o")) {
	pi.updateInfoQuest(21002, "mo1=o;mo2=o;mo3=o");
	pi.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/legendBalloon3");
    }
}