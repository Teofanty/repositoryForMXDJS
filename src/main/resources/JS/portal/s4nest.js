/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getQuestStatus(6241) == 1 || pi.getQuestStatus(6243) == 1) {
	if (pi.getJob() == 312) {
	    if (pi.haveItem(4001113)) {
		if (pi.getPlayerCount(924000100) > 0) {
		    pi.playerMessage("其他人物都在请求。你不能进入.");
		    return false;
		}
		var em = pi.getEventManager("s4nest");
		if (em == null) {
		    pi.playerMessage("你不得与不明原因进入。再试一次." );
		} else {
		    em.startInstance(pi.getPlayer());
		    return true;
		}
	    } else {
		pi.playerMessage("您没有凤凰的蛋。你不能进入." );
	    }
	} else if (pi.getJob() == 322) {
	    if (pi.haveItem(4001114)) {
		if (pi.getPlayerCount(924000100) > 0) {
		    pi.playerMessage("其他人物都在请求。你不能进入.");
		    return false;
		}
		var em = pi.getEventManager("s4nest");
		if (em == null) {
		    pi.playerMessage("你不得与不明原因进入。再试一次." );
		} else {
		    em.startInstance(pi.getPlayer());
		    return true;
		}
	    } else {
		pi.playerMessage("你没有冰凤凰的蛋。你不能进入." );
	    }
	}
    } else {
	pi.playerMessage("你不能进入密封处.");
    }
    return false;
}