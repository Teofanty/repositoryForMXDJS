/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getJob() >= 1000) {
	if (pi.haveItem(4032179)) { // Search warrent
	    pi.playerMessage("圣地搜索开始.");
	}
	pi.playPortalSE();
	pi.warp(130010000, 3);
    } else {
	pi.playerMessage("只有骑士团的骑士可以进入.");
    }
}