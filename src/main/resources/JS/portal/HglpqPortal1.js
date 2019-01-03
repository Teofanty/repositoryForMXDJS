/* ==================
 脚本类型: 传送门	    
 脚本作者：久久    
 联系方式：121418194
 =====================
 */
function enter(pi) {
    var em = pi.getEventManager("CWKPQ");
    if (em != null) {
        if (em.getProperty("glpq2").equals("5")) {
            pi.warpParty(803010900, 0);
        } else {
            pi.playerMessage(5, "该入口尚未激活！");
        }
    }
}
