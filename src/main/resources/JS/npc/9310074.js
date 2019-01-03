var random = java.lang.Math.floor(Math.random() * 3000 + 1330);

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
			text += "\t\t\t\t我是兑换NPC,欢迎#k!#n\r\n"
			text += "              #d#e点卷余额：#r" +cm.getPlayer().getCSPoints(1) +  "#d#e点#k\r\n\r\n"//3
			text += "#L1##d1000W金币兑换1332-4666点券#l\r\n\r\n"
			text += "#L2##d#v4310018##v4310019##v4310014#兑换戒指#l\t"
			text += "#L6##d兑换#v4310018##v4310019##v4310014##l\r\n\r\n"
			text += "#L3##d使用#v4310018#升级#v1114213##l\t"
			text += "#L4##d使用#v4310019#升级#v1113164##l\r\n\r\n"
			text += "#L5##d使用#v4310014#升级#v1112793##l\t"
			text += "#L10##e#d主线眼饰制作#l\r\n\r\n"
			text += "#L7##d使用#v4031456#兑换装备#l\r\n"
			text += "#L18##d使用#v4001176#兑换卷轴#l\r\n\r\n"
			text += "#L8##e#d抽奖兑换#l\r\n\r\n"
			text += "#L9##e#d重生武器制作#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { 
			if (cm.getMeso() >= 10000000){//判断多少金币
				cm.gainMeso(-10000000);//金币
				cm.gainDJ(random);//点券
				cm.sendOk("恭喜你兑换了"+ random +"点券");
				cm.worldMessage(6,"玩家：["+cm.getName()+"]在自由市场中介达人,使用1000W金币兑换" + random +"点券.");
				cm.dispose();
			} else {
				cm.sendOk("你的金币不足1000W。");
				cm.dispose();
				

			}
				} else if (selection == 13) {
			if (cm.getInventory(4).isFull(2)){
				cm.sendOk("#b请保证其它栏位至少有3个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(1382047,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v1382047##z1382047#");
				cm.dispose();
			} else{
				
				cm.gainItem(1382047, -1);//给物品
				cm.gainItem(4000244, 25);//给物品
				cm.gainItem(4000245, 25);//给物品
				cm.gainItem(4020009, 10);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 14) {
			if (cm.getInventory(4).isFull(2)){
				cm.sendOk("#b请保证其它栏位至少有3个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(1382045,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v1382045##z1382045#");
				cm.dispose();
			} else{
				
				cm.gainItem(1382045, -1);//给物品
				cm.gainItem(4000244, 25);//给物品
				cm.gainItem(4000245, 25);//给物品
				cm.gainItem(4020009, 10);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 15) {
			if (cm.getInventory(4).isFull(2)){
				cm.sendOk("#b请保证其它栏位至少有3个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(1382046,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v1382046##z1382046#");
				cm.dispose();
			} else{
				
				cm.gainItem(1382046, -1);//给物品
				cm.gainItem(4000244, 25);//给物品
				cm.gainItem(4000245, 25);//给物品
				cm.gainItem(4020009, 10);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 16) {
			if (cm.getInventory(4).isFull(2)){
				cm.sendOk("#b请保证其它栏位至少有3个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(1382048,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v1382048##z1382048#");
				cm.dispose();
			} else{
				
				cm.gainItem(1382048, -1);//给物品
				cm.gainItem(4000244, 25);//给物品
				cm.gainItem(4000245, 25);//给物品
				cm.gainItem(4020009, 10);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}	
	} else if (selection == 17) {
			if (cm.getInventory(4).isFull(1)){
				cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4001084,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v1382048##z1382048#");
				cm.dispose();
			} else{
				
				cm.gainItem(4001084, -1);//给物
				cm.gainItem(4001128, 1000);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
			
		 } else if (selection == 2) { 
		  cm.openNpc(9310074, 1);//物品兑换
		  } else if (selection == 3) { 
		  cm.openNpc(9310074, 2);//代币戒指升级
		  } else if (selection == 4) { 
		  cm.openNpc(9310074, 3);//代币戒指升级
		  } else if (selection == 5) { 
		  cm.openNpc(9310074, 4);//代币戒指升级
		  } else if (selection == 6) { 
		  cm.openNpc(9310074, 6);//兑换代币
		  } else if (selection == 7) { 
		  cm.openNpc(9310074, 7);//枫叶球兑换
		   } else if (selection == 8) { 
		  cm.openNpc(9310074, 8);//枫叶球兑换
		   } else if (selection == 9) { 
		  cm.openNpc(9310074, 9);//枫叶球兑换
		     } else if (selection == 10) { 
		  cm.openNpc(9310074, 10);//枫叶球兑换
		    } else if (selection == 18) { 
		  cm.openNpc(9310074, 18);//枫叶球兑换
		}
	}
}