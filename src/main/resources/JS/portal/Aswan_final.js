/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 importPackage(Packages.client);

function enter(pi) {
    switch(pi.getMapId()) {
        case 955000300:
            if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
                pi.getPlayer().gainExp(30000, true, true, true);
                pi.getPlayer().addHonourExp(100 * pi.getPlayer().getHonourLevel(), true);
                pi.warp(262010000,0);
                pi.worldMessage(6, "[Azwan] " + pi.getPlayer().getName() + " 完成希拉的刚在通道的Azwan解放 "+ pi.getClient().getChannel() +".");
            } else {
                pi.playerMessage(5, "你必须消灭所有的怪物才能继续.");
            }
            break;
    }
}