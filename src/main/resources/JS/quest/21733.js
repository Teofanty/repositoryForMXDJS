/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();//开始任务
	qm.dispose();
}

function end(mode, type, selection) {
	qm.teachSkill(21100000, qm.getPlayer().getSkillLevel(21100000), 20);
	qm.sendNextS("感谢你救了我!", 3);
	qm.gainExp(3900);
	qm.forceCompleteQuest();//完成任务
	qm.dispose();
}