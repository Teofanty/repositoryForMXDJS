/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    var em = pi.getEventManager("CWKPQ");
    if (em != null) {
	if (em.getProperty("glpq2").equals("5")){
	    pi.warp(610030300, 0);
	} else {
	    pi.playerMessage(5, "门尚未激活!");
	}
    }
}