/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Mark the Toy Soldier - Doll's House(922000010)
-- By ---------------------------------------------------------------------------------------------
	Information
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Information
---------------------------------------------------------------------------------------------------
**/

var havePendulum = false;
var complete = false;
var inQuest = false;

function start() {
    if(cm.getQuestStatus(3230) == 1) {
	inQuest = true;
    } else {
	inQuest = false;
    }
    dh = cm.getEventManager("DollHouse");
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == 0 && status == 0) {
	cm.dispose();
	return;
    } else if(mode == 0 && status == 1) {
	cm.sendNext("I knew you'd stay. It's important that you finish what you've started! Now please go locate the different-looking dollhouse, break it, and bring #b#t4031094##k to me!");
	cm.dispose();
	return;
    }
    if(mode == 1) {
	status++;
    } else {
	status--;
    }
    if(inQuest == true) {
	if(status == 0) {
	    if(cm.haveItem(4031094)) {
		cm.sendNext("哦，哇，你找到了不同的娃娃屋，找到#b#t4031094#k！ 那是不可思议的！ 有了这个，呃二号钟楼将再次运行！ 谢谢你的工作，这里有一点奖励你的努力。 在此之前，请检查您的库存，看看是否已满.");
		havePendulum = true;
	    } else {
		cm.sendSimple("你好。 我是#b2040028#k，负责保护这个房间。 在里面，你会看到一堆娃娃，你可能会发现一个看起来有点不同于别的。 你的工作是找到它，打破门，找到＃b＃t4031094 ## k，这是钟楼的整体部分。 你会有一个时间限制，如果你打破错误的娃娃屋，你会被迫回到外面，所以请小心。\ r \ n＃L0 ##我想离开这里.#k#l");
	    }
	} else if(status == 1) {
	    if(havePendulum == true) {
		if(!cm.canHold(2000010)) {
		    cm.sendNext("你不能保留这个项目???");
		}
		cm.sendNextPrev("你觉得呢？你喜欢#t2000010#小号#k中没有我给你## B100？非常感谢您对我们的帮助了。钟楼将运行再次感谢你的英勇的努力，并从另一个维度的怪物似乎已经消失了。我现在就放你出去。我陪你到各处看看你!");
		if(complete == false) {
		    cm.completeQuest(3230);
		    cm.gainExp(2400);
		    cm.gainItem(4031094, -1);
		    cm.gainItem(2000010, 100);
		    complete = true;
		}
	    } else {
		cm.sendYesNo("你确定你现在要放弃？那么好吧......但是请记住，下一次你都到过这个地方，在玩具屋将切换的地方，你必须通过他们关心的每一个看起来完全一次。你觉得呢？您仍然想离开这个地方?");
	    }
	} else if(status == 2) {
	    cm.getPlayer().getEventInstance().removePlayer(cm.getChar());
	    cm.dispose();
	}
    } else {
	if(status == 0) {
	    cm.sendNext("什么......我们一直在为投标人进入这个房间，由于factthat从另一个层面怪物在这里躲起来。我不知道你在这里是如何得到的，但我要问你马上离开，因为它很危险的这个房间里.");
	} else if(status == 1) {
	    cm.warp(221023200, 4);
	    cm.dispose();
	}
    }
}