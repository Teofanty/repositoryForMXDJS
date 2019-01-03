/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	switch(pi.getMapId()) {
		case 930000000:
			pi.warp(930000100,0);
			break;
		case 930000100:
			if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
				pi.warp(930000200,0);
			} else {
				pi.playerMessage(5, "消灭所有的怪物.");
			}
			break;
		case 930000200:
			if (pi.getMap().getReactorByName("spine") != null && pi.getMap().getReactorByName("spine").getState() < 4) {
				pi.playerMessage(5, "请把4个稀释的毒素丢在正确的位置,方可过关");
			} else {
				pi.warp(930000300,0); //assuming they cant get past reactor without it being gone
			}
			break;
	}
}