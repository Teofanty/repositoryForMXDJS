/* ==================
 脚本类型: 传送门	    
 脚本作者：久久    
 联系方式：121418194
 =====================
 */
function enter(pi) {
    if (java.lang.Math.floor(((pi.getPlayer().getJob() % 1000) / 100) * 100 - (pi.getPlayer().getJob() % 100)) == 500) {
		pi.warp(803011150, 1);
		pi.spawnMob(9400566, -594, -504);
		pi.spawnMob(9400566, -34, -144);
		pi.spawnMob(9400566, 479, 156);
		pi.spawnMob(9400567, -662, 156);
    } else {
        pi.playerMessage(5, "只有海盗才能进入这个入口！");
    }
}