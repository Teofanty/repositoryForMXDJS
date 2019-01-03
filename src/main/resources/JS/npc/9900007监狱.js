var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	var LeftSecond = cm.getLeftJailTime();
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		cm.sendNext("你未通过测谎仪检测，所以将视为你为非法程序使用者，所以你需要经过#b30分钟#k的监禁。如#b三次#k未通过测谎仪检测，将自动封号，手动游戏、绿色游戏！如中途下线，上线之后会继续重置等待#r30分钟#k，请慎重考虑！\r\n\r\n#r目前剩余时间 #r" + TimeString(LeftSecond));
	} else if (status == 1) {
		if(LeftSecond <= 0){
			cm.warp(100000000 , 0);
		} else {
			cm.sendNext("禁闭时间到了我会送你去射手村！");
		}
		cm.dispose();
	} else {
		cm.dispose();
	}
}

function TimeString(second){
	var min = 0, sec = 0;
	while(second >= 60){
		second -= 60;
		min++;
	}
	return (min + "分" + second + "秒");
}