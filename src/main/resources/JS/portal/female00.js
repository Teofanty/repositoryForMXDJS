/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    var gender = pi.getPlayer().getGender();
    if (gender == 1) {
        pi.warp(670010200, 4);
        return true;
    } else {
        pi.getPlayer().dropMessage(5, "你不能经过这里.");
        return false;
    }
}