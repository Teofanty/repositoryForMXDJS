/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
        if (pi.getPlayer().getParty() != null && pi.getPlayer().getMap().getAllMonstersThreadsafe().size() == 0) {
				var cleared = java.lang.Math.random() > 0.9;
				if (cleared) {
					pi.warpParty(921160400);
				} else {
					pi.warp(921160300 + ((Math.floor(java.lang.Math.random() * 6) | 0) * 10), 0);
				}
				pi.playPortalSE();
        } else {
                pi.playerMessage(5,"此门不可用. 杀死所有的怪物.");
        }
}