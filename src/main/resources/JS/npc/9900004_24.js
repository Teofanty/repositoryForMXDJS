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
			text +="\t\t#e#d欢迎领取#r在线奖励  #d在线时间：#r" + cm.getPlayer().getzxsj() + "分钟#k#n\r\n "
			// text +="#b在线奖励依次为.特殊50个、枫叶50个-超级50个、管理者的祝福1个-强化3个、祝福3个-金色枫叶20个、皇家理发1个-蓝蜗牛一张、抵用1000-树妖1张、抵用1500-绿水灵一张、国庆币2个\r\n"
			text +="#L1##r领取永久雇佣商人！#v5030001# x1 市场摆摊#l\r\n\r\n\r\n"//3	
            if(cm.getPlayer().getzxsj() >= 60 && cm.getPlayer().getBossLog("zxsj") == 0){
					text += "#L2##r"+完成红+"在线时间超过60分钟！"+完成+"#v2022003#*100个#v4001126#*50个#v5390002#*3个\r\n\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getzxsj() >= 60 && cm.getPlayer().getBossLog("zxsj") > 0){
					text += ""+完成红+"#r在线时间超过60分钟！#l"+完成+"#v2022003#*100个#v4001126#*50个#v5390002#*3个\r\n\r\n"//3
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过60分钟！#l"+正在进行中+"#v2022003#*100个#v4001126#*50个#v5390002#*3个\r\n\r\n"//3
			}		
		    if(cm.getPlayer().getzxsj() >= 120 && cm.getPlayer().getBossLog("zxsj") == 1){
					text += "#L3##r"+完成红+"在线时间超过120分钟！"+完成+"#v2022000#*100个#v2022070#*1个\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getzxsj() >= 120 && cm.getPlayer().getBossLog("zxsj") > 1){
					text += ""+完成红+"#r在线时间超过120分钟！#l"+完成+"#v2022000#*100个#v2022070#*1个\r\n\r\n"//3
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过120分钟！#l"+正在进行中+"#v2022000#*100个#v2022070#*1个\r\n\r\n"//3
			}
			if(cm.getPlayer().getzxsj() >= 180 && cm.getPlayer().getBossLog("zxsj") == 2){
					text += "#L4##r"+完成红+"在线时间超过180分钟！"+完成+"10W金币 \r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getzxsj() >= 180 && cm.getPlayer().getBossLog("zxsj") > 2){
					text += ""+完成红+"#r在线时间超过180分钟！#l"+完成+"10W金币\r\n\r\n"//3
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过180分钟！#l"+正在进行中+"10W金币\r\n\r\n"//3
			}
			if(cm.getPlayer().getzxsj() >= 240 && cm.getPlayer().getBossLog("zxsj") == 3){
					text += "#L7##r"+完成红+"在线时间超过240分钟！"+完成+"#v5211060#（三倍经验卡2小时）*1张\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getzxsj() >= 240 && cm.getPlayer().getBossLog("zxsj") > 3){
					text += ""+完成红+"#r在线时间超过240分钟！#l"+完成+"#v5211060#（三倍经验卡2小时）*1张\r\n\r\n\r\n"//3
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过240分钟！#l"+正在进行中+"#v5211060#（三倍经验卡2小时）*1张\r\n\r\n\r\n"//3
			}
			if(cm.getPlayer().getzxsj() >= 300 && cm.getPlayer().getBossLog("zxsj") == 4){
					text += "#L6##r"+完成红+"在线时间超过300分钟！"+完成+"#v5040000#*2个#v5440000#*1000\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getzxsj() >= 300 && cm.getPlayer().getBossLog("zxsj") > 4){
					text += ""+完成红+"#r在线时间超过300分钟！#l"+完成+"#v5040000#*2个#v5440000#*1000\r\n\r\n"//3 
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过300分钟！#l"+正在进行中+"#v5040000#*2个#v5440000#*1000\r\n\r\n"//3
			}
			if(cm.getPlayer().getzxsj() >= 360 && cm.getPlayer().getBossLog("zxsj") == 5){
					text += "#L5##r"+完成红+"在线时间超过360分钟！"+完成+"#v5130000#*2个\r\n\r\n\r\n"//3"#v5130000#*2个\r\n\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() >= 360 && cm.getPlayer().getBossLog("zxsj") > 5){
					text += ""+完成红+"#r在线时间超过360分钟！#l"+完成+"#v5130000#*2个\r\n\r\n\r\n"//3
				} else {
					text += ""+正在进行中蓝+"#r在线时间超过360分钟！#l"+正在进行中+"#v5130000#*2个\r\n\r\n\r\n"//3
			}
            cm.sendSimple(text);
		} else if (selection == 0) {
			cm.sendOk("请继续努力哦！");
			cm.safeDispose();
        } else if (selection == 1) {
			if(cm.haveItem(5030001, 1)){
            cm.sendOk("你已经领取过了。无法重新领取！");
            cm.dispose();
			}else if (cm.haveItem(5030000, 1)){
            cm.sendOk("你已经领取过了。无法重新领取！");
            cm.dispose();
			}else{
			cm.gainItem(5030001, 1);//
			//cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取永久雇佣商人！");
            cm.dispose();
			}
			
        } else if (selection == 2) {
			cm.gainItem(2022003, 100);//烤鳗鱼100个
			cm.gainItem(4001126, 50);//枫叶50个
			cm.gainItem(5390002,3);//喇叭
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了60分钟在线奖励！烤鳗鱼100个. 枫叶50个，厉害的喇叭3个！");
            cm.dispose();
        } else if (selection == 3) {
			cm.gainItem(2022000, 100);//矿泉水100个
			cm.gainItem(2022070, 1);//管理祝福1个
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了120分钟在线奖励！矿泉水100个 管理祝福1个.");
            cm.dispose();
        } else if (selection == 4) {
			cm.gainMeso(+100000);//金币10W
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了180分钟在线奖励！100000金币");
            cm.dispose();
        } else if (selection == 5) {
			cm.gainItem(5130000, 2);//护身符
			//cm.gainItem(5150040, 1);//皇家理发1张
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了360分钟在线奖励！护身符*2.");
            cm.dispose();
        } else if (selection == 6) {
			cm.gainItem(5040000, 2);//缩地石2个
			cm.gainD(1000)//抵用券1000
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("领取奖励成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了300分钟在线奖励！缩地石2个. 抵用券1000点");
            cm.dispose();
        } else if (selection == 7) {
			cm.getPlayer().setBossLog('zxsj');
			var type = ii.getInventoryType(5211060); 
			var toDrop =ii.randomizeStats(ii.getEquipById2(5211060)).copy(); // 生成一个Equip类
			var temptime = (System.currentTimeMillis() + 1 * 2 * 60 * 60 * 1000); //时间这个代表小时
			toDrop.setExpiration(temptime); 
			cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
			cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
			cm.sendOk("领取奖励成功，换频道后生效!");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了240分钟在线奖励 三倍经验（2小时）！");
            cm.dispose();
		}
    }
}


