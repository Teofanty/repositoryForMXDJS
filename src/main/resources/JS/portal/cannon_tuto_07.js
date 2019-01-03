/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if (!pi.isQuestFinished(2568)) {
		pi.showInstruction("我应该去进大炮.", 150, 5);
		pi.forceCompleteQuest(2568);
		pi.DisableUI(true);
		pi.EnableUI(1);
		pi.sendDirectionStatus(3,2);
		pi.sendDirectionStatus(4,0);
	}
}