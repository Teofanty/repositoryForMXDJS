/* ==================
 脚本类型: 道具
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function start() {
    var honor = im.nextInt(100, 1000);
    im.getPlayer().gainHonor(honor, true);
}