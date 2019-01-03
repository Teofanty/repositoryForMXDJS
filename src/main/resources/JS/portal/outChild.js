/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    pi.playPortalSE();
    if (pi.getQuestStatus(21001) == 0) {
	pi.warp(914000220, 2);
    } else {
	pi.warp(914000400, 2);
    }
}