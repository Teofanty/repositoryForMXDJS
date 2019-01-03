/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {  
	if (pi.getPlayer().getEvents().getGagaRescue().fallAndGet() > 3) {
	    pi.warp(922240200);
	    pi.getPlayer().cancelEffect(2360002);
	} else
	    pi.warp(pi.getPlayer().getMapId());

	return true;
}