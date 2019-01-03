/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.isQuestActive(23051)) {
	pi.getMap(pi.getMapId() + 10).resetFully();
    	pi.warp(pi.getMapId() + 10, 0);
    } else {
	pi.playerMessage(5, "与你的职业教练交谈.");
    }
}