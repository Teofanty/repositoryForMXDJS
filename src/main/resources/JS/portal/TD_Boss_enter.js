/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	    if (pi.getPlayer().getParty() == null || !pi.isLeader()) {
		pi.playerMessage("队伍的队长必须在这里.");
	    } else {
		var party = pi.getPlayer().getParty().getMembers();
		var mapId = pi.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = pi.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && (pi.getPlayer().isGM() || size >= 2)) {
	    	    for(var i = 0; i < 7; i++) {
			if (pi.getMap(pi.getMapId() + 1 + i) != null && pi.getMap(pi.getMapId() + 1 + i).getCharactersSize() == 0) {
		    		pi.warpParty(pi.getMapId() + 1 + i);
				pi.dispose();
		    		return;
			}
	    	    }
			pi.playerMessage("另一方的任务已经进入该通道.");
		} else {
			pi.playerMessage("队伍需要2+成员必须是这里.");
		}
	    }
}