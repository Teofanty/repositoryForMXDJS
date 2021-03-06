function action(mode, type, selection) {
    if (mode != 1) {
	cm.dispose();
	return;
    }
	if (cm.getPlayer().getMapId() == 677000011) { //warp to another astaroth map.
		cm.warp(677000013,0);
		cm.dispose();
	} else if (cm.getPlayer().getMapId() == 677000013) { //warp to another astaroth map.
			if (cm.getParty() == null) {
				cm.sendOk("你必须创建一个队伍。");
			} else {
				var party = cm.getParty().getMembers();
				var mapId = cm.getMapId();
				var next = true;
				var levelValid = 0;
				var inMap = 0;
				var it = party.iterator();
				while (it.hasNext()) {
	    				var cPlayer = it.next();
				    	if (cPlayer.getMapid() == mapId) {
						inMap += 1;
				    	}
				}
				if (party.size() < 1 || inMap < 1) {
				    next = false;
				}
				if (next) {
					if (cm.getMap(677000012).getCharactersSize() > 0) {
						cm.sendOk("地狱大公目前有人挑战，请稍后在试！");
					} else {
						cm.warpParty(677000012);
					}
				} else {
					cm.sendOk("在同一张地图中，你的队伍人数必须大于2个！ ");
				}
			}
		cm.dispose();
	} else {
		if (cm.getParty() != null) {
			cm.warpParty(677000011);
		} else {
			cm.warp(677000011,0);
		}
		cm.dispose();
	}
}