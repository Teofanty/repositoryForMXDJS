/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getPlayer().getEventInstance() != null) {
    	//pi.gainExp_PQ(70, 1.0);
    	//pi.gainNX(1000);
		if (pi.canHold(4001529, 1)) { //TODO JUMP
			pi.gainItem(4001529, 1);
		}
    }
    pi.warp(932000000,0);
}