/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
  
function act() {
    rm.mapMessage(5, "当光闪烁时，有人出现在光之外.");
    rm.spawnNpc(2013001);
	var em = rm.getEventManager("OrbisPQ");
	if (em != null) {
		//rm.givePartyExp(6000);
		em.setProperty("pre", "1");
	}
}