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

	    var textz = "\r\n你好，我是材料兑换NPC，请选择你需要兑换的物品 \r\n\r\n";

		textz += "#r#L0#1000个#v4001126##z4001126#兑换1个#v4000463##z4000463##l\r\n\r\n";


		cm.sendSimple (textz);  
   } else if (selection == 0){
    		if (cm.getInventory(4).isFull(1)){
            cm.sendOk("其它栏空余不足1个空格！");
            cm.dispose();
        } else if (!cm.haveItem(4001126, 1000)) {
                cm.sendOk("#v4001126##z4001126#不足1000个！");
				cm.dispose();
		} else {
				cm.gainItem(4001126,-1000);//这里扣除物品
cm.gainItem(4000463,1);
cm.dispose();
            }
	}else if (selection == 1){
    cm.openNpc(9310072, 2);//2级戒指
	}else if (selection == 2){
    cm.openNpc(9310072, 3);//3级戒指
}
}
}

