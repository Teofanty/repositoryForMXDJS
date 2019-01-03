/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function enter(pi) {
    var eim = pi.getPlayer().getEventInstance();
    var target = eim.getMapInstance(103000802);
    if (eim.getProperty("2stageclear") != null) {
		pi.removeAll(4001007);
		pi.removeAll(4001008);
        pi.getPlayer().changeMap(target, target.getPortal("st00"));
        return true;
    } else {
        pi.playerMessage(5, "现在还不能进入下一阶段。");
        return false;
    }
}
