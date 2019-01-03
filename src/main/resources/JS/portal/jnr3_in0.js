/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.getMap().getReactorByName("jnr3_out1").getState() > 0) {
	pi.warp(926110201,0);
    } else {
	pi.playerMessage(5, "请把芯片钥匙丢在门口,你只有几秒的时间!");
    }
}