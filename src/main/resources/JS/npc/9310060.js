importPackage(net.sf.cherry.tools);
importPackage(net.sf.cherry.client);

var status = 0;
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";

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

	    var textz = " ���ʯ��ָ�һ� ֻ�ܴ�һ���� \r\n\r\n";

		textz += "#r#L0#��ϳ�1����ָ��#v1113013#��ά����/����/ħ����+3#l\r\n";

		textz += "#r#L1#��ϳ�2����ָ��#v1113166#��ά����/����/ħ����+6\r\n";
		
		textz += "#r#L2#��ϳ�3����ָ��#v1113167#��ά����/����/ħ����+10�ּ�+15\r\n";
		
		textz += "#r#L3#��ϳ�1��������#v1132000#��ά����+3#l\r\n";

		textz += "#r#L4#��ϳ�2��������#v1132001#��ά����+6\r\n";


		  textz += "\r\n                 #k����δ���������\r\n\r\n";
		cm.sendSimple (textz);  
   } else if (selection == 0){
    cm.openNpc(9310060, 1);//1����ָ
	}else if (selection == 1){
    cm.openNpc(9310060, 2);//2����ָ
	}else if (selection == 2){
    cm.openNpc(9310060, 3);//3����ָ
	}else if (selection == 3){
    cm.openNpc(9310060, 4);//1������
	}else if (selection == 4){
    cm.openNpc(9310060, 5);//2������
	
}
}
}

