/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    var blocked = true;
    for (var i = 913070050; i <= 913070069; i++)
        if (pi.getPlayerCount(i) == 0) {
            pi.warp(i, 0);
            blocked = false;
            return false;
        }
    if (blocked)
        pi.getPlayer().dropMessage(5, "有人已在此地图中.");
    return true;
}