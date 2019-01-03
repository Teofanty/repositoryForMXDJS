var status = -1;

function start() {
    if (cm.getQuestStatus(3360) == 2) {
	if (cm.getMapId() == 261010000) {
	    cm.playerMessage("你的名字在名单上。 你现在将被运送到秘密隧道.");
	    cm.warp(261030000, "sp_jenu");
	} else {
	    cm.playerMessage("你的名字在名单上。 你现在将被运送到秘密隧道.");
	    cm.warp(261030000, "sp_alca");
	}
	cm.dispose();
    } else if (cm.getQuestStatus(3360) == 1) {
	cm.sendGetText("Please enter the password.");
    } else {
	cm.dispose();
    }
}

function action(mode, type, selection) {
    var pw = cm.getText();
    if (cm.getQuestRecord(3360).getCustomData().equals(pw)) {
	cm.forceCompleteQuest(3360);
	cm.playerMessage("已经安全脱离.");
    } else {
	cm.sendOk("无效的密码.");
    }
    cm.dispose();
}