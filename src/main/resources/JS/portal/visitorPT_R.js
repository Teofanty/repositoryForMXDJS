/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if (!pi.isLeader()) {
		pi.playerMessage("只有队长才可以进入这个门.");
		return;
	}
	var ei = pi.getPlayer().getEventInstance();
	if (ei == null || ei.getProperty("mode") == null) {
		pi.warp(502029000,0);
	} else {
		var zeroMap = 502030000 + (parseInt(ei.getProperty("mode")) * 16);
		var canPass = pi.getMap().getAllMonstersThreadsafe().size() == 0;
		if (canPass) {
			switch(pi.getMapId() - zeroMap) {
				case 5:
				case 8:
					canPass = ei.getProperty("stage" + (pi.getMapId() - zeroMap)).equals("0");
					break;
			}
		}
		if (!canPass) {
			pi.playerMessage("这门上锁。 需要把所有的怪物击败.");
		} else {
			var nextMap = (pi.getMapId() + 1);
			switch(pi.getMapId() - zeroMap) {
				case 13:
				case 14:
				case 15:
					nextMap = (zeroMap + (pi.getMapId() - zeroMap) - 4);
					break;
				case 8:
				case 9:
				case 10:
					nextMap = (zeroMap + (pi.getMapId() - zeroMap) + 5);
					break;
				case 11:
					nextMap = 502029000;
					break;
					
			}
			pi.warpParty(nextMap, 0);
		}
	}
}