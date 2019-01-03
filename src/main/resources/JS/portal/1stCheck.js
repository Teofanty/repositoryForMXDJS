/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function enter(pi) {
    if (pi.getPlayer().getKeyValue("1stJobTrialStatus") == null) {
	pi.getPlayer().message("'蜡府' 俊霸 刚历 富阑 吧绢林技夸.");
        return false;
    } else {
        pi.warp(219000000, "in03");
        return true;
    }
}