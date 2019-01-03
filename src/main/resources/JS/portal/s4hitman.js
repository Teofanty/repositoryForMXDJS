/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.isQuestActive(6201)) { //ninja ambush :D
	pi.getMap().killAllMonsters(true);
	pi.spawnMonster(9300088,6); //is it good idea to spawn directly here?
	pi.playerMessage(5, "黑暗的主门徒出现了.");
    } else {
    	pi.playerMessage(5, "此门当前不可用");
    }
}