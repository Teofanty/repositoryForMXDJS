/* 
	NPC Name: 		Tommie
	Map(s): 		Leafre: Cabin<To Orbis> (240000110)
	Description: 		Leafre Ticketing Usher
*/
var status = 0;

function start() {
    status = -1;
    flight = cm.getEventManager("Flight");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendNext("你的金币不足够?");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(flight == null) {
	    cm.sendNext("找不到此脚本请回报GM");
	    cm.dispose();
	} else if(flight.getProperty("entry").equals("true")) {
        cm.sendYesNo("你要搭往神木村的船?");
	} else if(flight.getProperty("entry").equals("false") && flight.getProperty("docked").equals("true")) {
	    cm.sendNext("很抱歉本航班的船已经开走,乘坐时间表可以通过售票展台查看.");
	    cm.dispose();
	} else {
	    cm.sendNext("很抱歉本航班的船已经开走,乘坐时间表可以通过售票展台查看");
	    cm.dispose();
	}
    } else if(status == 1) {
	if(!cm.haveItem(4031045)) {
	    cm.sendNext("不! 你没有#b#t4031045##k 所以我不能让你上船!.");
	} else {
	    cm.gainItem(4031045, -1);
	    cm.warp(240000111, 0);
	}
	cm.dispose();
    }
}