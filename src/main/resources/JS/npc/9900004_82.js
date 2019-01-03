importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
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
            for (i = 0; i < 60; i++) {
                text += "";
            }
            text +="#e1个  #v4000378# 可以切成200个#v4000377#\r\n";
			text +="200个#v4000377# 可以捏成1个  #v4000378#\r\n\r\n";
			text +="问:为什么要又切又捏?!   -- 答:你不怕背包爆翔吗?\r\n";
			text +="#L1##e#v4000377#捏粪粪#l       #L2##v4000378#切粪粪#l\r\n\r\n";
			text +="执行此操作之前请留意是否背包有相应空格,如果系统吞了GM不负责!「试问有谁会愿意吞你那点翔呢...」";
			cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(4000377, 200) &&cm.getMeso() >=0) {
                cm.gainItem(4000377,-200);
				cm.gainItem(4000378, 1);
                cm.sendOk("捏好了！");
                cm.dispose();
            } else {
                cm.sendOk("你的翔不够!");
                cm.dispose();
            }
			} else if (selection == 2) {
            if (cm.haveItem(4000378, 1) &&cm.getMeso() >=0) {
                cm.gainItem(4000378,-1);
				cm.gainItem(4000377, 200);
                cm.sendOk("切完了！");
                cm.dispose();
            } else {
                cm.sendOk("你的翔不够!");
                cm.dispose();
            }
            }
			}
		}
    


