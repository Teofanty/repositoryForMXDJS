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
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("欢迎光临！");
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
            for (i = 0; i < 60; i++) {
                text += "";
            }
            text +="大家好,我是合成NPC\r\n#r60%#k的概率强化一次戒指，全属性+1，攻击力+1，HP+5，MP+5\r\n#r10%#k的概率强化一次戒指，全属性+2，攻击力+2，hp+15,mp+15\r\n注:戒指最多强化5次\r\n";
            text +="#L1##d100个#v4020009##z4020009#兑换1个#v1113072#4维属性+1 攻/魔+1 HP/MP+15#k#l\r\n";
            text +="#L2##d50个#v4020009##z4020009#60%概率强化戒指#k#l\r\n";
			text +="#L3##d75个#v4020009##z4020009#10%概率强化戒指#k#l\r\n";
            /*text += "#L3##d全属性 +10 HP/MP +300 #v1112677##k#l\r\n";
            text += "#L4##d全属性 +15 HP/MP +400 #v1112678##k#l\r\n";
            text += "#L5##d全属性 +20 HP/MP +500 #v1112679##k#l\r\n";
            text += "#L6##d全属性 +25 HP/MP+600 #v1113178##k#l\r\n";
			text += "#L7##d全属性 +30 HP/MP+700 #v1113037##k#l\r\n";*/
            cm.sendSimple(text);
        } else if (selection == 1) {
         if (cm.haveItem(1113072, 1) || cm.getPlayer().hasEquipped(1113072)) {//判断物品
		    cm.sendOk("#b1个角色只能拥有一个#v1113072#.");
		    cm.dispose();
		} else if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		    cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法抽奖.");
		    cm.dispose();
		} else if (!cm.haveItem(4020009, 100)) {
			cm.sendOk("#b你没有100个#v4020009##z4020009#.");
		    cm.dispose();
			} else {
		cm.gainItem(4020009,-100);
		var ii = MapleItemInformationProvider.getInstance();		                
        var type = ii.getInventoryType(1113072); //获得装备的类形
        var toDrop = ii.randomizeStats(ii.getEquipById(1113072)).copy(); // 生成一个Equip类
		//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
		//toDrop.setExpiration(temptime); 
		//toDrop. setFlag(1);//上锁
		toDrop. setStr(1);//给力量
		toDrop. setDex(1);//给敏捷 
		toDrop. setInt(1);//给智力
		toDrop. setLuk(1);//给运气
		toDrop. setHp(15);//给HP
		toDrop. setMp(15);//给MP
		toDrop. setMatk(1);//攻击
		toDrop. setWatk(1);//魔法力
		toDrop. setWdef(0);//物理防御
		toDrop. setMdef(0);//魔法防御
	    toDrop. setAcc(0);//命中
		toDrop. setAvoid(0);//回避
		toDrop. setHands(0);//手技
		toDrop. setSpeed(0);//移动
		toDrop. setJump(0);//跳跃
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
                cm.sendOk("合成#v1113072#成功！");
                cm.dispose();
				}
        } else if (selection == 2) {
            if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		    cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法抽奖.");
		    cm.dispose();
		} else if (cm.haveItem(1113072, 1)&& cm.haveItem(4011004, 3) && cm.haveItem(4021007, 3) && cm.haveItem(4011006, 3) && cm.haveItem(4021005, 3) && cm.haveItem(4021002, 3) && cm.haveItem(4005000, 3) && cm.haveItem(4005001, 3) && cm.haveItem(4005002, 3) && cm.haveItem(4005003, 3) && cm.haveItem(4011004, 3) && cm.haveItem(4000029, 100) && cm.haveItem(4001126, 1000) && cm.haveItem(4002000, 30) && cm.haveItem(4170005, 10) && cm.haveItem(4001158, 15) && cm.getMeso() >=5000000) {
                cm.gainItem(1113072,-1);
				cm.gainItem(4011004,-3);
                cm.gainItem(4021007,-3);
				cm.gainItem(4011006,-3);
				cm.gainItem(4021005,-3);
				cm.gainItem(4021002,-3);
				cm.gainItem(4005000,-3);
				cm.gainItem(4005001,-3);
				cm.gainItem(4005002,-3);
				cm.gainItem(4005003,-3);
				cm.gainItem(4005004,-3);
				cm.gainItem(4000029,-100);
				cm.gainItem(4001126,-1000);
				cm.gainItem(4002000,-30);
				cm.gainItem(4170005,-10);
				cm.gainItem(4001158,-15);
                cm.gainMeso(-5000000);
		var ii = MapleItemInformationProvider.getInstance();		                
        var type = ii.getInventoryType(1112793); //获得装备的类形
        var toDrop = ii.randomizeStats(ii.getEquipById(1112793)).copy(); // 生成一个Equip类
		//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
		//toDrop.setExpiration(temptime); 
		toDrop. setFlag(1);//上锁
		toDrop. setStr(5);//给力量
		toDrop. setDex(5);//给敏捷 
		toDrop. setInt(5);//给智力
		toDrop. setLuk(2);//给运气
		toDrop. setHp(200);//给HP
		toDrop. setMp(200);//给MP
		toDrop. setMatk(5);//攻击
		toDrop. setWatk(5);//魔法力
		toDrop. setWdef(5);//物理防御
		toDrop. setMdef(5);//魔法防御
		toDrop. setAcc(5);//命中
		toDrop. setAvoid(5);//回避
		toDrop. setHands(5);//手技
		toDrop. setSpeed(5);//移动
		toDrop. setJump(5);//跳跃
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
                cm.sendOk("合成#v1112793#成功！");
                cm.dispose();
            } else {
                cm.sendOk("稍后功能还在开发中");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		    cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法抽奖.");
		    cm.dispose();
		} else if (cm.haveItem(1112793, 1) && cm.haveItem(4011004, 5) && cm.haveItem(4021007, 5) && cm.haveItem(4011006, 5) && cm.haveItem(4021005, 5) && cm.haveItem(4021002, 5) && cm.haveItem(4251200, 1) && cm.haveItem(4000040, 20) && cm.haveItem(4000176, 20) && cm.haveItem(4000027, 100) && cm.haveItem(4000036, 100) && cm.haveItem(4001126, 1500) && cm.haveItem(4002000, 60) && cm.haveItem(4170005, 15) && cm.haveItem(4001158, 20) && cm.getMeso() >=10000000) {
                cm.gainItem(1112793,-1);
				cm.gainItem(4011004,-5);
                cm.gainItem(4021007,-5);
				cm.gainItem(4011006,-5);
				cm.gainItem(4021005,-5);
				cm.gainItem(4021002,-5);
				cm.gainItem(4251200,-1);
				cm.gainItem(4000040,-20);
				cm.gainItem(4000176,-20);
				cm.gainItem(4000027,-100);
				cm.gainItem(4000036,-100);
				cm.gainItem(4001126,-1500);
				cm.gainItem(4002000,-60);
				cm.gainItem(4170005,-15);
				cm.gainItem(4001158,-20);
                cm.gainMeso(-10000000);
		var ii = MapleItemInformationProvider.getInstance();		                
        var type = ii.getInventoryType(1112677); //获得装备的类形
        var toDrop = ii.randomizeStats(ii.getEquipById(1112677)).copy(); // 生成一个Equip类
		//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
		//toDrop.setExpiration(temptime); 
		toDrop. setFlag(1);//上锁
		toDrop. setStr(10);//给力量
		toDrop. setDex(10);//给敏捷 
		toDrop. setInt(10);//给智力
		toDrop. setLuk(2);//给运气
		toDrop. setHp(300);//给HP
		toDrop. setMp(300);//给MP
		toDrop. setMatk(10);//攻击
		toDrop. setWatk(10);//魔法力
		toDrop. setWdef(10);//物理防御
		toDrop. setMdef(10);//魔法防御
		toDrop. setAcc(10);//命中
		toDrop. setAvoid(10);//回避
		toDrop. setHands(10);//手技
		toDrop. setSpeed(10);//移动
		toDrop. setJump(10);//跳跃
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
                cm.sendOk("合成#v1112677#成功！");
                cm.dispose();
            } else {
                cm.sendOk("稍后功能还在开发中");
				cm.dispose();
            }
        } else if (selection == 4) {
            if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		    cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法抽奖.");
		    cm.dispose();
		} else if (cm.haveItem(1112677, 1) && cm.haveItem(4011004, 7) && cm.haveItem(4021007, 7) && cm.haveItem(4011006, 7) && cm.haveItem(4021005, 7) && cm.haveItem(4021002, 7) && cm.haveItem(4251201, 1) && cm.haveItem(4001111, 10) && cm.haveItem(4000152, 10) && cm.haveItem(4000074, 100) && cm.haveItem(4000057, 100) && cm.haveItem(4001126, 2000) && cm.haveItem(4002000, 80) && cm.haveItem(4170005, 20) && cm.haveItem(4001158, 3) && cm.haveItem(4001158, 25) && cm.getMeso() >=20000000) {
                cm.gainItem(1112677,-1);
				cm.gainItem(4011004,-7);
                cm.gainItem(4021007,-7);
				cm.gainItem(4011006,-7);
				cm.gainItem(4021005,-7);
				cm.gainItem(4021002,-7);
				cm.gainItem(4251201,-1);
				cm.gainItem(4001111,-10);
				cm.gainItem(4000152,-10);
				cm.gainItem(4000074,-100);
				cm.gainItem(4000057,-100);
				cm.gainItem(4001126,-2000);
				cm.gainItem(4002000,-80);
				cm.gainItem(4170005,-20);
				cm.gainItem(4001158,-25);
                cm.gainMeso(-20000000);
		var ii = MapleItemInformationProvider.getInstance();		                
        var type = ii.getInventoryType(1112678); //获得装备的类形
        var toDrop = ii.randomizeStats(ii.getEquipById(1112678)).copy(); // 生成一个Equip类
		//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1500); //时间
		//toDrop.setExpiration(temptime); 
		toDrop. setFlag(1);//上锁
		toDrop. setStr(15);//给力量
		toDrop. setDex(15);//给敏捷 
		toDrop. setInt(15);//给智力
		toDrop. setLuk(2);//给运气
		toDrop. setHp(400);//给HP
		toDrop. setMp(400);//给MP
		toDrop. setMatk(15);//攻击
		toDrop. setWatk(15);//魔法力
		toDrop. setWdef(15);//物理防御
		toDrop. setMdef(15);//魔法防御
		toDrop. setAcc(15);//命中
		toDrop. setAvoid(15);//回避
		toDrop. setHands(15);//手技
		toDrop. setSpeed(15);//移动
		toDrop. setJump(15);//跳跃
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
                cm.sendOk("合成#v1112678#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v1112677#*1个 #v4011004#7个  #v4021007#7个  #v4011006#*7个  #v4021005#*7个  #v4021002#*7个  #v4251201#*1个 #v4001111#*10个  #v4000152#*10个   #v4000074#*100个   #v4000057#*100个  #v4001126#*2000个 #v4002000#*80个 #v4170005#*20个 #v4001158#*25个 2000万金币");
                cm.dispose();
            }
        } else if (selection == 5) {
            if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		    cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法抽奖.");
		    cm.dispose();
		} else if (cm.haveItem(1112678, 1) && cm.haveItem(4011004, 10) && cm.haveItem(4021007, 10) && cm.haveItem(4011006, 10) && cm.haveItem(4021005, 10) && cm.haveItem(4021002, 10) && cm.haveItem(4251202, 1) && cm.haveItem(4001083, 1) && cm.haveItem(4001084, 3) && cm.haveItem(4001085, 3) && cm.haveItem(4000175, 3) && cm.haveItem(4001126, 2500) && cm.haveItem(4002000, 80) && cm.haveItem(4170005, 25) && cm.haveItem(4001158, 5) && cm.haveItem(4001158, 30) && cm.getMeso() >=30000000) {
                cm.gainItem(1112678,-1);
				cm.gainItem(4011004,-10);
                cm.gainItem(4021007,-10);
				cm.gainItem(4011006,-10);
				cm.gainItem(4021005,-10);
				cm.gainItem(4021002,-10);
				cm.gainItem(4251202,-1);
				cm.gainItem(4001083,-1);
				cm.gainItem(4001084,-3);
				cm.gainItem(4001085,-3);
				cm.gainItem(4000175,-3);
				cm.gainItem(4001126,-2500);
				cm.gainItem(4002000,-80);
				cm.gainItem(4170005,-25);
				cm.gainItem(4001158,-30);
                cm.gainMeso(-30000000);
		var ii = MapleItemInformationProvider.getInstance();		                
        var type = ii.getInventoryType(1112679); //获得装备的类形
        var toDrop = ii.randomizeStats(ii.getEquipById(1112679)).copy(); // 生成一个Equip类
		//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 2000); //时间
		//toDrop.setExpiration(temptime); 
		toDrop. setFlag(1);//上锁
		toDrop. setStr(20);//给力量
		toDrop. setDex(20);//给敏捷 
		toDrop. setInt(20);//给智力
		toDrop. setLuk(2);//给运气
		toDrop. setHp(500);//给HP
		toDrop. setMp(500);//给MP
		toDrop. setMatk(20);//攻击
		toDrop. setWatk(20);//魔法力
		toDrop. setWdef(20);//物理防御
		toDrop. setMdef(20);//魔法防御
		toDrop. setAcc(20);//命中
		toDrop. setAvoid(20);//回避
		toDrop. setHands(20);//手技
		toDrop. setSpeed(20);//移动
		toDrop. setJump(20);//跳跃
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
                cm.sendOk("合成#v1112679#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v1112678#*1个 #v4011004#*10个 #v4021007#*10个 #v4011006#*10个 #v4021005#*10个 #v4021002#*10个 #v4251202#*1个 #v4001083#*1个 #v4001084#*3个 #v4001085#*3个 #v4000175#*3个 #v4001126#*2500个 #v4002000#*80个 #v4170005#*25个 #v4001158#*30个 3000万金币");
                cm.dispose();
            }
        } else if (selection == 6) {
			if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		    cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法抽奖.");
		    cm.dispose();
		} else if (cm.haveItem(1112679, 3) && cm.haveItem(4011004, 50) && cm.haveItem(4021007, 50) && cm.haveItem(4011006, 50) && cm.haveItem(4021005, 50) && cm.haveItem(4021002, 50) && cm.haveItem(4251202, 5) && cm.haveItem(4001083, 5) && cm.haveItem(4001084, 15) && cm.haveItem(4001085, 15) && cm.haveItem(4000175, 15) && cm.haveItem(4001126, 12500) && cm.haveItem(4002000, 80) && cm.haveItem(4170005, 75) && cm.haveItem(4001158, 50) && cm.getMeso() >=50000000) {
                cm.gainItem(1112679,-3);
				cm.gainItem(4011004,-50);
                cm.gainItem(4021007,-50);
				cm.gainItem(4011006,-50);
				cm.gainItem(4021005,-50);
				cm.gainItem(4021002,-50);
				cm.gainItem(4251202,-5);
				cm.gainItem(4001083,-5);
				cm.gainItem(4001084,-15);
				cm.gainItem(4001085,-15);
				cm.gainItem(4000175,-15);
				cm.gainItem(4001126,-12500);
				cm.gainItem(4002000,-80);
				cm.gainItem(4170005,-100);
				cm.gainItem(4001158,-50);
                cm.gainMeso(-50000000);
				var ii = MapleItemInformationProvider.getInstance();		                
        var type = ii.getInventoryType(1113178); //获得装备的类形
        var toDrop = ii.randomizeStats(ii.getEquipById(1113178)).copy(); // 生成一个Equip类
		//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 2500); //时间
		//toDrop.setExpiration(temptime); 
		toDrop. setFlag(1);//上锁
		toDrop. setStr(25);//给力量
		toDrop. setDex(25);//给敏捷 
		toDrop. setInt(25);//给智力
		toDrop. setLuk(2);//给运气
		toDrop. setHp(600);//给HP
		toDrop. setMp(600);//给MP
		toDrop. setMatk(25);//攻击
		toDrop. setWatk(25);//魔法力
		toDrop. setWdef(25);//物理防御
		toDrop. setMdef(25);//魔法防御
		toDrop. setAcc(25);//命中
		toDrop. setAvoid(25);//回避
		toDrop. setHands(25);//手技
		toDrop. setSpeed(25);//移动
		toDrop. setJump(25);//跳跃
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包       cm.sendOk("合成#v1113178#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v1112679#*3个 #v4011004#*50个  #v4021007#*50个   #v4011006#*50个   #v4021005#*50个  #v4021002#*50个   #v4251202#*5个 #v4001083#*5个 #v4001084#*15个 #v4001085#*15个 #v4000175#*15个  #v4001126#*12500个  #v4002000#*80个  #v4170005#*100个 #v4001158#*50个 5000万金币");
                cm.dispose();
            }
			        } else if (selection == 7) {
            if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
		    cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法抽奖.");
		    cm.dispose();
		} else if (cm.haveItem(1112679, 3) && cm.haveItem(4011004, 50) && cm.haveItem(4021007, 50) && cm.haveItem(4011006, 50) && cm.haveItem(4021005, 50) && cm.haveItem(4021002, 50) && cm.haveItem(4251202, 5) && cm.haveItem(4001083, 5) && cm.haveItem(4001084, 15) && cm.haveItem(4001085, 15) && cm.haveItem(4000175, 15) && cm.haveItem(4001126, 12500) && cm.haveItem(4002000, 80) && cm.haveItem(4170005, 75) && cm.haveItem(4001158, 50) && cm.getMeso() >=50000000) {
                cm.gainItem(1112679,-3);
				cm.gainItem(4011004,-50);
                cm.gainItem(4021007,-50);
				cm.gainItem(4011006,-50);
				cm.gainItem(4021005,-50);
				cm.gainItem(4021002,-50);
				cm.gainItem(4251202,-5);
				cm.gainItem(4001083,-5);
				cm.gainItem(4001084,-15);
				cm.gainItem(4001085,-15);
				cm.gainItem(4000175,-15);
				cm.gainItem(4001126,-12500);
				cm.gainItem(4002000,-80);
				cm.gainItem(4170005,-100);
				cm.gainItem(4001158,-50);
                cm.gainMeso(-50000000);
		var ii = MapleItemInformationProvider.getInstance();		                
        var type = ii.getInventoryType(1113037); //获得装备的类形
        var toDrop = ii.randomizeStats(ii.getEquipById(1113037)).copy(); // 生成一个Equip类
		//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 3000); //时间
		//toDrop.setExpiration(temptime); 
		toDrop. setFlag(1);//上锁
		toDrop. setStr(30);//给力量
		toDrop. setDex(30);//给敏捷 
		toDrop. setInt(30);//给智力
		toDrop. setLuk(2);//给运气
		toDrop. setHp(700);//给HP
		toDrop. setMp(700);//给MP
		toDrop. setMatk(30);//攻击
		toDrop. setWatk(30);//魔法力
		toDrop. setWdef(30);//物理防御
		toDrop. setMdef(30);//魔法防御
		toDrop. setAcc(30);//命中
		toDrop. setAvoid(30);//回避
		toDrop. setHands(30);//手技
		toDrop. setSpeed(30);//移动
		toDrop. setJump(30);//跳跃
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
        
                cm.sendOk("合成#v1113037#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足！#v1112679#*3个 #v4011004#*50个 #v4021007#*50个 #v4011006#*50个 #v4021005#*50个 #v4021002#*50个 #v4251202#*5个  #v4001083#*5个   #v4001084#*15个   #v4001085#*15个   #v4000175#*15个  #v4001126#*12500个  #v4002000#*80个  #v4170005#*100个  #v4001158#*50个 5000万金币");
                cm.dispose();
            }
			}
		}
    }


