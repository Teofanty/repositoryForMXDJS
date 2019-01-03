/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
	if (pi.isQuestFinished(21745)) {//判断是否完成任务
	    pi.warp(925040000,2); 
		 return true;
	}
    pi.playerMessage("尚未接受相关任务.无法进入.");
	 return true;
}