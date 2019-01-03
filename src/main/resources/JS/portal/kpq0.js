/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 

function enter(pi) {
    var eim = pi.getPlayer().getEventInstance();
    var target = eim.getMapInstance(103000801);

    if (eim.getProperty("1stageclear") != null) {
        pi.getPlayer().changeMap(target, target.getPortal("st00"));
		pi.removeAll(4001007);
		pi.removeAll(4001008);
        return true;
    } else {
        pi.playerMessage(5, "任务尚未完成，你现在还不能进入下一阶段。");
        return false;
    }
}
