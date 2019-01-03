/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.isQuestFinished(20407)) {
	pi.warp(924010200,0);
    } else if (pi.isQuestFinished(20406)) {
	pi.warp(924010100,0);
    } else if (pi.isQuestFinished(20404)) {
	pi.warp(924010000,0);
    } else {
	pi.playerMessage(5, "我不应该在这里..它是令人毛骨悚然!");
    }
}