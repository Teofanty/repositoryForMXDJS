importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
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
		if (status == 1 && selection < 1){
            cm.dispose();
            return;
		}
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t  #e#d欢迎来到在线奖励系统\r\n\r\n"
			text += "#e#d#k当天在线时长：#r" + cm.getPlayer().getzxsj() +" 分钟#k\r\n\r\n"
			if(cm.getPlayer().getzxsj() >= 60 && cm.getPlayer().getBossLog("zxsj") == 0){
				text += "#L2##r"+完成红+"在线时间超过60分钟！"+完成+"#v2022003#*80个#v4001126#*50个#v5390002#*1个. #l\r\n\r\n\r\n"
			} else if(cm.getPlayer().getzxsj() >= 60 && cm.getPlayer().getBossLog("zxsj") > 0){
				text += ""+完成红+"#r在线时间超过60分钟！#l"+完成+"\r\n\r\n"
			} else {
				text += ""+正在进行中蓝+"#r在线时间超过60分钟！#l"+正在进行中+"#v2022003#*80个#v4001126#*50个#v5390002#*1个\r\n\r\n"
			}
			
			if(cm.getPlayer().getzxsj() >= 120 && cm.getPlayer().getBossLog("zxsj") == 1){
				text += "#L3##r"+完成红+"在线时间超过120分钟！"+完成+"#v2022000#*80个#v2022070#*1个#l\r\n\r\n\r\n"
			} else if(cm.getPlayer().getzxsj() >= 120 && cm.getPlayer().getBossLog("zxsj") > 1){
				text += ""+完成红+"#r在线时间超过120分钟！#l"+完成+"\r\n\r\n"
			} else {
				text += ""+正在进行中蓝+"#r在线时间超过120分钟！#l"+正在进行中+"#v2022000#*80个#v2022070#*1个\r\n\r\n"
			}
			
			if(cm.getPlayer().getzxsj() >= 180 && cm.getPlayer().getBossLog("zxsj") == 2){
				text += "#L4##r"+完成红+"在线时间超过180分钟！"+完成+"#v4310030#*2个#l\r\n\r\n\r\n"
			} else if(cm.getPlayer().getzxsj() >= 180 && cm.getPlayer().getBossLog("zxsj") > 2){
				text += ""+完成红+"#r在线时间超过180分钟！#l"+完成+"\r\n\r\n"
			} else {
				text += ""+正在进行中蓝+"#r在线时间超过180分钟！#l"+正在进行中+"#v4310030#*2个\r\n\r\n"
			}
			
			if(cm.getPlayer().getzxsj() >= 240 && cm.getPlayer().getBossLog("zxsj") == 3){
				text += "#L5##r"+完成红+"在线时间超过240分钟！"+完成+"#v5211060#（三倍经验卡2小时）*1张#l\r\n\r\n\r\n"
			} else if(cm.getPlayer().getzxsj() >= 240 && cm.getPlayer().getBossLog("zxsj") > 3){
				text += ""+完成红+"#r在线时间超过240分钟！#l"+完成+"\r\n\r\n"
			} else {
				text += ""+正在进行中蓝+"#r在线时间超过240分钟！#l"+正在进行中+"#v5211060#（三倍经验卡2小时）*1张\r\n\r\n"
			}
			
			if(cm.getPlayer().getzxsj() >= 300 && cm.getPlayer().getBossLog("zxsj") == 4){
				text += "#L6##r"+完成红+"在线时间超过300分钟！"+完成+"#v5040000#*2个#v5440000#*500#l\r\n\r\n\r\n\r\n"
			} else if(cm.getPlayer().getzxsj() >= 300 && cm.getPlayer().getBossLog("zxsj") > 4){
				text += ""+完成红+"#r在线时间超过300分钟！#l"+完成+"\r\n\r\n"
			} else {
				text += ""+正在进行中蓝+"#r在线时间超过300分钟！#l"+正在进行中+"#v5040000#*2个#v5440000#*500\r\n\r\n\r\n"
			}

			if(cm.getPlayer().getzxsj() >= 360 && cm.getPlayer().getBossLog("zxsj") == 5){
				text += "#L7##r"+完成红+"在线时间超过360分钟！"+完成+"#v5130000#*2个. #l\r\n\r\n\r\n"
			} else if(cm.getPlayer().getzxsj() >= 360 && cm.getPlayer().getBossLog("zxsj") > 5){
				text += ""+完成红+"#r在线时间超过360分钟！#l"+完成+"\r\n\r\n"
			} else {
				text += ""+正在进行中蓝+"#r在线时间超过360分钟！#l"+正在进行中+"#v5130000#*2个\r\n\r\n"
			}
			
            cm.sendSimple(text);
        }else if (selection == 1) {
			cm.sendOk("请继续努力哦！");
			cm.safeDispose();
        } else if (selection == 2) {
			if (cm.getInventory(2).isFull(0)){//判断第五个也就是现金栏的装备栏是否有一个空格
		cm.sendOk("#b请保证消耗栏位至少有1个空格,否则无法抽奖.");
		cm.dispose();
		} else if (cm.getInventory(4).isFull(0)){//判断第五个也就是现金栏的装备栏是否有一个空格
		cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法抽奖.");
		cm.dispose();
		} else if (cm.getInventory(5).isFull(0)){//判断第五个也就是现金栏的装备栏是否有一个空格
		cm.sendOk("#b请保证现金栏位至少有1个空格,否则无法抽奖.");
		cm.dispose();
		} else{
			cm.gainItem(2022003, 80);//烤鳗鱼80个
			cm.gainItem(4001126, 50);//枫叶50个
			cm.gainItem(5390002,1);//喇叭
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了60分钟在线奖励！烤鳗鱼80个. 枫叶50个，厉害的喇叭1个！");
           status = -1;
			}
        } else if (selection == 3) {
			if (cm.getInventory(2).isFull(0)){//判断第五个也就是现金栏的装备栏是否有一个空格
		cm.sendOk("#b请保证消耗栏位至少有1个空格,否则无法抽奖.");
		cm.dispose();
		} else{
			cm.gainItem(2022000, 80);//矿泉水80个
			cm.gainItem(2022070, 1);//管理祝福1个
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了120分钟在线奖励！矿泉水80个 管理祝福1个.");
           status = -1;
			}
        } else if (selection == 4) {
				cm.gainItem(4310030, 2);//特殊
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了180分钟在线奖励！运动会币1个");
           status = -1;
        } else if (selection == 5) {
			if (cm.getInventory(5).isFull(0)){//判断第五个也就是现金栏的装备栏是否有一个空格
		cm.sendOk("#b请保证现金栏位至少有1个空格,否则无法抽奖.");
		cm.dispose();
		} else{
			cm.getPlayer().setBossLog('zxsj');
			var ii = MapleItemInformationProvider.getInstance();		                
			var type = ii.getInventoryType(5211060); //获得装备的类形
			var toDrop =ii.randomizeStats(ii.getEquipById2(5211060)).copy(); // 生成一个Equip类
			var temptime = (System.currentTimeMillis() + 1 * 2 * 60 * 60 * 1000); //时间
			toDrop.setExpiration(temptime); 
			////toDrop. setFlag(1);//上锁不能与时间一起，否则会BUG不消失
			cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
			cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新
			cm.sendOk("购买成功，换频道后生效!");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了240分钟在线奖励 三倍经验（2小时）！");
           status = -1;
		}
        } else if (selection == 6) {
			if (cm.getInventory(5).isFull(0)){//判断第五个也就是现金栏的装备栏是否有一个空格
		cm.sendOk("#b请保证现金栏位至少有1个空格,否则无法抽奖.");
		cm.dispose();
		} else{
			cm.gainItem(5040000, 2);//缩地石2个
			cm.gainD(500)//抵用券500
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了300分钟在线奖励！缩地石2个. 抵用券500点");
           status = -1;
			}
		} else if (selection == 7) {
			if (cm.getInventory(5).isFull(0)){//判断第五个也就是现金栏的装备栏是否有一个空格
		cm.sendOk("#b请保证现金栏位至少有1个空格,否则无法抽奖.");
		cm.dispose();
		} else{
			cm.gainItem(5130000, 2);//护身符
			//cm.gainItem(5150040, 1);//皇家理发1张
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了360分钟在线奖励！护身符*2.");
           status = -1;
			}
        }
    }
}


