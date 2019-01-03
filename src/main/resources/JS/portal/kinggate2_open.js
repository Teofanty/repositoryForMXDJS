/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function enter(pi) {
    if (pi.getMap().getReactorByName("kinggate").getState() == 1) {
	pi.warp(990000900, 2);
	if (pi.getEventInstance().getProperty("boss") != null && pi.getEventInstance().getProperty("boss").equals("true")) {
	    pi.changeMusic("Bgm10/Eregos");
	}
	return true;
    } else {
	pi.playerMessage("这条裂缝似乎被附近的门挡住了.");
	return false;
    }
}
