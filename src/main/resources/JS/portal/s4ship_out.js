/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function enter(pi) {
    var pt = pi.getEventManager("KyrinTrainingGroundC");
    if (pt == null) {
	pi.warp(120000101, 0);
	return false;
    } else {
	if (pt.getInstance("KyrinTrainingGroundC").getTimeLeft() < 120000) { // 2 minutes left
	    pi.warp(912010200, 0);
	} else {
	    pi.playerMessage("请继续忍受克林的攻击一会儿!");
	    return false;
	}
    }
    return true;
}