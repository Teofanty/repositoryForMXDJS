/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

var status = -1;
var rank = "C";
var exp = 0;

function start() {
    if (cm.getCarnivalParty() != null && cm.getCarnivalParty().getTotalCP() > 0) {
        status = 99;
    }
    action(1, 0, 0);
}
 
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (mode == -1) {
	cm.dispose();
	return;
    }
    if (status == 0) {
        cm.sendSimple("你想怎么办？如果你从来没有在怪物狂欢节参加，你需要加入之前知道它的一两件事.\r\n#b#L0# 转至怪物狂欢节现场.#l");
    } else if (status == 1) {
        switch (selection) {
            case 0: {
                var level = cm.getPlayerStat("LVL");
                if ( level < 30) {
                    cm.sendOk("我很抱歉，但只有级别在30+嘉年华可参加怪物.");
					 cm.dispose();
                } else {
                    cm.warp( 980030000, "st00" );
					 cm.dispose();
                }
                cm.dispose();
            }
            default: {
                cm.dispose();
                break;
            }
            break;
        }
    } else if (status == 100) {
        var carnivalparty = cm.getCarnivalParty();
        if (carnivalparty.getTotalCP() >= 501) {
            rank = "A";
            exp = 48000;
        } else if (carnivalparty.getTotalCP() >= 251) {
            rank = "B";
            exp = 35000;
        } else if (carnivalparty.getTotalCP() >= 101) {
            rank = "C";
            exp = 25000;
        } else if (carnivalparty.getTotalCP() >= 0) {
            rank = "D";
            exp = 15000;
        }
	cm.getPlayer().endPartyQuest(1302);
        if (carnivalparty.isWinner()) {
            cm.sendOk("尽管你表现出色，你赢了这场战斗。 胜利是你的. \r\n#b怪物嘉年华排名 : " + rank);
        } else {
            cm.sendOk("不幸的是，尽管你表现出色，你也可能已经绑定或者失败了。 胜利应该是你的下一次. \r\n#b怪物嘉年华排名 : " + rank);
        }
    } else if (status == 101) {
        var carnivalparty = cm.getCarnivalParty();
	var los = parseInt(cm.getPlayer().getOneInfo(1302, "lose"));
	var vic = parseInt(cm.getPlayer().getOneInfo(1302, "vic"));
        if (carnivalparty.isWinner()) {
	    vic++;
	    cm.getPlayer().updateOneInfo(1302, "vic", "" + vic);
            carnivalparty.removeMember(cm.getChar());
            cm.gainExpR(exp);
			 cm.dispose();
        } else {
	    los++;
	    cm.getPlayer().updateOneInfo(1302, "lose", "" + los);
            carnivalparty.removeMember(cm.getChar());
            cm.gainExpR(exp / 2);
			 cm.dispose();

        }
	cm.getPlayer().updateOneInfo(1302, "VR", "" + (java.lang.Math.ceil((vic * 100) / los)));
            cm.warp(980030000);
            cm.dispose();
    }

}