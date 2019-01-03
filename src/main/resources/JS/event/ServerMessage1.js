/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
var Message = new Array("刷喇叭辱骂他人、扰乱游戏秩序、借用bug获利的一律封号！遇到问题请找 小美 ，她会帮助你们的。");

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    setupTask = em.schedule("start", 1300000);
}

function cancelSchedule() {
	setupTask.cancel(false);
}

function start() {
    scheduleNew();
    em.broadcastYellowMsg("[" + em.getChannelServer().getServerName() + "] " + Message[Math.floor(Math.random() * Message.length)]);
}