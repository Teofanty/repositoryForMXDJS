/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (!pi.haveMonster(9300216)) {
	pi.playerMessage("请消灭怪物,在进行尝试!");
    } else {
	pi.dojo_getUp();
	pi.getMap().setReactorState();
    }
}