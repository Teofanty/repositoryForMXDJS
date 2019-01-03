importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);


var status = 0;
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";

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

	    var textz = "麻吉美食奥义:  天下粪粪是一家!\r\n给我#b#v4000377##z4000377##k,交换礼物,活动时间有限,抓紧时间吧, 过了活动时间粪土就真的成粪土了\r\n";

		textz += "#r#L0##v4000378#:15  (兑换#v5570000#)#l     #L31##v4000377#:300 (兑换#v4031921#)#l\r\n";
		
		textz += "#r#L32##v4000377#:300 (兑换#v5041000#)#l     #L33##v4000377#:150 (兑换#v5281000#)#l\r\n";
		
		textz += "#r#L34##v4000377#:300 (兑换#v2100004#)#l     #L35##v4000377#:150 (兑换#v5076000#)#l\r\n";
		
		textz += "#r#L1##v4000377#:400 (兑换#v1003049#)#l     #L16##v4000377#:600 (兑换#v1702202#)#l\r\n";
		
		textz += "#r#L2##v4000377#:300 (兑换#v1002409#)#l     #L17##v4000377#:600 (兑换#v1702223#)#l\r\n";
		
		textz += "#r#L3##v4000377#:300 (兑换#v1002447#)#l     #L18##v4000377#:800 (兑换#v1702217#)#l\r\n";
		
		textz += "#r#L4##v4000377#:300 (兑换#v1002536#)#l     #L19##v4000377#:800 (兑换#v1702340#)#l\r\n";
		
		textz += "#r#L5##v4000377#:300 (兑换#v1002848#)#l     #L20##v4000377#:800 (兑换#v1702506#)#l\r\n";
		
		textz += "#r#L6##v4000377#:250 (兑换#v1042125#)#l     #L21##v4000377#:600 (兑换#v1052577#)#l\r\n";
		
		textz += "#r#L7##v4000377#:250 (兑换#v1042176#)#l     #L22##v4000377#:600 (兑换#v1052448#)#l\r\n";
		
		textz += "#r#L8##v4000377#:250 (兑换#v1042063#)#l     #L23##v4000377#:450 (兑换#v1052002#)#l\r\n";
		
		textz += "#r#L9##v4000377#:300 (兑换#v1042117#)#l     #L24##v4000377#:500 (兑换#v1052078#)#l\r\n";
		
		textz += "#r#L10##v4000377#:350 (兑换#v1042277#)#l     #L25##v4000377#:300 (兑换#v1052025#)#l\r\n";
		
		textz += "#r#L11##v4000377#:300 (兑换#v1062155#)#l     #L26##v4000377#:300 (兑换#v1072384#)#l\r\n";
		
		textz += "#r#L12##v4000377#:300 (兑换#v1062124#)#l     #L27##v4000377#:250 (兑换#v1072235#)#l\r\n";
		
		textz += "#r#L13##v4000377#:200 (兑换#v1062055#)#l     #L28##v4000377#:250 (兑换#v1072234#)#l\r\n";
		
		textz += "#r#L14##v4000377#:200 (兑换#v1062010#)#l     #L29##v4000377#:250 (兑换#v1072186#)#l\r\n";
		
		textz += "#r#L15##v4000377#:200 (兑换#v1062040#)#l     #L30##v4000377#:250 (兑换#v1072258#)#l\r\n";
		

	

		cm.sendSimple (textz);  

	}else if (status == 1) {

	if (selection == 0) {
		if (cm.haveItem(4000378, 15) &&cm.getMeso() >=0) {
                cm.gainItem(4000378,-15);
				cm.gainItem(5570000, 1);
                cm.sendOk("兑换成功！");
                cm.dispose();
            } else {
                cm.sendOk("#v4000378##z4000378#钱难赚,屎难吃!  不够啊!#k");
                cm.dispose();
		}
	} else if (selection == 1) {
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,400)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
			var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1003049); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1003049)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-400);
		cm.sendOk("兑换成功!")
		cm.dispose();
			}

	}else if (selection == 2){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,300)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else{
			var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1002409); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1002409)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		//toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-300);
		cm.sendOk("兑换成功!")
		cm.dispose();
			}

	}else if (selection == 3){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,300)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else{
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1002447); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1002447)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		//toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-300);
		cm.sendOk("兑换成功!")
		cm.dispose();
			}

	}else if (selection == 4){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,300)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else{
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1002536); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1002536)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		//toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-300);
		cm.sendOk("兑换成功!")
		cm.dispose();
			}

	}else if (selection == 5){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,300)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else{
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1002848); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1002848)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		//toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-300);
		cm.sendOk("兑换成功!")
		cm.dispose();
			}

	}else if (selection == 6){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,250)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else{
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1042125); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1042125)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		//toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-250);
		cm.sendOk("兑换成功!")
		cm.dispose();
			}
	}else if (selection == 7){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,250)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1042176); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1042176)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		//toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-250);
		cm.sendOk("兑换成功!")
		cm.dispose();
			}
   }else if (selection == 8){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,250)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1042063); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1042063)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-250);
		cm.sendOk("兑换成功!")
		cm.dispose();
	       }
	 }else if (selection == 9){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,300)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1042117); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1042117)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		//toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-300);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
	 }else if (selection == 10){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,350)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1042277); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1042277)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-350);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 11){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,300)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1062155); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1062155)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-300);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 12){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,300)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1062124); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1062124)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-300);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 13){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,200)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1062055); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1062055)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-200);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 14){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,200)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1062010); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1062010)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-200);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 15){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,200)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1062040); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1062040)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-200);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 16){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,600)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1702202); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1702202)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-600);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 17){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,600)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1702223); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1702223)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-600);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 18){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,800)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1702217); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1702217)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-800);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 19){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,800)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1702340); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1702340)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-800);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 20){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,800)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1702506); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1702506)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-800);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 21){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,600)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1052577); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1052577)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-600);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 22){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,600)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1052448); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1052448)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-600);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 23){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,450)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1052002); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1052002)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-450);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 24){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,500)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1052078); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1052078)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-500);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 25){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,300)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1052025); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1052025)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-300);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 26){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,300)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1072384); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1072384)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-300);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 27){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,250)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1072235); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1072235)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-250);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 28){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,250)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1072234); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1072234)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-250);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 29){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,250)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1072186); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1072186)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-250);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 	 }else if (selection == 30){
		if (cm.getMeso() < 0) {
 			cm.sendOk("请带来#r5000W#k金币#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,250)) {
 			cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b请保证装备栏位至少有3个空格,否则无法兑换.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1072258); //获得装备的类形/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1072258)).copy(); // 生成一个Equip类
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //时间
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
		cm.gainItem(4000377,-250);
		cm.sendOk("兑换成功!")
		cm.dispose();
         }
		 }else if (selection == 31){
		if (cm.haveItem(4000377, 500) &&cm.getMeso() >=0) {
                cm.gainItem(4000377,-500);
				cm.gainItem(4031921, 1);
                cm.sendOk("兑换成功！");
                cm.dispose();
            } else {
                cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
                cm.dispose();
         }
		 }else if (selection == 32){
		if (cm.haveItem(4000377, 300) &&cm.getMeso() >=0) {
                cm.gainItem(4000377,-300);
				cm.gainItem(5041000, 1);
                cm.sendOk("兑换成功！");
                cm.dispose();
            } else {
                cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
                cm.dispose();
         }
		 }else if (selection == 33){
		if (cm.haveItem(4000377, 150) &&cm.getMeso() >=0) {
                cm.gainItem(4000377,-150);
				cm.gainItem(5281000, 1);
                cm.sendOk("兑换成功！");
                cm.dispose();
            } else {
                cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
                cm.dispose();
         }
		 }else if (selection == 34){
		if (cm.haveItem(4000377, 300) &&cm.getMeso() >=0) {
                cm.gainItem(4000377,-300);
				cm.gainItem(2100004, 1);
                cm.sendOk("兑换成功！");
                cm.dispose();
            } else {
                cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
                cm.dispose();
         }
		 }else if (selection == 35){
		if (cm.haveItem(4000377, 150) &&cm.getMeso() >=0) {
                cm.gainItem(4000377,-150);
				cm.gainItem(5076000, 1);
                cm.sendOk("兑换成功！");
                cm.dispose();
            } else {
                cm.sendOk("#v4000377##z4000377#钱难赚,屎难吃!  不够啊!#k");
                cm.dispose();
         }
}
}
}
}
