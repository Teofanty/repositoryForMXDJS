/* ==================
 脚本类型: 传送门	    
 脚本作者：久久    
 联系方式：121418194
 =====================
 */
function enter(pi) {
    var em = pi.getEventManager("CWKPQ");
    if (em != null) {
        if (!em.getProperty("glpq5").equals("5")) {
            pi.playerMessage("这个传送门尚未开启！");
        } else {
            pi.removeAll(4001256);
            pi.removeAll(4001257);
            pi.removeAll(4001258);
            pi.removeAll(4001259);
            pi.removeAll(4001260);
            pi.warpParty(803011200, 0);
        }
    }
}
