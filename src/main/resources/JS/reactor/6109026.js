/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function act() {
	rm.mapMessage(6, "底部中央开关已打开.");
	var flames = Array("g3", "g4", "g5", "h3", "h4", "h5", "i3", "i4", "i5");
	for (var i = 0; i < flames.length; i++) {
		rm.getMap().toggleEnvironment(flames[i]);
	}
}