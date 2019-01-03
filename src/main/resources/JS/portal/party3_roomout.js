/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    switch (pi.getMapId()) {
	case 920010200:
		if (!pi.haveItem(4001044)) {
        pi.getPlayer().dropMessage(5,"您尚未完成了此关任务。");	
        return false;
    } else {
		pi.warpParty(920010100);
        return true;
	}
        break;
    case 920010300:
		if (!pi.haveItem(4001045)) {
        pi.getPlayer().dropMessage(5,"您尚未完成了此关任务。");	
        return false;
    } else {
		pi.warpParty(920010100);
        return true;
	}
        break;
    case 920010400:
		if (!pi.haveItem(4001046)) {
		pi.getPlayer().dropMessage(5,"您尚未完成了此关任务。");	
        return false;
    } else {
		pi.removeAll(4001056);
		pi.removeAll(4001057);
		pi.removeAll(4001058);
		pi.removeAll(4001059);
		pi.removeAll(4001060);
		pi.removeAll(4001061);
		pi.removeAll(4001062);
		pi.warpParty(920010100);
        return true;
	}
        break;
    case 920010500:
		if (!pi.haveItem(4001047)) {
        pi.getPlayer().dropMessage(5,"您尚未完成了此关任务。");	
        return false;
    } else {
		pi.warpParty(920010100);
        return true;
	}
        break;
    case 920010600:
		if (!pi.haveItem(4001048)) {
        pi.getPlayer().dropMessage(5,"您尚未完成了此关任务。");	
        return false;
    } else {
		pi.warpParty(920010100);
        return true;
	}
        break;
    case 920010700:
		if (!pi.haveItem(4001049)) {
        pi.getPlayer().dropMessage(5,"您尚未完成了此关任务。");	
        return false;
    } else {
		pi.warpParty(920010100);
        return true;
	}
        break;
    }
}