/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function enter(pi) {
    if (pi.getMap().getReactorByName("secretgate3").getState() == 1) {
	//pi.playPortalSE();
        pi.warp(990000641, 1);
	return true;
    } else {
        pi.playerMessage("这门关闭.");
	return false;
    }
}
