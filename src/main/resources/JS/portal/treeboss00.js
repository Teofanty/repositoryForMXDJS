/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getPlayerCount(541020800) <= 0) { // krex. Map
	var krexMap = pi.getMap(541020800);

	krexMap.resetFully();

	pi.playPortalSE();
	pi.warp(541020800, "sp");
	return true;
    } else {
	if (pi.getMap(541020800).getSpeedRunStart() == 0 && (pi.getMonsterCount(541020800) <= 0 || pi.getMap(541020800).isDisconnected(pi.getPlayer().getId()))) {
	    pi.playPortalSE();
	    pi.warp(541020800, "sp");
	    return true;
	} else {
	    pi.playerMessage(5, "战斗已经开始了，所以你可能无法进入这个地方.");
	    return false;
	}
    }
}