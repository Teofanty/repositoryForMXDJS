/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getPlayer().getEventInstance() != null) {
    	//pi.gainExp_PQ(200, 1.5);
    	//pi.gainNX(2500);
	pi.addTrait("will", 15);
	pi.addTrait("insight", 3);
		if (pi.canHold(4001530, 1) && pi.isGMS()) { //TODO JUMP
			pi.gainItem(4001530, 1);
		}
    }
    pi.warp(211000002,0);
}