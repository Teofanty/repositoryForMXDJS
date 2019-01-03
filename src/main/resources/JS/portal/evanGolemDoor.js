/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    pi.warp(100040000,0);
    pi.playPortalSE();
    if (pi.isQuestActive(22557)) {
	pi.forceCompleteQuest(22557);
	pi.playerMessage(5, "卡米拉获救!");
	pi.getPlayer().gainSP(1);
    }
}