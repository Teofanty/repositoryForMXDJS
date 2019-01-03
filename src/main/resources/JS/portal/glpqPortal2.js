/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    var em = pi.getEventManager("CWKPQ");
    if (em != null) {
	pi.warpS(610030300, 0);
	if (!em.getProperty("glpq3").equals("10")){
	    em.setProperty("glpq3", parseInt(em.getProperty("glpq3")) + 1);
	    pi.mapMessage(6, "一个冒险家已经通过!");
	    if (em.getProperty("glpq3").equals("10")) {
		pi.mapMessage(6, "该Antellion授予您访问到下一个门！继续!");
		pi.getMap().changeEnvironment("3pt", 2);
	    }
	}
    }
}