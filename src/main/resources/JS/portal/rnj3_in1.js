/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getMap().getReactorByName("rnj3_out2").getState() > 0) {
	pi.warp(926100202,0);
    } else {
	pi.playerMessage(5, "请把芯片钥匙丢在门口,抓紧时间你只有几秒的时间!");
    }
}