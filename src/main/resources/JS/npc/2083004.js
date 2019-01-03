/*
	NPC Name: 		Mark of the Squad
	Map(s): 		Entrance to Horned Tail's Cave
	Description: 		Horntail Battle starter
*/
var status = -1;

function start() {
    if (cm.getPlayer().getLevel() < 80) {
        cm.sendOk("你必须高于80级，才能挑战暗黑龙王。");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getClient().getChannel() != 2 && cm.getPlayer().getClient().getChannel() != 3) {
        cm.sendOk("暗黑龙王仅可在2、3频道召唤。");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("HorntailBattle");

    if (em == null) {
        cm.sendOk("该事件未启动，请联系GM.");
        cm.dispose();
        return;
    }
    var prop = em.getProperty("state");

    var marr = cm.getQuestRecord(160100);
    var data = marr.getCustomData();
    if (data == null) {
        marr.setCustomData("0");
        data = "0";
    }
    var time = parseInt(data);
    if (prop == null || prop.equals("0")) {
        var squadAvailability = cm.getSquadAvailability("Horntail");
        if (squadAvailability == -1) {
            status = 0;
            cm.sendYesNo("你有兴趣成为远征队的队长?");

        } else if (squadAvailability == 1) {
            // -1 = Cancelled, 0 = not, 1 = true
            var type = cm.isSquadLeader("Horntail");
            if (type == -1) {
                cm.sendOk("小队已经结束，请重新注册.");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember("Horntail");
                if (memberType == 2) {
                    cm.sendOk("从班长，你被禁止.");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
                    cm.sendSimple("那你想做的事? \r\n#b#L0#查看队员#l \r\n#b#L1#加入队伍#l \r\n#b#L2#从队伍中撤离#l");
                } else if (memberType == -1) {
                    cm.sendOk("远征队已经结束，请重新注册.");
                    cm.dispose();
                } else {
                    status = 5;
                    cm.sendSimple("那你想做的事? \r\n#b#L0#查看队员#l \r\n#b#L1#加入队伍#l \r\n#b#L2#从队伍中撤离#l");
                }
            } else { // Is leader
                status = 10;
                cm.sendSimple("那你想做的事? \r\n#b#L0#查看队员#l \r\n#b#L1#删除成员#l \r\n#b#L2#编辑限制列表#l \r\n#r#L3#进入地图#l");
            // TODO viewing!
            }
        } else {
            var eim = cm.getDisconnected("HorntailBattle");
            if (eim == null) {
                var squd = cm.getSquad("Horntail");
                if (squd != null) {
                    cm.sendYesNo("队内对抗boss战已经开始.\r\n" + squd.getNextPlayer());
                    status = 3;
                } else {
                    cm.sendOk("队内对抗boss战已经开始.");
                    cm.safeDispose();
                }
            } else {
                cm.sendYesNo("啊，你回来了。你想重新加入你的队伍在打?");
                status = 1;
            }
        }
    } else {
        var eim = cm.getDisconnected("HorntailBattle");
        if (eim == null) {
            var squd = cm.getSquad("Horntail");
            if (squd != null) {
                cm.sendYesNo("队内对抗boss战已经开始.\r\n" + squd.getNextPlayer());
                status = 3;
            } else {
                cm.sendOk("队内对抗boss战已经开始.");
                cm.safeDispose();
            }
        } else {
            cm.sendYesNo("啊，你回来了。你想重新加入你的队伍在打?");
            status = 1;
        }
    }
}

function action(mode, type, selection) {
    switch (status) {
        case 0:
            if (mode == 1) {
                if (cm.registerSquad("Horntail", 5, " 先后被评为队伍（常规）的领导者。如果你想加入，请注册为黑暗龙王的远征队.")) {
                    cm.sendOk("你已经被任命为远征队的队长。在接下来的5分钟，你可以添加探险队的成员.");
                } else {
                    cm.sendOk("发生错误加入你的队伍.");
                }
            }
            cm.dispose();
            break;
        case 1:
            if (!cm.reAdd("HorntailBattle", "Horntail")) {
                cm.sendOk("错误...请重试.");
            }
            cm.safeDispose();
            break;
        case 3:
            if (mode == 1) {
               var party = cm.getParty().getMembers();
				//cm.getPlayer().dropMessage(5, "队伍有"+party.size()+"人");
				cm.dispose();
				for (var i = 0; i < party.size(); i++) {
					//cm.getPlayer().dropMessage(5, "所在地图代码"+party.get(i).getMapid());
					cm.dispose();
					if (party.get(i).getMapid() == 240060200){//判断队长在不在这个地图,可以重返的地图
						cm.flytoID(party.get(i).getId());
						cm.dispose();
						return;
					} 
				} 
			}
            break;
        case 5:
            if (selection == 0) {
                if (!cm.getSquadList("Horntail", 0)) {
                    cm.sendOk("由于未知错误，为队伍的请求被拒绝.");
                }
            } else if (selection == 1) { // join
                var ba = cm.addMember("Horntail", true);
                if (ba == 2) {
                    cm.sendOk("队伍目前已满，请稍后再试.");
                } else if (ba == 1) {
                    cm.sendOk("您已成功加入了队伍");
                } else {
                    cm.sendOk("You are already part of the squad.");
                }
            } else {// withdraw
                var baa = cm.addMember("Horntail", false);
                if (baa == 1) {
                    cm.sendOk("您已经从队伍成功及回收");
                } else {
                    cm.sendOk("你是不是队伍的一部分.");
                }
            }
            cm.dispose();
            break;
        case 10:
            if (mode == 1) {
                if (selection == 0) {
                    if (!cm.getSquadList("Horntail", 0)) {
                        cm.sendOk("由于未知错误，为队伍的请求被拒绝.");
                    }
                    cm.dispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("Horntail", 1)) {
                        cm.sendOk("由于未知错误，为队伍的请求被拒绝.");
                        cm.dispose();
                    }
                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("Horntail", 2)) {
                        cm.sendOk("由于未知错误，为队伍的请求被拒绝.");
                        cm.dispose();
                    }
                } else if (selection == 3) { // get insode
                    if (cm.getSquad("Horntail") != null) {
                        var dd = cm.getEventManager("HorntailBattle");
                        dd.startInstance(cm.getSquad("Horntail"), cm.getMap(), 160100);
                    } else {
                        cm.sendOk("由于未知错误，为队伍的请求被拒绝.");
                    }
                    cm.dispose();
                }
            } else {
                cm.dispose();
            }
            break;
        case 11:
            cm.banMember("Horntail", selection);
            cm.dispose();
            break;
        case 12:
            if (selection != -1) {
                cm.acceptMember("Horntail", selection);
            }
            cm.dispose();
            break;
        default:
            cm.dispose();
            break;
    }
}