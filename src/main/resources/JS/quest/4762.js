/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if(qm.getQuestStatus(4762)== 2){
			qm.sendOk("你已经领取过奖励，继续努力到15级可以获得新奖励喔");
			qm.completeQuest();
			qm.dispose();
			}else{
			qm.sendNext("恭喜你当前等级已经到达#b10#k级。");
			}
		} else if (status == 1) {
			qm.sendOk("恭喜你获得系统奖励！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n100000金币#v5030001#");
			qm.gainMeso(30000);
			qm.gainItem(5030011, 1);
			qm.completeQuest();
			qm.dispose();
		} 
	}
}