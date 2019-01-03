/* ==================
 脚本类型: NPC	    
 脚本作者：久久    
 联系方式：121418194
 =====================
 */

function start() {
if (cm.getPlayer().getMap().getId() == 803011100) {
        cm.sendOk("作为一个强大的精英法师，你得知道智慧的价值，以及一个巫师的能力所在。因此，法师房间是一个扭曲的迷宫的迂回概念-瞬移技能是唯一有用的技能，你可以在里面使用。你也必须杀死众多的怪物。在你破解了迷宫并击败了里面所有的敌人后，推断出哪一个法师雕像隐藏了第一个魔法的杖并把它带走！祝你好运!");
	cm.dispose();
} else if (cm.getPlayer().getMapId() == 803011121) {
	if (cm.getPlayer().getMap().getAllMonster().size() == 0) {
		cm.warp(803011122,0);
	} else {
		cm.sendOk("请消灭所有的怪物。");
	}
	cm.dispose();
} else if (cm.getPlayer().getMapId() == 803011122) {
	if (cm.getPlayer().getMap().getAllMonster().size() == 0) {
		if (!cm.haveItem(4001257,1)) {
			cm.gainItem(4001257,1);
		}
		cm.warp(803011100,0);
	} else {
		cm.sendOk("请消灭所有的怪物。");
	}
	cm.dispose();
}
}
