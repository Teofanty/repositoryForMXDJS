/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;
//this quest is NEVER GIVE UP
function start(mode, type, selection) {
	qm.sendNext("让我们来跟我说话.");
	qm.forceStartQuest();
	qm.getPlayer().gainSP(2, 3);
	qm.forceCompleteQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.getPlayer().gainSP(2, 3);
	qm.forceCompleteQuest();
	qm.dispose();
}