/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
var Message = new Array("收集火药桶,均可以到射手公园找阿乐米捐献,达到3000个以后召唤BOSS,各种卷轴!野外BOSS均有时尚椅子掉落!一起去寻找他们的下落把!");

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    setupTask = em.schedule("start", 2000000);
}

function cancelSchedule() {
	setupTask.cancel(false);
}

function start() {
    scheduleNew();
    em.broadcastYellowMsg("[" + em.getChannelServer().getServerName() + "] " + Message[Math.floor(Math.random() * Message.length)]);
}