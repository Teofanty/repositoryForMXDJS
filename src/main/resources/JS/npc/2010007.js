/* Dawnveil
    Form guild
	Heracle
    Made by Daenerys
*/
var status = -1;
var sel;

function start() {
    cm.sendNext("嘿…你会对家族产生兴趣吗?");
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0)
	cm.sendSimple("\t\r\n#b#L0#我想创建家族#l\r\n#L1#我想解散家族#l\r\n#L2#增加家族人数(限于100)#l#k");
    else if (status == 1) {
	sel = selection;
	if (selection == 0) {
	    if (cm.getPlayerStat("GID") > 0) {
		cm.sendNext("嗯，我不认为你有资格成为一个家族族长呢。请训练更加努力，所以你可以成为一个家族的族长.");
		cm.dispose();
	    } else
		cm.sendYesNo("哦!所以你在这里创建一个家族…你需要 2000万 金币 创建家族。我相信你已经准备好了。你想创建一个家族吗？");
	} else if (selection == 1) {
	    if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
		cm.sendOk("你只能解散家族，如果你是家族的族长.");
		cm.dispose();
	    } else
		cm.sendYesNo("你确定你想解散家族？ 你将无法恢复GP，你所有的 GP 将消失.");
	} else if (selection == 2) {
	    if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
		cm.sendOk("你只能增加你的家族的能力，如果你是族长.");
		cm.dispose();
	    } else
		cm.sendYesNo("提高家族人数#b5#k 需要 #b500,000 金币#k, 你确定要继续吗?");
	} else if (selection == 3) {
	    if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
		cm.sendOk("你只能增加你的家族人数，如果你是族长.");
		cm.dispose();
	    } else
		cm.sendYesNo("提高你的家族人数#b5#k 需要 #b25,000 GP#k, 你确定要继续吗?");
	}
    } else if (status == 2) {
	if (sel == 0 && cm.getPlayerStat("GID") <= 0) {
		//cm.gainMeso(- 800000 );//扣除多少金币
	    cm.genericGuildMessage(1);
	    cm.dispose();
	} else if (sel == 1 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
	    cm.disbandGuild();
	    cm.dispose();
	} else if (sel == 2 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
	    cm.increaseGuildCapacity(false);
	    cm.dispose();
	} else if (sel == 3 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
	    cm.increaseGuildCapacity(true);
	    cm.dispose();
	}
    }
}