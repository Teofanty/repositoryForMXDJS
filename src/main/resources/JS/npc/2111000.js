
function start() {
	if (!cm.isQuestFinished(6032) && cm.getJob() >= 2000) {
	cm.forceStartQuest(6029);
	cm.forceStartQuest(6030);//给完成任务条件
	cm.sendNext("学习了无聊的炼金术课程。啊，终于结束了！.");
	cm.dispose();
	}
	cm.sendNext("请问有什么事吗?");
	cm.dispose();
}
