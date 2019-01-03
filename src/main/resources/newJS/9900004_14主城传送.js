
   
var status = 0;
var maps = Array(910000000, 100000000, 104000000, 102000000, 101000000, 103000000, 120000000, 105040300,240000000,220000000,211000000,200000000);
var show;
var sCost;
var selectedMap = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.dispose();
	return;
    } else if (status >= 2 && mode == 0) {
	cm.sendNext("这个镇上也有很多值得一看的地方。当你需要去另一个城市的时候，再回来找我吧！");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("你好，我是快捷传送。我们很乐意带您到您的目的地去。");//只要你愿意支付200抵用卷，如果你是新手，我也会给你极大的优惠哦。");
    } else if (status == 1) {
	var job = cm.getJob();
	// if (job == 0 || job == 1000 || job == 2000 || job == 3000 || job == 2001 || job == 2002 || job == 3001) {
	//     var selStr = "由于你是新手，可以享受99%的优惠 请选择您的目的地。支付费用之后，我将会传送你去往别的城镇。#b";
	//     for (var i = 0; i < maps.length; i++) {
	// 	if (maps[i] != cm.getMapId()) {
	// 	selStr += "\r\n#L" + i + "##m" + maps[i] + "# (5 抵用卷)#l";
	// 	}
	//     }
	// } else {
	    var selStr = "请选择您的目的地。支付费用之后，我将会传送你去往别的城镇。#b";
	    // for (var i = 0; i < maps.length; i++) {
        // if (maps[i] != cm.getMapId()) {
        // selStr += "\r\n#L" + i + "##m" + maps[i] + "# (200 抵用卷)#l";
        // }
	    // }
	// }
	cm.sendSimple(selStr);
    } else if (status == 2) {
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000 || job == 3000 || job == 2001 || job == 2002 || job == 3001) {
	    sCost = 5;
	    show = 5;
	} else {
	    sCost = 200;
	    show = 200;
	}
	cm.sendYesNo("你在这里没什么可干的，恩？你真的想去 #b#m" + maps[selection] + "##k? ");//这将花费你 #b" + show + " 抵用卷#k.");
	selectedMap = selection;
    } else if (status == 3) {
	// if (cm.getNX(2) < sCost) {
	//     cm.sendNext("请检查你是否有200抵用卷");
	// } else {
	//     cm.gainD(-sCost);
	    cm.warp(maps[selectedMap]);
	// }
	cm.dispose();
    }
}