/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    var em = pi.getEventManager("CWKPQ");
    if (em != null) {
	if (!em.getProperty("glpq4").equals("5")){
	    pi.playerMessage("门尚未打开.");
	} else {
	    pi.warp(610030500, 0);
	}
    }
}