/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    var em = pi.getEventManager("Juliet");
    if (em != null && em.getProperty("stage3").equals("3")) {
	pi.warp(926110200,0);
    } else {
	pi.playerMessage(5, "门尚未打开.");
    }
}