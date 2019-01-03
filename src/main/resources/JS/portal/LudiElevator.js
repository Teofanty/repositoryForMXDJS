/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
var status;
function start() {
    status = -1;
	action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode < 0)
        cm.dispose();
    else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		if (cm.getMapId() == 222020200) {
			cm.TimeMoveMap(222020210, 222020100, 13);
			cm.getPlayer().dropMessage(6, "档馒且 摸篮 秋府坷胶 啪 2摸, 酒阀付阑捞 乐绰 摸涝聪促.");
			cm.dispose();
		} else {
			cm.TimeMoveMap(222020110, 222020200, 13);
			cm.getPlayer().dropMessage(6, "档馒且 摸篮 秋府坷胶 啪 99摸, 风叼宏府决捞 乐绰 摸涝聪促.");
			cm.dispose();
		}
	}





else { 
			cm.dispose();
		}
    }
}