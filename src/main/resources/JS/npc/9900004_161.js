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

	    var textz = "\r\n��ã����ǲ��϶һ�NPC����ѡ������Ҫ�һ�����Ʒ \r\n\r\n";

		textz += "#r#L0#1000��#v4001126##z4001126#�һ�1��#v4000463##z4000463##l\r\n\r\n";


		cm.sendSimple (textz);  
   } else if (selection == 0){
    cm.openNpc(9900004, 161);//1����ָ
	}else if (selection == 1){
    cm.openNpc(9310072, 2);//2����ָ
	}else if (selection == 2){
    cm.openNpc(9310072, 3);//3����ָ
}
}
}

