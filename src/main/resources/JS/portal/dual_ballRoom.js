/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getQuestStatus(2363) == 1 && !pi.haveItem(4032616)) { //too lazy to do the map shit
	pi.gainItem(4032616,1);
    }
}