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
		cm.sendNext("��δͨ������Ǽ�⣬���Խ���Ϊ��Ϊ�Ƿ�����ʹ���ߣ���������Ҫ����#b30����#k�ļ������#b����#kδͨ������Ǽ�⣬���Զ���ţ��ֶ���Ϸ����ɫ��Ϸ������;���ߣ�����֮���������õȴ�#r30����#k�������ؿ��ǣ�\r\n\r\n#rĿǰʣ��ʱ�� #r" + TimeString(LeftSecond));
	} else if (status == 1) {
		if(LeftSecond <= 0){
			cm.warp(100000000 , 0);
		} else {
			cm.sendNext("����ʱ�䵽���һ�����ȥ���ִ壡");
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
	return (min + "��" + second + "��");
}