/* ==================
 脚本类型: 传送门	    
 脚本作者：久久    
 联系方式：121418194
 =====================
 */
function enter(pi) {
    var em = pi.getEventManager("CWKPQ");
    if (em != null) {
        if (!em.getProperty("glpq3").equals("10")) {
            pi.playerMessage("这个入口还未开启！"+em.getProperty("glpq3")+"");
        } else {
            pi.warpParty(803011000, 0);
        }
    }
}
