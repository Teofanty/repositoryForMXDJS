/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
   var em = pi.getEventManager("HorntailBattle");

    if (em != null) {
	var prop = em.getProperty("preheadCheck");

	if (prop != null && prop.equals("2")) {
	    pi.mapMessage(6, "巨大的生物正从深洞穴进入.")
	    em.setProperty("preheadCheck", "3");
	}
    }
}