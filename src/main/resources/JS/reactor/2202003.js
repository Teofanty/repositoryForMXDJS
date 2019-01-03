/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function act(){

    rm.dropItems();

    var eim = rm.getPlayer().getEventInstance();
    if (eim != null) {
	var newp = parseInt(eim.getProperty("stage2")) + 1;
	if (newp <= 10) {
	    eim.setProperty("stage2", newp);
	    rm.getMap().startSimpleMapEffect("您已收集 " + newp + " 通过.", 5120018);
	}
    }
}