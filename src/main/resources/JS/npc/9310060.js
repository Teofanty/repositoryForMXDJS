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

	    var textz = " ★矿石戒指兑换 只能带一个★ \r\n\r\n";

		textz += "#r#L0#★合成1级戒指★#v1113013#四维属性/攻击/魔法力+3#l\r\n";

		textz += "#r#L1#★合成2级戒指★#v1113166#四维属性/攻击/魔法力+6\r\n";
		
		textz += "#r#L2#★合成3级戒指★#v1113167#四维属性/攻击/魔法力+10手技+15\r\n";
		
		textz += "#r#L3#★合成1级腰带★#v1132000#四维属性+3#l\r\n";

		textz += "#r#L4#★合成2级腰带★#v1132001#四维属性+6\r\n";


		  textz += "\r\n                 #k★★★未完待续★★★\r\n\r\n";
		cm.sendSimple (textz);  
   } else if (selection == 0){
    cm.openNpc(9310060, 1);//1级戒指
	}else if (selection == 1){
    cm.openNpc(9310060, 2);//2级戒指
	}else if (selection == 2){
    cm.openNpc(9310060, 3);//3级戒指
	}else if (selection == 3){
    cm.openNpc(9310060, 4);//1级腰带
	}else if (selection == 4){
    cm.openNpc(9310060, 5);//2级腰带
	
}
}
}

