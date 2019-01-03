/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
	pi.givePartyItems(4310020, 1);
	pi.warpParty(951000000,0); //next
    } else {
	pi.playerMessage(5, "门尚未打开.");
    }
}