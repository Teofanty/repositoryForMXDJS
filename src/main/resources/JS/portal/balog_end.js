/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if (!pi.canHold(4001261,1)) {
		pi.playerMessage(5, "请空出1个背包空间.");
		return false;
	}
	pi.gainExpR(pi.getPlayer().getMapId() == 105100301 ? 130000 : 260000);
	pi.gainNX(pi.getPlayer().getMapId() == 105100301 ? 2000 : 3000);
	pi.gainItem(4001261,1);
	pi.warp(105100100,0);
	pi.playPortalSE();
}