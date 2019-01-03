/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function init() {
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("isUp","true");
    em.setProperty("isDown","true");
    onDown();
}

function onDown() {
    em.getChannelServer().getMapFactory().getMap(222020100).resetReactors();
    em.warpAllPlayer(222020210, 222020211);
    em.setProperty("isDown","true");
    em.schedule("goingUp", 60000);
}

function goingUp() {
    em.warpAllPlayer(222020110, 222020111);
    em.setProperty("isDown","false");
    em.schedule("onUp", 50000);
    em.getChannelServer().getMapFactory().getMap(222020100).setReactorState();
}

function onUp() {
    em.getChannelServer().getMapFactory().getMap(222020200).resetReactors();
    em.warpAllPlayer(222020111, 222020200);
    em.setProperty("isUp","true");
    em.schedule("goingDown", 60000);
}

function goingDown() {
    em.warpAllPlayer(222020211, 222020100);
    em.setProperty("isUp","false");
    em.schedule("onDown", 50000);
    em.getChannelServer().getMapFactory().getMap(222020200).setReactorState();
}

function cancelSchedule() {
}