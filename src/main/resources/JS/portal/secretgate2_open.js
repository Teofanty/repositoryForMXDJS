/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系方式：2412614144
 =====================
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getReactorByName("secretgate2").getState() == 1) {
        pi.warp(990000631,1);
        return true;
    } else {
        pi.getPlayer().dropMessage(5, "这门关闭，需要8个恶魔标示开启");
        return false;
    }
}
