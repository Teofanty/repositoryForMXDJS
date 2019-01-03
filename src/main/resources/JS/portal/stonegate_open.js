/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function enter(pi) {
    if (pi.getMap().getReactorByName("stonegate").getState() == 1) {
        pi.warp(990000430, 0);
        return true;
    } else {
        pi.playerMessage("门仍然被封锁.");
        return false;
    }
}