importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
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
            if (cm.getPlayer().getMapId() == 108010101 || cm.getPlayer().getMapId() == 108010201 || cm.getPlayer().getMapId() == 108010301 || cm.getPlayer().getMapId() == 108010401 || cm.getPlayer().getMapId() == 108010501) {
                cm.sendOk("本地图暂时无法使用使用拍卖功能");
                cm.dispose();
                return;
            }

            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "欢迎来到梦之岛勋章奖励系统\r\n" 
            text += "#L3##e#认证女生领取#v1142574#（全属性+7 永久+#v5150038#）#l\r\n\r\n"
			text += "#L2##e#d拉三个人到50级领取#v1142101#（全属性+5 永久）#l\r\n\r\n"
			text += "#L4##e#d拉五个人到90级领取#v1142220#（全属性+10 永久 ）#l\r\n\r\n"
			text += "#L99##e#d已经有梦之队兑换#v1142574#（全属性+10 永久 ）#l\r\n\r\n"
		    text += "#L555##e#d200*#v4031560#+100*#v4031558#+100*#v4001160#+50*#v4001198#换取#v1142002#（全属性5 永久）#l\r\n\r\n"
			text += "#L556##e#d#v1142002#+555*#v4031456#换取#v1142001#（全属性10永久）#l\r\n\r\n"
			//text += "#L999##e#d领取首冲50元奖励#l\r\n\r\n"
			text += "#L1234##e#d已经有#v1142594#兑换#v1142594#（全属性+7 永久 ）#l\r\n\r\n"
			cm.sendOk(text); 
			} else if (selection == 999) {
if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(4310038, 1)) {//判断物品
			cm.sendOk("#b你没有1个#v4310038#无法兑换.");
		   cm.dispose();
		} else{
			cm.gainItem(4310038, -1);//扣除物品
			var ii = MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // 生成一个Equip类
var temptime = (System.currentTimeMillis() + 1 * 12 * 60 * 60 * 1000); //时间
toDrop.setExpiration(temptime); 
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
cm.sendOk("#b恭喜你,兑换#v1122017#成功！");
		cm.dispose();
		}
		} else if (selection == 1234) {
if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(1142594, 1)) {//判断物品
			cm.sendOk("#b你没有1个#v1142594#无法兑换.");
		   cm.dispose();
		  
		} else{
			cm.gainItem(1142594, -1);//扣除物品
			
var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1142594); //获得装备的类形
				var toDrop = ii.randomizeStats(ii.getEquipById(1142594)).copy(); // 生成一个Equip类
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//上锁
				toDrop. setStr(7);//给力量
				toDrop. setDex(7);//给敏捷 
				toDrop. setInt(7);//给智力
				toDrop. setLuk(7);//给运气
				toDrop. setHp(70);//给HP
				toDrop. setMp(70);//给MP
				toDrop. setWatk(7);//攻击
				toDrop. setMatk(7);//魔法力
				toDrop. setWdef(10);//物理防御
				toDrop. setMdef(10);//魔法防御
				//toDrop. setAcc(5);//命中
				//toDrop. setAvoid(5);//回避
				//toDrop. setHands(5);//手技
				toDrop. setSpeed(5);//移动
				toDrop. setJump(5);//跳跃
				cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.sendOk("#b恭喜你,兑换#v1142001#成功！");
		cm.dispose();
		}
			} else if (selection == 556) {
if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(1142002, 1)) {//判断物品
			cm.sendOk("#b你没有1个#v1142002#无法兑换.");
		   cm.dispose();
		    } else if (!cm.haveItem(4031456, 555)) {//判断物品
			cm.sendOk("#b你没有555个#v4031456#无法兑换.");
		   cm.dispose();
		} else{
			cm.gainItem(1142002, -1);//扣除物品
			cm.gainItem(4031456, -555);//扣除物品
var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1142001); //获得装备的类形
				var toDrop = ii.randomizeStats(ii.getEquipById(1142001)).copy(); // 生成一个Equip类
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//上锁
				toDrop. setStr(10);//给力量
				toDrop. setDex(10);//给敏捷 
				toDrop. setInt(10);//给智力
				toDrop. setLuk(10);//给运气
				//toDrop. setHp(100);//给HP
				//toDrop. setMp(100);//给MP
				toDrop. setWatk(10);//攻击
				toDrop. setMatk(10);//魔法力
				/*toDrop. setWdef(99);//物理防御
				toDrop. setMdef(99);//魔法防御
				toDrop. setAcc(99);//命中
				toDrop. setAvoid(99);//回避
				toDrop. setHands(99);//手技
				toDrop. setSpeed(99);//移动
				toDrop. setJump(99);//跳跃*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.sendOk("#b恭喜你,兑换#v1142001#成功！");
		cm.dispose();
		}
        } else if (selection == 99) {
			if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(1142574, 1)) {//判断物品
			cm.sendOk("#b你没有一个#v1142574#无法兑换.");
		   cm.dispose();
		   } else if (!cm.haveItem(1142219, 1)) {//判断物品
			cm.sendOk("#b你没有一个#v1142219#，无法兑换.");
		   cm.dispose();
		} else{
var ii = MapleItemInformationProvider.getInstance();		             
var type = ii.getInventoryType(1142574); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1142574)).copy(); // 生成一个Equip类
//var temptime = (System.currentTimeMillis() + 1 * 168 * 60 * 60 * 1000); //时间
//toDrop.setExpiration(temptime); 
 toDrop. setFlag(1);//上锁
 toDrop. setStr(10);//给力量
 toDrop. setDex(10);//给敏捷 
 toDrop. setInt(10);//给智力
 toDrop. setLuk(10);//给运气
//toDrop. setHp(0);//给HP
//toDrop. setMp(0);//给MP
 toDrop. setWatk(10);//攻击
 toDrop. setMatk(10);//魔法力
/*toDrop. setWdef(0);//物理防御
 toDrop. setMdef(0);//魔法防御
 toDrop. setAcc(0);//命中
 toDrop. setAvoid(0);//回避
 toDrop. setHands(99);//手技
 toDrop. setSpeed(99);//移动
 toDrop. setJump(99);//跳跃*/
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.sendOk("#b恭喜你,兑换#v1142574#成功！");
		cm.dispose();
		}
		} else if (selection == 555) {
if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(4031560, 200)) {//判断物品
			cm.sendOk("#b你没有200个#v4031560#无法兑换.");
		   cm.dispose();
		    } else if (!cm.haveItem(4031558, 100)) {//判断物品
			cm.sendOk("#b你没有100个#v4031558#无法兑换.");
		   cm.dispose();
		    } else if (!cm.haveItem(4001160, 100)) {//判断物品
			cm.sendOk("#b你没有100个#v4001160#无法兑换.");
		   cm.dispose();
		    } else if (!cm.haveItem(4001198, 50)) {//判断物品
			cm.sendOk("#b你没有50个#v4001198#无法兑换.");
		   cm.dispose();
		} else{
			cm.gainItem(4031560, -200);//扣除物品
			cm.gainItem(4031558, -100);//扣除物品
			cm.gainItem(4001160, -100);//扣除物品
			cm.gainItem(4001198, -50);//扣除物品
var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1142002); //获得装备的类形
				var toDrop = ii.randomizeStats(ii.getEquipById(1142002)).copy(); // 生成一个Equip类
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//上锁
				toDrop. setStr(5);//给力量
				toDrop. setDex(5);//给敏捷 
				toDrop. setInt(5);//给智力
				toDrop. setLuk(5);//给运气
				//toDrop. setHp(50);//给HP
				//toDrop. setMp(50);//给MP
				toDrop. setWatk(5);//攻击
				toDrop. setMatk(5);//魔法力
				/*toDrop. setWdef(99);//物理防御
				toDrop. setMdef(99);//魔法防御
				toDrop. setAcc(99);//命中
				toDrop. setAvoid(99);//回避
				toDrop. setHands(99);//手技
				toDrop. setSpeed(99);//移动
				toDrop. setJump(99);//跳跃*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.sendOk("#b恭喜你,兑换#v1142002#成功！");
		cm.dispose();
		}
		} else if (selection == 2) {
if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(4310002, 1)) {//判断物品
			cm.sendOk("#b你没有一个#v4310002#无法兑换.");
		   cm.dispose();
		} else{
			cm.gainItem(4310002, -1);//扣除物品
var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1142101); //获得装备的类形
				var toDrop = ii.randomizeStats(ii.getEquipById(1142101)).copy(); // 生成一个Equip类
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//上锁
				toDrop. setStr(5);//给力量
				toDrop. setDex(5);//给敏捷 
				toDrop. setInt(5);//给智力
				toDrop. setLuk(5);//给运气
				//toDrop. setHp(50);//给HP
				//toDrop. setMp(50);//给MP
				toDrop. setWatk(5);//攻击
				toDrop. setMatk(5);//魔法力
				/*toDrop. setWdef(99);//物理防御
				toDrop. setMdef(99);//魔法防御
				toDrop. setAcc(99);//命中
				toDrop. setAvoid(99);//回避
				toDrop. setHands(99);//手技
				toDrop. setSpeed(99);//移动
				toDrop. setJump(99);//跳跃*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.sendOk("#b恭喜你,兑换#v1142101#成功！");
		cm.dispose();
		}
		} else if (selection == 88) {
if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(4310088, 1)) {//判断物品
			cm.sendOk("#b你没有一个#v4310088#无法兑换.");
		   cm.dispose();
		} else{
			cm.gainItem(4310088, -1);//扣除物品
var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1142219); //获得装备的类形
				var toDrop = ii.randomizeStats(ii.getEquipById(1142219)).copy(); // 生成一个Equip类
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//上锁
				toDrop. setStr(10);//给力量
				toDrop. setDex(10);//给敏捷 
				toDrop. setInt(10);//给智力
				toDrop. setLuk(10);//给运气
				//toDrop. setHp(50);//给HP
				//toDrop. setMp(50);//给MP
				toDrop. setWatk(10);//攻击
				toDrop. setMatk(10);//魔法力
				/*toDrop. setWdef(99);//物理防御
				toDrop. setMdef(99);//魔法防御
				toDrop. setAcc(99);//命中
				toDrop. setAvoid(99);//回避
				toDrop. setHands(99);//手技
				toDrop. setSpeed(99);//移动
				toDrop. setJump(99);//跳跃*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.sendOk("#b恭喜你,兑换#v1142219#成功！");
		cm.dispose();
		}
		} else if (selection == 58) {
if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(4310099, 888)) {//判断物品
			cm.sendOk("#b你没有888个#v4310099#无法兑换.");
		   cm.dispose();
		} else{
			cm.gainItem(4310099, -888);//扣除物品
var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1142655); //获得装备的类形
				var toDrop = ii.randomizeStats(ii.getEquipById(1142655)).copy(); // 生成一个Equip类
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//上锁
				toDrop. setStr(5);//给力量
				toDrop. setDex(5);//给敏捷 
				toDrop. setInt(5);//给智力
				toDrop. setLuk(5);//给运气
				//toDrop. setHp(50);//给HP
				//toDrop. setMp(50);//给MP
				toDrop. setWatk(0);//攻击
				toDrop. setMatk(0);//魔法力
				/*toDrop. setWdef(99);//物理防御
				toDrop. setMdef(99);//魔法防御
				toDrop. setAcc(99);//命中
				toDrop. setAvoid(99);//回避
				toDrop. setHands(99);//手技
				toDrop. setSpeed(99);//移动
				toDrop. setJump(99);//跳跃*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.sendOk("#b恭喜你,兑换#v1142655#成功！");
		cm.dispose();
		}
		} else if (selection == 3) {
if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(4310023, 1)) {//判断物品
			cm.sendOk("#b你没有一个#v4310023#无法兑换.");
		   cm.dispose();
		} else{
			cm.gainItem(4310023, -1);//扣除物品5150038
			cm.gainItem(5150038, 1)
var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1142574); //获得装备的类形
				var toDrop = ii.randomizeStats(ii.getEquipById(1142574)).copy(); // 生成一个Equip类
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//上锁
				toDrop. setStr(7);//给力量
				toDrop. setDex(7);//给敏捷 
				toDrop. setInt(7);//给智力
				toDrop. setLuk(7);//给运气
				//toDrop. setHp(50);//给HP
				//toDrop. setMp(50);//给MP
				toDrop. setWatk(7);//攻击
				toDrop. setMatk(7);//魔法力
				/*toDrop. setWdef(99);//物理防御
				toDrop. setMdef(99);//魔法防御
				toDrop. setAcc(99);//命中
				toDrop. setAvoid(99);//回避
				toDrop. setHands(99);//手技
				toDrop. setSpeed(99);//移动
				toDrop. setJump(99);//跳跃*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.sendOk("#b恭喜你,兑换#v1142574#成功！");
		cm.dispose();
		}
		} else if (selection == 4) {
if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		    } else if (!cm.haveItem(4310088, 1)) {//判断物品
			cm.sendOk("#b你没有一个#v4310088#无法兑换.");
		   cm.dispose();
		} else{
			cm.gainItem(4310088, -1);//扣除物品
var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1142220); //获得装备的类形
				var toDrop = ii.randomizeStats(ii.getEquipById(1142220)).copy(); // 生成一个Equip类
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//上锁
				toDrop. setStr(10);//给力量
				toDrop. setDex(10);//给敏捷 
				toDrop. setInt(10);//给智力
				toDrop. setLuk(10);//给运气
				//toDrop. setHp(50);//给HP
				//toDrop. setMp(50);//给MP
				toDrop. setWatk(10);//攻击
				toDrop. setMatk(10);//魔法力
				/*toDrop. setWdef(99);//物理防御
				toDrop. setMdef(99);//魔法防御
				toDrop. setAcc(99);//命中
				toDrop. setAvoid(99);//回避
				toDrop. setHands(99);//手技
				toDrop. setSpeed(99);//移动
				toDrop. setJump(99);//跳跃*/
				cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
				cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.sendOk("#b恭喜你,兑换#v1142220#成功！");
		cm.dispose();
		}
         
        }
    }
}