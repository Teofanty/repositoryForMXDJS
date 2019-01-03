/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getQuestStatus(20022) == 0) {
	pi.playerSummonHint(true);
	pi.summonMsg("欢迎来到圣地！ 我的名字是Koo，我会作为你的指导！ 我会在这里回答你的问题，并指导你，直到你达到10级，并成为骑士在训练。 如果您有任何问题，请双击我!");
    //pi.forceCompleteQuest(20100);
	pi.forceStartQuest(20022, "1");
	return;
	//pi.forceCompleteQuest(20021);
	} else {
	return;
    }
}