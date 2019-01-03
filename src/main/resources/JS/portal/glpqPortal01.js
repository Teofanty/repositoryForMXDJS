/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (java.lang.Math.floor(((pi.getPlayer().getJob() % 1000) / 100) * 100 - (pi.getPlayer().getJob() % 100)) == 300) {
	pi.warp(610030540,0);
    } else {
	pi.playerMessage(5, "只有弓箭手可以进入这个门.");
    }
}