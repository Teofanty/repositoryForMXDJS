/* ==================
 脚本类型: NPC	    
 脚本作者: 游戏盒团队-维多利亚 
 联系扣扣: 297870163
 =====================
 */
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
var status = 0;
var zones = 0;
var ItemId = Array(
        //物品1         物品2    货币    数量
	Array(1114213,4310018,3, "0"),//金币戒指
    Array(1113164,4310019,3, "0"),//金币戒指
	Array(1112793,4310014,3, "0")//金币戒指
        //如需其它道具兑换，请按照此格式自行添置。
        //代码,价格,介绍
);


function start() {
	 status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
cm.dispose();
    } else {
if (status >= 0 && mode == 0) {
    cm.dispose();
    return;
}
if (mode == 1)
    status++;
else
    status--;
if (status == 0) {
var selStr = "您好，请选择您需要兑换的物品\r\n★#r角色剩余:#v4310018# x " + cm.getPlayer().getItemQuantity(4310018, false) + " 枚  #v4310019# x " + cm.getPlayer().getItemQuantity(4310019, false) + " 枚  #v4310014# x " + cm.getPlayer().getItemQuantity(4310014, false) + " 枚\r\n#k★";
for (var i = 0; i < ItemId.length; i++) {
    selStr += "\r\n#L" + i + "##i" + ItemId[i][0] + "##z" + ItemId[i][0] + "##k = #r#v " + ItemId[i][1] + " ##k X#e" + ItemId[i][2] + "#n个#l";
   }
cm.sendSimple(selStr);
    } else if (status == 1) {
		 if (zones == 1) {
cm.sendNext("你让我帮你做什么呢？", 2);
zones = 2;
    } else if (zones == 0) {
if (cm.getInventory(1).isFull(0)){//判断第2个也就是装备栏是否有一个空格	
                    cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");	
                    cm.dispose();
} else if (!cm.haveItem(ItemId[selection][1], ItemId[selection][2])) {//判断物品
cm.sendOk("#b#v"+ItemId[selection][1]+"#不足"+ItemId[selection][2]+"个.");	
 cm.dispose();
} else if (ItemId[selection][0] == 1114213) {
	if(cm.getPlayer().getOneTimeLog("jiezhiduih4") >= 1){//判断永久记录
	cm.sendOk("#b#v1114213#只能兑换一次..");	
    cm.dispose();
	} else{
cm.gainItem(ItemId[selection][1], -ItemId[selection][2]);
var ii = MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(ItemId[selection][0]); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(ItemId[selection][0])).copy(); // 生成一个Equip类
//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
//toDrop.setExpiration(temptime); 
toDrop. setFlag(1);//上锁
toDrop. setStr(5);//给力量
toDrop. setDex(5);//给敏捷 
toDrop. setInt(5);//给智力
toDrop. setLuk(5);//给运气
toDrop. setHp(0);//给HP
toDrop. setMp(0);//给MP
toDrop. setWatk(5);//攻击
toDrop. setMatk(5);//魔法力
toDrop. setWdef(0);//物理防御
toDrop. setMdef(0);//魔法防御
toDrop. setAcc(0);//命中
toDrop. setAvoid(0);//回避
toDrop. setHands(0);//手技
toDrop. setSpeed(0);//移动
toDrop. setJump(0);//跳跃
toDrop. setUpgradeSlots(0);//可升级次数
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
cm.getPlayer().setOneTimeLog("jiezhiduih4");//给永久记录
cm.getPlayer().saveToDB(true, true);
cm.sendOk("兑换成功,商品#i" + ItemId[selection][0] + ":# #b#t" + ItemId[selection][0] + "##k已送往背包。");
cm.dispose();
}
} else if (ItemId[selection][0] == 1113164) {
	if(cm.getPlayer().getOneTimeLog("jiezhiduih5") >= 1){//判断永久记录
	cm.sendOk("#b#v1113164#只能兑换一次..");	
    cm.dispose();
	} else{
cm.gainItem(ItemId[selection][1], -ItemId[selection][2]);
var ii = MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(ItemId[selection][0]); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(ItemId[selection][0])).copy(); // 生成一个Equip类
//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
//toDrop.setExpiration(temptime); 
toDrop. setFlag(1);//上锁
toDrop. setStr(5);//给力量
toDrop. setDex(5);//给敏捷 
toDrop. setInt(5);//给智力
toDrop. setLuk(5);//给运气
toDrop. setHp(0);//给HP
toDrop. setMp(0);//给MP
toDrop. setWatk(5);//攻击
toDrop. setMatk(5);//魔法力
toDrop. setWdef(0);//物理防御
toDrop. setMdef(0);//魔法防御
toDrop. setAcc(0);//命中
toDrop. setAvoid(0);//回避
toDrop. setHands(0);//手技
toDrop. setSpeed(0);//移动
toDrop. setJump(0);//跳跃
toDrop. setUpgradeSlots(0);//可升级次数
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
cm.getPlayer().setOneTimeLog("jiezhiduih5");//给永久记录
cm.getPlayer().saveToDB(true, true);
cm.sendOk("兑换成功,商品#i" + ItemId[selection][0] + ":# #b#t" + ItemId[selection][0] + "##k已送往背包。");
cm.dispose();
}
} else if (ItemId[selection][0] == 1112793) {
                    cm.gainItem(ItemId[selection][1], -ItemId[selection][2]);
var ii = MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(ItemId[selection][0]); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(ItemId[selection][0])).copy(); // 生成一个Equip类
//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
//toDrop.setExpiration(temptime); 
toDrop. setFlag(1);//上锁
toDrop. setStr(5);//给力量
toDrop. setDex(5);//给敏捷 
toDrop. setInt(5);//给智力
toDrop. setLuk(5);//给运气
toDrop. setHp(0);//给HP
toDrop. setMp(0);//给MP
toDrop. setWatk(5);//攻击
toDrop. setMatk(5);//魔法力
toDrop. setWdef(0);//物理防御
toDrop. setMdef(0);//魔法防御
toDrop. setAcc(0);//命中
toDrop. setAvoid(0);//回避
toDrop. setHands(0);//手技
toDrop. setSpeed(0);//移动
toDrop. setJump(0);//跳跃
toDrop. setUpgradeSlots(0);//可升级次数
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
cm.getPlayer().setOneTimeLog("jiezhiduih6");//给永久记录
                    cm.getPlayer().saveToDB(true, true);
                    cm.sendOk("兑换成功,商品#i" + ItemId[selection][0] + ":# #b#t" + ItemId[selection][0] + "##k已送往背包。");
                    cm.dispose();
					}
}
    }}}
