/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.sendNext("查找10金矿石，4 Typhon羽毛，1功率水晶矿石.");
	qm.forceStartQuest();
	qm.dispose();
}
function end(mode, type, selection) {
	qm.dispose();
}
