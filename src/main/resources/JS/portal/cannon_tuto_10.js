/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 
function enter(pi) { 
	pi.EnableUI(0);
	pi.DisableUI(false);
	if (pi.isQuestFinished(2568) && pi.getQuestStatus(2570) == 0) {
	    pi.showInstruction("我在哪里？我的头好痛...", 150, 5);
	}
}  