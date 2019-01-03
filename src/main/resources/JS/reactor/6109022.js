/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function act() {
	rm.mapMessage(6, "右上方开关已打开.");
	var flames = Array("a6", "a7", "b6", "b7", "c6", "c7");
	for (var i = 0; i < flames.length; i++) {
		rm.getMap().toggleEnvironment(flames[i]);
	}
}