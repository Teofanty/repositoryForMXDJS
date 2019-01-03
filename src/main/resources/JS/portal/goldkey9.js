/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    var reac = pi.getMap().getReactorByName("goldkey9");
    if (reac.getState() == 0) {
	reac.hitReactor(pi.getClient());
    }
}