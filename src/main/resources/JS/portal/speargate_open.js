/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getReactorByName("speargate").getState() == 4) {
        pi.warpParty(990000401);
        return true;
    } else {
        pi.getPlayer().dropMessage(5, "门处于关闭状态，请先完成任务通过.");
        return false;
    }
}