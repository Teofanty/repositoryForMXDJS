/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function enter(pi) {
	if (pi.getQuestStatus(32204)==2 && pi.getQuestStatus(32207)==0){
        pi.warp(4000013, 0);
        return;
   } else {
	    pi.openNpc(10310, "ExplorerTut01");
	}
	if (pi.getQuestStatus(32207)==2 && pi.getQuestStatus(32210)==0){
        pi.warp(4000014, 0);	
        return;
   } else {
	    pi.openNpc(10310, "ExplorerTut02");
	}	
    if (pi.getQuestStatus(32210)==1){
        pi.warp(4000020, 0);	
        return;
   } else {
	    pi.openNpc(10310, "ExplorerTut03");
	}	
  }
 