/* ==================
 脚本类型:  NPC	    
 脚本作者：月亮     
 联系方式：2412614144
 =====================
 */
function enter(pi) {
    if (pi.getPlayer().getClient().getChannel() != 1 && pi.getPlayer().getClient().getChannel() != 2 && pi.getPlayer().getClient().getChannel() != 3) {
        pi.playerMessage(5, "暴力熊只能在頻道1、2、3能打。");
        return false;
    }
		 if (pi.getPlayer().getBossLog('baoli')>=5) { 
     pi.playerMessage(5,"每天只能挑战5次！"); 
  return false;
  }
      if (!pi.haveItem(4032246)) {
	pi.playerMessage(5, "你没有梦幻主题娃娃，所以无法挑战.");
	return false;
	}
    if (pi.getPlayerCount(551030200) <= 0) { // 判断地图没有人
        var papuMap = pi.getMap(551030200);
        papuMap.resetFully();
        pi.warp(551030200);
		pi.getPlayer().setBossLog('baoli'); 
        return true;
    } else {
        if (pi.getMap(551030200).getSpeedRunStart() == 0 && (pi.getMonsterCount(551030200) <= 0 || pi.getMap(551030200).isDisconnected(pi.getPlayer().getId()))) {
            pi.warp(551030200);
			pi.getPlayer().setBossLog('baoli'); 
            return true;
        } else {
            pi.playerMessage(5, "里面的战斗已经开始，请稍后再尝试。");
            return false;
        }
    }
}