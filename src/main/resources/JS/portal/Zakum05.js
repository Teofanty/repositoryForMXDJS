/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function enter(pi) {
    if (pi.getQuestStatus(100200) != 2) {
	pi.playerMessage(5, "你还没准备好面对里面强大的怪物.");
	return false;

    } else if (!pi.haveItem(4001017)) {
	pi.playerMessage(5, "你没有火焰之眼,所以你无法进入!");
	return false;
    }
    
    pi.playPortalSE();
    pi.warp(pi.getPlayer().getMapId() + 100, "west00");
    return true;
}