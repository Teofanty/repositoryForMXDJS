/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function act() {
	rm.mapMessage(6, "右边中间的开关已打开.");
	var flames = Array("d6", "d7", "e6", "e7", "f6", "f7");
	for (var i = 0; i < flames.length; i++) {
		rm.getMap().toggleEnvironment(flames[i]);
	}
}