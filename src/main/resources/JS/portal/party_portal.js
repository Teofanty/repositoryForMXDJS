/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    var eim = pi.getPlayer().getEventInstance();
    switch(pi.getMapId()) {
	case 910340100:
    	    if (eim.getProperty("1stageclear") == null) { // do nothing; send message to player
		pi.playerMessage(5, "门被阻止.");
    	    } else {
 		pi.warp(910340200, 0);
            }
	    break;
	case 910340200:
    	    if (eim.getProperty("2stageclear") == null) { // do nothing; send message to player
		pi.playerMessage(5, "门被阻止.");
    	    } else {
 		pi.warp(910340300, 0);
            }
	    break;
	case 910340300:
    	    if (eim.getProperty("3stageclear") == null) { // do nothing; send message to player
		pi.playerMessage(5, "门被阻止.");
    	    } else {
 		pi.warp(910340400, 0);
            }
	    break;
	case 910340400:
    	    if (eim.getProperty("4stageclear") == null) { // do nothing; send message to player
		pi.playerMessage(5, "门被阻止.");
    	    } else {
 		pi.warp(910340500, 0);
            }
	    break;
    }
}