/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    var eim = pi.getPlayer().getEventInstance();
    
    // only let people through if the eim is ready
    if (eim.getProperty("stage1status") == null) { // do nothing; send message to player
	pi.playerMessage(5, "门被阻止.");
    } else {
	pi.warpParty(pi.getMapId() + 300, "st00");
    }
}