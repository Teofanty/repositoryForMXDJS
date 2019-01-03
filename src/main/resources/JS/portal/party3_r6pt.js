/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
 try {
    var em = pi.getEventManager("OrbisPQ");
    if (em != null && em.getProperty("stage6_" + (pi.getPortal().getName().substring(2, 5)) + "").equals("1")) {
	pi.warpS(pi.getMapId(),(pi.getPortal().getName().startsWith("rp16") ? "pt03" : (pi.getPortal().getId() + 4)));
	pi.playerMessage(5, "组合正确");
    } else {
	pi.warpS(pi.getMapId(), (pi.getPortal().getName().startsWith("rp01") ? 5 : (pi.getPortal().getName().startsWith("rp05") ? 1 : (pi.getPortal().getId() - 4))));
	pi.playerMessage(5, "组合不正确");
    }
 } catch (e) {
    pi.getPlayer().dropMessage(5, "错误: " + e);
 }
}