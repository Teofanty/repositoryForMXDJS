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
    cm.sendYesNo("你确定你要使用#v1113013#+55个（#v4004000#+#v4004001#+#v4004002#+#v4004003#+#v4004004#）+3000个#v4001126#+2500W金币进行兑换#r#v1113013#四维属性+10  攻击/魔法力+10 手技+15#k？");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("恩... 看起来你并没有准备好。");
	cm.dispose();
	   } else if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
		cm.dispose();
		} else if (!cm.haveItem(1113166, 1)) {
       cm.sendOk("你没有#v1113166#!");
       cm.dispose();
		} else if (!cm.haveItem(4004000, 55)) {
       cm.sendOk("你没有55个#v4004000#!");
       cm.dispose();
	   } else if (!cm.haveItem(4004001, 55)) {
       cm.sendOk("你没有55个#v4004001#!");
       cm.dispose();
	   } else if (!cm.haveItem(4004002, 55)) {
       cm.sendOk("你没有55个#v4004002#!");
       cm.dispose();
	   } else if (!cm.haveItem(4004003, 55)) {
       cm.sendOk("你没有55个#v4004003#!");
       cm.dispose();
	   } else if (!cm.haveItem(4004004, 55)) {
       cm.sendOk("你没有55个#v4004004#!");
       cm.dispose();
	   } else if (!cm.haveItem(4001126, 3000)) {
       cm.sendOk("你没有3000个#v4001126#!");
       cm.dispose();
	   } else if (cm.getMeso() < 25000000){//判断多少金币
       cm.sendOk("你没有2500W金币!");
       cm.dispose();
	} else {
	cm.gainItem(1113166, -1);
	cm.gainItem(4004000, -55);
	cm.gainItem(4004001, -55);
	cm.gainItem(4004002, -55);
	cm.gainItem(4004003, -55);
	cm.gainItem(4004004, -55);
	cm.gainItem(4001126, -3000);
    cm.gainMeso(- 25000000);//扣除多少金币
	var ii = MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1113167); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1113167)).copy(); // 生成一个Equip类
//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
//toDrop.setExpiration(temptime); 
//toDrop. setFlag(1);//上锁
toDrop. setStr(10);//给力量
toDrop. setDex(10);//给敏捷 
toDrop. setInt(10);//给智力
toDrop. setLuk(10);//给运气
toDrop. setHp(0);//给HP
toDrop. setMp(0);//给MP
toDrop. setWatk(10);//攻击
toDrop. setMatk(10);//魔法力
toDrop. setWdef(0);//物理防御
toDrop. setMdef(0);//魔法防御
toDrop. setAcc(0);//命中
toDrop. setAvoid(0);//回避
toDrop. setHands(15);//手技
toDrop. setSpeed(0);//移动
toDrop. setJump(0);//跳跃
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
cm.sendOk("兑换#v1113013#成功！");
cm.dispose();
    }
}
