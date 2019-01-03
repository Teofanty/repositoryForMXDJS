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
            text += "   欢迎来到#rMachi&麻吉冒险岛#k，携手共筑冒险美好世界.\r\n" //标题
            text += "               #d#e当天在线时长：" + cm.getPlayer().getzxsj() + " 分钟\r\n"
            text += "#k#n当前点卷点：#r" +cm.getPlayer().getCSPoints(1) +  "#k点    豆豆点：#r" + cm.getPlayer().getBeans() + "#k点\r\n"
            text += "#L1##r#e充值领取#l      #L2##d在线奖励#l      #L3##r任务向导#l\r\n\r\n"
			text += "#L4##d枫叶兑换#l      #L5#每日任务#l      #L6#删除道具#l"
            cm.sendOk(text); 
        } else if (selection == 1) {
            cm.openNpc(9900004, 8); //充值领取	
        } else if (selection == 2) {
            cm.openNpc(9900004, 7); //在线奖励		
        } else if (selection == 3) {
            cm.openNpc(9900004, 3); //转职转生
        } else if (selection == 4) {
            cm.openNpc(9900004, 12); //枫叶兑换
        } else if (selection == 5) {
            cm.openNpc(9900004, 5); //每日任务
        } else if (selection == 6) {
            cm.openNpc(9310073, 0); //清理背包
        }
    }
}
