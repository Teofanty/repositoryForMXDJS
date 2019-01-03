/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系方式：2412614144
 =====================
 */

function enter(pi) {
    if (pi.getMap().getReactorByName("watergate").getState() == 1 || (pi.getPlayer().getEventInstance() != null && pi.getPlayer().getEventInstance().getProperty("stage3clear") != null && pi.getPlayer().getEventInstance().getProperty("stage3clear").equals("true"))) {
        pi.removeAll(4001027);
		pi.removeAll(4001028);
		pi.removeAll(4001029);
		pi.removeAll(4001030);
		pi.warp(990000600);
        return true;
    } else {
        pi.playerMessage("这种前进的路还没有打开.");
        return false;
    }
}
