/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function enter(pi) {
    if (pi.getMap().getReactorByName("metalgate").getState() == 1) {
	pi.warp(990000431, 0);
    }
    else {
	pi.playerMessage("这种前进的路还没有打开.");
    }
}
