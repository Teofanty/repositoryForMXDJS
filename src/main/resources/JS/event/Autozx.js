/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
var setupTask;

function init() {
	//scheduleNew();
}

function scheduleNew() {
	var cal = java.util.Calendar.getInstance();
	var nextTime = cal.getTimeInMillis();
	while (nextTime <= java.lang.System.currentTimeMillis()) {
		nextTime += 5*10*1000;//市场奖励毫秒
	}
	em.getChannelServer().Autozx();
	setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
	setupTask.cancel(true);
}

function start() {
	scheduleNew();
	//em.getChannelServer().Autozx();
} 