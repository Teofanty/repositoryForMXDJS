/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if (pi.haveItem(5252001,1)) {
	//pi.removeAll(5252001);
	pi.gainItem(5252001,-1);
	pi.warp(674030300, "sp");
	return false;
	} else {
    pi.playerMessage(5, "你没有藏宝城门票,请到商城购买.");
	return false;
}}