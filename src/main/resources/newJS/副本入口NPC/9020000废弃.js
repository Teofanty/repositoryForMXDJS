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

var status;
var fbmc = "废弃都市-(废弃副本)";//副本名称
var minLevel = 18;
var maxLevel = 200;
var minPartySize = 3;
var maxPartySize = 6;
var maxjinbi = 1000;//判断征集令金币
var eventname = "KerningPQ";//副本配置文件
var random1 = java.lang.Math.floor((Math.random() * 3)+3);
var random2 = java.lang.Math.floor((Math.random() * 3)+3);
var random3 = java.lang.Math.floor((Math.random() * 3)+3);
var random4 = java.lang.Math.floor((Math.random() * 3)+3);
var random5 = java.lang.Math.floor(Math.random() * 3);
var random6 = java.lang.Math.floor(Math.random() * 3);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.dispose();
        return;
    }
    if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//显示物品ID图片用的代码是  #v这里写入ID#
            text += "#k\t\t\t  欢迎来到#r" + fbmc + "#k\r\n副本进入要求如下：\r\n  1.人数限制:#r " + minPartySize + " #b- #r" + maxPartySize + "#k队员\t2.等级限制：#r " + minLevel + " #b- #r" + maxLevel + "级 #k\r\n 80级以上完成获得60个火药筒两张邮票和暗影币#k\r\n";
		text += "#L1##r开始组队副本#l      #L2##r副本征集令#k" + maxjinbi + "金币/次#l  \r\n\r\n";
		text += "#L3##r兑换#k( 20个 #v4031560# 兑换一个 #v1072369#[最高属性+5] )\r\n\r\n";
		text += "#L10##r兑换#k( 20个 #v4031560#+100抵用 兑换一个 #v4020009# )\r\n\r\n";
		
		 cm.sendSimple(text);
	} else if (selection == 1) {
		cm.removeAll(4001008);//删掉已有的通行证
		
        if (cm.getParty() == null) { // No Party
            cm.sendOk("你没有队伍无法进入！");
            cm.dispose();
        } else if (!cm.isLeader()) { // Not Party Leader
            cm.sendOk("请让你的队长和我说话~");
            cm.dispose();
        } else {
            var party = cm.getParty().getMembers();
            var inMap = cm.partyMembersInMap();
            var levelValid = 0;
            for (var i = 0; i < party.size(); i++) {
                if (party.get(i).getLevel() >= minLevel && party.get(i).getLevel() <= maxLevel)
                    levelValid++;
            }
            if (inMap < minPartySize || inMap > maxPartySize) {
                cm.sendOk("你的队伍人数不足"+minPartySize+"人.请把你的队伍人员召集到废弃都市在进入副本.");
                cm.dispose();
            } else if (levelValid != inMap) {
                cm.sendOk("请确保你的队伍里所有人员都在本地图，且最小等级在 "+minLevel+" 和 "+maxLevel+"之间.");
                cm.dispose();
            } else {
                var em = cm.getEventManager("KerningPQ");
                if (em == null) {
                    cm.sendOk("这台电脑是当前不可用.");
                //} else if (em.getProperty("KPQOpen").equals("true")) {
                } else {
        if (cm.getPlayerCount(103000800) <= 0 && cm.getPlayerCount(103000801) <= 0 && cm.getPlayerCount(103000802) <= 0 && cm.getPlayerCount(103000803) <= 0 && cm.getPlayerCount(103000804) <= 0) {
		/*var papuMap = cm.getMap(103000804);
         cm.getMap(103000804).resetFully();
        cm.spawnMobOnMap(9300002,1,297,-2188,103000804);
        cm.spawnMobOnMap(9300002,1,433,-2192,103000804);
        cm.spawnMobOnMap(9300002,1,132,-2193,103000804);
		cm.spawnMobOnMap(9300000,1,-18,-1480,103000804);
		cm.spawnMobOnMap(9300000,1,80,-1486,103000804);
		cm.spawnMobOnMap(9300000,1,391,-1488,103000804);
		cm.spawnMobOnMap(9300000,1,247,-1485,103000804);
		cm.spawnMobOnMap(9300000,1,-111,-1475,103000804);
		cm.spawnMobOnMap(9300000,1,299,-1485,103000804);
		cm.spawnMobOnMap(9300003,1,162,-451,103000804);
        //var papuMap = pi.getMap(103000804);
		//pi.getPlayer().setbosslog(1);
        //pi.playPortalSE();
*/
			//}
				//em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
                em.startInstance(cm.getParty(), cm.getPlayer().getMap());
		} else {
                            cm.sendOk("请稍等...任务正在进行中.");
                        }
						// Capt. Lac Map
				//em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
                    // Begin the PQ.
                //    em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    // Remove Passes and Coupons GMS DOESNT DO THIS!!!
                    //party = cm.getPlayer().getEventInstance().getPlayers();
                    //cm.removeFromParty(4001008, party);
                    //cm.removeFromParty(4001007, party);
                  //  em.setProperty("KPQOpen" , "false");
                //} else {
                 //   cm.sendNext("There is already another party inside. Please wait !");
                }
                cm.dispose();
            }
        }
	} else if (selection == 2) {
            if (cm.getMeso() >= maxjinbi){//判断多少金币
                cm.gainMeso(- maxjinbi );//扣除多少金币
				cm.laba(cm.getPlayer().getName() + " [征集令]" + " : " + "[" + fbmc + "]需要勇士一起完成",11);
                cm.dispose();
                }else{
                    cm.sendOk("你的冒险币不足" + maxjinbi + "。无法发送征集令");
                    cm.dispose();
                            //cm.sendOk(".");
                //cm.dispose();
    }
	} else if (selection == 3) {
		if (cm.haveItem(4031560,20)){
			if (cm.getInventory(1).isFull()){
				cm.sendOk("装备栏空余不足1个空格！");
				cm.dispose();
				return;
			} 
			cm.gainItem(4031560, -20);
			
			var ii = MapleItemInformationProvider.getInstance();		                
			var type = ii.getInventoryType(1072369); //获得装备的类形
			var toDrop = ii.randomizeStats(ii.getEquipById(1072369)).copy(); // 生成一个Equip类
			toDrop. setStr(random1);//给力量
			toDrop. setDex(random2);//给敏捷 
			toDrop. setInt(random3);//给智力
			toDrop. setLuk(random4);//给运气
            toDrop. setWatk(0);//攻击
            toDrop. setMatk(0);//魔法力
			toDrop. setHp(random5 * 10);//给HP
			toDrop. setMp(random6 * 10);//给MP
			cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop, false)); //刷新背包
			cm.dispose();
		}else{
			cm.sendOk("你的#v4031560#不够20个，无法兑换！");
			cm.dispose();
		}
 } else if (selection == 10) { 
		  cm.openNpc(9020000, 10);//物品兑换		
	} 
}
