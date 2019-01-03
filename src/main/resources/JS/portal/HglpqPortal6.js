/* ==================
 脚本类型: 传送门	    
 脚本作者：久久    
 联系方式：121418194
 =====================
 */
function enter(pi) {
    try {
        var em = pi.getEventManager("CWKPQ");
        if (em != null) {
            if (em.getProperty("glpq6") == null || !em.getProperty("glpq6").equals("3") || pi.getPlayer().getEventInstance() == null || !pi.getPlayer().getEventInstance().getName().startsWith("CWKPQ")) {
                pi.playerMessage("这个传送门尚未开启！");
            } else {
                pi.warpParty(803011300, 0);
				pi.gainNX(200);
				pi.getPlayer().finishAchievement(37);
            }
        }
    } catch(e) {
        pi.playerMessage("Error: " + e);
    }
}