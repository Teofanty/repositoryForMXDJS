/* global cm */
importPackage(net.sf.odinms.client);
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);

var step = "第一阶段";
var nextStep = "第二阶段"

var zhanshi = [1302105,1312039,1322065,1432050,1442071,1402053,1412035,1422039];
var propertyZS = [50,50,50,58,58,53,53.53]
var zhanshi1 = [1302182];

var feixia = [1332081,1472077];
var propertyFX = [50,20]
var feixia1 = [1332063,1472061];

var fashi = [1372046,1382062];
var propertyFS = [49,50]
var fashi1 = [1372107,1372107];

var gongshou = [1452062,1462056];
var propertyGS = [49,53]
var gongshou1 = [1452051,1452051];

var haidao = [1482029,1492030];
var propertyHD = [37,39]
var haidao1 = [1482014,1492014]

var newWeapon = [zhanshi, fashi, gongshou, feixia, haidao];
var oldWeapon = [zhanshi1, fashi1, gongshou1, feixia1, haidao1];
var propertyList = [propertyZS, propertyFS, propertyFX, propertyGS, propertyHD]

//需求物品列表及对应数量
var needItems = [4000001,4000012,4000015,2210006,4002000]
var needAmout = [50,50,50,1,20]

//金钱与经验奖励定义
var giveExp = 100000;
var giveMany = 0;

var selected = 0;
var jobIndex = 0;
var oldWeaponList = [];
var newWeaponList = [];

var jobNames = ['战士','魔法师','弓箭手','飞侠','海盗'];
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
			jobCode = cm.getPlayer().getJob() + '';
			jobIndex = parseInt(jobCode.substring(0,1)) - 1;
			if (jobIndex < 0 || (job > jobIndex.length - 1)){
				cm.sendOk("职业不对，请转职后重试")
				cm.dispose();
				return;
			}
			oldWeaponList = oldWeapon[jobIndex];
			newWeaponList = newWeapon[jobIndex];
			var jobName = jobNames[jobIndex];
            var text = "";
			text += "#e#r	\r\n\r\n		  "+ jobName +"专属武器制作" + step + "（奖励10W经验）#l \r\n\r\n 请带来以下物品：";
			var text3 = "\r\n ";
			for(i = 0 ; i < needItems.length; i++){
				text3 += "#v" + needItems[i] + "# *" +  needAmout[i] + "+"
			}
			text3= text3.substring(0,text2.length-1);
			text += text3;
			//text += "\r\n #v4000001# * 50 + #v4000012# * 50 + #v4000015# * 50 + #v2210006# * 1 + #v4002000# * 20";
			text += "\r\n 并带上相应前置武器 ";
			var text2 = "";
			for(var i=0; i < oldWeaponList.length; i++){
				text2 += "#v" + oldWeaponList[i] + "# 或 "
			}
			text2= text2.substring(0,text2.length-1)
			text += text2;
			for(var i = 0 ; i < newWeaponList.length ; i++){
				text += "\r\n	#L" + i + "#兑换专属武器" + "#v" + newWeaponList[i] + "#";
			}
			cm.sendOk(text);  

		}else if (selection != -1) {
			if(cm.getPlayer().getOneTimeLog(step + "专属武器") == 0){//判断永久记录
				var flag = true;
				var notHaveIndex;
				for(var i=0; i< needItems.length ; i++){
					flag = flag && cm.haveItem(needItems[i], needAmout[i])
					if (!flag){
						notHaveIndex = i;
						break;
					}
				}
				
				if(!flag){
					cm.sendOk("物品 #v" + needItems[notHaveIndex] + "#  不足，请收集好再来。")
					cm.dispose();
				}
				
				var oldCode = 0;
				for(var i=0;i<oldWeaponList.lengthl;i++){
					oldCode = oldWeaponList[i];
					flag = flag && cm.haveItem(oldCode, 1);
					if(flag){
						break;
					}
				}
				if(flag){
					cm.getPlayer().setOneTimeLog(step + "专属武器");
					for(var i=0; i< needItems.length ; i++){
						cm.gainItem(needItems[i], 0 - needAmout[i]);
					}		
					cm.gainItem(oldCode, -1);
					var propertys = propertyList[jobIndex];
					giveEquipment(propertys[selection], newWeaponList[selection]);
					cm.gainExp(giveExp);
				}else{
					cm.sendOk("请检查是否存在前置武器。")
					cm.dispose();
				}
			}else{
				cm.sendOk(step + "任务已完成。")
				cm.dispose();
			}
        } 
    }
}

//4031123 菠萝
//1122006 项链
//1112402 休彼得满戒指
//						四维   物G魔G  HP   防御	 代码
function giveEquipment(property, zhuangbeima) {
    var ii = MapleItemInformationProvider.getInstance();
    var type = ii.getInventoryType(zhuangbeima); //获得装备的类形
    var toDrop = ii.randomizeStats(ii.getEquipById(zhuangbeima)).copy(); // 生成一个Equip类
    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
    //toDrop.setExpiration(temptime); 
    toDrop. setFlag(1);//上锁
    //toDrop.setStr(siwei); //给力量
    //toDrop.setDex(siwei); //给敏捷 
    //toDrop.setInt(siwei); //给智力
    ///toDrop.setLuk(siwei); //给运气
    //toDrop. setHp(hpmp);//给HP
    //toDrop. setMp(hpmp);//给MP
	if (jobIndex != 1){
		toDrop.setMatk(property); //攻击
	}else{
		toDrop.setWatk(property); //魔法力
	}
    //toDrop. setWdef(fangyu);//物理防御
	//toDrop. setAcc(99);//命中
		/*toDrop. setMdef(99);//魔法防御
		toDrop. setAvoid(99);//回避
		toDrop. setHands(99);//手技
		toDrop. setSpeed(99);//移动
		toDrop. setJump(99);跳跃
		toDrop.setUpgradeSlots(7);可砸卷次数*/
    cm.getPlayer().getInventory(type).addItem(toDrop); //将这个装备放入包中
    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
}
