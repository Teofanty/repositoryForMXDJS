/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {

    if (pi.getQuestStatus(2601) == 2) {

	pi.playPortalSE();

	pi.warp(103050920, 1);

    } else {

	pi.playerMessage(5, "继续下一个地图之前，必须接受任务.");
    }

}