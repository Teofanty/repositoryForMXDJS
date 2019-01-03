/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    var em = pi.getEventManager("Juliet");
    if (em != null && em.getProperty("stage4").equals("2")) {
	pi.warp(926110203,0);
    } else {
	pi.playerMessage(5, "该门尚未打开.");
    }
}