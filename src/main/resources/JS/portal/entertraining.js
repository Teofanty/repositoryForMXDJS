/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getQuestStatus(1041) == 1) {
	pi.warp(1010100, 4);
    } else if (pi.getQuestStatus(1042) == 1) {
	pi.warp(1010200, 4);
    } else if (pi.getQuestStatus(1043) == 1) {
	pi.warp(1010300, 4);
    } else if (pi.getQuestStatus(1044) == 1) {
	pi.warp(1010400, 4);
    } else {
	pi.playerMessage(5, "只有接受麦加任务的冒险家才能进入。");
    }
}