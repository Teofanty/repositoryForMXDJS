/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var itemSet = new Array(4010003, 4010000, 4010002, 4010005, 4010004, 4010001);
var rand = Math.floor(Math.random() * itemSet.length);


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 2 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	cm.warp(105040300);
            
	if (cm.getMapId() == 105040300) {
	    //if (cm.getQuestStatus(2052) == 1 && !cm.haveItem(4031025)) {
		if (!cm.haveItem(4031025)) {
			cm.gainItem(4031025, 10);
	    }
	} else {
	    cm.gainItem(itemSet[rand], 2);
	}
	cm.dispose();
    }
}