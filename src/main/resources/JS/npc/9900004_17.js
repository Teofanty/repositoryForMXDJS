/* ==================
 脚本类型:  NPC	    
 脚本作者：月亮     
 联系方式：2412614144
 =====================
 */
var mingzi = "抽奖箱";

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t欢迎来到#e#r" + cm.getChannelServer().getServerName() + "#k-#d" + mingzi + "\r\n"
			text += "\t\t#n#k点卷：#r"+cm.getPlayer().getCSPoints(1) + "#k点\t  #k当前豆豆点：#r" + cm.getPlayer().getBeans() + "#k点\r\n\r\n"
            text += "#L1##e#r抽奖#l"//3\t#L2##e#r飞天猪的蛋抽奖#l\t#L3##e#r点卷抽奖#l\r\n\r\n
			
			cm.sendSimple(text);
        } else if (selection == 1) {
        cm.openNpc(9900004, 171);//豆豆抽奖
 /*       } else if (selection == 2) {
		cm.openNpc(9900004, 172);//飞天猪的蛋抽奖
        } else if (selection == 3) {
		cm.openNpc(9900004, 173);//点卷抽奖	*/	
				} 
	}
	}
    



