/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function act() {
    rm.spawnNpc(2013002);
	var em = rm.getEventManager("OrbisPQ");
	if (em != null) {
		em.setProperty("finished", "1");
	}
}