/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
  if (pi.isQuestActive(21619) == 0) {
  pi.forceStartQuest(21619, "0");//给完成任务条件
  pi.playerMessage(5, "完成骑士平原的任务。回去找斯卡德!");
  return true;
  } else {
 return false;
}}