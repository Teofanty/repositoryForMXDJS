importPackage(net.sf.cherry.client);
var status = 0;
var ��ˮ�� = 4021008;
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var �Ҹ� = "#k��ܰ��ʾ���κηǷ��������ҷ�Ŵ���.��ɱ��������.";
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

            cm.sendSimple("#dһ����������ʿ���͸��������Լ���B���ҿ��԰�������#rװ��#dֻҪ���в���!!!\r\n#r������Ҫ�һ�����Ʒ���뿴�ϳ�װ������Ĳ���\r\n"+a2+""+a3+""+a4+""+a5+""+a6+""+a7+""+a8+""+a9+""+a10+""+a11+""+a12+""+a13+""+a14+""+a15+""+a16+""+a17+""+a18+"");

	    } else if (selection == 2) {// ��Ҷ�ɼ���     1372034
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
			cm.sendOk("#v1372034#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ĺϳɲ��ϲ���!\r\n1��#v1382012#��2��#v4011004#��2��#v4021003#��2��#v4005001#��1000��#v4001126#��10��#v4002000#��10��#v4002001#��10��#v4031559#��100��������");
			cm.dispose();
			return;
		}
	    } else if (selection == 3) {//��Ҷ������     1382039
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
			cm.sendOk("#v1382039#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ĺϳɲ��ϲ���!\r\n1��#v1382012#��2��#v4011004#��2��#v4021003#��2��#v4005001#��1000��#v4001126#��10��#v4002000#��10��#v4002001#��10��#v4031559#��100��������");
			cm.dispose();
			return;
		}
	    } else if (selection == 4) {//64��Ҷͻ����     1302064
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
			cm.sendOk("#v1302064#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ĺϳɲ��ϲ���!\r\n1��#v1302030#��2��#v4011001#��2��#v4011002#��2��#v4005000#��1000��#v4001126#��10��#v4002000#��10��#v4002001#��10��#v4031559#��100��������");
			cm.dispose();
			return;
		}
	    } else if (selection == 5) {// 64��Ҷ���׽�     1402039
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
			cm.sendOk("#v1402039#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ĺϳɲ��ϲ���!\r\n1��#v1302030#��2��#v4011001#��2��#v4011002#��2��#v4005000#��1000��#v4001126#��10��#v4002000#��10��#v4002001#��10��#v4031559#��100��������");
			cm.dispose();
			return;
		}
	    } else if (selection == 6) {//64��Ҷ������     1332055
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
			cm.sendOk("#v1332055#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ĺϳɲ��ϲ���!\r\n1��#v1332025#��2��#v4011003#��2��#v4021008#��2��#v4005003#��1000��#v4001126#��10��#v4002000#��10��#v4002001#��10��#v4031559#��100��������");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 7) {//64��Ҷ׷���     1332056
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
			cm.sendOk("#v1332056#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ĺϳɲ��ϲ���!\r\n1��#v1332025#��2��#v4011003#��2��#v4021008#��2��#v4005003#��1000��#v4001126#��10��#v4002000#��10��#v4002001#��10��#v4031559#��100��������");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 8) {//64��Ҷ�ƻ���     1312032
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
			cm.sendOk("#v1312032#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ĺϳɲ��ϲ���!\r\n1��#v1412011#��2��#v4011001#��2��#v4021004#��2��#v4005000#��1000��#v4001126#��10��#v4002000#��10��#v4002001#��10��#v4031559#��100��������");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 9) {//64��ҶǬ����     1412027
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
			cm.sendOk("#v1412027#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ĺϳɲ��ϲ���!\r\n1��#v1412011#��2��#v4011001#��2��#v4021004#��2��#v4005000#��1000��#v4001126#��10��#v4002000#��10��#v4002001#��10��#v4031559#��100��������");
			cm.dispose();
			return;
	        }   
        }else if (selection == 10) {//64��Ҷ����     1322054
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
			cm.sendOk("#v1322054#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ĺϳɲ��ϲ���!\r\n1��#v4011001#��2��#v4011001#��2��#v4021004#��2��#v4005000#��1000��#v4001126#��10��#v4002000#��10��#v4002001#��10��#v4031559#��100��������");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 11) {//64��Ҷ������     1422029
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
			cm.sendOk("#v1422029#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ĺϳɲ��ϲ���!\r\n1��#v4011001#��2��#v4011001#��2��#v4021004#��2��#v4005000#��1000��#v4001126#��10��#v4002000#��10��#v4002001#��10��#v4031559#��100��������");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 12) {//64��Ҷ����ǹ     1432040
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
			cm.sendOk("#v1432040#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ĺϳɲ��ϲ���!\r\n1��#v1432012#��2��#v4011001#��2��#v4021002#��2��#v4005000#��1000��#v4001126#��10��#v4002000#��10��#v4002001#��10��#v4031559#��100��������");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 13) {//64��Ҷս��       1442051
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
			cm.sendOk("#v1442051#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ĺϳɲ��ϲ���!\r\n1��#v1442024#��2��#v4011001#��2��#v4021002#��2��#v4005000#��1000��#v4001126#��10��#v4002000#��10��#v4002001#��10��#v4031559#��100��������");
			cm.dispose();
			return;
	        }
        }else if (selection == 14) {//64��ҶHAPPY��   1452045
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
			cm.sendOk("#v1452045#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ĺϳɲ��ϲ���!\r\n1��#v1452022#��2��#v4021004#��2��#v4011003#��2��#v4005002#��1000��#v4001126#��10��#v4002000#��10��#v4002001#��10��#v4031559#��100��������");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 15) {//64��Ҷ������     1462040
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
			cm.sendOk("#v1462040#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ĺϳɲ��ϲ���!\r\n1��#v1462019#��2��#v4011003#��2��#v4005002#��2��#v4005002#��1000��#v4001126#��10��#v4002000#��10��#v4002001#��10��#v4031559#��100��������");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 16) {// 64��Ҷ����ȭ     1472055
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
			cm.sendOk("#v1472055#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ĺϳɲ��ϲ���!\r\n1��#v1472032#��2��#v4011003#��2��#v4021008#��2��#v4005003#��1000��#v4001126#��10��#v4002000#��10��#v4002001#��10��#v4031559#��100��������");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 17) {//64��Ҷ��צ       1482022
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
			cm.sendOk("#v1482022#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ĺϳɲ��ϲ���!\r\n1��#v1482020#��2��#v4011001#��2��#v4011002#��2��#v4005000#��1000��#v4001126#��10��#v4002000#��10��#v4002001#��10��#v4031559#��100��������");
			cm.dispose();
			return;
	        }
	    
        }else if (selection == 18) {//64��Ҷ������ǹ   1492022
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
			cm.sendOk("#v1492022#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ĺϳɲ��ϲ���!\r\n1��#v1492020#��2��#v4021004#��2��#v4011003#��2��#v4005002#��1000��#v4001126#��10��#v4002000#��10��#v4002001#��10��#v4031559#��100��������");
			cm.dispose();
			return;
	        }
	    
        }
    }
}