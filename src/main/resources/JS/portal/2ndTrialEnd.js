/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
importPackage(java.lang);

function enter(pi) {
    if (pi.haveItem(4031013, 20)) {
        pi.getPlayer().setKeyValue("2ndJobTrialComplete", "1");
        pi.removeAll(4031013);
        pi.warp(100000000);
        var startTime = pi.getPlayer().getKeyValue("2ndTrialStartTime");
        pi.getPlayer().setKeyValue2("2ndJobTrialCompleteTime2", ((System.currentTimeMillis() / 1000) - startTime)+"");
        return true;
    } else {
        pi.getPlayer().message(5, "你已经完成了任务.");
        return false;
    }
}
