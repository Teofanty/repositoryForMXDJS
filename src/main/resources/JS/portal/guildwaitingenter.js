/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function enter(pi) {
    if (pi.getEventInstance() == null) {
	pi.warp(101030104);
    } else {
	if (pi.getEventInstance().getProperty("canEnter") != null && pi.getEventInstance().getProperty("canEnter").equals("true")) {
	    pi.warp(990000100);
	} else { //cannot proceed while allies can still enter
	    pi.playerMessage("该门尚未打开.请让参赛者都在此等待!");
		return false;
	}
    }
	return true;
}