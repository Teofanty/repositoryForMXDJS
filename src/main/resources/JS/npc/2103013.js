var status = 0;
var section = 0;
importPackage(java.lang);
//questid 29932, infoquest 7760
function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 99) {
		cm.dispose();
		return;
	}
	status--;
    }
    if (status == 1) {
	if (cm.getMapId() >= 926020001 && cm.getMapId() <= 926020004) {
		var itemid = 4001321 + (cm.getMapId() % 10);
		if (!cm.canHold(itemid)) {
			cm.sendOk("请为背包腾出空间");
		} else {
			if(cm.getLevel() >= 80){
		//		cm.gainExp(250000);
			}
			cm.gainItem(itemid,1);
			cm.warp(cm.getMapId() - 10000, 0);
		}
		cm.dispose();
	} else if (cm.getMapId() >= 926010001 && cm.getMapId() <= 926010004) {
		cm.warp(926010000,0);
		cm.dispose();
	} else if (cm.getMapId() >= 926010100 && cm.getMapId() <= 926013504) {
		cm.sendYesNo("你想退出这个地方吗？");
		status = 99;
	} else {
		cm.sendSimple("我叫杜阿特。\r\n#b#e#L1#进入金字塔。#l#n\r\n#L2#法老墓白雪人。 #l\r\n#L3#听雪人法老的珠宝故事。 #l\r\n#L4#获得<法老的保护勋章>。 #l#k");
	}
    } else if (status == 2) {
		section = selection;
		if (selection == 1) {
			cm.sendSimple("你这个无知的傻瓜，无视上帝的愤怒，选择你的命运！\r\n#L0# #v3994115# #l#L1# #v3994116# #l#L2# #v3994117# #l#L3# #v3994118# #l");
		} else if (selection == 2) {
			cm.sendSimple("你带来了什么宝石？ \r\n#L0##i4001322##t4001322##l\r\n#L1##i4001323##t4001323##l\r\n#L2##i4001324##t4001324##l\r\n#L3##i4001325##t4001325##l");
		} else if (selection == 3) {
			cm.sendOk("在法老雪人的坟墓，你可以获得一个  #e#b#t2022613##k#n 通过证明自己能够击败  #b法老小雪人 #k, 法老的克隆。盒子里有一个非常特别的宝藏。它是  #b#b#t1132012##k#n.\r\n#i1132012# #t1132012#\r\n\r\n如果你不知何故能够在地狱模式下生存，你将得到  #b#b#t1132013##k#n.\r\n#i1132013# #t1132013#\r\n不过，当然，基本不会允许这样的事情发生。");
			cm.dispose();
		} else if (selection == 4) {
			var record = cm.getQuestRecord(7760);
			var data = record.getCustomData();
			if (data == null) {
				record.setCustomData("0");
				data = record.getCustomData();
			}
			var mons = parseInt(data);
			if (mons < 50000) {
				cm.sendOk("请在金字塔击败至少50000个怪物，再找我。目前杀死  : " + mons);
			} else if (cm.canHold(1142142) && !cm.haveItem(1142142)){
				cm.gainItem(1142142,1);
				cm.forceStartQuest(29932);
				cm.forceCompleteQuest(29932);
			} else {
				cm.sendOk("请腾出背包空间");
			}
			cm.dispose();
		}
	} else if (status == 3) {
		if (section == 1) {
			var cont_ = false;
			if (selection == 0) { //easy; 40-45
				if (cm.getPlayer().getLevel() < 40) {
					cm.sendOk("你必须大于40级。 ");
				} else if (cm.getPlayer().getLevel() > 60) {
					cm.sendOk("你必须小于60级。 ");
				} else {
					cont_ = true;
				}
			} else if (selection == 1) { //normal; 46-50
				if (cm.getPlayer().getLevel() < 45) {
					cm.sendOk("你必须大于45级。");
				} else if (cm.getPlayer().getLevel() > 60) {
					cm.sendOk("你必须小于60级。 ");
				} else {	
					cont_ = true;
				}
			} else if (selection == 2) { //hard; 51-60
				if (cm.getPlayer().getLevel() < 50) {
					cm.sendOk("你必须大于50级。");
				} else if (cm.getPlayer().getLevel() > 60) {
					cm.sendOk("你必须小于60级。");
				} else {
					cont_ = true;
				}
			} else if (selection == 3) { //hell; 61+
				if (cm.getPlayer().getLevel() < 61) {
					cm.sendOk("你必须大于61级。 ");
				} else {
						cont_ = true;
				}
			}
			if (cont_ && cm.isLeader()) {//todo
				if (!cm.start_PyramidSubway(selection)) {
					cm.sendOk("金字塔目前正处于全面的时刻。 ");
				}
			} else if (cont_ && !cm.isLeader()) {
				cm.sendOk("你必须是队伍队长");
			}
		} else if (section == 2) {
			var itemid = 4001322 + selection;
			if (!cm.haveItem(itemid,1)) {
				cm.sendOk("你没有这个物品");
			} else {
				if (cm.bonus_PyramidSubway(selection)) {
					cm.gainItem(itemid, -1);
				} else {
					cm.sendOk("金字塔目前正处于全面的时刻 ");
				}
			}
		}
		cm.dispose(); //todo
	} else if (status == 100) {
		cm.warp(926010000,0);
		cm.dispose();
	}
}