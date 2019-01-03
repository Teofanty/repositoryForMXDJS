/* ==================
 脚本类型: 副本入口NPC	    
 脚本作者：久久    
 联系方式：121418194
 =====================
 */
var status = -1;

function start() {
	cm.removeAll(4001256);
	cm.removeAll(4001257);
	cm.removeAll(4001258);
	cm.removeAll(4001259);
	cm.removeAll(4001260);
		if (cm.getPlayer().getLevel() < 90) {
			cm.sendOk("请保证队友全部在90级以上.");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().getClient().getChannel() > 3) {
			cm.sendOk("只有在 1,2,3线可以参加该副本！");
			cm.dispose();
			return;
		}
    var em = cm.getEventManager("CWKPQ");

    if (em == null) {
	cm.sendOk("事件脚本不存在，请联系GM！");
	cm.dispose();
	return;
    }
    var prop = em.getProperty("state");

    if (prop == null || prop.equals("0")) {
	var squadAvailability = cm.getSquadAvailability("CWKPQ");
	if (squadAvailability == -1) {
	    status = 0;
	    cm.sendYesNo("你有兴趣成为远征队的队长吗？");

	} else if (squadAvailability == 1) {
	    // -1 = Cancelled, 0 = not, 1 = true
	    var type = cm.isSquadLeader("CWKPQ");
	    if (type == -1) {
		cm.sendOk("远征队超时导致结束了，请重新注册。");
		cm.dispose();
	    } else if (type == 0) {
		var memberType = cm.isSquadMember("CWKPQ");
		if (memberType == 2) {
		    cm.sendOk("你被列入了禁止名单.");
		    cm.dispose();
		} else if (memberType == 1) {
		    status = 5;
		    cm.sendSimple("接下来你打算做什么？ \r\n#b#L0#查看队员#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l \r\n#b#L3#检查列表#l");
		} else if (memberType == -1) {
		    cm.sendOk("远征队结束了，请重新注册");
		    cm.dispose();
		} else {
		    status = 5;
		    cm.sendSimple("接下来你打算做什么？ \r\n#b#L0#查看队员#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l \r\n#b#L3#Check out jobs#l");
		}
	    } else { // Is leader
		status = 10;
		cm.sendSimple("接下来你打算做什么？ \r\n#b#L0#查看队员#l \r\n#b#L1#移除队员#l \r\n#b#L2#编辑注册名单#l \r\n#b#L3#检查列表#l \r\n#r#L4#进入地图#l");
	    // TODO viewing!
	    }
	} else {
			var eim = cm.getDisconnected("CWKPQ");
			if (eim == null) {
				var squd = cm.getSquad("CWKPQ");
				if (squd != null) {
					if (squd.getNextPlayer() != null) {
						cm.sendOk("远征队的战斗已经开始了，请稍候再试 " + squd.getNextPlayer());
						cm.safeDispose();
					} else {
						cm.sendYesNo("远征队与BOSS的战斗已经开始了。你要排队等候吗？");
						status = 3;
					}
				} else {
					cm.sendOk("远征队与BOSS的战斗已经开始了。");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("啊，你回来了。你愿意再加入你的队伍吗？");
				status = 1;
			}
	}
    } else {
			var eim = cm.getDisconnected("CWKPQ");
			if (eim == null) {
				var squd = cm.getSquad("CWKPQ");
				if (squd != null) {
					if (squd.getNextPlayer() != null) {
						cm.sendOk("远征队与BOSS的战斗已经开始了。预定下一个地点的是" + squd.getNextPlayer());
						cm.safeDispose();
					} else {
						cm.sendYesNo("远征队与BOSS的战斗已经开始了。你要排队等候下一个地点吗？");
						status = 3;
					}
				} else {
					cm.sendOk("远征队与BOSS的战斗已经开始了。");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("啊，你回来了。你愿意再加入你的队伍吗？");
				status = 1;
			}
    }
}

function action(mode, type, selection) {
    switch (status) {
	case 0:
	    	if (mode == 1) {
			if (cm.registerSquad("CWKPQ", 5, " 被任命为队长。如果您愿意参加，请在时间段内为远征队登记。")) {
				cm.sendOk("你被任命为队长。在接下来的5分钟里，你可以处理加入探险队的成员。");
			} else {
				cm.sendOk("增加小队时产生了错误！");
			}
	    	}
	    cm.dispose();
	    break;
	case 1:
		if (!cm.reAdd("CWKPQ", "CWKPQ")) {
			cm.sendOk("未知错误，请重试！.");
		}
		cm.safeDispose();
		break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("CWKPQ");
			if (squd != null && squd.getNextPlayer() == null) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("你已经预订好位置了。");
			}
		}
		cm.dispose();
		break;
	case 5:
	    if (selection == 0 || selection == 3) {
		if (!cm.getSquadList("CWKPQ", selection)) {
		    cm.sendOk("由于一个未知的错误，远征队的请求被拒绝了。");
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("CWKPQ", true);
		if (ba == 2) {
		    cm.sendOk("远征队满员了，请稍候再试！");
		} else if (ba == 1) {
		    cm.sendOk("你成功加入了远征队");
		} else {
		    cm.sendOk("你已经是远征队的成员了！");
		}
	    } else {// withdraw
		var baa = cm.addMember("CWKPQ", false);
		if (baa == 1) {
		    cm.sendOk("你已经成功退出了远征队！");
		} else {
		    cm.sendOk("你并不在远征队成员中.");
		}
	    }
	    cm.dispose();
	    break;
	case 10:
	    if (mode == 1) {
		if (selection == 0 || selection == 3) {
		    if (!cm.getSquadList("CWKPQ", selection)) {
			cm.sendOk("由于一个未知的错误，远征队的要求被拒绝了.");
		    }
		    cm.dispose();
		} else if (selection == 1) {
		    status = 11;
		    if (!cm.getSquadList("CWKPQ", 1)) {
			cm.sendOk("由于一个未知的错误，远征队的要求被拒绝了.");
			cm.dispose();
		    }
		} else if (selection == 2) {
		    status = 12;
		    if (!cm.getSquadList("CWKPQ", 2)) {
			cm.sendOk("由于一个未知的错误，远征队的要求被拒绝了.");
			cm.dispose();
		    }
		} else if (selection == 4) { // get insode
		    if (cm.getSquad("CWKPQ") != null) {
			if (!cm.haveItem(4032012, 1)) {
			    var dd = cm.getEventManager("CWKPQ");
			    dd.startInstance(cm.getSquad("CWKPQ"), cm.getMap());
			} else {
		 	    cm.sendOk("由于一个未知的错误，远征队的要求被拒绝了.");
			}
		    } else {
			cm.sendOk("由于一个未知的错误，远征队的要求被拒绝了.");
		    }
		    cm.dispose();
		}
	    } else {
		cm.dispose();
	    }
	    break;
	case 11:
	    cm.banMember("CWKPQ", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("CWKPQ", selection);
	    }
	    cm.dispose();
	    break;
	default:
	    cm.dispose();
	    break;
    }
}
