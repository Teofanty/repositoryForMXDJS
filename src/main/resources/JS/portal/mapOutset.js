/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getMap().getForcedReturnId() == 999999999) {
	pi.warp(910000000,0); //dont care lol
    } else {
	pi.warp(pi.getMap().getForcedReturnId());
    }
}