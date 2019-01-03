/*
	Bell - KC/NLC Subway Station(103000100/600010001), Waiting Room(600010002/600010004)
*/

var section;
var msg = new Array("新枫叶城","废弃都市","废弃都市","新枫叶城");
var ticket = new Array(4031711,4031713);
var cost = 5000;
var returnMap = new Array(103000100,600010001);

function start() {
    status = -1;
    sw = cm.getEventManager("Subway");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == 0 && status == 0) {
	cm.dispose();
    } else {
	status++;
	if(mode == 0) {
	    if(section == 2) {
		cm.sendNext("好，请稍候~!");
	    } else {
		cm.sendOk("你必须有一些事情来照顾她，对?");
	    }
	    cm.dispose();
	    return;
	}
	if (status == 0) {
	    switch (cm.getMapId()) {
		case 103000100:
		    section = 0;
		    break;
		case 600010001:
		    section = 1;
		    break;
		case 600010004:
		    section = 2;
		    break;
		case 600010002:
		    section = 3;
		    break;
		default:
		    cm.sendNext("错误~");
		    cm.dispose();
		    break;
	    }
	    if(section < 2) {
		cm.sendSimple("你好。 你想买地铁的票?\r\n#L0##b"+msg[section]+"#l");
	    } else {
		cm.sendYesNo("你想回去吗？ #r"+msg[section]+"#k地铁站?");
	    }
	}
	else if(status == 1) {
	    if(section < 2) {
		cm.sendYesNo("地铁去 "+msg[section]+" 每10分钟起飞，从小时开始，它会花费你 #b"+cost+" 金币#k. 您确定要购买 #b#t"+ticket[section]+"##k?");
	    } else {
		section -= 2;
		cm.warp(returnMap[section]);
		cm.dispose();
	    }
	}
	else if(status == 2) {
	    if(cm.getMeso() < cost || !cm.canHold(ticket[section])) {
		cm.sendNext("你确定你有 #b"+cost+" 金币#k? 如果是这样，那么我敦促你检查你的库存，看看它是否已满.");
	    }
	    else {
		cm.gainItem(ticket[section],1);
		cm.gainMeso(-cost);
	    }
	    cm.dispose();
	}
    }
}
