/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function act(){
try {
	//map = rm.getPlayer().getMap();
    rm.mapMessage(5, "由于<时空裂痕的碎片D>填补了时空的裂痕，帕普拉图斯出现了！");
    rm.changeMusic("Bgm09/TimeAttack");
    rm.spawnMonster(8500000, -410, -400);
	rm.getPlayer().startMapTimeLimitTask(1200, rm.getPlayer().getMap());
    rm.getMap(220080000).setReactorState();
} catch(e) {
    rm.mapMessage(5, "错误 " + e);
}
}