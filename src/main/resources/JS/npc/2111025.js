importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
var oldWeaponList = [1432038,1312031,1422028,1302059,1412026,1442045,1372032,1382036,1382045,1382046,1382047,1382048,1482013,1492013,1452044,1462039,1332050,1472051,1472113,1402037];
var newWeaponList = [1432106,1312077,1422078,1302179,1412076,1442143,1372125,1382131,1372039,1372040,1372041,1372042,1482109,1492108,1452136,1462125,1332157,1472148,1472113,1402037];

var newWeaponList1 = [1432106,1312077,1422078,1302179,1412076,1442143,1372125,1382131,1372039,1372040,1372041,1372042,1482109,1492108,1452136,1462125,1332157,1472148];
//定义多少点券兑换武器
var cost = 8000;

function start() {
    status = -1;

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var text = "";
		 text += "#e#r	\r\n\r\n			梦之岛专属武器制作 #l#n\r\n\r\n#e#d梦之岛风云骤起,为了抵抗梦之岛的强大怪兽大仙决定牺牲自身修为将功力存放在此,梦之岛的勇士们通过测试即可获得更强大的专属武器!!";
		 if(cm.getPlayer().getOneTimeLog("第一阶段专属武器") == 0){//判断永久记录
        text += "\r\n	#L0#专属武器制作第一阶段#l \r\n\r\n 请带来以下物品：\r\n#v4000177# * 1000 和 100W \r\n奖励100W经验";  
		}else if ((cm.getPlayer().getOneTimeLog("第一阶段专属武器")  == 1) && (cm.getPlayer().getOneTimeLog("第二阶段专属武器")  == 0)) {
		text += "\r\n   #L1#专属武器制作第二阶段#l\r\n\r\n\r\n 请带来以下物品：\r\n#v4000270# * 500丶#v4000268# * 500丶#v4000269# * 500和300W\r\n奖励300W经验";
		}else if ((cm.getPlayer().getOneTimeLog("第二阶段专属武器")  == 1) && (cm.getPlayer().getOneTimeLog("第三阶段专属武器")  == 0)) {
		text += "\r\n	#L2#专属武器制作第三阶段#l \r\n\r\n\r\n 请带来以下物品：\r\n#v4000446# * 60+#v4000459# * 60+#v4000460# * 2+300W \r\n奖励200W经验#v4000244#*3+#v4000245#*3";
		}else if ((cm.getPlayer().getOneTimeLog("第三阶段专属武器")  == 1) && (cm.getPlayer().getOneTimeLog("第四阶段专属武器")  == 0)) {
		text += "\r\n#L3#专属武器制作第四阶段#l\r\n\r\n\r\n请带来以下物品：\r\n#v4000451# * 60+#v4000453# * 60+#v4000460# * 2+500W\r\n奖励200W经验#v4000244#*3+#v4000245#*3";
		}else if ((cm.getPlayer().getOneTimeLog("第四阶段专属武器")  == 1) && (cm.getPlayer().getOneTimeLog("第五阶段专属武器")  == 0)) {
		text += "\r\n	#L4#专属武器制作第五阶段#l\r\n\r\n\r\n请带来以下物品：\r\n#v4000175#*1+#v4032398#*1+#v4001176#*100";   
		}else if ((cm.getPlayer().getOneTimeLog("第五阶段专属武器")  == 1) && (cm.getPlayer().getOneTimeLog("第六阶段专属武器")  == 0)) {
			 //text += "#e#r未完待续";
		text += "\r\n#L5#专属武器制作第六阶段#l\r\n\r\n请带来以下物品：\r\n#v4032398#+8000点券+5000抵用(点券可以在自由相框用金币兑换哦~)";
        }else if ((cm.getPlayer().getOneTimeLog("第六阶段专属武器")  == 1) && (cm.getPlayer().getOneTimeLog("第七阶段专属武器")  == 0)) {
		text += "\r\n			专属武器兑换(注意会上锁)#l\r\n";
		for( i = 0; i< oldWeaponList.length; i++){
			text += "\r\n#L" + (10 + i) + "# #v" + oldWeaponList[i] + "# 兑换 #v" + newWeaponList[i] + "# #l\r\n";
		}	
		}else if(cm.getPlayer().getOneTimeLog("第七阶段专属武器")  == 1){
		text += "\r\n			专属武器兑换#l\r\n";
		for( i = 0; i< newWeaponList1.length; i++){
			text += "\r\n#L" + (50 + i) + "# #v" + newWeaponList1[i] + "# + " + cost + " 点卷兑换新 #v" + newWeaponList1[i] + "# #l\r\n";
		}
		}
        cm.sendOk(text); 
		}else if (status == 1){
		if (selection == 0){
           if (!cm.haveItem(4000177,1000) || (cm.getMeso() < 1000000)) {
			   cm.sendOk("任务道具不足：请带来以下物品：\r\n#v4000177# * 1000和100W\r\n");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("第一阶段专属武器") > 0) {
			   cm.sendOk("任务已完成，无法再次完成。");
			   cm.dispose();
		   }else{
			   cm.gainItem(4000177,-1000);
			   cm.gainExp(1000000);//
			   cm.gainMeso(-1000000);
			   cm.getPlayer().setOneTimeLog("第一阶段专属武器");
			   cm.sendOk("第一阶段任务已完成。")
			   cm.worldMessage(5, "【专属武器】：玩家 [" + cm.getPlayer().getName() + "] 完成了“武器第一阶段任务”，大家恭喜TA~")
			   cm.dispose();			
		   }

			
		}else if (selection == 1){
		   if ( !cm.haveItem(4000270,500) || (cm.getMeso() < 3000000 ) || !cm.haveItem(4000268,500) || !cm.haveItem(4000269,500)) {
			   cm.sendOk("任务道具不足：请带来以下物品：\r\n#v4000270# * 500丶#v4000268# * 500丶#v4000269# * 500和200W");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("第二阶段专属武器") > 0) {
			   cm.sendOk("任务已完成，无法再次完成。");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("第一阶段专属武器")  == 0) {
			   cm.sendOk("请先完成上一阶段的任务。");
			   cm.dispose();
		   }else{
			   cm.gainItem(4000270,-500);
			   cm.gainItem(4000268,-500);
			   cm.gainItem(4000269,-500);
			   cm.gainMeso(-3000000);
			   cm.gainExp(2000000);//
			   cm.getPlayer().setOneTimeLog("第二阶段专属武器");
			   cm.sendOk("第二阶段任务已完成。")
			   cm.worldMessage(5, "【专属武器】：玩家 [" + cm.getPlayer().getName() + "] 完成了“武器第二阶段任务”，大家恭喜TA~")
			   cm.dispose();			
			}

		}else if (selection == 2){
			if (!cm.haveItem(4000446,60) || (cm.getMeso() < 5000000 ) || !cm.haveItem(4000459,60) || !cm.haveItem(4000460,2)) {
			   cm.sendOk("任务道具不足：请带来以下物品：\r\n#v4000446# * 60+#v4000459# * 60+#v4000460# * 2+200W 奖励#v4000244#*3+#v4000245#*3");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("第三阶段专属武器") > 0) {
			   cm.sendOk("任务已完成，无法再次完成。");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("第二阶段专属武器")  == 0) {
			   cm.sendOk("请先完成上一阶段的任务。");
			   cm.dispose();
		   }else{
			   cm.gainItem(4000446,-60);
			   cm.gainItem(4000459,-60);
			   cm.gainItem(4000460,-2);
			   cm.gainMeso(-5000000);
			   cm.gainExp(2000000);
			   cm.gainItem(4000244,3);
			   cm.gainItem(4000245,3);
			   cm.getPlayer().setOneTimeLog("第三阶段专属武器")
			   cm.sendOk("第三阶段任务已完成。")
			   cm.worldMessage(5, "【专属武器】：玩家 [" + cm.getPlayer().getName() + "] 完成了“武器第三阶段任务”，大家恭喜TA~")
          	cm.dispose();			
			}

			
		}else if (selection == 3){
			if (!cm.haveItem(4000451,60)|| (cm.getMeso() < 5000000 ) || !cm.haveItem(4000453,60) || !cm.haveItem(4000460,2)) {
			   cm.sendOk("任务道具不足：请带来以下物品：\r\n#v4000451# * 60+#v4000453# * 60+#v4000460# * 2+200W奖励#v4000244#*3+#v4000245#*3");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("第四阶段专属武器") > 0) {
			   cm.sendOk("任务已完成，无法再次完成。");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("第三阶段专属武器")  == 0) {
			   cm.sendOk("请先完成上一阶段的任务。");
			   cm.dispose();
		   }else{
			   cm.gainItem(4000451,-60);
			   cm.gainItem(4000453,-60);
			   cm.gainItem(4000460,-2);
			   cm.gainMeso(-5000000);
			   cm.gainItem(4000244,3);
			   cm.gainItem(4000245,3);
			   cm.gainExp(2000000);
			   cm.getPlayer().setOneTimeLog("第四阶段专属武器")
			   cm.sendOk("第四阶段任务已完成。")
			   cm.worldMessage(5, "【专属武器】：玩家 [" + cm.getPlayer().getName() + "] 完成了“武器第四阶段任务”，大家恭喜TA~")
           	cm.dispose();			
			}

		}else if (selection == 4){
			if (!cm.haveItem(4000175,1) || !cm.haveItem(4032398,1) || !cm.haveItem(4001176,100)) {
			   cm.sendOk("任务道具不足：请带来以下物品：\r\n#v4000175#*1+#v4032398#*1+#v4001176#*100");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("第五阶段专属武器") > 0) {
			   cm.sendOk("任务已完成，无法再次完成。");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("第四阶段专属武器")  == 0) {
			   cm.sendOk("请先完成上一阶段的任务。");
			   cm.dispose();
		   }else{
			   cm.gainItem(4000175,-1);
			   cm.gainItem(4032398,-1);
			   cm.gainItem(4001176,-100);
			   cm.getPlayer().setOneTimeLog("第五阶段专属武器")
			   cm.sendOk("第五阶段任务已完成。")
			   cm.worldMessage(5, "【专属武器】：玩家 [" + cm.getPlayer().getName() + "] 完成了“武器第五阶段任务”，大家恭喜TA~")
           	cm.dispose();			
			}

			
		}else if (selection == 5){
		   if (!cm.haveItem(4032398,1) ||!(cm.getPlayer().getCSPoints(1) >= 8000)||!(cm.getPlayer().getCSPoints(2) >= 5000)) {
			   cm.sendOk("任务道具不足：请带来以下物品：\r\n#v4032398#+8000点券+5000抵用(点券可以在自由相框用金币兑换哦~)");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("第六阶段专属武器") > 0) {
			   cm.sendOk("任务已完成，无法再次完成。");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("第五阶段专属武器")  == 0) {
			   cm.sendOk("请先完成上一阶段的任务。");
			   cm.dispose();
		   }else{
			   cm.gainItem(4032398,-1);
		   cm.gainDJ(-8000);//点券
		   cm.gainD(-5000);//点券
		   cm.getPlayer().setOneTimeLog("第六阶段专属武器")
		   cm.sendOk("第六阶段任务已完成。")
		   cm.worldMessage(5, "【专属武器】：玩家 [" + cm.getPlayer().getName() + "] 完成了“武器第六阶段任务”，大家恭喜TA~")
           cm.dispose();			
		   }
		   
		}else if((selection >= 10) && (selection < 50)){
		   if (cm.getPlayer().getOneTimeLog("第七阶段专属武器") > 0) {
			   cm.sendOk("任务已完成，无法再次完成。");
			   cm.dispose();
			   return;
		   }else if (cm.getPlayer().getOneTimeLog("第六阶段专属武器")  == 0) {
			   cm.sendOk("请先完成上一阶段的任务。");
			   cm.dispose();
			   return;
		   }
			if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
				cm.dispose();
				return;
			}
			var index = selection - 10;
			if (!cm.haveItem(oldWeaponList[index],1)){
				cm.sendOk("没有相应的武器：请带来以下物品：\r\n#z" + oldWeaponList[index] + "# * 1");
			   cm.dispose();
			   return;
			}
			if (index >= 18){
				if( (cm.getInventory(1).getItem(1)== null) || (cm.getInventory(1).getItem(1).getItemId() != oldWeaponList[index])){
					cm.sendOk("#b请将要强化的装备#v" + oldWeaponList[index] + "#放在第一格！#k");	
					cm.dispose();
					return;
				}
				intensifyEquip(index);
				cm.getPlayer().setOneTimeLog("第七阶段专属武器")
				cm.gainItem(newWeaponList1[index],-1);
				cm.sendOk("#b恭喜你成功加了武器升级次数.");
				cm.dispose();
				return;
			}
			cm.gainItem(oldWeaponList[index],-1); 
			var property = getProperty(index);
			giveEquip(newWeaponList[index], ((index < 6) || (index > 11)),  property);
			cm.getPlayer().setOneTimeLog("第七阶段专属武器");
			cm.sendOk("#b恭喜你兑换成功.");
			cm.dispose();
			return;
		}else if(selection >= 50){
			if (cm.getPlayer().getCSPoints(1) < cost){
				cm.sendOk("#b请确认具有足够的点券,否则无法兑换.");
				cm.dispose();
				return;
			}
			if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
				cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
				cm.dispose();
				return;
			}
			var index = selection - 50;
			if (!cm.haveItem(newWeaponList1[index],1)){
				cm.sendOk("没有相应的武器：请带来以下物品：\r\n#z" + newWeaponList1[index] + "# * 1");
			   cm.dispose();
			   return;
			}
			cm.gainDJ(-cost);
			cm.gainItem(newWeaponList1[index],-1);
			var property = getProperty(index);
			giveEquip(newWeaponList1[index], ((index < 6) || (index > 11)),  property);
			cm.sendOk("#b恭喜你兑换成功.");
			cm.dispose();
		}
    }}
}

function getProperty(index){
	if (index == 0){
		return 130 + getRandom(6); //125-131
	}
	if (index < 6){
		return 140 + getRandom(5);  //135-140
	}
	if(index == 6){
		return 158 + getRandom(5);  //153-158
	}
	if (index == 7){
		return 160 + getRandom(5);  //160-165
	}
	if (index == 8){
		return 155 + getRandom(5);  //155-160
	}
	if (index < 12 ){
		return 140 + getRandom(10);	//140-150
	}
	if (index < 13){
		return 100 + getRandom(8); //95-103
	}
	if (index < 14){
		return 103 + getRandom(8); //98-106
	}
	if (index == 14){
		return 130 + getRandom(5); //125-130
	}
	if (index == 15){
		return 132 + getRandom(5); //127-132
	}
	if (index == 16){
		return 128 + getRandom(5); //123-128
	}
	if (index == 17){
		return 66 + getRandom(5); //63-68
	}
}
				//装备ID, 是否物理攻击, 属性大小, 升级次数 
function giveEquip(equipId, isPhysic, property){
	var ii = MapleItemInformationProvider.getInstance();		                
	var type = ii.getInventoryType(equipId); //获得装备的类形
	var toDrop = ii.randomizeStats(ii.getEquipById(equipId)).copy(); // 生成一个Equip类
	toDrop. setFlag(1);//上锁
	toDrop. setStr(5);//给力量
	toDrop. setDex(5);//给敏捷 
	toDrop. setInt(5);//给智力
	toDrop. setLuk(5);//给运气
	if (isPhysic){
		toDrop.setWatk(property);//攻击
	}else{
		toDrop.setMatk(property);//魔法力	
	}
	//
	//toDrop. setHp(random5 * 10);//给HP
	//toDrop. setMp(random6 * 10);//给MP
	cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
	cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
}

function getRandom(max){
	return Math.floor(Math.random()*(max+1));
}

function intensifyEquip(index){
	var levelTime = cm.getInventory(1).getItem(1).getLevel();
	var targetId = cm.getInventory(1).getItem(1).getItemId();
	var item = cm.getInventory(1).getItem(1).copy();
	var ii = MapleItemInformationProvider.getInstance();
	var type =  ii.getInventoryType(targetId);
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
	var sx15= item.getUpgradeSlots();
	item.setFlag(1);//上锁
	item.setStr(sx0);
	item.setDex(sx1);
	item.setInt(sx2);
	item.setLuk(sx3);
	item.setHp(sx4);
	item.setMp(sx5);
	item.setWatk(sx6);
	item.setMatk(sx7);
	item.setWdef(sx8);
	item.setMdef(sx9);
	item.setAcc(sx10);
	item.setAvoid(sx11);
	item.setHands(sx12);
	item.setSpeed(sx13);
	item.setJump(sx14);
	item.setJump(sx14);
	item.setLevel(+levelTime);
	item.setUpgradeSlots(sx15 + (index - 14));
	MapleInventoryManipulator.removeFromSlot(cm.getC(),type,1,1, false);
	cm.getPlayer().getInventory(type).addItem(item);//将这个装备放入包中
	cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, item, false)); //刷新背包
}