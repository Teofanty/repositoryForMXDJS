/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

var dungeonid = 106021600;
var dungeons = 10;

function enter(pi) {
	    for(var i = 0; i < dungeons; i++) {
		if (pi.getMap(dungeonid + i).getCharactersSize() == 0) {
		    		pi.warp(dungeonid + i, 0);
		    return true;
		}
	    }
	    pi.playerMessage(5, "现在正在使用,请稍后再试.");
		return false;
}
