/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);

 function start() {
	if(cm.getPlayer().getOneTimeLog("lixinlibao") >= 1){
			//cm.sendOk("你已经领取过新手入驻礼包！");
            cm.dispose();
	}else{
		cm.gainItem(1003803, 1);//物品
		cm.gainItem(1052595, 1);//物品
        cm.gainItem(1003802, 1);//物品
		cm.gainItem(1052594, 1);//物品
		cm.gainItem(5030001, 1);//雇佣
		var ii = MapleItemInformationProvider.getInstance();		                
				var type = ii.getInventoryType(1142477); //获得装备的类形
				var toDrop = ii.randomizeStats(ii.getEquipById(1142477)).copy(); // 生成一个Equip类
				//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
				//toDrop.setExpiration(temptime); 
				toDrop. setFlag(1);//上锁
				toDrop. setStr(1);//给力量
				toDrop. setDex(1);//给敏捷 
				toDrop. setInt(1);//给智力
				toDrop. setLuk(1);//给运气
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
		//cm.gainPet(5000006,240,"新人福利");
		cm.gainD(3000);//抵用
		cm.gainMeso(100000);//多少金币
		//cm.sendOk("领取成功！");
		cm.getPlayer().setOneTimeLog("lixinlibao");
		cm.worldMessage(6,"欢迎新岛友：["+cm.getName()+"]来到梦之岛冒险岛，让我们荡起秋千!!");
		cm.dispose();
	}}