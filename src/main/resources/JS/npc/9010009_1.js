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
			//显示物品ID图片用的代码是  #v这里写入ID#
            text += "#e#r你好！这里是冒险岛每日任务NPC:.\r\n也许你不一定能够完成，能做多少是多少哦，每一环都有丰厚奖励.\r\n"//3 
			text += "#L1##e#d第一环\r\n\r\n"//3
			text += "#L2##e#d第二环\r\n\r\n"//3
			text += "#L3##e#d第三环\r\n\r\n"//3
			text += "#L4##e#d第四环\r\n\r\n"//3
            //text += "#L2##e#d#v4031017# 副本蛋兑换固定奖励.#l\r\n\r\n"//3
            //text += "#L3##e#d#v04032226# 每日活动奖励兑换（1小时/1次.胜利即可）#l\r\n"//3
            //text += "#L4##e#d#v1382057#永恒冰轮杖制作#l\r\n"//3
            //text += "#L5##e#d#v1402046#永恒玄冥剑制作#l\r\n"//3
            //text += "#L6##e#d#v1432047#永恒显圣枪制作#l\r\n"//3
            //text += "#L7##e#d#v1442063#永恒神光戟制作#l\r\n"//3
            //text += "#L8##e#d#v1452057#永恒惊电弓制作#l\r\n"//3
            //text += "#L9##e#d#v1462050#永恒冥雷弩制作#l\r\n"//3
            //text += "#L10##e#d#v1472068#永恒大悲赋制作#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9010009, 2);
        } else if (selection == 2) {
		cm.openNpc(9010009, 3);
        } else if (selection == 3) {
		cm.openNpc(9010009, 4);
        } else if (selection == 4) {
		cm.openNpc(9010009, 5);
	}
    }
}


