/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    var mapid = 0;
    var portal = 0;
    switch (pi.getPlayer().getMapId()) {
        case 931050410:
            mapid = 102040600;
            portal = 1;
            break;
    }
    if (mapid != 0) {
        pi.warp(mapid, portal);
    }
    return true;
}