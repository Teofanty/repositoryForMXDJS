/* ==================
 脚本类型: 传送门	    
 脚本作者：久久    
 联系方式：121418194
 =====================
 */
function enter(pi) {
    if (java.lang.Math.floor(((pi.getPlayer().getJob() % 1000) / 100) * 100 - (pi.getPlayer().getJob() % 100)) == 100) {
        pi.warp(803011110, 0);
    } else {
        pi.playerMessage(5, "只有战士 才能通过这个入口.");
        //pi.playerMessage(5, "Your job: " + (((pi.getPlayer().getJob() % 1000) / 100) * 100 - (pi.getPlayer().getJob() % 100)));
    }
}
