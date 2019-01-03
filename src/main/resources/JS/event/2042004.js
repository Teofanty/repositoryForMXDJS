/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
var status = 0;
function start() {
    cm.sendYesNo("请问你想要离开？？");
}

function action(mode, type, selection) {
    if (mode != 1) {
        if (mode == 0)
        cm.sendOk("想好之前在来找我。");
        cm.dispose();
        return;
    }
    status++;
    if (status == 1) {
		cm.warp(980000000,0);
        cm.dispose();
    }
}