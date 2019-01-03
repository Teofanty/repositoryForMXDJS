var xx;//
var xxdj;//
var sj1;//成功率
var sjsx=Math.floor(Math.random()*7)-2;
var sjsx2=Math.floor(Math.random()*12)-2;
var xuqiushuliang;
var status = 0;

importPackage(java.util);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools);
importPackage(Packages.tools.packet);
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if ((mode == 0 && status == 2) || (mode == 0 && status == 13)) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			
			cm.sendNext("欢迎来到#v1113164#戒指强化系统\r\n\在我这里可以使用物品强化装备!\r\n#e#r需要强化的#v1113164#请放在装备栏第一个格#k否则无法强化!");
				} else if (status == 1) {
			var cc = cm.getInventory(1).getItem(1);
			if(cm.getInventory(1).getItem(1)!= null ){
			 cm.sendYesNo("你要强化的装备为:\r\n\r\n#v"+cc.getItemId()+"#\r\n\r\n#r#e确定要开始强化吗?");
			} else{
			cm.sendOk("#b第一格子无东西！#k");	
			cm.dispose();
			} 
			
		} else if (status == 2) {
			var item = cm.getInventory(1).getItem(1).copy();
			var xx = cm.getInventory(1).getItem(1).getLevel();
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1113164) {
				cm.sendOk("你强化的装备不是#v1113164#.");
				cm.dispose();
			}else if(xx >= 10){
			cm.sendOk("最高只能强化10次");
			cm.dispose();
			}else if(xx == 9){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*20);//随机5%
				xxnew = 10;
				物品代码 = 4310019;
				物品数量 = 1;
				//金币数量 = 1000000;
				四维属性 = 0;
				攻魔 = 1;
				cm.sendNext("您选择的装备是：#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n当前已强化等级为：#r"+xx+"#k\r\n强化成功几率20%四维属性:#r+"+四维属性+"\t魔/攻#r+"+攻魔+"\r\n您需要以下物品\r\n#r"+物品数量+"个#v"+物品代码+"#\r\n#k请点击下一步使用已强化进行强化\r\n\r\n");
			}else if(xx == 8){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*18);//随机5%
				xxnew = 9;
				物品代码 = 4310019;
				物品数量 = 1;
				//金币数量 = 1000000;
				四维属性 = 1;
				攻魔 = 0;
				cm.sendNext("您选择的装备是：#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n当前已强化等级为：#r"+xx+"#k\r\n强化成功几率30%四维属性:#r+"+四维属性+"\t魔/攻#r+"+攻魔+"\r\n您需要以下物品\r\n#r"+物品数量+"个#v"+物品代码+"#\r\n#k请点击下一步使用已强化进行强化\r\n\r\n");
			}else if(xx == 7){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*16);//随机5%
				xxnew = 8;
				物品代码 = 4310019;
				物品数量 = 1;
				//金币数量 = 1000000;
				四维属性 = 0;
				攻魔 = 1;
				cm.sendNext("您选择的装备是：#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n当前已强化等级为：#r"+xx+"#k\r\n强化成功几率40%四维属性:#r+"+四维属性+"\t魔/攻#r+"+攻魔+"\r\n您需要以下物品\r\n#r"+物品数量+"个#v"+物品代码+"#\r\n#k请点击下一步使用已强化进行强化\r\n\r\n");
			}else if(xx == 6){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*14);//随机5%
				xxnew = 7;
				物品代码 = 4310019;
				物品数量 = 1;
				//金币数量 = 1000000;
				四维属性 = 1;
				攻魔 = 0;
				cm.sendNext("您选择的装备是：#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n当前已强化等级为：#r"+xx+"#k\r\n强化成功几率50%四维属性:#r+"+四维属性+"\t魔/攻#r+"+攻魔+"\r\n您需要以下物品\r\n#r"+物品数量+"个#v"+物品代码+"#\r\n#k请点击下一步使用已强化进行强化\r\n\r\n");
			}else if(xx == 5){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*12);//随机5%
				xxnew = 6;
				物品代码 = 4310019;
				物品数量 = 1;
				//金币数量 = 1000000;
				四维属性 = 0;
				攻魔 = 1;
				cm.sendNext("您选择的装备是：#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n当前已强化等级为：#r"+xx+"#k\r\n强化成功几率50%四维属性:#r+"+四维属性+"\t魔/攻#r+"+攻魔+"\r\n您需要以下物品\r\n#r"+物品数量+"个#v"+物品代码+"#\r\n#k请点击下一步使用已强化进行强化\r\n\r\n");
			}else if(xx == 4){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*10);//随机5%
				xxnew = 5;
				物品代码 = 4310019;
				物品数量 = 1;
				//金币数量 = 1000000;
				四维属性 = 0;
				攻魔 = 1;
				cm.sendNext("您选择的装备是：#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n当前已强化等级为：#r"+xx+"#k\r\n强化成功几率60%四维属性:#r+"+四维属性+"\t魔/攻#r+"+攻魔+"\r\n您需要以下物品\r\n#r"+物品数量+"个#v"+物品代码+"#\r\n#k请点击下一步使用已强化进行强化\r\n\r\n");
			}else if(xx == 3){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*5);//随机100%
				xxnew = 4;
				物品代码 = 4310019;
				物品数量 = 1;
				//金币数量 = 1000000;
				四维属性 = 0;
				攻魔 = 1;
				cm.sendNext("您选择的装备是：#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n当前已强化等级为：#r"+xx+"#k\r\n强化成功几率70%四维属性:#r+"+四维属性+"\t魔/攻#r+"+攻魔+"\r\n您需要以下物品\r\n#r"+物品数量+"个#v"+物品代码+"#\r\n#k请点击下一步使用已强化进行强化\r\n\r\n");
			}else if(xx == 2){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*5);//随机100%
				xxnew = 3;
				物品代码 = 4310019;
				物品数量 = 1;
				//金币数量 = 1000000;
				四维属性 = 1;
				攻魔 = 0;
				cm.sendNext("您选择的装备是：#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n当前已强化等级为：#r"+xx+"#k\r\n强化成功几率100%四维属性:#r+"+四维属性+"\t魔/攻#r+"+攻魔+"\r\n您需要以下物品\r\n#r"+物品数量+"个#v"+物品代码+"#\r\n#k请点击下一步使用已强化进行强化\r\n\r\n");
			}else if(xx == 1){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*5);//随机100%
				xxnew = 2;
				物品代码 = 4310019;
				物品数量 = 1;
				//金币数量 = 1000000;
				四维属性 = 1;
				攻魔 = 0;
				cm.sendNext("您选择的装备是：#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n当前已强化等级为：#r"+xx+"#k\r\n强化成功几率100%四维属性:#r+"+四维属性+"\t魔/攻#r+"+攻魔+"\r\n您需要以下物品\r\n#r"+物品数量+"个#v"+物品代码+"#\r\n#k请点击下一步使用已强化进行强化\r\n\r\n");
			}else if(xx == 0){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*5);//随机100%
				xxnew = 1;
				物品代码 = 4310019;
				物品数量 = 1;
				//金币数量 = 1000000;
				四维属性 = 1;
				攻魔 = 0;
				cm.sendNext("您选择的装备是：#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n当前已强化等级为：#r"+xx+"#k\r\n强化成功几率100%四维属性:#r+"+四维属性+"\t魔/攻#r+"+攻魔+"\r\n您需要以下物品\r\n#r"+物品数量+"个#v"+物品代码+"#\r\n#k请点击下一步使用已强化进行强化\r\n\r\n");
			
			}
		} else if (status == 3) {
		       if(!cm.haveItem(物品代码,物品数量)){
				cm.sendOk("#v"+物品代码+"#物品数量不足"+物品数量+"个！");
				cm.dispose();
				return;
				} else if (sj > 5){//随机失败
			cm.sendOk("强化失败！");
			cm.gainItem(物品代码,-物品数量);
			cm.ShowWZEffect("Effect/BasicEff.img/SkillBook/Failure/0"); //卷轴失败效果
			status = -1;
			} else {
			cm.gainItem(物品代码,-物品数量);
			var statup = new java.util.ArrayList();
			var itemId1 = cm.getInventory(1).getItem(1).getItemId();
			var item = cm.getInventory(1).getItem(1).copy();
			var ii = MapleItemInformationProvider.getInstance();
			var type =  ii.getInventoryType(itemId1);
			var sx0 = item.getStr();//获取装备当前力量0
			var sx1 = item.getDex();//获取装备当前敏捷1
			var sx2 = item.getInt();//获取装备当前智力2
			var sx3 = item.getLuk();//获取装备当前运气3
			var sx4 = item.getHp();//获取装备当前HP4
			var sx5 = item.getMp();//获取装备当前MP5
			var sx6 = item.getWatk();//获取装备当前物攻6
			var sx7 = item.getMatk();//获取装备当前魔攻7
			var sx8 = item.getWdef();//获取装备当前物防8
			var sx9 = item.getMdef();//获取装备当前魔防9
			var sx10= item.getAcc();//获取装备当前命中10
			var sx11= item.getAvoid();//获取装备当前回避11
			var sx12= item.getHands();//获取装备当前手技12
			var sx13= item.getSpeed();//获取装备当前移动速度13
			var sx14= item.getJump();//获取装备当前跳跃力14
			item.setFlag(1);//上锁
			item.setStr(sx0+四维属性);
			item.setDex(sx1+四维属性);
			item.setInt(sx2+四维属性);
			item.setLuk(sx3+四维属性);
			item.setHp(sx4);
			item.setMp(sx5);
			item.setWatk(sx6+攻魔);
			item.setMatk(sx7+攻魔);
			item.setWdef(sx8);
			item.setMdef(sx9);
			item.setAcc(sx10);
			item.setAvoid(sx11);
			item.setHands(sx12);
			item.setSpeed(sx13);
			item.setJump(sx14);
			item.setJump(sx14);
			item.setLevel(+xxnew);
			item.setUpgradeSlots(0);
			MapleInventoryManipulator.removeFromSlot(cm.getC(),type,1,1, false);
			MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
			cm.ShowWZEffect("Effect/BasicEff.img/SkillBook/Success/0"); //成功
			cm.sendOk("已强化强化成功！");
			cm.laba(cm.getPlayer().getName() + " [已强化]" + " : " + "成功强化已强化至"+xxnew+"级！大家祝贺他(她)吧！！",11);
			status = -1;
				}
			}
	}}
