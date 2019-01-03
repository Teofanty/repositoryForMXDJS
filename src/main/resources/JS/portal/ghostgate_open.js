/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getReactorByName("ghostgate").getState() == 1) {
        pi.warp(990000800);
        return true;
    }
    else {
        pi.getPlayer().dropMessage(5, "这门关闭，请找到任务物品完成任务，请依次序扔鞋子、裤子、披风、帽子一个一个扔.");
        return false;
    }
}