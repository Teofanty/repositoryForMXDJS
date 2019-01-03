/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function enter(pi) {
    pi.removeAll(4031507);
    pi.removeAll(4031508);
    if (pi.getMap(923010000).getCharactersSize() < 1)
    pi.getMap(923010000).resetFully();
    pi.warp(230000003, "out00");
    return true;
}