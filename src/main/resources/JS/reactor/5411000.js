/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function act(){
try {
    rm.changeMusic("Bgm09/TimeAttack");
    rm.spawnMonster(9420513, -146, 225);
    rm.mapMessage(5, "如你所愿，这里是Capt Latanica.");
} catch(e) {
    rm.mapMessage(5, "错误 " + e);
}
}