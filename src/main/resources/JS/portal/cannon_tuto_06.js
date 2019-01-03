/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	pi.EnableUI(1);
	pi.DisableUI(1);
    pi.sendDirectionStatus(4, 1096003);
	pi.sendDirectionStatus(3, 4);
	pi.openNpc(1096003);
}