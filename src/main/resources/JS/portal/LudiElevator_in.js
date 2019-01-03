/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 
function enter(pi) {
	if (pi.getMapId() == 222020100) {
		pi.playPortalSE();
		pi.warp(222020200, "sp");
	} else { // 222020200
		pi.playPortalSE();
		pi.warp(222020100, "sp");
	}
}
