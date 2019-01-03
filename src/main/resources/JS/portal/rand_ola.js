/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getEvent("OlaOla").isRunning() && pi.getEvent("OlaOla").isCharCorrect(pi.getPortal().getName(), pi.getMapId())) {
	pi.warp(pi.getMapId() == 109030003 ? 109050000 : (pi.getMapId() + 1), 0);
    } else {
	pi.warpS(pi.getMapId(), 0);
    }
}