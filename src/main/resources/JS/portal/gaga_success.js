/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {  
	pi.getPlayer().getEvents().getGagaRescue().complete();
	pi.warp(922240100 + (pi.getPlayer().getMapId() - 922240000));
	pi.getPlayer().cancelEffect(2360002);
	return true;
}  