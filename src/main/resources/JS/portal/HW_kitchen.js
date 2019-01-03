/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function enter(pi) {
    if (pi.getQuestStatus(13108)==1 && pi.itemQuantity(3994659) < 1){
        pi.warp(910028360,1);
		pi.forceCompleteQuest(13108);
		pi.gainItem(3994659,1);
        return;
	} else {
	pi.topMsg("您现在无法进入餐厅.");
	}
}