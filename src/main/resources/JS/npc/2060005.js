/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = 0;
var fbmc = "水下世界-(骑宠任务)";//副本名称
var eventname = "Qichong";//副本配置文件

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            if (selection == 0) {
				map = cm.getPlayer().getMap();
                 if (cm.isQuestFinished(6002)) {//判断任务
                    cm.sendOk("你已经完成了骑兽任务。");
                    cm.dispose();
                 } else if (!cm.isQuestActive(6002)) {//判断任务
                    cm.sendOk("你没有接受有骑兽任务。");
                    cm.dispose();
                 } else if (!cm.getPlayerCount(923010000) <= 0) {
	             cm.sendOk("里面有人,请稍后.");
				 cm.dispose();
                   } else {
					cm.getMap(923010000).resetFully();//地图刷新
                    cm.removeAll(4031507);
                    cm.removeAll(4031508);
                    var party = cm.getParty().getMembers();
                    var mapId = cm.getPlayer().getMapId();
                    var next = true;
                    var levelValid = 0;
                    var inMap = 0;
                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
						if (next) {
							var em = cm.getEventManager("Qichong");
							if (em == null) {
								cm.sendOk("此任务正在建设当中。");
							} else {
								var prop = em.getProperty("state");
								if (prop.equals("0") || prop == null) {
									em.startInstance(cm.getParty(), cm.getMap());
									cm.dispose();
									return;
								}
							}
							cm.dispose();
						}
					} 
				}
			}
		}
	}
}