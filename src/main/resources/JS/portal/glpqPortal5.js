/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    var em = pi.getEventManager("CWKPQ");
    if (em != null) {
	if (!em.getProperty("glpq5").equals("5")){
	    pi.playerMessage("门尚未打开.");
	} else {
	pi.removeAll(4001256);
	pi.removeAll(4001257);
	pi.removeAll(4001258);
	pi.removeAll(4001259);
	pi.removeAll(4001260);
	    pi.warp(610030600, 0);
	}
    }
}