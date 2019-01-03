/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.isQuestFinished(20407)) {
	pi.warp(130000000,0);
    } else {
	pi.playerMessage(5, "我必须先击败黑女巫!");
    }
}