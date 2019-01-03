/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getPlayer().getIntNoRecord(251003) == 1) {
        pi.warp(915010001, "out00");
    } else {
        pi.playerMessage("我必须先通过那个锁.");
    }
    return true;
}