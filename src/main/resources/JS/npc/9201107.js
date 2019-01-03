/* ==================
 脚本类型: NPC	    
 脚本作者：久久    
 联系方式：121418194
 =====================
 */

function start() {
if (cm.getPlayer().getMap().getId() == 803011100) {
        cm.sendOk("难以置信的力量和力量，任何人都可以实现。但是，勇士之所以与众不同，是因为他们的钢铁意志。不管机会如何，真正的勇士都会坚持到底，直到胜利得到保证。因此，勇士房间是一个残酷的道路，其中房间本身对你，以及超强大的怪物内。使用你的技能来摆脱效果，击败怪物在里面到达战士雕像，并要求主剑。祝你好运!");
cm.dispose();
} else if (cm.getPlayer().getMapId() == 803011110) {
	if (cm.getPlayer().getMap().getAllMonster().size() == 0) {
		if (!cm.haveItem(4001259,1)) {
			cm.gainItem(4001259,1);
		}
		cm.warp(803011110,0);
	} else {
		cm.sendOk("请击败所有的绯红守卫！");
	}
	cm.dispose();
}
}
