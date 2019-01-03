var status = -1;
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
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.removeAll(4001117);
	cm.removeAll(4001120);
	cm.removeAll(4001121);
	cm.removeAll(4001122);
	cm.sendSimple("#b#L0#我要离开这里了#l\r\n#L1#兑换海盗船长帽#l#k");
    } else if (status == 1) {
	if (selection == 0) {
	    cm.warp(251010404,0);
	} else {
	    var cmp = cm.getPlayer().getOneInfo(1204, "cmp");
	    var have0 = cm.getPlayer().getOneInfo(1204, "have0");
	    var have1 = cm.getPlayer().getOneInfo(1204, "have1");
	    var have2 = cm.getPlayer().getOneInfo(1204, "have2");
	    var have3 = cm.getPlayer().getOneInfo(1204, "have3");
	    if (cmp == null) {
			cm.sendOk("30次海盗副本 = #t1002571#\r\n80次海盗副本 = #t1002572#\r\n200次海盗副本 = #t1002573#\r\n350场海盗副本 = #t1002574#");
	    } else {
		var cmp_i = parseInt(cmp);
		var have0_i = parseInt(have0);
		var have1_i = parseInt(have1);
		var have2_i = parseInt(have2);
		var have3_i = parseInt(have3);
		if (have3_i > 0) {
		    if (cm.canHold(1002574,1)) {
		    	cm.gainItem(1002574,1);
			cm.sendOk("我已经给你帽子了。");
		    } else {
			cm.sendOk("我已经给你帽子了但如果你想要其它的，请腾出装备栏空间。");
		    }
		} else if (have2_i > 0) {
		    if (cmp_i >= 350) {	
			if (cm.canHold(1002574,1)) {
var ii = MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1002574); //获得装备的类形
var toDrop = ii.randomizeStats(ii.getEquipById(1002574)).copy(); // 生成一个Equip类
//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
//toDrop.setExpiration(temptime); 
//toDrop. setFlag(1);//上锁
toDrop. setStr(15);//给力量
toDrop. setDex(15);//给敏捷 
toDrop. setInt(15);//给智力
toDrop. setLuk(15);//给运气
toDrop. setHp(90);//给HP
toDrop. setMp(90);//给MP
toDrop. setWatk(0);//攻击
toDrop. setMatk(0);//魔法力
toDrop. setWdef(90);//物理防御
toDrop. setMdef(90);//魔法防御
toDrop. setAcc(0);//命中
toDrop. setAvoid(0);//回避
toDrop. setHands(0);//手技
toDrop. setSpeed(7);//移动
toDrop. setJump(4);//跳跃
cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
			    cm.sendOk("我已经给你帽子了。");
		    	} else {
			    cm.sendOk("请腾出装备栏空间。");
		        } 
		    } else {
			cm.sendOk("你需要挑战350次,目前总共 : " + cmp_i);
		    }
		} else if (have1_i > 0) {
		    if (cmp_i >= 200) {	
			if (cm.canHold(1002573,1)) {
		    	    cm.gainItem(1002573,1);//属性10没G  7次升级次数不可交易
			    cm.sendOk("我已经给你帽子了。");
		    	} else {
			    cm.sendOk("请腾出装备栏空间。");
		        } 
		    } else {
			cm.sendOk("你需要挑战200次,目前总共 : " + cmp_i);
		    }
		} else if (have0_i > 0) {
		    if (cmp_i >= 80) {	
			if (cm.canHold(1002572,1)) {
		    	    cm.gainItem(1002572,1);//属性10没G  3次升级次数不可交易
			    cm.sendOk("我已经给你帽子了。");
		    	} else {
			    cm.sendOk("请腾出装备栏空间。");
		        } 
		    } else {
			cm.sendOk("你需要挑战80次,目前总共 : " + cmp_i);
		    }
		} else {
		    if (cmp_i >= 30) {	
			if (cm.canHold(1002571,1)) {
		    	    cm.gainItem(1002571,1);//属性6没G  3次升级次数不可交易
			    cm.sendOk("我已经给你帽子了。");
		    	} else {
			    cm.sendOk("请腾出装备栏空间。");
		        } 
		    } else {
			cm.sendOk("你需要挑战30次,目前总共 : " + cmp_i);
		    }
		}
	    }
	}
	cm.dispose();
    }
}