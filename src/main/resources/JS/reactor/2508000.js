/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function act(){
    if (rm.getPlayer().getMap().getId() / 100 % 100 != 38)
        rm.warp(rm.getPlayer().getMap().getId() + 100);
}