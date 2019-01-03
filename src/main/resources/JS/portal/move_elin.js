
function enter(pi) {
	if (pi.isQuestFinished(21749) && !pi.isQuestFinished(21750)) {
	pi.forceStartQuest(21750);//开始任务
	pi.warp(300000100, "out00");
	pi.playerMessage(5, "去找赫雷娜看看吧.");
	} else {
    pi.warp(300000100, "out00");
    pi.playerMessage(5, "现在通过时间门.");
    return true;
}}
