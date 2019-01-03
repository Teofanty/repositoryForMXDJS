/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getQuestStatus(25111)==1) {
        pi.warp(915010100 ,1);
    } 
    else if (pi.getQuestStatus(25111)==2) {
        pi.warp(915010100,1);
        pi.spawnMonster(9001046,7,171,182);
    }
}