/* ==================
 脚本类型: NPC	    
 脚本作者：久久    
 联系方式：121418194
 =====================
 */

function start() {
if (cm.getPlayer().getMap().getId() == 803011100) {
        cm.sendOk("一个被称为守护大师的传奇生物在等着你。这是一个绯红守护者，矛，锤，一切除了箭射向特殊权力。弓箭手和女人！作为无可争议的弓和箭的主人，你必须用你最强大的攻击——一切从扫射飓风穿透箭摧毁这个强大的生物，达到鲍曼雕像声称祖传的弓！祝你好运!");
cm.dispose();
} else if (cm.getPlayer().getMapId() == 803011140) {
	if (cm.getPlayer().getMap().getAllMonster().size() == 0) {
		if (!cm.haveItem(4001258,1)) {
			cm.gainItem(4001258,1);
		}
		cm.warp(803011140,0);
	} else {
		cm.sendOk("请消灭所有的守卫！");
	}
	cm.dispose();
}
}
