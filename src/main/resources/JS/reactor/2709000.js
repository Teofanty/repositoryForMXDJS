/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function act() {
    /*   rm.killMob(8820020);
    rm.killMob(8820021);
    rm.killMob(8820022);
    rm.killMob(8820023);*/
    //rm.scheduleWarp(3600, 270050300);
    rm.killAllMob();
    rm.spawnMonster(8820008);
    if (!rm.getPlayer().isGM()) {
        rm.getMap().startSpeedRun();
    }
}