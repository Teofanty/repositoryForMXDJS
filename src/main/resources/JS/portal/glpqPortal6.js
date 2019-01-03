/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
try {
    var em = pi.getEventManager("CWKPQ");
    if (em != null) {
	if (em.getProperty("glpq6") == null || !em.getProperty("glpq6").equals("3") || pi.getPlayer().getEventInstance() == null || !pi.getPlayer().getEventInstance().getName().startsWith("CWKPQ")){
	    pi.playerMessage("门尚未打开.");
	} else {
	    pi.warp(610030700, 0);
	}
    }
} catch(e) {
    pi.playerMessage("错误: " + e);
}
}