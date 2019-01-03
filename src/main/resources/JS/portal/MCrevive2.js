/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if ( pi.getPlayer().getCarnivalParty().getTeam() == 0 ) {
	pi.warp( pi.getMapId() - 100, "red_revive" );
    } else {
	pi.warp( pi.getMapId() - 100, "blue_revive" );
    }
}