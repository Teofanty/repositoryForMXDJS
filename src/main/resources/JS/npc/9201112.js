/* ==================
 脚本类型: NPC	    
 脚本作者：久久    
 联系方式：121418194
 =====================
 */
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
			if(cm.getPlayer().getMapId()==803000502){
				cm.sendOk("里面就是绯红宗师所在之处，戒备森严！");
				cm.dispose();
				return;
			}
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t欢迎来到绯红副本入口 请选择你需要挑战的难度 \r\n\r\n"//3       
			text += "#L1##b绯红组队（困难）#l        #L2##b绯红组队（简单）#l\r\n\r\n"//3 
            cm.sendSimple(text);
        } else if (selection == 1) { 
			cm.warp(803000519);//临时
			cm.dispose();
        } else if (selection == 2) {  
			cm.sendOk("暂未开放");
			cm.dispose();
			}
		}
}
