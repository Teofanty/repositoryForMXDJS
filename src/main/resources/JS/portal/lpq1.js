/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function enter(pi) {
	var eim = pi.getPlayer().getEventInstance()
	var target = eim.getMapInstance(922010200);
	if (eim.getProperty("stage1status") != null) {
		pi.getPlayer().changeMap(target, target.getPortal("st00"));
		pi.removeAll(4001022);
		return true
	} else 
	        pi.getPlayer().dropMessage(5, "现在还不能进入下一阶段。");
		    //pi.removeAll(4001022);
               return false;	
}
