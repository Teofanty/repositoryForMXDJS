/* ==================
 脚本类型: NPC    
 脚本版权：一线海团队-维多
 联系扣扣：297870163
 =====================
 */
var zuididj = 70;//最低等级
function start() {
    cm.sendYesNo("挑战蜈蚣大王需要条件：\r\n最低等级 ：#r"+zuididj+"#k级!");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("恩... 看起来你并没有准备好。");
	cm.dispose();
	} else if(cm.getLevel() < zuididj){
        cm.sendOk("你的等级不足 ：#r"+zuididj+"#k级!");
		cm.dispose();
	} else {
	cm.warp(701010321, 0);
	cm.dispose();
    }
}
