/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    var em = pi.getEventManager("CWKPQ");
    if (em != null) {
	if (em.getProperty("glpq1").equals("1")) {
	    em.setProperty("glpq1", "2");
	    pi.warp(pi.getMapId(), 0);
	    pi.mapMessage("[探险]一个冒险家已经通过了门!");
	} else if (em.getProperty("glpq1").equals("2")){
	    pi.warp(610030200, 0);
	} else {
	    pi.playerMessage(5, "请确保队长先告诉杰克先生有关情况!");
	}
    }
}