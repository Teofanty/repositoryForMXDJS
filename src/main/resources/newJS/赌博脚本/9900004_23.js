/* ==================
 脚本类型: NPC	    
 脚本作者：一线海-维多   
 联系方式：297870163
 =====================
 */
function start() {
    status = -1;

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
			var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "\t\t\t#e#r"+cm.getChannelServer().getServerName()+"冒险岛#k,#r赌博系统#k\r\n" 
			text += "#n#k当前拥有点券：#r" + cm.getPlayer().getCSPoints(1) + "#k点\t\t当前拥有抵用券：#r" + cm.getPlayer().getCSPoints(2) + "#k点\r\n"
            text += "#n#k当前拥有金币：#r" + cm.getMeso() + "#k元\r\n"
			text += "#L1##e#d点券赌博#l       #L2##e#d抵用券赌博#l       #L3##e#d金币赌博#l\r\n\r\n"
            cm.sendOk(text); 
        } else if (selection == 1) {//点券赌博	
            cm.openNpc(9900004, 231); 
        } else if (selection == 2) {//抵用券赌博
            cm.openNpc(9900004, 232); 	
        } else if (selection == 3) {//金币赌博
            cm.openNpc(9900004, 233); 
        }
    }
}