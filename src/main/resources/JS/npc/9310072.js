importPackage(Packages.client);
var l = ["日","一","二","三","四","五","六"];
var d = new Date().getDay();
var str = "星期" + l[d];
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if(cm.getPlayer().getBossLog("每日任务") == 0){
	var 次数 = 50;
	var 物品代码= 2340000;
	var 物品数量= 0;
	} else if(cm.getPlayer().getBossLog("每日任务") == 1){
	var 次数 = 100;
	var 物品代码= 2340000;
	var 物品数量= 0;
	} else if(cm.getPlayer().getBossLog("每日任务") == 2){
	var 次数 = 150;
	var 物品代码= 2340000;
	var 物品数量= 0;
	} else if(cm.getPlayer().getBossLog("每日任务") == 3){
	var 次数 = 200;
	var 物品代码= 2340000;
	var 物品数量= 0;
	} else if(cm.getPlayer().getBossLog("每日任务") == 4){
	var 次数 = 200;
	var 物品代码= 2340000;
	var 物品数量= 0;
	} else if(cm.getPlayer().getBossLog("每日任务") == 5){
	var sj = Math.floor(Math.random()*2);
	var 次数 = 200;
	var 物品代码= 2340000;
	var 物品数量= 1;
	var 物品代码1= 2049100;
	var 物品数量1= 1;
	} else if(cm.getPlayer().getBossLog("每日任务") == 6){
	var 次数 = 300;
	var 物品代码= 2340000;
	var 物品数量= 1;
	var 物品代码1= 2049100;
	var 物品数量1= 1;
	}
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var txt = "";
			
			var 次数1 = cm.getPlayer().getBossLog("每日任务")
            txt = "我是每日任务NPC！今天已经完成:#r"+次数1+"#k次\r\n任务将获得奖励#k\r\n\r\n";
            if (cm.getPlayer().getBossLog("每日任务") >= 6){
                txt += "你已经完成了每日任务，每天6次！";
                 cm.sendOk(txt);
				 cm.dispose();
            }else if (d == 0){
			    txt += "#L7##b收集"+次数+"个#v4000020##z4000020##l";
                cm.sendSimple(txt);
			}else if (d == 6){
			    txt += "#L6##b收集"+次数+"个#v4000020##z4000020##l";
                cm.sendSimple(txt);
			}else if (d == 5){
			    txt += "#L5##b收集"+次数+"个#v4000020##z4000020##l";
                cm.sendSimple(txt);
			}else if (d == 4){
			    txt += "#L4##b收集"+次数+"个#v4000015##z4000015##l";
                cm.sendSimple(txt);
			}else if (d == 3){
			    txt += "#L3##b收集"+次数+"个#v4000015##z4000015##l";
                cm.sendSimple(txt);
			}else if (d == 2){
			    txt += "#L2##b收集"+次数+"个#v4000015##z4000015##l";
                cm.sendSimple(txt);
			}else if (d == 1){
			    txt += "#L1##b收集"+次数+"个#v4000015##z4000015##l";
                cm.sendSimple(txt);
				 }
        } else if (selection == 1) {
			if (cm.getInventory(2).isFull(0)){//判断第二个也就是消耗栏的装备栏是否有一个空格
		        cm.sendOk("#b请保证消耗栏位至少有1个空格,否则无法领取.");
		        cm.dispose();
			 } else if (cm.haveItem(4000015,次数) && sj == 1){//随机给的
				 cm.gainItem(4000015, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainItem(物品代码, 物品数量);//物品
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
			} else if (cm.haveItem(4000015,次数) && sj == 0){//随机给的
				 cm.gainItem(4000015, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainItem(物品代码1, 物品数量1);//物品
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
            } else if (cm.haveItem(4000015,次数)){
				cm.gainItem(4000015, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请收集"+次数+"个#v4000015##z4000015#交给我!");
                cm.dispose();
            }
        } else if (selection == 2) {
           if (cm.getInventory(2).isFull(0)){//判断第二个也就是消耗栏的装备栏是否有一个空格
		        cm.sendOk("#b请保证消耗栏位至少有1个空格,否则无法领取.");
		        cm.dispose();
			 } else if (cm.haveItem(4000015,次数) && sj == 1){//随机给的
				 cm.gainItem(4000015, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainItem(物品代码, 物品数量);//物品
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
			 } else if (cm.haveItem(4000015,次数) && sj == 0){//随机给的
				 cm.gainItem(4000015, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainItem(物品代码1, 物品数量1);//物品
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
            } else if (cm.haveItem(4000015,次数)){
				cm.gainItem(4000015, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请收集"+次数+"个#v4000015##z4000015#交给我!");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.getInventory(2).isFull(0)){//判断第二个也就是消耗栏的装备栏是否有一个空格
		        cm.sendOk("#b请保证消耗栏位至少有1个空格,否则无法领取.");
		        cm.dispose();
			 } else if (cm.haveItem(4000015,次数) && sj == 1){//随机给的
				 cm.gainItem(4000015, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainItem(物品代码, 物品数量);//物品
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
				} else if (cm.haveItem(4000015,次数) && sj == 0){//随机给的
				 cm.gainItem(4000015, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainItem(物品代码1, 物品数量1);//物品
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
            } else if (cm.haveItem(4000015,次数)){
				cm.gainItem(4000015, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请收集"+次数+"个#v4000015##z4000015#交给我!");
                cm.dispose();
            }
        } else if (selection == 4) {
           if (cm.getInventory(2).isFull(0)){//判断第二个也就是消耗栏的装备栏是否有一个空格
		        cm.sendOk("#b请保证消耗栏位至少有1个空格,否则无法领取.");
		        cm.dispose();
			 } else if (cm.haveItem(4000015,次数) && sj == 1){//随机给的
				 cm.gainItem(4000015, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainItem(物品代码, 物品数量);//物品
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
				} else if (cm.haveItem(4000015,次数) && sj == 0){//随机给的
				 cm.gainItem(4000015, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainItem(物品代码1, 物品数量1);//物品
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
				
            } else if (cm.haveItem(4000015,次数)){
				cm.gainItem(4000015, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请收集"+次数+"个#v4000015##z4000015#交给我!");
                cm.dispose();
            }
        } else if (selection == 5) {
           if (cm.getInventory(2).isFull(0)){//判断第二个也就是消耗栏的装备栏是否有一个空格
		        cm.sendOk("#b请保证消耗栏位至少有1个空格,否则无法领取.");
		        cm.dispose();
			 } else if (cm.haveItem(4000020,次数) && sj == 1){//随机给的
				 cm.gainItem(4000020, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainItem(物品代码, 物品数量);//物品
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
			} else if (cm.haveItem(4000020,次数) && sj == 0){//随机给的
				 cm.gainItem(4000020, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainItem(物品代码1, 物品数量1);//物品
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
            } else if (cm.haveItem(4000020,次数)){
				cm.gainItem(4000020, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请收集"+次数+"个#v4000020##z4000020#交给我!");
                cm.dispose();
            }
        } else if (selection == 6) {
             if (cm.getInventory(2).isFull(0)){//判断第二个也就是消耗栏的装备栏是否有一个空格
		        cm.sendOk("#b请保证消耗栏位至少有1个空格,否则无法领取.");
		        cm.dispose();
			 } else if (cm.haveItem(4000020,次数) && sj == 1){//随机给的
				 cm.gainItem(4000020, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainItem(物品代码, 物品数量);//物品
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
				} else if (cm.haveItem(4000020,次数) && sj == 0){//随机给的
				 cm.gainItem(4000020, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainItem(物品代码1, 物品数量1);//物品
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
            } else if (cm.haveItem(4000020,次数)){
				cm.gainItem(4000020, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请收集"+次数+"个#v4000020##z4000020#交给我!");
                cm.dispose();
            }
        } else if (selection == 7) {
           if (cm.getInventory(2).isFull(0)){//判断第二个也就是消耗栏的装备栏是否有一个空格
		        cm.sendOk("#b请保证消耗栏位至少有1个空格,否则无法领取.");
		        cm.dispose();
			 } else if (cm.haveItem(4000020,次数) && sj == 1){//随机给的
				 cm.gainItem(4000020, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainItem(物品代码, 物品数量);//物品
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
			 } else if (cm.haveItem(4000020,次数) && sj ==0){//随机给的
				 cm.gainItem(4000020, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainItem(物品代码1, 物品数量1);//物品
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
            } else if (cm.haveItem(4000020,次数)){
				cm.gainItem(4000020, -次数);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainExp(20000);//给2万经验的意思  
				cm.gainMeso(60000);//给金币
				cm.getPlayer().setBossLog('每日任务');
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请收集"+次数+"个#v4000020##z4000020#交给我!");
                cm.dispose();
            }
            }
            }
            } 
        
    

