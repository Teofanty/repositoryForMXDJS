/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function act() {
    var eim = rm.getPlayer().getEventInstance();
    var now = eim.getProperty("openedBoxes");
    var nextNum = now + 1;
    eim.setProperty("openedBoxes", nextNum);
    rm.spawnMonster(9300109, 3);
    rm.spawnMonster(9300110, 5);
    rm.mapMessage(5, "一些怪物被召唤.");
}