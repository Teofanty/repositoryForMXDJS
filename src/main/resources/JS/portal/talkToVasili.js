/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function enter(pi) {
    if (pi.getQuestStatus(32214)==1){
        pi.openNpc(10305, "ExplorerTut04");
     }
    if (pi.getQuestStatus(32214)==2){
        pi.openNpc(10305, "ExplorerTut05");
    } else {
        pi.openNpc(10305);
  }
}
