/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (!pi.haveItem(4031448)) {
	pi.gainItem(4031448, 1);
    }
    pi.warp(220070400, 0);
    return true;
}