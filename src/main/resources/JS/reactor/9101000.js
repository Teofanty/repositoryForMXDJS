/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
importPackage(Packages.tools);

function act() {
    rm.spawnMonster(9300061, 1, 0, 0); // (0, 0) is temp position
    rm.getClient().getMap().startMapEffect("保护月亮兔子，捣碎磨坊，收集10个月亮兔子的米糕!", 5120016, 7000);
    rm.getClient().getMap().broadcastMessage(MaplePacketCreator.bunnyPacket()); // Protect the Moon Bunny!
    rm.getClient().getMap().broadcastMessage(MaplePacketCreator.showHPQMoon());
    rm.getClient().getMap().showAllMonsters();
    
}