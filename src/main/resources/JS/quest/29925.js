/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 
var status = -1;

function start(mode, type, selection) {
	if (qm.canHold(1142130,1) && !qm.haveItem(1142130,1) && qm.getPlayer().getLevel() >= 30 && ((qm.getPlayer().getJob() / 100) | 0) == 21) {
		qm.gainItem(1142130,1);
		qm.forceStartQuest();
		qm.forceCompleteQuest();
	}
	qm.dispose();
}

function end(mode, type, selection) {
	if (qm.canHold(1142130,1) && !qm.haveItem(1142130,1) && qm.getPlayer().getLevel() >= 30 && ((qm.getPlayer().getJob() / 100) | 0) == 21) {
		qm.gainItem(1142130,1);
		qm.forceStartQuest();
		qm.forceCompleteQuest();
	}
	qm.dispose();
}