/* ==================
 脚本类型:  NPC	    
 脚本作者：月亮     
 联系方式：2412614144
 =====================
 */
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);

var status = 0;
//副本名称
var fbmc = "通天塔-(女神副本)";

var eventname = "OrbisPQ";//副本配置文件

var maxjinbi = 50000;//判断征集令金币

var minLevel = 51;
var maxLevel = 200;//等级设置

var minPartySize = 2;
var maxPartySize = 6;//人数设置

var random1 = java.lang.Math.floor(Math.random() * 6);
var random2 = java.lang.Math.floor(Math.random() * 6);
var random3 = java.lang.Math.floor(Math.random() * 6);
var random4 = java.lang.Math.floor(Math.random() * 6);
var random5 = java.lang.Math.floor(Math.random() * 6);
var random6 = java.lang.Math.floor(Math.random() * 6);

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

            cm.sendOk("感谢你的光临！");
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
            text += "#k\t\t\t欢迎来到#b" + fbmc + "#k\r\n";
            text += "副本进入要求如下：\r\n";
			text += "①等级限制：#r" + minLevel + "#k - #r" + maxLevel + "#k级\t\t②人数限制：#r" + minPartySize + " #k- #r" + maxPartySize + "队员#k\r\n";
			text += "#L1##r开始 " + fbmc + "#l\r\n\r\n";//#L0##l
			text += "#L2##r兑换#k( 20个 #v4031559# 兑换一个 #v1082232# )\r\n\r\n";
            text += "#L3##r副本征集令#k" + maxjinbi + "金币/次#l\r\n\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
	if (cm.getMapId() == 920010000) { //inside orbis pq
		cm.sendOk("我们必须拯救他 需要20个云的碎片");
		cm.dispose();
		return;
	}
	for (var i = 4001044; i < 4001064; i++) {
		cm.removeAll(i); //holy
	}
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
		var em = cm.getEventManager("OrbisPQ");
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
			if (cm.haveItem(4031559,20)){
				if (cm.getInventory(1).isFull(0)){
					cm.sendOk("装备栏空余不足1个空格！");
					cm.dispose();
					return;
				} 
				cm.gainItem(4031559, -20);
				var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1082232); //获得装备的类形
				var toDrop = ii.randomizeStats(ii.getEquipById(1082232)).copy(); // 生成一个Equip类
				////toDrop. setFlag(1);//上锁不能与时间一起，否则会BUG不消失//上锁
				toDrop.setStr(random1);//给力量
				toDrop.setDex(random2);//给敏捷 
				toDrop.setInt(random3);//给智力
				toDrop.setLuk(random4);//给运气
				toDrop.setHp(random5 * 10);//HP
				toDrop.setMp(random6 * 10);//MP
				//toDrop.setWatk(10);//攻击力    
				//toDrop.setMatk(10);//魔法力
				//toDrop. setAvoid(0);//回避力
				//toDrop. setHands(0);//手技
				cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop, false)); //刷新背包
				cm.dispose();
			}else{
				cm.sendOk("你的#v4031559#不够，无法兑换！");
				cm.dispose();
			}	
        } else if (selection == 3) {
			if (cm.getMeso() >= maxjinbi){//判断多少金币
			cm.gainMeso(- maxjinbi );//扣除多少金币
			cm.laba(cm.getPlayer().getName() + " [征集令]" + " : " + "[" + fbmc + "]需要勇士一起完成",11);
			cm.dispose();
			}else{
			cm.sendOk("你的冒险币不足" + maxjinbi + "。无法发送征集令");
			cm.dispose();
			}	
		}
    }
}

