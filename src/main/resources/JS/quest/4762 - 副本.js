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
			qm.sendNext("#k恭喜你当前等级已经到达#b10#k级。");
			}
		} else if (status == 1) {
			(cm.getInventory(5).isFull(1)){//判断第一个也就是装备栏的装备栏是否有一个空格
            cm.sendOk("#b请保证现金栏位至少有2个空格才可以领取.");	//对话框
            cm.dispose();//结束
	    } else if(cm.getPlayer().getOneTimeLog("10级奖励") >= 1){//判断永久记录
			cm.sendOk("你已经领取过当前等级奖励!");//对话框
			cm.dispose();//结束
		} else if(cm.getLevel() >= 10){//判断等级
			cm.gainItem(5211047, 1, 7);//双倍经验卡7天
			cm.gainItem(5030000, 1);//双倍经验卡7天雇佣商人
			cm.getPlayer().setOneTimeLog("10级奖励");//给永久记录
			cm.sendOk("兑换奖励成功");//对话框
			cm.dispose();//结束
			} else {
			cm.sendOk("你没有达到当前等级!");//对话框
			cm.dispose();//结束
	    }	
	}
}