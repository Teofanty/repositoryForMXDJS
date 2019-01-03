importPackage(net.sf.cherry.client);
var status = 0;
var 黑水晶 = 4021008;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 忠告 = "#k温馨提示：任何非法程序和外挂封号处理.封杀侥幸心理.";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	    var a2 = "#L2##r#v1372034##l     ";
		var a3 = "#L3##r#v1382039##l     ";
	    var a4 = "#L4##r#v1302064##l     ";
	    var a5 = "#L5##r#v1402039##l\r\n\r\n";
	    var a6 = "#L6##r#v1332055##l     ";
		var a7 = "#L7##r#v1332056##l     ";
		var a8 = "#L8##r#v1312032##l     ";
		var a9 = "#L9##r#v1412027##l\r\n\r\n";
		var a10 = "#L10##r#v1322054##l     ";
		var a11 = "#L11##r#v1422029##l     ";
		var a12 = "#L12##r#v1432040##l     ";
		var a13 = "#L13##r#v1442051##l\r\n\r\n";
		var a14 = "#L14##r#v1452045##l     ";
		var a15 = "#L15##r#v1462040##l     ";
		var a16 = "#L16##r#v1472055##l     ";
		var a17 = "#L17##r#v1482022##l\r\n\r\n";
		var a18 = "#L18##r#v1492022##l     ";

            cm.sendSimple("#d一个厉害的勇士，就该有属于自己的B格，我可以帮你制作#r装备#d只要你有材料!!!\r\n#r请点击你要兑换的物品进入看合成装备所需的材料\r\n"+a2+""+a3+""+a4+""+a5+""+a6+""+a7+""+a8+""+a9+""+a10+""+a11+""+a12+""+a13+""+a14+""+a15+""+a16+""+a17+""+a18+"");

	    } else if (selection == 2) {// 枫叶仙姬杖     1372034
		if (cm.haveItem(1382012, 1)&&cm.haveItem(4011004,2)&&cm.haveItem(4021003,2)&&cm.haveItem(4005001,2)&&cm.haveItem(4001126,1000)&&cm.haveItem(4002000,10)&&cm.haveItem(4002001,10)&&cm.haveItem(4031559,10)&&(cm.getMeso()>1000000)) {
			cm.gainItem(1382012, -1);
			cm.gainItem(4011004, -2);
			cm.gainItem(4021003, -2);
			cm.gainItem(4005001, -2);
			cm.gainItem(4002000, -10);
			cm.gainItem(4002001, -10);
			cm.gainItem(4031559, -10);
			cm.gainItem(4001126, -1000);
			cm.gainMeso(-1000000);
			cm.gainItem(1372034, +1);
			cm.sendOk("#v1372034#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的合成材料不足!\r\n1个#v1382012#和2个#v4011004#和2个#v4021003#和2个#v4005001#和1000个#v4001126#和10张#v4002000#和10张#v4002001#和10张#v4031559#和100万金币制作");
			cm.dispose();
			return;
		}
	    } else if (selection == 3) {//枫叶丹心杖     1382039
		if (cm.haveItem(1382012, 1)&&cm.haveItem(4011004,2)&&cm.haveItem(4021003,2)&&cm.haveItem(4005001,2)&&cm.haveItem(4001126,1000)&&cm.haveItem(4002000,10)&&cm.haveItem(4002001,10)&&cm.haveItem(4031559,10)&&(cm.getMeso()>1000000)) {
			cm.gainItem(1382012, -1);
			cm.gainItem(4011004, -2);
			cm.gainItem(4021003, -2);
			cm.gainItem(4005001, -2);
			cm.gainItem(4002000, -10);
			cm.gainItem(4002001, -10);
			cm.gainItem(4031559, -10);
			cm.gainItem(4001126, -1000);
			cm.gainMeso(-1000000);
			cm.gainItem(1382039, +1);
			cm.sendOk("#v1382039#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的合成材料不足!\r\n1个#v1382012#和2个#v4011004#和2个#v4021003#和2个#v4005001#和1000个#v4001126#和10张#v4002000#和10张#v4002001#和10张#v4031559#和100万金币制作");
			cm.dispose();
			return;
		}
	    } else if (selection == 4) {//64枫叶突击剑     1302064
		if (cm.haveItem(1302030, 1)&&cm.haveItem(4011001,2)&&cm.haveItem(4011002,2)&&cm.haveItem(4005000,2)&&cm.haveItem(4001126,1000)&&cm.haveItem(4002000,10)&&cm.haveItem(4002001,10)&&cm.haveItem(4031559,10)&&(cm.getMeso()>1000000)) {
			cm.gainItem(1302030, -1);
			cm.gainItem(4011001, -2);
			cm.gainItem(4011002, -2);
			cm.gainItem(4005000, -2);
			cm.gainItem(4002000, -10);
			cm.gainItem(4002001, -10);
			cm.gainItem(4031559, -10);
			cm.gainItem(4001126, -1000);
			cm.gainMeso(-1000000);
			cm.gainItem(1302064, +1);
			cm.sendOk("#v1302064#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的合成材料不足!\r\n1个#v1302030#和2个#v4011001#和2个#v4011002#和2个#v4005000#和1000个#v4001126#和10张#v4002000#和10张#v4002001#和10张#v4031559#和100万金币制作");
			cm.dispose();
			return;
		}
	    } else if (selection == 5) {// 64枫叶枭首剑     1402039
		if (cm.haveItem(1302030, 1)&&cm.haveItem(4011001,2)&&cm.haveItem(4011002,2)&&cm.haveItem(4005000,2)&&cm.haveItem(4001126,1000)&&cm.haveItem(4002000,10)&&cm.haveItem(4002001,10)&&cm.haveItem(4031559,10)&&(cm.getMeso()>1000000)) {
			cm.gainItem(1302030, -1);
			cm.gainItem(4011001, -2);
			cm.gainItem(4011002, -2);
			cm.gainItem(4005000, -2);
			cm.gainItem(4002000, -10);
			cm.gainItem(4002001, -10);
			cm.gainItem(4031559, -10);
			cm.gainItem(4001126, -1000);
			cm.gainMeso(-1000000);
			cm.gainItem(1402039, +1);
			cm.sendOk("#v1402039#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的合成材料不足!\r\n1个#v1302030#和2个#v4011001#和2个#v4011002#和2个#v4005000#和1000个#v4001126#和10张#v4002000#和10张#v4002001#和10张#v4031559#和100万金币制作");
			cm.dispose();
			return;
		}
	    } else if (selection == 6) {//64枫叶锁魄铗     1332055
		if (cm.haveItem(1332025, 1)&&cm.haveItem(4011003,2)&&cm.haveItem(4021008,2)&&cm.haveItem(4005003,2)&&cm.haveItem(4001126,1000)&&cm.haveItem(4002000,10)&&cm.haveItem(4002001,10)&&cm.haveItem(4031559,10)&&(cm.getMeso()>1000000)) {
			cm.gainItem(1332025, -1);
			cm.gainItem(4011003, -2);
			cm.gainItem(4021008, -2);
			cm.gainItem(4005003, -2);
			cm.gainItem(4002000, -10);
			cm.gainItem(4002001, -10);
			cm.gainItem(4031559, -10);
			cm.gainItem(4001126, -1000);
			cm.gainMeso(-1000000);
			cm.gainItem(1332055, +1);
			cm.sendOk("#v1332055#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的合成材料不足!\r\n1个#v1332025#和2个#v4011003#和2个#v4021008#和2个#v4005003#和1000个#v4001126#和10张#v4002000#和10张#v4002001#和10张#v4031559#和100万金币制作");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 7) {//64枫叶追魂刺     1332056
		if (cm.haveItem(1332025, 1)&&cm.haveItem(4011003,2)&&cm.haveItem(4021008,2)&&cm.haveItem(4005003,2)&&cm.haveItem(4001126,1000)&&cm.haveItem(4002000,10)&&cm.haveItem(4002001,10)&&cm.haveItem(4031559,10)&&(cm.getMeso()>1000000)) {
			cm.gainItem(1332025, -1);
			cm.gainItem(4011003, -2);
			cm.gainItem(4021008, -2);
			cm.gainItem(4005003, -2);
			cm.gainItem(4002000, -10);
			cm.gainItem(4002001, -10);
			cm.gainItem(4031559, -10);
			cm.gainItem(4001126, -1000);
			cm.gainMeso(-1000000);
			cm.gainItem(1332056, +1);
			cm.sendOk("#v1332056#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的合成材料不足!\r\n1个#v1332025#和2个#v4011003#和2个#v4021008#和2个#v4005003#和1000个#v4001126#和10张#v4002000#和10张#v4002001#和10张#v4031559#和100万金币制作");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 8) {//64枫叶破击斧     1312032
		if (cm.haveItem(1412011, 1)&&cm.haveItem(4011001,2)&&cm.haveItem(4021004,2)&&cm.haveItem(4005000,2)&&cm.haveItem(4001126,1000)&&cm.haveItem(4002000,10)&&cm.haveItem(4002001,10)&&cm.haveItem(4031559,10)&&(cm.getMeso()>1000000)) {
			cm.gainItem(1412011, -1);
			cm.gainItem(4011001, -2);
			cm.gainItem(4021004, -2);
			cm.gainItem(4005000, -2);
			cm.gainItem(4002000, -10);
			cm.gainItem(4002001, -10);
			cm.gainItem(4031559, -10);
			cm.gainItem(4001126, -1000);
			cm.gainMeso(-1000000);
			cm.gainItem(1312032, +1);
			cm.sendOk("#v1312032#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的合成材料不足!\r\n1个#v1412011#和2个#v4011001#和2个#v4021004#和2个#v4005000#和1000个#v4001126#和10张#v4002000#和10张#v4002001#和10张#v4031559#和100万金币制作");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 9) {//64枫叶乾坤轮     1412027
		if (cm.haveItem(1412011, 1)&&cm.haveItem(4011001,2)&&cm.haveItem(4021004,2)&&cm.haveItem(4005000,2)&&cm.haveItem(4001126,1000)&&cm.haveItem(4002000,10)&&cm.haveItem(4002001,10)&&cm.haveItem(4031559,10)&&(cm.getMeso()>1000000)) {
			cm.gainItem(1412011, -1);
			cm.gainItem(4011001, -2);
			cm.gainItem(4021004, -2);
			cm.gainItem(4005000, -2);
			cm.gainItem(4002000, -10);
			cm.gainItem(4002001, -10);
			cm.gainItem(4031559, -10);
			cm.gainItem(4001126, -1000);
			cm.gainMeso(-1000000);
			cm.gainItem(1412027, +1);
			cm.sendOk("#v1412027#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的合成材料不足!\r\n1个#v1412011#和2个#v4011001#和2个#v4021004#和2个#v4005000#和1000个#v4001126#和10张#v4002000#和10张#v4002001#和10张#v4031559#和100万金币制作");
			cm.dispose();
			return;
	        }   
        }else if (selection == 10) {//64枫叶地震锤     1322054
		if (cm.haveItem(1422014, 1)&&cm.haveItem(4011001,2)&&cm.haveItem(4021004,2)&&cm.haveItem(4005000,2)&&cm.haveItem(4001126,1000)&&cm.haveItem(4002000,10)&&cm.haveItem(4002001,10)&&cm.haveItem(4031559,10)&&(cm.getMeso()>1000000)) {
			cm.gainItem(1422014, -1);
			cm.gainItem(4011001, -2);
			cm.gainItem(4021004, -2);
			cm.gainItem(4005000, -2);
			cm.gainItem(4002000, -10);
			cm.gainItem(4002001, -10);
			cm.gainItem(4031559, -10);
			cm.gainItem(4001126, -1000);
			cm.gainMeso(-1000000);
			cm.gainItem(1322054, +1);
			cm.sendOk("#v1322054#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的合成材料不足!\r\n1个#v4011001#和2个#v4011001#和2个#v4021004#和2个#v4005000#和1000个#v4001126#和10张#v4002000#和10张#v4002001#和10张#v4031559#和100万金币制作");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 11) {//64枫叶轰天镗     1422029
		if (cm.haveItem(1422014, 1)&&cm.haveItem(4011001,2)&&cm.haveItem(4021004,2)&&cm.haveItem(4005000,2)&&cm.haveItem(4001126,1000)&&cm.haveItem(4002000,10)&&cm.haveItem(4002001,10)&&cm.haveItem(4031559,10)&&(cm.getMeso()>1000000)) {
			cm.gainItem(1422014, -1);
			cm.gainItem(4011001, -2);
			cm.gainItem(4021004, -2);
			cm.gainItem(4005000, -2);
			cm.gainItem(4002000, -10);
			cm.gainItem(4002001, -10);
			cm.gainItem(4031559, -10);
			cm.gainItem(4001126, -1000);
			cm.gainMeso(-1000000);
			cm.gainItem(1422029, +1);
			cm.sendOk("#v1422029#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的合成材料不足!\r\n1个#v4011001#和2个#v4011001#和2个#v4021004#和2个#v4005000#和1000个#v4001126#和10张#v4002000#和10张#v4002001#和10张#v4031559#和100万金币制作");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 12) {//64枫叶钻天枪     1432040
		if (cm.haveItem(1432012, 1)&&cm.haveItem(4011001,2)&&cm.haveItem(4021002,2)&&cm.haveItem(4005000,2)&&cm.haveItem(4001126,1000)&&cm.haveItem(4002000,10)&&cm.haveItem(4002001,10)&&cm.haveItem(4031559,10)&&(cm.getMeso()>1000000)) {
			cm.gainItem(1432012, -1);
			cm.gainItem(4011001, -2);
			cm.gainItem(4021002, -2);
			cm.gainItem(4005000, -2);
			cm.gainItem(4002000, -10);
			cm.gainItem(4002001, -10);
			cm.gainItem(4031559, -10);
			cm.gainItem(4001126, -1000);
			cm.gainMeso(-1000000);
			cm.gainItem(1432040, +1);
			cm.sendOk("#v1432040#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的合成材料不足!\r\n1个#v1432012#和2个#v4011001#和2个#v4021002#和2个#v4005000#和1000个#v4001126#和10张#v4002000#和10张#v4002001#和10张#v4031559#和100万金币制作");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 13) {//64枫叶战斧       1442051
		if (cm.haveItem(1442024, 1)&&cm.haveItem(4011001,2)&&cm.haveItem(4021002,2)&&cm.haveItem(4005000,2)&&cm.haveItem(4001126,1000)&&cm.haveItem(4002000,10)&&cm.haveItem(4002001,10)&&cm.haveItem(4031559,10)&&(cm.getMeso()>1000000)) {
			cm.gainItem(1442024, -1);
			cm.gainItem(4011001, -2);
			cm.gainItem(4021002, -2);
			cm.gainItem(4005000, -2);
			cm.gainItem(4002000, -10);
			cm.gainItem(4002001, -10);
			cm.gainItem(4031559, -10);
			cm.gainItem(4001126, -1000);
			cm.gainMeso(-1000000);
			cm.gainItem(1442051, +1);
			cm.sendOk("#v1442051#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的合成材料不足!\r\n1个#v1442024#和2个#v4011001#和2个#v4021002#和2个#v4005000#和1000个#v4001126#和10张#v4002000#和10张#v4002001#和10张#v4031559#和100万金币制作");
			cm.dispose();
			return;
	        }
        }else if (selection == 14) {//64枫叶HAPPY弓   1452045
		if (cm.haveItem(1452022, 1)&&cm.haveItem(4021004,2)&&cm.haveItem(4011003,2)&&cm.haveItem(4005002,2)&&cm.haveItem(4001126,1000)&&cm.haveItem(4002000,10)&&cm.haveItem(4002001,10)&&cm.haveItem(4031559,10)&&(cm.getMeso()>1000000)) {
			cm.gainItem(1452022, -1);
			cm.gainItem(4021004, -2);
			cm.gainItem(4011003, -2);
			cm.gainItem(4005002, -2);
			cm.gainItem(4002000, -10);
			cm.gainItem(4002001, -10);
			cm.gainItem(4031559, -10);
			cm.gainItem(4001126, -1000);
			cm.gainMeso(-1000000);
			cm.gainItem(1452045, +1);
			cm.sendOk("#v1452045#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的合成材料不足!\r\n1个#v1452022#和2个#v4021004#和2个#v4011003#和2个#v4005002#和1000个#v4001126#和10张#v4002000#和10张#v4002001#和10张#v4031559#和100万金币制作");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 15) {//64枫叶击星弩     1462040
		if (cm.haveItem(1462019, 1)&&cm.haveItem(4021004,2)&&cm.haveItem(4011003,2)&&cm.haveItem(4005002,2)&&cm.haveItem(4001126,1000)&&cm.haveItem(4002000,10)&&cm.haveItem(4002001,10)&&cm.haveItem(4031559,10)&&(cm.getMeso()>1000000)) {
			cm.gainItem(1462019, -1);
			cm.gainItem(4021004, -2);
			cm.gainItem(4011003, -2);
			cm.gainItem(4005002, -2);
			cm.gainItem(4002000, -10);
			cm.gainItem(4002001, -10);
			cm.gainItem(4031559, -10);
			cm.gainItem(4001126, -1000);
			cm.gainMeso(-1000000);
			cm.gainItem(1462040, +1);
			cm.sendOk("#v1462040#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的合成材料不足!\r\n1个#v1462019#和2个#v4011003#和2个#v4005002#和2个#v4005002#和1000个#v4001126#和10张#v4002000#和10张#v4002001#和10张#v4031559#和100万金币制作");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 16) {// 64枫叶定天拳     1472055
		if (cm.haveItem(1472032, 1)&&cm.haveItem(4011003,2)&&cm.haveItem(4021008,2)&&cm.haveItem(4005003,2)&&cm.haveItem(4001126,1000)&&cm.haveItem(4002000,10)&&cm.haveItem(4002001,10)&&cm.haveItem(4031559,10)&&(cm.getMeso()>1000000)) {
			cm.gainItem(1472032, -1);
			cm.gainItem(4011003, -2);
			cm.gainItem(4021008, -2);
			cm.gainItem(4005003, -2);
			cm.gainItem(4002000, -10);
			cm.gainItem(4002001, -10);
			cm.gainItem(4031559, -10);
			cm.gainItem(4001126, -1000);
			cm.gainMeso(-1000000);
			cm.gainItem(1472055, +1);
			cm.sendOk("#v1472055#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的合成材料不足!\r\n1个#v1472032#和2个#v4011003#和2个#v4021008#和2个#v4005003#和1000个#v4001126#和10张#v4002000#和10张#v4002001#和10张#v4031559#和100万金币制作");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 17) {//64枫叶金爪       1482022
		if (cm.haveItem(1482020, 1)&&cm.haveItem(4011001,2)&&cm.haveItem(4011002,2)&&cm.haveItem(4005000,2)&&cm.haveItem(4001126,1000)&&cm.haveItem(4002000,10)&&cm.haveItem(4002001,10)&&cm.haveItem(4031559,10)&&(cm.getMeso()>1000000)) {
			cm.gainItem(1482020, -1);
			cm.gainItem(4011001, -2);
			cm.gainItem(4011002, -2);
			cm.gainItem(4005000, -2);
			cm.gainItem(4002000, -10);
			cm.gainItem(4002001, -10);
			cm.gainItem(4031559, -10);
			cm.gainItem(4001126, -1000);
			cm.gainMeso(-1000000);
			cm.gainItem(1482022, +1);
			cm.sendOk("#v1482022#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的合成材料不足!\r\n1个#v1482020#和2个#v4011001#和2个#v4011002#和2个#v4005000#和1000个#v4001126#和10张#v4002000#和10张#v4002001#和10张#v4031559#和100万金币制作");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 18) {//64枫叶加仑手枪   1492022
		if (cm.haveItem(1492020, 1)&&cm.haveItem(4021004,2)&&cm.haveItem(4011003,2)&&cm.haveItem(4005002,2)&&cm.haveItem(4001126,1000)&&cm.haveItem(4002000,10)&&cm.haveItem(4002001,10)&&cm.haveItem(4031559,10)&&(cm.getMeso()>1000000)) {
			cm.gainItem(1492020, -1);
			cm.gainItem(4021004, -2);
			cm.gainItem(4011003, -2);
			cm.gainItem(4005002, -2);
			cm.gainItem(4002000, -10);
			cm.gainItem(4002001, -10);
			cm.gainItem(4031559, -10);
			cm.gainItem(4001126, -1000);
			cm.gainMeso(-1000000);
			cm.gainItem(1492022, +1);
			cm.sendOk("#v1492022#已经制作好了，去试一下吧");
			cm.dispose();
			return;
		} else {
			cm.sendOk("你的合成材料不足!\r\n1个#v1492020#和2个#v4021004#和2个#v4011003#和2个#v4005002#和1000个#v4001126#和10张#v4002000#和10张#v4002001#和10张#v4031559#和100万金币制作");
			cm.dispose();
			return;
	        }
	    
        }
    }
}