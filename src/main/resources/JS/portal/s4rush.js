/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getQuestStatus(6110) == 1) {
		 if (pi.getParty() != null) {
			 if (!pi.isLeader()) {
			 pi.playerMessage("由两个战士组成的队伍的队长可以决定进入." );
			 } else {
			 if (pi.getParty().getMembers().size < 2) {
				pi.playerMessage("当你有一个两个队员的队伍的时候，你可以做这个任务。" );
			 } else {
				  if (!pi.isAllPartyMembersAllowedJob(1)) {
				  pi.playerMessage("你不能进入。你的队员职业不是战士，你的队伍没有两个成员.");
				  } else {
				  var em = pi.getEventManager("4jrush");
				  if (em == null) {
					  pi.playerMessage("你不被允许进入未知的原因。再试一次." );
				  } else {
					  em.startInstance(pi.getParty(), pi.getMap());
					  return true;
				  }
				  }
			 }
			 }
		 } else {
			 pi.playerMessage(5, "你没有一个队伍.");
		 }
    } else {
		pi.playerMessage("你不能进入这个地方.");
    }
    return false;
}