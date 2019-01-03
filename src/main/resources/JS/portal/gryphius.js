/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if(pi.isQuestActive(1451) || pi.isQuestActive(1453) || pi.isQuestActive(1455) || pi.isQuestActive(1457) || pi.isQuestActive(1459)){
        pi.resetMap(924000201);
        pi.playPortalSE();
        pi.warp(924000201, 2);
    }else{
    pi.playPortalSE();
    pi.warp(240020101, "out00");
}
}