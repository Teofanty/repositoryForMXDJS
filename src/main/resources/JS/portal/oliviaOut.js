/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getPlayer().getEventInstance() != null ) {
		var s = parseInt(pi.getPlayer().getEventInstance().getProperty("mode"));
		pi.gainExp((s == 0 ? 1500 : (s == 1 ? 5500 : 16000)));
		pi.gainNX((s == 0 ? 150 : (s == 1 ? 300 : 600)));
    }
    pi.warp(682000000,0);
}