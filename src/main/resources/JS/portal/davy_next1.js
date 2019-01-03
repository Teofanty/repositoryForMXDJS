/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
 try {
    var em = pi.getEventManager("Pirate");
    if (em != null && em.getProperty("stage2").equals("3")) {
	pi.warp(925100200,0); //next
    } else {
	pi.playerMessage(5, "该门尚未打开");
    }
 }catch(e) {
    pi.playerMessage(5, "错误: " + e);
 }
}