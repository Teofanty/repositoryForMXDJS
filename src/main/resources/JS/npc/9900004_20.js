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
			if(cm.getPlayer().getMapId() == 108010101 || cm.getPlayer().getMapId() == 108010201 || cm.getPlayer().getMapId() == 108010301 || cm.getPlayer().getMapId() == 108010401 || cm.getPlayer().getMapId() == 108010501){
	cm.sendOk("本地图暂时无法使用使用拍卖功能");
cm.dispose();
return;
}		
           // var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "#r安全帽来袭.\r\n"
			text += "#L2##r#v4001266##b88个#r兑换#b#v1002939#\r\n\r\n" 			

            cm.sendSimple(text);
        } else if (selection == 1) {
						if(cm.getPlayer().getMapId() == 910000000){
	cm.sendOk("你已经在市场了，别逗了好吗?");
cm.dispose();
return;
}		
		cm.warp(910000000);//回到市场
		cm.dispose();
        } else if (selection == 2) {
		cm.openNpc(9900004, 21);//新手礼包
        } else if (selection == 3) {
		cm.openNpc(9110014, 20);//转职转生
        } else if (selection == 4) {
		cm.openNpc(9310073, 30);//地图传送
        } else if (selection == 5) {
		cm.openNpc(9310074, 400);//副本传送
        } else if (selection == 6) {
		cm.openNpc(9310073, 500);//排 行 榜
        } else if (selection == 7) {//在线奖励
		cm.openNpc(9310073, 7);
        } else if (selection == 8) {//充值领取
		cm.openNpc(9310073, 2);
		} else if (selection == 9) {//同步点装
		cm.openNpc(9310073, 9);
		} else if (selection == 10) {//删除指定物品
		cm.openNpc(9310073, 1);
	    } else if (selection == 11) {//美容美发
		cm.warp(100000104);
		cm.dispose();
		} else if (selection == 12) {//枫叶兑换
		cm.openNpc(9310073, 12);
		} else if (selection == 13) {//枫叶兑换
		cm.openNpc(9310073, 13);
	}
    }
}


