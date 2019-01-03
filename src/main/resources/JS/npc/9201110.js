/* ==================
 脚本类型: NPC	    
 脚本作者：久久    
 联系方式：121418194
 =====================
 */

function action(mode,type,selection) {
	switch(cm.getPlayer().getMapId()) {
		case 803011100:
        		cm.sendOk("每个飞侠都知道，最好的攻击是你永远看不到的攻击。因此，为了更好地说明这一点，你会在一个平台上，你只能看到怪物以及这些眼睛，你的行动必须不被察觉。消灭所有的眼睛，找到到飞侠雕像，领取原始爪！祝你好运!");
			break;
		case 803011130:
			if (cm.isAllReactorState(6108004, 1) && !cm.haveItem(4001256, 1)) {
				cm.gainItem(4001256,1);
				cm.sendOk("干得漂亮！.");
			} else {
				cm.sendOk("现在走吧，用你的移动技能摧毁所有警觉的眼睛，完成后向我汇报。");
			}
			break;
	}
	cm.dispose();
}
