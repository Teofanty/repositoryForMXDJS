/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.isQuestActive(1431) || pi.isQuestActive(1432) || pi.isQuestActive(1433)) {//warrior
        pi.resetMap(910540100);
        pi.warp(910540100,0);
    }else if (pi.isQuestActive(1435) || pi.isQuestActive(1436) || pi.isQuestActive(1437)) {//mage
        pi.resetMap(910540200);
        pi.warp(910540200,0);
    }else if (pi.isQuestActive(1439) || pi.isQuestActive(1440)) {//bowman
        pi.resetMap(910540300);
        pi.warp(910540300,0);
    }else if (pi.isQuestActive(1442) || pi.isQuestActive(1443) || pi.isQuestActive(1447)) {//theif
        pi.resetMap(910540400);
        pi.warp(910540400,0);
    }else if (pi.isQuestActive(1445) || pi.isQuestActive(1446) || pi.isQuestActive(1448)) {//pirate
        pi.resetMap(910540500);
        pi.warp(910540500,0);
    }else{
        pi.playerMessage("发生了一些错误");
        pi.warp(100000000,0);
    }
}