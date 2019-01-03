/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function enter(pi) {
  if (pi.getQuestStatus(32102)==1){
    pi.gainItem(4033824,30);
	pi.warp(101070001,0);
	pi.forceCompleteQuest(32102);
    return true;
  } else {
    pi.warp(101071000,0);
  }
} 