/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	if (!qm.canHold(4310018, 19) || !qm.canHold(1112608,1)) {
	    qm.sendOk("请腾出背包空间.");
	} else {
	    qm.gainItem(4310018, 19);
	    qm.gainItem(1112608, 1);
	    qm.forceStartQuest(50701);
	    qm.forceCompleteQuest();
	}
	qm.dispose();
}
function end(mode, type, selection) {
	if (!qm.canHold(4310018, 19) || !qm.canHold(1112608,1)) {
	    qm.sendOk("请腾出背包空间.");
	} else {
	    qm.gainItem(4310018, 19);
	    qm.gainItem(1112608, 1);
	    qm.forceStartQuest(50701);
	    qm.forceCompleteQuest();
	}
	qm.dispose();
}
