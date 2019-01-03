/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    pi.playPortalSE();
    
    if (pi.getQuestStatus(21014) != 2) {
	pi.warp(140000000, 1);
    } else {
	pi.warp(140000000, 3);
    }
}