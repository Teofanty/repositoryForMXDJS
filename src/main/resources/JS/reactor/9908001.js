/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function act() {
    var eim = rm.getEventInstance();
    if (eim != null) {
	var keys = eim.getProperty("goldkey");
	keys++
	eim.setProperty("goldkey", keys);
	rm.playerMessage("Acquired key "+keys+".");
    }
}
