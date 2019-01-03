/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function act() {
	var eim = rm.getPlayer().getEventInstance();
	if (eim != null && eim.getProperty("stage5") != null) {
		var e = parseInt(eim.getProperty("stage5"));
		if (e == 1) {
			rm.mapMessage("门已经解锁.");
		} else if (e > 1) {
			rm.spawnMonster(9420024 + (parseInt(eim.getProperty("mode")) * 6));
			rm.spawnMonster(9420027 + (parseInt(eim.getProperty("mode")) * 6));
			rm.spawnMonster(9420029 + (parseInt(eim.getProperty("mode")) * 6));
			rm.mapMessage("Some monsters have been summoned.");
		} else if (e <= 0) {
			return;
		}
		eim.setProperty("stage5", "" + (e-1));
	}
}