
   
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
	cm.sendNext("�������Ҳ�кܶ�ֵ��һ���ĵط���������Ҫȥ��һ�����е�ʱ���ٻ������Ұɣ�");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("��ã����ǿ�ݴ��͡����Ǻ��������������Ŀ�ĵ�ȥ��");//ֻҪ��Ը��֧��200���þ�����������֣���Ҳ����㼫����Ż�Ŷ��");
    } else if (status == 1) {
	var job = cm.getJob();
	// if (job == 0 || job == 1000 || job == 2000 || job == 3000 || job == 2001 || job == 2002 || job == 3001) {
	//     var selStr = "�����������֣���������99%���Ż� ��ѡ������Ŀ�ĵء�֧������֮���ҽ��ᴫ����ȥ����ĳ���#b";
	//     for (var i = 0; i < maps.length; i++) {
	// 	if (maps[i] != cm.getMapId()) {
	// 	selStr += "\r\n#L" + i + "##m" + maps[i] + "# (5 ���þ�)#l";
	// 	}
	//     }
	// } else {
	    var selStr = "��ѡ������Ŀ�ĵء�֧������֮���ҽ��ᴫ����ȥ����ĳ���#b";
	    // for (var i = 0; i < maps.length; i++) {
        // if (maps[i] != cm.getMapId()) {
        // selStr += "\r\n#L" + i + "##m" + maps[i] + "# (200 ���þ�)#l";
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
	cm.sendYesNo("��������ûʲô�ɸɵģ������������ȥ #b#m" + maps[selection] + "##k? ");//�⽫������ #b" + show + " ���þ�#k.");
	selectedMap = selection;
    } else if (status == 3) {
	// if (cm.getNX(2) < sCost) {
	//     cm.sendNext("�������Ƿ���200���þ�");
	// } else {
	//     cm.gainD(-sCost);
	    cm.warp(maps[selectedMap]);
	// }
	cm.dispose();
    }
}