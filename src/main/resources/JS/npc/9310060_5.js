/* ==================
 脚本类型: NPC    
 脚本版权：一线海团队-维多
 联系扣扣：297870163
 =====================
 */
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
function start() {
    cm.sendYesNo("你确定你要使用#v1132000#+30个（#v4021000#+#v4021001#+#v4021002#+#v4021003#+#v4021004#+#v4021005#+#v4021006#+#v4021007#+#v4021008#）进行兑换#r#v1132001#四维属性+6#k？");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("恩... 看起来你并没有准备好。");
	cm.dispose();
	   } else if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		} else if (!cm.haveItem(1132000, 1)) {
       cm.sendOk("你没有#v1132000#!");
       cm.dispose();
		} else if (!cm.haveItem(4021000, 30)) {
       cm.sendOk("你没有30个#v4021000#!");
       cm.dispose();
	   } else if (!cm.haveItem(4021001, 30)) {
       cm.sendOk("你没有30个#v4021001#!");
       cm.dispose();
	   } else if (!cm.haveItem(4021002, 30)) {
       cm.sendOk("你没有30个#v4011002#!");
       cm.dispose();
	   } else if (!cm.haveItem(4021003, 30)) {
       cm.sendOk("你没有30个#v4011003#!");
       cm.dispose();
	   } else if (!cm.haveItem(4021004, 30)) {
       cm.sendOk("你没有30个#v4011004#!");
       cm.dispose();
	   } else if (!cm.haveItem(4021005, 30)) {
       cm.sendOk("你没有30个#v4011005#!");
       cm.dispose();
	   } else if (!cm.haveItem(4021006, 30)) {
       cm.sendOk("你没有30个#v4011006#!");
       cm.dispose();
	   } else if (!cm.haveItem(4021007, 30)) {
       cm.sendOk("你没有30个#v4011007#!");
       cm.dispose();
	   } else if (!cm.haveItem(4021008, 30)) {
       cm.sendOk("你没有30个#v4011008#!");
       cm.dispose();
	} else {
	cm.gainItem(1132000, -1);
	cm.gainItem(4021000, -30);
	cm.gainItem(4021001, -30);
	cm.gainItem(4021002, -30);
	cm.gainItem(4021003, -30);
	cm.gainItem(4021004, -30);
	cm.gainItem(4021005, -30);
	cm.gainItem(4021006, -30);
	cm.gainItem(4021007, -30);
	cm.gainItem(4021008, -30);

	var ii = MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1132001); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1132001)).copy(); // 生成一个Equip类
//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
//toDrop.setExpiration(temptime); 
//toDrop. setFlag(1);//上锁
toDrop. setStr(6);//给力量
toDrop. setDex(6);//给敏捷 
toDrop. setInt(6);//给智力
toDrop. setLuk(6);//给运气
toDrop. setHp(0);//给HP
toDrop. setMp(0);//给MP
toDrop. setWatk(0);//攻击
toDrop. setMatk(0);//魔法力
toDrop. setWdef(0);//物理防御
toDrop. setMdef(0);//魔法防御
toDrop. setAcc(0);//命中
toDrop. setAvoid(0);//回避
toDrop. setHands(0);//手技
toDrop. setSpeed(0);//移动
toDrop. setJump(0);//跳跃
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
cm.sendOk("兑换#v1113164#成功！");
cm.dispose();
    }
}
