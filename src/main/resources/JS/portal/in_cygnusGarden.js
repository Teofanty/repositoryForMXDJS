/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.isQuestActive(31149)) {
	pi.forceCompleteQuest(31149);
	pi.playerMessage("任务完成");
    } else if (pi.haveItem(4032923)) {
	pi.warp(271040000,0);
	pi.gainItem(4032923, -1);
    } else {
	pi.playerMessage("需要一个梦想钥匙进入.");
    }
}