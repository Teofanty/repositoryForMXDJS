/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
try {
    var map = pi.getMapId();
    var shortval = ((map / 100) | 0) - 9800400;
    
    // Checking
    var time = 0;
    var instance = "";

    switch (shortval) {
	case 10:
	    instance = "WitchTower_EASY";
	    time = 130000;
	    break;
	case 11:
	    instance = "WitchTower_EASY";
	    time = 80000;
	    break;
	case 20:
	    instance = "WitchTower_Med";
	    time = 130000;
	    break;
	case 21:
	    instance = "WitchTower_Med";
	    time = 80000;
	    break;
	case 30:
	    instance = "WitchTower_Hard";
	    time = 510000;
	    break;
	case 31:
	    instance = "WitchTower_Hard";
	    time = 460000;
	    break;
	default:
	    pi.playerMessage("错误: 无效地图 " + pi.getPlayer().getMapId());
	    return;
    }
    var eventinstance = pi.getEventManager(instance).getInstance(pi.getName());
    if (eventinstance != null) {
	if (eventinstance.getTimeLeft() > time) {
	    pi.playerMessage(5, "您已被移动到另一个位置，由于非法第三方程序的使用.");
	    pi.warp(980040000, 0);
	    return true;
	}
	switch (shortval) {
	    case 11:
	    case 21:
	    case 31:
		eventinstance.restartEventTimer(180000);
		break;
	}
    }
    //980042100
    for (var i = 0; i < 10; i++) {
	var mapto = map + 100 + i;
	if (pi.getPlayerCount(mapto) == 0) {
	    pi.warp(mapto, 0);
	    return true;
	}
    }
    pi.playerMessage(5, "所有地图目前正在使用中.");
    return false;
} catch (e) {
    pi.playerMessage(5, "错误: " + e);
}
}