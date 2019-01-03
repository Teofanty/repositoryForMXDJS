/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系方式：2412614144
 =====================
 */

function enter(pi) {
    if (pi.getPlayer().getLevel() <= 255) {
        pi.warp(990000640, 1);
        return true;
    } else {
        pi.getPlayer().dropMessage(5, "你无法绕开这一点.");
        return false;
    }
}