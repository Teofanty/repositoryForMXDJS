/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function enter(pi) {
    if (pi.haveMonster(9300093)) { // Tylus
	var pt = pi.getEventManager("ProtectTylus");
	if (pt == null) {
	    pi.warp(211000001, 0);
	} else {
	    if (pt.getInstance("ProtectTylus").getTimeLeft() < 180000) { // 3 minutes left
		pi.warp(921100301, 0);
	    } else {
		pi.playerMessage("请保护冒牌泰勒斯不被绑架!");
		return false;
	    }
	}
    } else {
	pi.warp(211000001, 0);
	pi.playerMessage("不好了！ 冒牌泰勒斯被绑架！");
    }
    return true;
}