/* ==================
 脚本类型:  NPC	    
 脚本作者： 维多利亚   
 联系方式： 297870163
 =====================
 */

var status = 0;
var fbmc = "百草堂-(海盗副本)";//副本名称
var minLevel = 100;//最低等级
var maxLevel = 200;//最高等级
var minPartySize = 3;//最少人数
var maxPartySize = 6;//最多人数
var cishuxianzhi = 10;//限制次数
var maxjinbi = 50000;//判断征集令金币
var eventname = "Pirate";//副本配置文件


function checkMap() {
    var map = [925100000, 925100100, 925100200, 925100201, 925100202, 925100300, 925100301, 925100302, 925100400, 925100400, 925100500];
    for(var i = 0 ; i < map.length; i++) {
        if(cm.getPlayerCount(map[i]))
            return false;
    }
    return true;
}

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
            text += "#k\t\t\t\t欢迎来到#r" + fbmc + "#k\r\n副本进入要求如下：\r\n①人数限制:#r " + minPartySize + " #b- #r" + maxPartySize + "#k队员\t②等级限制：#r " + minLevel + " #b- #r" + maxLevel + "级 #k\r\n"
			text += "#k已完成挑战:#r"+cm.getPlayer().getOneTimeLog("haidao")+"#k次   每天只能挑战:#b"+ cishuxianzhi +"#k次 你今天已进入:#b"+ cm.getPlayer().getBossLog("haidaocs") +"#k次#k\r\n"
            text += "#L1##r开始组队副本#l      #L2##r副本征集令#k" + maxjinbi + "金币/次#l\r\n\r\n"
			text += "#L3##r兑换海盗帽子#l\r\n\r\n"
            cm.sendSimple(text);
	} else if (selection == 1) {
	cm.removeAll(4001117);
	cm.removeAll(4031437);
	cm.removeAll(4001120);
	cm.removeAll(4001121);
	cm.removeAll(4001260);
	cm.removeAll(4001122);
    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
        cm.sendOk("请找队长来找我。");
		cm.dispose();
	}else if(cm.getPartyBosslog("haidaocs",(cishuxianzhi-1)) == false) {//判断组队是否2次
	            cm.sendOk("队伍中队友挑战次数已经用完10次！");
                cm.dispose();
				return;
			}else if( cm.getPlayer().getBossLog("haidaocs") >= cishuxianzhi) {
	            cm.sendOk("您好,限定每天只能挑战"+ cishuxianzhi +"次！");
                cm.dispose();
				return;
    } else {
        var party = cm.getPlayer().getParty().getMembers();
        var mapId = cm.getPlayer().getMapId();
        var next = true;
        var size = 0;
        var it = party.iterator();
        while (it.hasNext()) {
            var cPlayer = it.next();
            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
            if (ccPlayer == null || ccPlayer.getLevel() <  minLevel || ccPlayer.getLevel() > maxLevel) {
                next = false;
                break;
            }
            size += (ccPlayer.isGM() ? 2 : 1);
        }
        if (next && size >= minPartySize) {
            if(checkMap()) {
                var em = cm.getEventManager("Pirate");
                if (em == null) {
                    cm.sendOk("找不到脚本，请联系GM！！");
					cm.dispose();
                } else {
                    em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
					cm.setPartyBosslog("haidaocs");//给团队次数
					cm.dispose();
                }
            } else {
                cm.sendOk("目前有人在打啰～");
				cm.dispose();
            }
        }else {
            cm.sendOk("需要" + minPartySize + "至" + maxPartySize + "个人 等级必须是" + minLevel+ "到" + maxLevel + "级");
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
    }
	} else if (selection == 3) {
		cm.openNpc(2094000, 1);
	}
	}
