/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getPlayer().getInventory(pi.getInvType(-1)).findById(1003036) == null) {
	pi.playerMessage(5, "你必须装备符咒独眼野猪帽子。");
	pi.warp(105050400);
	return true;
	}
	return false;
}