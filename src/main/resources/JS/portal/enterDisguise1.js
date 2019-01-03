/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if (!pi.getPlayerCount(130010010) == 0) {
		pi.playerMessage("地图有人.");
		} else {
    if (!pi.haveItem(4032179, 1)) {
		pi.playerMessage("你没有圣地搜查证的话，请从南哈特得到它.");
		} else {
    if (pi.getQuestStatus(20301) == 1) {
	pi.removeNpc(130010010, 1104100);
	pi.getMap(130010010).killAllMonsters(false);
	pi.getMap(130010010).spawnNpc(1104100, new java.awt.Point(2517, 88));
	pi.warp(130010010, 0);
	} else {
    if (pi.getQuestStatus(20302) == 1) {
	pi.removeNpc(130010010, 1104101);
	pi.getMap(130010010).killAllMonsters(false);
	pi.getMap(130010010).spawnNpc(1104101, new java.awt.Point(2517, 88));
	pi.warp(130010010, 0);
	} else {
	if (pi.getQuestStatus(20303) == 1) {
	pi.removeNpc(130010010, 1104102);
	pi.getMap(130010010).killAllMonsters(false);
	pi.getMap(130010010).spawnNpc(1104102, new java.awt.Point(2517, 88));
	pi.warp(130010010, 0);
	} else {
	if (pi.getQuestStatus(20304) == 1) {
	pi.removeNpc(130010010, 1104103);
	pi.getMap(130010010).killAllMonsters(false);
	pi.getMap(130010010).spawnNpc(1104103, new java.awt.Point(2517, 88));
	pi.warp(130010010, 0);
	} else {
	if (pi.getQuestStatus(20305) == 1) {
	pi.removeNpc(130010010, 1104104);
	pi.getMap(130010010).killAllMonsters(false);
	pi.getMap(130010010).spawnNpc(1104104, new java.awt.Point(2517, 88));
	pi.warp(130010010, 0);
	} else {
	pi.playerMessage("你没有接受任务!");
    }
}}}}}}}