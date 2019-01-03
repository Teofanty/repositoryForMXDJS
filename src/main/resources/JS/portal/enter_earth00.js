/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
		if (!pi.haveItem(4031346)) {
        pi.getPlayer().dropMessage(5,"您没有魔法种子。");
		return false;
    } else
		pi.gainItem(4031346, -1);
        pi.warp(221000300, "earth00");
		pi.getPlayer().dropMessage(5,"欢迎来到地球防御中心。");
        return true;
}
