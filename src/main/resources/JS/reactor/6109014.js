/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function act() { //flame0, im assuming this is topleft
	rm.mapMessage(6, "左上方开关已打开.");
	var flames = Array("a1", "a2", "b1", "b2", "c1", "c2");
	for (var i = 0; i < flames.length; i++) {
		rm.getMap().toggleEnvironment(flames[i]);
	}
	//a1, a2
	//b1, b2
	//c1, c2
	
}