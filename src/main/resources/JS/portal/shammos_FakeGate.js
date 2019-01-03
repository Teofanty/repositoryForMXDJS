/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
        if (pi.getPlayer().getParty() != null && pi.getMap().getAllMonstersThreadsafe().size() == 0 && pi.isLeader()) {
                //pi.warpParty_Instanced(921120600);
				pi.warpParty(921120100);
                pi.playPortalSE();
        } else {
                pi.playerMessage(5,"此门不可用. 首先毁灭所有怪物.");
        }
}