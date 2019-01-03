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
		     //cm.deleteNullItem();
			if(cm.getPlayer().getMapId() == 108010101 || cm.getPlayer().getMapId() == 108010201 || cm.getPlayer().getMapId() == 108010301 || cm.getPlayer().getMapId() == 108010401 || cm.getPlayer().getMapId() == 108010501){
	cm.sendOk("本地图暂时无法使用使用拍卖功能");
cm.dispose();
return;
}		
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "                 #r#k请根据下列对应的材料兑换\r\n"
			text += "                 #r#r你带来了凭证吗?\r\n"
			 text += "#L8##e#r#v4001126#兑换#v5030000##l\r\n\r\n" 
         text += "#L1##e#r#v4000040#兑换#v4000463##l\r\n\r\n" 
		 text += "#L2##e#r#v4000176#兑换#v4000463##l\r\n\r\n" 
		 text += "#L3##e#r#v4001084#兑换#v4000463##l\r\n\r\n" 
		 text += "#L4##e#r#v4000175#兑换#v4000463##l\r\n\r\n" 
		 text += "#L5##e#r#v4000243#兑换#v4000463##l\r\n\r\n" 
	     text += "#L6##e#r#v4000235#兑换#v4000463##l\r\n\r\n" 
		 text += "#L7##e#r#v4001083#兑换#v4000463##l\r\n\r\n" 
	
			cm.sendSimple(text);
        } else if (selection == 1) {
        cm.openNpc(9900004, 111);//同步点装
        } else if (selection == 2) {
		cm.openNpc(9900004, 112);//在线福利
		} else if (selection == 3) {
		cm.openNpc(9900004, 113);//充值领取+
		} else if (selection == 4) {
		cm.openNpc(9900004, 114);//玩具箱
		} else if (selection == 5) {
		cm.openNpc(9900004, 115);//每日任务+
        } else if (selection == 6) {
		cm.openNpc(9900004, 116);//排 行 榜+
		} else if (selection == 7) {
		cm.openNpc(9900004, 117);//武器合成+
		} else if (selection == 8) {
		cm.openNpc(9900004, 118);//首饰合成
		} else if (selection == 10) {
		cm.openNpc(9900004, 10);//删除指定物品+
        } else if (selection == 11) {
		cm.openNpc(9900004, 5);//货币兑换+
		} else if (selection == 12) {
		cm.openNpc(9900004, 2);//材料兑换
		} else if (selection == 13) {
		cm.openNpc(9900004, 14);//枫叶珠换物资
		
        
		
		
		
        
		
        } else if (selection == 9) {
		cm.openNpc(9900004, 13);//新点装商城
		
        } else if (selection == 9) {
		cm.openNpc(9900004, 9);//赞助奖励
	}
    }
}


