/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
	    qm.gainItem(1372043, 1);
	    qm.gainItem(1142066, 1);
		//qm.resetStats(4, 4, 4, 4);
	    qm.expandInventory(1, 4);
	    qm.expandInventory(4, 4);
	    qm.changeJob(1200);
    qm.forceCompleteQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    qm.forceStartQuest();
	    qm.gainItem(1372043, 1);
	    qm.gainItem(1142066, 1);
		//qm.resetStats(4, 4, 4, 4);
	    qm.expandInventory(1, 4);
	    qm.expandInventory(4, 4);
	    qm.changeJob(1200);
    qm.forceCompleteQuest();
    qm.dispose();
}