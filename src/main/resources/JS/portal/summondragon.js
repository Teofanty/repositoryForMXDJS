/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
    if (pi.haveItem(4001094)) {
	pi.getMap().getReactorByName("dragonBaby").hitReactor(pi.getClient());
	pi.getMap().getReactorByName("dragonBaby2").hitReactor(pi.getClient());
	pi.playerMessage(5, "九灵龙的蛋，这是什么舒服嵌套的鸡蛋已发出的神秘的光芒，并已回到了它的巢穴。");
	pi.gainItem(4001094, -1);
    }
}