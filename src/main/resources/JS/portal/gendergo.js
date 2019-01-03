/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getPlayerStat("GENDER") == 0) {
	pi.warpS(670010200, "male01");
    } else {
	pi.warpS(670010200, "female01");
    }
}