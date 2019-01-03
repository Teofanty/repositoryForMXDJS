/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function act() {
    var map = rm.getPlayer().getMapId();
    var b = Math.abs(rm.getPlayer().getMapId() - 809050005);
    if (map != 809050000 && map != 809050010) {
        rm.spawnMonster(9400217 - b, 2);
        rm.spawnMonster(9400218 - b, 3);
    } else {
        rm.spawnMonster(9400209, 6);
        rm.spawnMonster(9400210, 9);
    }
    rm.mapMessage(5, "一些怪物被召唤.");
}