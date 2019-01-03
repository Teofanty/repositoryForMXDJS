/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
var status = 0;
var fbmc = "怪物嘉年华";//副本名称
var minLevel = 50;//最低等级,如设置错误,开赛等待会剔出
var maxLevel = 120;//最高等级,如设置错误,开赛等待会剔出
var minPartySize = 1;//几VS几人数
var eventname = "cpq2";//副本配置文件
function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        cm.dispose();
    if (status == 0 && mode == 1) {
        var selStr = "请选择一种你想要参赛嘉年华战斗场地!\r\n#L100##v4001129##z4001129#兑换物品.#l";
	var found = false;
        for (var i = 0; i < 3; i++){
            if (getCPQField(i+1) != "") {
                selStr += "\r\n#b#L" + i + "# " + getCPQField(i+1) + "#l#k";
		found = true;
            }
        }
        if (cm.getParty() == null) {
            cm.sendSimple("请告诉你队伍的队长跟我说话.\r\n#L100##v4001129##z4001129#兑换物品.#l");
        } else {
            if (cm.isLeader()) {
				var pt = cm.getPlayer().getParty();
				if (pt.getMembers().size() < minPartySize) {
						cm.sendOk("你需要创建队伍，,需要"+minPartySize+"人以上才可以嘉年华。");
						cm.dispose();
                if ((cm.getParty() != null && 1 < cm.getParty().getMembers().size() && cm.getParty().getMembers().size() < (selection == 4 || selection == 5 || selection == 8 ? 4 : 3)) || cm.getPlayer().isGM()) {
                    if (checkLevelsAndMap(minLevel, maxLevel) == minPartySize) {
                        cm.sendOk("队伍里有人等级不符合等级不符合"+minLevel+"至"+maxLevel+"范围内。");
                        cm.dispose();
                    } else if (checkLevelsAndMap(minLevel, maxLevel) == minPartySize) {
                        cm.sendOk("在地图上找不到您的队友。");
                        cm.dispose();
                    }
				}
				}
		if (found) {
                    cm.sendSimple(selStr);
		} else {
		    cm.sendSimple("目前没有房间.\r\n#L100##v4001129##z4001129#兑换物品.#l");
		}
            } else {
                cm.sendSimple("请告诉你队伍的队长跟我说话.\r\n#L100##v4001129##z4001129#兑换物品.#l");
            }
        }
    } else if (status == 1) {
	if (selection == 100) {
	    cm.sendSimple("#b#L0#50个#v4001129##z4001129# = #v1122007##z1122007##l\r\n#L1#30个#v4001129##z4001129# = #v2041211##z2041211##l\r\n#L2#50个#v4001254##z4001254#=#v1122058##z1122058##l#k");
	} else if (selection >= 0 && selection < 3) {
	    var mapid = 980030000+((selection+1)*1000);
            if (cm.getEventManager("cpq2").getInstance("cpq"+mapid) == null) {
                if ((cm.getParty() != null && 1 < cm.getParty().getMembers().size() && cm.getParty().getMembers().size() < (selection == 1 ? 4 : 3)) || cm.getPlayer().isGM()) {
                    if (checkLevelsAndMap(minLevel, maxLevel) == minPartySize) {
                        cm.sendOk("队伍里有人等级不符合"+minLevel+"至"+maxLevel+"范围内.");
                        cm.dispose();
                    } else if (checkLevelsAndMap(minLevel, maxLevel) == minPartySize) {
                        cm.sendOk("在地图上找不到您的队友,至少需要"+minPartySize+"位等级在"+minLevel+"至"+maxLevel+"的队友.");
                        cm.dispose();
                    } else {
                        cm.getEventManager("cpq2").startInstance(""+mapid, cm.getPlayer());
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("您的队伍人数不足,需要"+minPartySize+"人以上才可以嘉年华.");
					cm.dispose();
                }
            } else if (cm.getParty() != null && cm.getEventManager("cpq2").getInstance("cpq"+mapid).getPlayerCount() == cm.getParty().getMembers().size()) {
                if (checkLevelsAndMap(minLevel, maxLevel) == minPartySize) {
                    cm.sendOk("在地图上找不到您的队友,至少需要"+minPartySize+"位等级在"+minLevel+"至"+maxLevel+"的队友.");
                    cm.dispose();
                } else if (checkLevelsAndMap(minLevel, maxLevel) == minPartySize) {
                    cm.sendOk("在地图上找不到您的队友,至少需要"+minPartySize+"位等级在"+minLevel+"至"+maxLevel+"的队友.");
                    cm.dispose();
                } else {
					var pt = cm.getPlayer().getParty();
					if (pt.getMembers().size() < minPartySize) {
						cm.sendOk("需要"+minPartySize+"人以上才可以嘉年华！！");
						cm.dispose();
					} else {
                    //Send challenge packet here
                    var owner = cm.getChannelServer().getPlayerStorage().getCharacterByName(cm.getEventManager("cpq2").getInstance("cpq"+mapid).getPlayers().get(0).getParty().getLeader().getName());
                    owner.addCarnivalRequest(cm.getCarnivalChallenge(cm.getChar()));
                    //if (owner.getConversation() != 1) {
                        cm.openNpc(owner.getClient(), 2042006);
                    //}
                    cm.sendOk("您的挑战已发送.");
                    cm.dispose();
                }
				}
            } else {
                cm.sendOk("参加怪物嘉年华的双方必须有相等数量的队员");
                cm.dispose();
            }
	} else {
	    cm.dispose();
	}
	} else if (status == 2) {
	    if (selection == 0) {
		if (!cm.haveItem(4001129,50)) {
		    cm.sendOk("你没有物品50个#v4001129##z4001129#.");
			cm.dispose();
		} else if (!cm.canHold(1122007,1)) {
		    cm.sendOk("请腾出背包空间");
			cm.dispose();
		} else {
		    cm.gainItem(1122007,1);
		    cm.gainItem(4001129,-50);
			cm.dispose();
		}
	    } else if (selection == 1) {
		if (!cm.haveItem(4001129,30)) {
		    cm.sendOk("你没有物品30个#v4001129##z4001129#.");
			cm.dispose();
		} else if (!cm.canHold(2041211,1)) {
		    cm.sendOk("请腾出背包空间");
			cm.dispose();
		} else {
		    cm.gainItem(2041211,1);
		    cm.gainItem(4001129,-30);
			cm.dispose();
		}
	    } else if (selection == 2) {
		if (!cm.haveItem(4001254,50)) {
		    cm.sendOk("你没有物品50个#v4001254##z4001254#.");
			cm.dispose();
		} else if (!cm.canHold(1122058,1)) {
		    cm.sendOk("请腾出背包空间");
			cm.dispose();
		} else {
		    cm.gainItem(1122058,1);
		    cm.gainItem(4001254,-50);
			cm.dispose();
		}
	    }
        }
}

function checkLevelsAndMap(lowestlevel, highestlevel) {
    var party = cm.getParty().getMembers();
    var mapId = cm.getMapId();
    var valid = 0;
    var inMap = 0;

    var it = party.iterator();
    while (it.hasNext()) {
        var cPlayer = it.next();
        if (!(cPlayer.getLevel() >= lowestlevel && cPlayer.getLevel() <= highestlevel) && cPlayer.getJobId() != 900) {
            valid = 1;
        }
        if (cPlayer.getMapid() != mapId) {
            valid = 2;
        }
    }
    return valid;
}

function getCPQField(fieldnumber) {
    var status = "";
    var event1 = cm.getEventManager("cpq2");
    if (event1 != null) {
        var event = event1.getInstance("cpq"+(980030000+(fieldnumber*1000)));
        if (event == null && fieldnumber < 1) {
            status = "嘉年华对战场地 "+fieldnumber+"(2v2)";
        } else if (event == null) {
            status = "嘉年华对战场地 "+fieldnumber+"(3v3)";
        } else if (event != null && (event.getProperty("started").equals("false"))) {
            var averagelevel = 0;
            for (i = 0; i < event.getPlayerCount(); i++) {
                averagelevel += event.getPlayers().get(i).getLevel();
            }
            averagelevel /= event.getPlayerCount();
            status = event.getPlayers().get(0).getParty().getLeader().getName()+"/"+event.getPlayerCount()+"用户/平均等级 "+averagelevel;
        }
    }
    return status;
}
