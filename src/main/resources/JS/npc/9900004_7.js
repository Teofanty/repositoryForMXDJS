//2017-30-31 修复38掉线问题 --lul

importPackage(java.util);
importPackage(net.sf.sunms.client);
importPackage(net.sf.sunms.server);
importPackage(java.util);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools);
importPackage(Packages.tools.packet);
var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
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
			text += "\t\t\t  #e#d梦之岛冒险岛在线奖励\r\n\r\n"
			text += "#e#d#k当天在线时长：#r" + cm.getPlayer().getzxsj() +" 分钟#k\r\n\r\n"
			if(cm.getPlayer().getzxsj() >= 60 && cm.getPlayer().getBossLog("zxsj") == 0){
					text += "#L2##r"+完成红+"在线时间超过60分钟！"+完成+"#v5074000#*10个.#l\r\n\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() >= 60 && cm.getPlayer().getBossLog("zxsj") > 0){
					text += ""+完成红+"#r在线时间超过60分钟！#l"+完成+"\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() < 60 && cm.getPlayer().getBossLog("zxsj") == 0){
					text += "#L1#"+正在进行中蓝+"#r在线时间超过60分钟！#l"+正在进行中+"#v5074000#*10个\r\n\r\n"
			}else{
				text += ""+正在进行中蓝+"#r在线时间超过60分钟！#l"+"#v5074000#*10个\r\n\r\n"
			}
			
			if(cm.getPlayer().getzxsj() >= 120 && cm.getPlayer().getBossLog("zxsj") == 1){
					text += "#L2##r"+完成红+"在线时间超过120分钟！"+完成+"#v5130000#*1个.#l\r\n\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() >= 120 && cm.getPlayer().getBossLog("zxsj") > 1){
					text += ""+完成红+"#r在线时间超过120分钟！#l"+完成+"\r\n\r\n"//3
				} else if(cm.getPlayer().getzxsj() < 120 && cm.getPlayer().getBossLog("zxsj") == 1){
					text += "#L1#"+正在进行中蓝+"#r在线时间超过120分钟！#l"+正在进行中+"#v5130000#*1个\r\n\r\n"
			}else{
				text += ""+正在进行中蓝+"#r在线时间超过120分钟！#l"+"#v5130000#*1个\r\n\r\n"
			}
			
			if(cm.getPlayer().getzxsj() >= 180 && cm.getPlayer().getBossLog("zxsj") == 2){
					text += "#L4##r"+完成红+"在线时间超过180分钟！"+完成+"#v5041000#*1.#l\r\n\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() >= 180 && cm.getPlayer().getBossLog("zxsj") > 2){
					text += ""+完成红+"#r在线时间超过180分钟！#l"+完成+"\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() < 180 && cm.getPlayer().getBossLog("zxsj") == 2){
					text += "#L1#"+正在进行中蓝+"#r在线时间超过180分钟！#l"+正在进行中+"#v5041000#*1\r\n\r\n"
			}else{
				text += ""+正在进行中蓝+"#r在线时间超过180分钟！#l"+"#v5041000#*1\r\n\r\n"
			}
			
			if(cm.getPlayer().getzxsj() >= 240 && cm.getPlayer().getBossLog("zxsj") == 3){
					text += "#L5##r"+完成红+"在线时间超过240分钟！"+完成+"#v5121015#*2#l\r\n\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() >= 240 && cm.getPlayer().getBossLog("zxsj") > 3){
					text += ""+完成红+"#r在线时间超过240分钟！#l"+完成+"\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() < 240 && cm.getPlayer().getBossLog("zxsj") == 3){
					text += "#L1#"+正在进行中蓝+"#r在线时间超过240分钟！#l"+正在进行中+"#v5121015#*2\r\n\r\n"
			}else{
				text += ""+正在进行中蓝+"#r在线时间超过240分钟！#l"+"#v5121015#x2\r\n\r\n"
			}
			
			if(cm.getPlayer().getzxsj() >= 300 && cm.getPlayer().getBossLog("zxsj") == 4){
					text += "#L6##r"+完成红+"在线时间超过300分钟！"+完成+"#v5076000#*1#l\r\n\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() >= 300 && cm.getPlayer().getBossLog("zxsj") > 4){
					text += ""+完成红+"#r在线时间超过300分钟！#l"+完成+"\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() < 300 && cm.getPlayer().getBossLog("zxsj") == 4){
					text += "#L1#"+正在进行中蓝+"#r在线时间超过300分钟！#l"+正在进行中+"#v5076000#*1\r\n\r\n"
			}else{
				text += ""+正在进行中蓝+"#r在线时间超过300分钟！#l"+"#v5076000#*1\r\n\r\n"
			}
			
			if(cm.getPlayer().getzxsj() >= 360 && cm.getPlayer().getBossLog("zxsj") == 5){
					text += "#L7##r"+完成红+"在线时间超过360分钟！"+完成+"抵用卷x200点.#l\r\n\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() >= 360 && cm.getPlayer().getBossLog("zxsj") > 5){
					text += ""+完成红+"#r在线时间超过360分钟！#l"+完成+"\r\n\r\n"
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过360分钟！#l"+正在进行中+"抵用卷*200点\r\n\r\n"
			}
            cm.sendSimple(text);
			
        }else if (selection == 1) {
			cm.sendOk("请继续努力哦！");
			cm.safeDispose();
			
        } else if (selection == 2) {
			cm.gainItem(5074000, 10, 1);//高级喇叭
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了60分钟在线奖励！高级喇叭*10个.");
            cm.dispose();
        } else if (selection == 3) {
			cm.gainItem(5130000, 1, 1);//护身符
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了120分钟在线奖励 护身符*1个.");
            cm.dispose();
        } else if (selection == 4) {
			cm.gainItem(5041000, 1, 1);//高级瞬移石
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了180分钟在线奖励！高级瞬移石*1个");
            cm.dispose();
        } else if (selection == 5) {
			if (cm.getInventory(5).isFull(1)){
			cm.sendOk("#b请保证特殊栏位至少有1个空格,否则无法领取.");
			cm.dispose();
		} else {
			cm.gainItem(5121015, 2);//雪孩子
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了240分钟在线奖励！雪孩子*2个.");
            cm.dispose();
			}
        } else if (selection == 6) {
			if (cm.getInventory(5).isFull(1)){
			cm.sendOk("#b请保证特殊栏位至少有1个空格,否则无法领取.");
			cm.dispose();
		} else {
			cm.gainItem(5076000, 1, 1);//道具喇叭
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了300分钟在线奖励！道具喇叭*1个.");
            cm.dispose();
			}
        } else if (selection == 7) {
			if (cm.getInventory(5).isFull(1)){
			cm.sendOk("#b请保证特殊栏位至少有1个空格,否则无法领取.");
			cm.dispose();
		} else {
			cm.gainD(200);//抵用卷
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了360分钟在线奖励！抵用卷*200点.");
            cm.dispose();
		}}
    }
}


