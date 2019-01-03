/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    var em = pi.getEventManager("Juliet");
    if (em != null && em.getProperty("stage6_1").equals("0")) {
	pi.warp(926110302,0);
	em.setProperty("stage6_1", "1");
    } else {
	pi.playerMessage(5, "有人已经进入这个门.");
    }
}