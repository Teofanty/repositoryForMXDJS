function start() {
	//cm.sendSimple("<3 <3");
	cm.sendSimple("#b��� #k#h  ##e  #b��������ϵͳ.����ֻ��ʾǰ20��#k\r\n\r\n#L0##d��������\n\#l #L1##r�ȼ�����\n\#l #L2##b�������#l #L3##g��������#l");
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
