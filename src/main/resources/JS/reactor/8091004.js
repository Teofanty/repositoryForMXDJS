/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function act() {
    var rand = (Math.random() * 2) + 1;
    var q = 0;
    var q2 = 0;
    if (rand < 2) {
	q = 2;
	q2 = 3;
    } else {
	q = 3;
	q2 = 2;
    }
    rm.spawnMonster(9400652, q);
    rm.spawnMonster(9400653, q2);
}