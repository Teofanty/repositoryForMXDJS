/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

var baseid = 106021000;
var dungeonid = 106021001;
var dungeons = 10;

function enter(pi) {
	if (!pi.haveItem(4032405)) {
		pi.playerMessage(5, "需要密室钥匙才能进入");
		return false;
	}
	if (pi.getPlayer().getMapId() == baseid) {
	    for(var i = 0; i < dungeons; i++) {
		if (pi.getMap(dungeonid + i).getCharactersSize() == 0) {
		    		pi.warp(dungeonid + i, 0);
		    return true;
		}
	    }
	    pi.playerMessage(5, "里面已经有人挑战请稍后在试！！");
		return false;
	} else {
			pi.warp(baseid, "in00");
	}
	return true;
}
