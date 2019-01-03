/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
importPackage(net.sf.Start.server.maps);
importPackage(net.sf.Start.net.channel);

/*
Ludi PQ: 4th stage to 4th stage portal
*/

function enter(pi) {
	var nextMap = 922010500;
	var nextPortal = "out01";
	var eim = pi.getPlayer().getEventInstance();
	var target = eim.getMapInstance(nextMap);
	var targetPortal = target.getPortal(nextPortal);
	//if(eim == null){
	    pi.warp(nextMap, nextPortal);
	//}else{
	 //   pi.warp(target, targetPortal);
	//}
	return true;
}
