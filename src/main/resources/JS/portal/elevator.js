/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 var em;

function enter(pi) {

	if (pi.getMapId() == 222020100) {
	    if (pi.getClient().getChannelServer().getEventSM().getEventManager("elevator").getProperty("isDown").equals("true")) {
		pi.playPortalSE();
		pi.warp(222020110, "sp");
	    } else {
		pi.playerMessage("电梯尚未到达");
	    }
	} else { // 222020200
	    if (pi.getClient().getChannelServer().getEventSM().getEventManager("elevator").getProperty("isUp").equals("true")) {
		pi.playPortalSE();
		pi.warp(222020210, "sp");
	    } else {
		pi.playerMessage("电梯尚未到达");
	    }
	}
}
