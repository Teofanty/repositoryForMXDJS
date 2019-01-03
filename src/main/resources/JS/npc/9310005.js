/* ==================
 脚本类型: NPC    
 脚本版权：一线海团队-维多
 联系扣扣：297870163
 =====================
 */
var wupdm = 4000194;//物品代码
var wupsl = 50;//物品数量
var zuiduocs = 6;//每天可以挑战的次数
function start() {
    cm.sendYesNo("你确定你要使用"+wupsl+"个#v"+wupdm+"##z"+wupdm+"#进入#r通道#k？\r\n你今天已经进入：#r"+cm.getPlayer().getBossLog("wugong1")+"#k次 ");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("恩... 看起来你并没有准备好。");
	cm.dispose();
	} else if (!cm.haveItem(wupdm, wupsl)) {
       cm.sendOk("你没有"+wupsl+"个#v"+wupdm+"##z"+wupdm+"#!");
       cm.dispose();
	} else if(cm.getPlayer().getBossLog("wugong1") >= zuiduocs){
        cm.sendOk("你今天已经进入：#r"+cm.getPlayer().getBossLog("wugong1")+"#k次,明天在来吧 !");
		cm.dispose();
	} else {
	cm.gainItem(wupdm, -wupsl);
    cm.warp(701010322, "sp");	
	cm.getPlayer().setBossLog('wugong1');
    cm.dispose();
    }
}
