/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function start() {
    cm.sendYesNo("你想退出吗？");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendNext("恩... 看起来你并没有想好。");
	} else {
	cm.warp(980000000,0);
    }
    cm.dispose();
}
