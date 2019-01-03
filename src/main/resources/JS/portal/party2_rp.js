/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
 try {
    var em = pi.getEventManager("LudiPQ");
    if (em != null && em.getProperty("stage6_" + (pi.getPortal().getName().substring(2, 4)) + "").equals("1")) {
	pi.warpS(pi.getMapId(),(pi.getPortal().getName().startsWith("pt9") ? 14 : (pi.getPortal().getId() + 3)));
	pi.playerMessage(-1, "正确组合!");
	pi.getMap().changeEnvironment("an" + pi.getPortal().getName().substring(2, 4), 2);
    } else {
	pi.warpS(pi.getMapId(), (pi.getPortal().getName().startsWith("pt0") ? 13 : (pi.getPortal().getId() - 3)));
	pi.playerMessage(-1, "组合错误.");
    }
 } catch (e) {
    pi.getPlayer().dropMessage(5, "错误: " + e);
 }
}