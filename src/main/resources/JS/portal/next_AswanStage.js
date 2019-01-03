/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 importPackage(Packages.client);

function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
        //pi.resetMap(pi.getPlayer().getMapId() + 100);
        pi.warp(pi.getPlayer().getMapId() + 100, 0);
        return true;
    } else {
        pi.playerMessage(5, "请消灭所有的怪物，得到你的奖励!");
        return false;
    }
    return true;
}