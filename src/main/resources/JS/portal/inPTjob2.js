/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 importPackage(Packages.server.quest);

function enter(pi) {
    if (pi.isQuestActive(25100) || pi.isQuestActive(25101)) {
        if (pi.isQuestActive(25101)) {
            MapleQuest.getInstance(25101).forfeit(pi.getPlayer());
        }
        if (pi.isQuestActive(25100)) {
            pi.completeQuest(25100);
        }
        pi.warp(915010000, "out00");
    } else {
        pi.playerMessage("我没有什么可看那里.");
    }
    return true;
}