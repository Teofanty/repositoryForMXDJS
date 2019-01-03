function start() {
	//cm.sendSimple("<3 <3");
	cm.sendSimple("#b你好 #k#h  ##e  #b我是排名系统.排名只显示前20名#k\r\n\r\n#L0##d家族排名\n\#l #L1##r等级排名\n\#l #L2##b金币排名#l #L3##g人气排名#l");
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {	
		cm.displayGuildRanks();
		cm.dispose();
	}else if (selection == 1) {
		cm.showlvl();
		cm.dispose();
	}else if (selection == 2) {
		cm.showmeso();
		cm.dispose();
	}else if (selection == 3) {
		cm.showfame();
		cm.dispose();
	}
}
