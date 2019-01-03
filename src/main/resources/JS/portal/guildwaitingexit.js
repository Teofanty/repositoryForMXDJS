/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function enter(pi) {
        if (pi.getPlayer().getEventInstance() != null) {
                pi.getPlayer().getEventInstance().unregisterPlayer(pi.getPlayer());
        }
        pi.warp(101030104);
        return true;
}