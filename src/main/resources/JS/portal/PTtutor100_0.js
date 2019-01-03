/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.isQuestActive(25000) || pi.isQuestFinished(25000)) {  
        pi.warp(915000200, "out00");
    } else {
        pi.getPlayer().dropMessage(5, "你最好的男人，加斯东，会看到最后的准备。 跟他说话.");
    }
}