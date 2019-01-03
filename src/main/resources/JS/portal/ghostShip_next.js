/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (!pi.isLeader()) {
	pi.playerMessage(5, "队长必须在这里");
    } else {
	if (pi.getMap().getAllMonstersThreadsafe().size() != 0) {
	    pi.playerMessage(5, "请清除所有的怪物!");
	    return;
	}
	if (((pi.getMapId() % 10) | 0) == 4) { //last stage
	    if (pi.getMap().getReactorByName("switch0").getState() < 1 || pi.getMap().getReactorByName("switch1").getState() < 1) {
		pi.playerMessage(5, "这两款交换机必须打开.");
		return;
	    }
	    var bossroom = pi.getMapId() + 66;//90-14 = 76, 90-24=66
	    if (((bossroom % 100) | 0) != 90) {
		bossroom += 10;
	    }
	    pi.warpParty(bossroom, 0);
	} else {
	    pi.warpParty(pi.getMapId() + 1, ((pi.getMapId() % 10) | 0) == 3 ? 1 : 2);
	}
    }
}