/* ==================
 脚本类型:  NPC	    
 脚本作者：月亮     
 联系方式：2412614144
 =====================
 */

var status = 0;

var fbmc = "罗密欧与朱丽叶组队副本";//副本名称

var eventname = "Romeo";//副本配置文件

var maxjinbi = 50000;//判断征集令金币

var minLevel = 70;
var maxLevel = 200;//等级设置

var minPartySize = 3;
var maxPartySize = 6;//人数设置


function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("欢迎下次再来挑战！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {	
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			if (cm.getMapId() == 926100000) { //inside orbis pq
				cm.sendOk("请找出隐藏的信封。");
				cm.dispose();
				return;
			}
			if (cm.getMapId() == 926100001) { //inside orbis pq
				cm.sendOk("请消除所有的怪物。");
				cm.dispose();
				return;
			}
			if (cm.getMapId() == 926100100) { //inside orbis pq
				cm.sendOk("请把烧杯里的溢体装满。");
				cm.dispose();
				return;
			}
			if (cm.getMapId() == 926100200) { //inside orbis pq
				if (cm.haveItem(4001130,1)) {
					cm.sendOk("哦，我的信找到了，谢谢！");
					cm.gainItem(4001130,-1);
					em.setProperty("stage", "1");
				} else if (cm.haveItem(4001134,1)) {
					cm.gainItem(4001134,-1);
					cm.sendOk("谢谢你，已经过关了。.");
					em.setProperty("stage4", "1");
					em.setProperty("stage4", "2");
					cm.getMap().getReactorByName("rnj3_out3").hitReactor(cm.getClient());
				} else if (cm.haveItem(4001135,1)) {
					cm.gainItem(4001135,-1);
					cm.sendOk("谢谢你，已经过关了。.");
					em.setProperty("stage4", "1");
					em.setProperty("stage4", "2");
					cm.getMap().getReactorByName("rnj3_out3").hitReactor(cm.getClient());
				} else {
					cm.sendOk("现在我们必须停止冲突，请帮我找出#t4001134# 或 #t4001135#。");
					cm.dispose();
					return;
				}
			}
			if (cm.getMapId() == 926100300) { //inside orbis pq
				cm.sendOk("我们一定要到实验室的顶部。");
				cm.dispose();
				return;
			}
			if (cm.getMapId() == 926100400) { //inside orbis pq
				cm.sendOk("当你准备好了，我们要快去救救我的爱人.");
				cm.dispose();
				return;
			}
			if (cm.getMapId() == 926100401) { //inside orbis pq
				cm.warpParty(926100500); //urete
				cm.dispose();
				return;
			}
					if (cm.getMapId() == 926100000) { //inside orbis pq
					cm.sendOk("你应该尝试在这里调查各地。看看库中的文件，直到你可以找到入口实验室.");
					cm.dispose();
				return;
			}
			if (cm.getMapId() == 261000011) { //inside orbis pq
				text += "#k\t\t\t欢迎来到#r" + fbmc + "#k\r\n";
				text += "副本进入要求如下：\r\n";
				text += "①等级限制：#r" + minLevel + "#k - #r" + maxLevel + "#k级\t\t②人数限制：#r" + minPartySize + " #k- #r" + maxPartySize + "队员#k\r\n";
				text += "#L1##r开始 " + fbmc + "#l\r\n\r\n";
				text += "#L2##r副本征集令#k" + maxjinbi + "金币/次#l\r\n\r\n";
				cm.sendSimple(text);
			}
	} else if (selection == 1) {
		cm.removeAll(4001130);
	    cm.removeAll(4001131);
	    cm.removeAll(4001132);
	    cm.removeAll(4001133);
	    cm.removeAll(4001134);
	    cm.removeAll(4001135);
	if (cm.getParty() == null) { // No Party
	    cm.sendSimple("你貌似没有达到要求...:\r\n\r\n#r玩家成员要求: " + minPartySize + " , 每个人的等级必须在 " + minLevel + " 到 等级 " + maxLevel + ".");
		cm.dispose();
	} else if (!cm.isLeader()) { // Not Party Leader
	    cm.sendSimple("如果你想做任务，请#b队长#k 跟我谈.");
		cm.dispose();
	} else {
	    // Check if all 队员 are within PQ levels
	    var party = cm.getParty().getMembers();
	    var mapId = cm.getMapId();
	    var next = true;
	    var levelValid = 0;
	    var inMap = 0;
	    var it = party.iterator();

	    while (it.hasNext()) {
			var cPlayer = it.next();
			if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
				levelValid += 1;
			} else {
				next = false;
			}
			if (cPlayer.getMapid() == mapId) {
				inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
			}
	    }
	    if (party.size() > maxPartySize || inMap < minPartySize) {
			next = false;
	    }
	    if (next) {
			var em = cm.getEventManager("Romeo");
			if (em == null) {
				cm.sendSimple("找不到脚本请联络GM#b\r\n");
			} else {
				var prop = em.getProperty("state");
				if (prop.equals("0") || prop == null) {
					em.startInstance(cm.getParty(), cm.getMap());
					cm.dispose();
					return;
				} else {
					cm.sendSimple("其他队伍已经在里面做 #r组队任务了#k 请尝试换频道或者等其他队伍完成。");
					cm.dispose();
				}
			}
	    } else {
			cm.sendSimple("你的队伍貌似没有达到要求...:\r\n\r\n#r要求: " + minPartySize + " 玩家成员, 每个人的等级必须在 " + minLevel + " 到 等级 " + maxLevel + ".");
	    }
		cm.dispose();
	}
        } else if (selection == 2) {
			if (cm.getMeso() >= maxjinbi){//判断多少金币
				cm.gainMeso(- maxjinbi );//扣除多少金币
				cm.laba(cm.getPlayer().getName() + " [征集令]" + " : " + "["+ fbmc +"]需要勇士一起完成",11);
				cm.dispose();
			}else{
				cm.sendOk("你的冒险币不足" + maxjinbi + "。无法发送征集令");
				cm.dispose();
			}	
		}
    }
}

