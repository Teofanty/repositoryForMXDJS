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
			//text += "#L1##d1000W金币兑换1332-4666点券#l\r\n\r\n"
			//text += "#L2##d#v4310018##v4310019##v4310014#兑换戒指#l\t"
			//text += "#L6##d兑换#v4310018##v4310019##v4310014##l\r\n\r\n"
			//text += "#L3##d使用#v4310018#升级#v1114213##l\t"
			//text += "#L4##d使用#v4310019#升级#v1113164##l\r\n\r\n"
			//text += "#L5##d使用#v4310014#升级#v1112793##l\t"
			//text += "#L7##d使用#v4031456#兑换装备#l\r\n\r\n"
			//text += "#L13##e#d#v1382047#可兑换25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"
			//text += "#L14##e#d#v1382045#可兑换25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"
			//text += "#L15##e#d#v1382046#可兑换25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"1022067
			//text += "#L16##e#d#v1382048#可兑换25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"
			text += "#L22##e#d2*#v4031997#可兑换#v1102041##z1102041##b#l\r\n\r\n"
			text += "#L23##e#d2*#v4031997#可兑换#v1102084##z1102084##b#l\r\n\r\n"
			text += "#L24##e#d#v4031997#可兑换#v2070006##z2070006##b#l\r\n\r\n"
			text += "#L25##e#d#v4031997#可兑换#v2070007##z2070007##b#l\r\n\r\n"
			text += "#L26##e#d#v4031997#可兑换#v1122130##z1122130##b#l\r\n\r\n"
			text += "#L27##e#d#v4031997#可兑换#v1012070##z1012070##b#l\r\n\r\n"
			text += "#L28##e#d2*#v4031997#可兑换#v1002939##z1002939##b#l\r\n\r\n"
			text += "#L29##e#d2*#v4031997#可兑换#v1402037##z1402037##b#l\r\n\r\n"
			text += "#L30##e#d#v4031997#可兑换#v1132257##z1132257##b#l\r\n\r\n"
			text += "#L31##e#d#v4031997#可兑换#v1012015##z1012015##b#l\r\n\r\n"
			text += "#L40##e#d#v4031997#可兑换#v1012060##z1012060##bMG的#l\r\n\r\n"
			text += "#L35##e#d#v4031997#可兑换#v1102042##z1102042##bMG的#l\r\n\r\n"
			text += "#L45##e#d#v4031997#可兑换#v1012161##z1012161##b四维.命中.手技的#l\r\n\r\n"
			text += "#L46##e#d#v4031997#可兑换#v1022067##z1022067##b#l\r\n\r\n"
			//text += "#L32##e#d#v4031997#可兑换#v##l\r\n\r\n"
            cm.sendSimple(text);
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
	} else if (selection == 46) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//给物品1012015
		        cm.gainItem(1022067, 1);
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 45) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//给物品1012015
		        cm.gainItem(1012161
				, 1);
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
	} else if (selection == 22) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4031997,2)) {//判断物品
			    cm.sendOk("#b你没有2个#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -2);//给物品
		        cm.gainItem(1102041, 1);
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 23) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4031997,2)) {//判断物品
			    cm.sendOk("#b你没有2个#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -2);//给物品
		        cm.gainItem(1102084, 1);
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 24) {
			if (cm.getInventory(2).isFull(0)){
				cm.sendOk("#b请保证消耗栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//给物品
		        cm.gainItem(2070006, 1);
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 25) {
			if (cm.getInventory(2).isFull(0)){
				cm.sendOk("#b请保证消耗栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//给物品
		        cm.gainItem(2070007, 1);
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 26) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//给物品
		        cm.gainItem(1122130, 1);
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 27) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b请保证消装备位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//给物品
		        cm.gainItem(1012070, 1);
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 28) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4031997,2)) {//判断物品
			    cm.sendOk("#b你没有2个#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -2);//给物品
		        cm.gainItem(1002939, 1);
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 29) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4031997,2)) {//判断物品
			    cm.sendOk("#b你没有2个#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -2);//给物品
		        cm.gainItem(1402037, 1);
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
		} else if (selection == 30) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//给物品1012015
		        cm.gainItem(1132257, 1);
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 31) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//给物品1012015
		        cm.gainItem(1012015, 1);
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 40) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//给物品1012015
		        cm.gainItem(1012060, 1);
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 35) {
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4031997,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4031997##z4031997#");
				cm.dispose();
			} else{
				cm.gainItem(4031997, -1);//给物品1012015
		        cm.gainItem(1102042, 1);
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
		}
	}
}