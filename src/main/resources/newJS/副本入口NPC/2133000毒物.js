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

var status = -1;
var fbmc = "毒雾森林-(毒雾副本)";//副本名称
var minLevel = 55;
var maxLevel = 200;
var minPartySize = 3;
var maxPartySize = 6;
var maxjinbi = 50000;//判断征集令金币
var eventname = "Ellin";//副本配置文件
var status = -1;

var random1 = java.lang.Math.floor(Math.random() * 6);
var random2 = java.lang.Math.floor(Math.random() * 6);
var random3 = java.lang.Math.floor(Math.random() * 6);
var random4 = java.lang.Math.floor(Math.random() * 6);
var random5 = java.lang.Math.floor(Math.random() * 6);
var random6 = java.lang.Math.floor(Math.random() * 6);

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	    cm.givePartyItems(4001161, 0, true);
	    cm.givePartyItems(4001162, 0, true);
	    cm.givePartyItems(4001163, 0, true);
	    cm.givePartyItems(4001169, 0, true);
	    cm.givePartyItems(2270004, 0, true);
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
	//显示物品ID图片用的代码是  #v这里写入ID#
    text += "#k\t\t\t\t欢迎来到#r" + fbmc + "#k\r\n副本进入要求如下：\r\n1、人数限制:#r " + minPartySize + " #b- #r" + maxPartySize + "#k队员\t2、等级限制：#r " + minLevel + " #b- #r" + maxLevel + "级#k \r\n3、需要：#r20W金币#k\r\n#k\r\n"//3
	text += "#L0##r开始组队副本#l      #L1##r副本征集令#k" + maxjinbi + "金币/次#l  \r\n\r\n"//3
    text += "#L2##r兑换#k( 30个 #v4001198# 兑换一个 #v1032101# )"

    cm.sendSimple(text);
    } else if (status == 1) {
	if (selection == 2) {
	    if (cm.haveItem(4001198,30)){
			if (cm.getInventory(1).isFull(0)){
				cm.sendOk("装备栏空余不足1个空格！");
				cm.dispose();
				return;
			} 
			cm.gainItem(4001198, -30);
			var ii = MapleItemInformationProvider.getInstance();		                
			var type = ii.getInventoryType(1032101); //获得装备的类形
			var toDrop = ii.randomizeStats(ii.getEquipById(1032101)).copy(); // 生成一个Equip类
			toDrop. setStr(random1 );//给力量
			toDrop. setDex(random2 );//给敏捷 
			toDrop. setInt(random3 );//给智力
			toDrop. setLuk(random4 );//给运气
			toDrop. setWatk(1);//攻击
			toDrop. setMatk(1);//魔法力
			toDrop. setHp(random5 * 10);//给HP
			toDrop. setMp(random6 * 10);//给MP
			cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop, false)); //刷新背包
			cm.dispose();
		}else{
			cm.sendOk("你的#v4001198#不够，无法兑换！");
			cm.dispose();
		}
		
	} else if (selection == 1){
            if (cm.getMeso() >= maxjinbi){//判断多少金币
                cm.gainMeso(- maxjinbi );//扣除多少金币
				cm.laba(cm.getPlayer().getName() + " [征集令]" + " : " + "[" + fbmc + "]需要勇士一起完成",11);
                cm.dispose();
                }else{
                    cm.sendOk("你的冒险币不足" + maxjinbi + "。无法发送征集令");
                    cm.dispose();
		}
	} else if (selection == 0) {
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("找您的队长来和我谈话。");
	    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < minLevel || ccPlayer.getLevel() > maxLevel) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && size >= minPartySize) {
			var em = cm.getEventManager("Ellin");
			if (em == null) {
				cm.sendOk("当前副本有问题,请联络管理员.");
			} else {
				if (cm.getMeso() < 200000){
					cm.sendOk("你的冒险币不足!");
					cm.dispose();
				}else{
					var prop = em.getProperty("state");
					if (prop.equals("0") || prop == null) {
						em.startInstance(cm.getParty(), cm.getMap());
						cm.gainMeso( -200000 );//扣除多少金币
						cm.dispose();
						return;
					} else {
						cm.sendOk("里面已经有人了,请你稍后在进入看看,或者更换频道");
					}
				}
			}
		} else {
			cm.sendOk("你的队伍#b成员#k需要#b" +minPartySize+ "个#k以上等级" + minLevel + "~" + maxLevel + "的队员才能进入!");
		}
	    }
	}
	cm.dispose();
    }
	
}