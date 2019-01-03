/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    pi.playPortalSE();
    pi.warp(200090000, 5);
    if (pi.getEventManager("Boats").getProperty("haveBalrog").equals("true")) {
	pi.changeMusic("Bgm04/ArabPirate");
    }
}
