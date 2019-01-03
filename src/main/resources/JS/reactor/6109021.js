/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function act() { //flame1, top center?
	rm.mapMessage(6, "顶部中央开关已打开.");
	var flames = Array("a3", "a4", "a5", "b3", "b4", "b5", "c3", "c4", "c5");
	for (var i = 0; i < flames.length; i++) {
		rm.getMap().toggleEnvironment(flames[i]);
	}
}