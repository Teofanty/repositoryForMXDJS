/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getMap().getCharactersSize() >= 3 || pi.getMap(926110401).getCharactersSize() > 0) {
	pi.warpParty(926110401,0);
    } else {
	pi.playerMessage(5, "需要3个队员都在该地图!");
    }
}