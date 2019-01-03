/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getInfoQuest(21019).equals("helper=clear")) {
	pi.updateInfoQuest(21019, "miss=o;helper=clear");
	pi.playerSummonHint(false);
    }
}