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

	    var textz = "�鼪��ʳ����:  ���·����һ��!\r\n����#b#v4000377##z4000377##k,��������,�ʱ������,ץ��ʱ���, ���˻ʱ���������ĳɷ�����\r\n";

		textz += "#r#L0##v4000378#:15  (�һ�#v5570000#)#l     #L31##v4000377#:300 (�һ�#v4031921#)#l\r\n";
		
		textz += "#r#L32##v4000377#:300 (�һ�#v5041000#)#l     #L33##v4000377#:150 (�һ�#v5281000#)#l\r\n";
		
		textz += "#r#L34##v4000377#:300 (�һ�#v2100004#)#l     #L35##v4000377#:150 (�һ�#v5076000#)#l\r\n";
		
		textz += "#r#L1##v4000377#:400 (�һ�#v1003049#)#l     #L16##v4000377#:600 (�һ�#v1702202#)#l\r\n";
		
		textz += "#r#L2##v4000377#:300 (�һ�#v1002409#)#l     #L17##v4000377#:600 (�һ�#v1702223#)#l\r\n";
		
		textz += "#r#L3##v4000377#:300 (�һ�#v1002447#)#l     #L18##v4000377#:800 (�һ�#v1702217#)#l\r\n";
		
		textz += "#r#L4##v4000377#:300 (�һ�#v1002536#)#l     #L19##v4000377#:800 (�һ�#v1702340#)#l\r\n";
		
		textz += "#r#L5##v4000377#:300 (�һ�#v1002848#)#l     #L20##v4000377#:800 (�һ�#v1702506#)#l\r\n";
		
		textz += "#r#L6##v4000377#:250 (�һ�#v1042125#)#l     #L21##v4000377#:600 (�һ�#v1052577#)#l\r\n";
		
		textz += "#r#L7##v4000377#:250 (�һ�#v1042176#)#l     #L22##v4000377#:600 (�һ�#v1052448#)#l\r\n";
		
		textz += "#r#L8##v4000377#:250 (�һ�#v1042063#)#l     #L23##v4000377#:450 (�һ�#v1052002#)#l\r\n";
		
		textz += "#r#L9##v4000377#:300 (�һ�#v1042117#)#l     #L24##v4000377#:500 (�һ�#v1052078#)#l\r\n";
		
		textz += "#r#L10##v4000377#:350 (�һ�#v1042277#)#l     #L25##v4000377#:300 (�һ�#v1052025#)#l\r\n";
		
		textz += "#r#L11##v4000377#:300 (�һ�#v1062155#)#l     #L26##v4000377#:300 (�һ�#v1072384#)#l\r\n";
		
		textz += "#r#L12##v4000377#:300 (�һ�#v1062124#)#l     #L27##v4000377#:250 (�һ�#v1072235#)#l\r\n";
		
		textz += "#r#L13##v4000377#:200 (�һ�#v1062055#)#l     #L28##v4000377#:250 (�һ�#v1072234#)#l\r\n";
		
		textz += "#r#L14##v4000377#:200 (�һ�#v1062010#)#l     #L29##v4000377#:250 (�һ�#v1072186#)#l\r\n";
		
		textz += "#r#L15##v4000377#:200 (�һ�#v1062040#)#l     #L30##v4000377#:250 (�һ�#v1072258#)#l\r\n";
		

	

		cm.sendSimple (textz);  

	}else if (status == 1) {

	if (selection == 0) {
		if (cm.haveItem(4000378, 15) &&cm.getMeso() >=0) {
                cm.gainItem(4000378,-15);
				cm.gainItem(5570000, 1);
                cm.sendOk("�һ��ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("#v4000378##z4000378#Ǯ��׬,ʺ�ѳ�!  ������!#k");
                cm.dispose();
		}
	} else if (selection == 1) {
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,400)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
			var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1003049); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1003049)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-400);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
			}

	}else if (selection == 2){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,300)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
			var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1002409); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1002409)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		//toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-300);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
			}

	}else if (selection == 3){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,300)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1002447); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1002447)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		//toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-300);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
			}

	}else if (selection == 4){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,300)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1002536); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1002536)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		//toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-300);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
			}

	}else if (selection == 5){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,300)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1002848); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1002848)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		//toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-300);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
			}

	}else if (selection == 6){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,250)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1042125); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1042125)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		//toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-250);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
			}
	}else if (selection == 7){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,250)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1042176); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1042176)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		//toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-250);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
			}
   }else if (selection == 8){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,250)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1042063); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1042063)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-250);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
	       }
	 }else if (selection == 9){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,300)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1042117); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1042117)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		//toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-300);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
	 }else if (selection == 10){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,350)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1042277); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1042277)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-350);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 11){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,300)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1062155); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1062155)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-300);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 12){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,300)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1062124); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1062124)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-300);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 13){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,200)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1062055); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1062055)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-200);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 14){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,200)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1062010); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1062010)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-200);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 15){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,200)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1062040); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1062040)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-200);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 16){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,600)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1702202); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1702202)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-600);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 17){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,600)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1702223); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1702223)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-600);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 18){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,800)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1702217); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1702217)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-800);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 19){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,800)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1702340); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1702340)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-800);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 20){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,800)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1702506); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1702506)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-800);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 21){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,600)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1052577); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1052577)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-600);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 22){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,600)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1052448); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1052448)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-600);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 23){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,450)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1052002); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1052002)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-450);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 24){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,500)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1052078); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1052078)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-500);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 25){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,300)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1052025); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1052025)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-300);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 26){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,300)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1072384); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1072384)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-300);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 27){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,250)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1072235); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1072235)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-250);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 28){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,250)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1072234); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1072234)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-250);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 29){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,250)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1072186); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1072186)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-250);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 	 }else if (selection == 30){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(4000377,250)) {
 			cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1072258); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1072258)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
		cm.gainItem(4000377,-250);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
         }
		 }else if (selection == 31){
		if (cm.haveItem(4000377, 500) &&cm.getMeso() >=0) {
                cm.gainItem(4000377,-500);
				cm.gainItem(4031921, 1);
                cm.sendOk("�һ��ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
                cm.dispose();
         }
		 }else if (selection == 32){
		if (cm.haveItem(4000377, 300) &&cm.getMeso() >=0) {
                cm.gainItem(4000377,-300);
				cm.gainItem(5041000, 1);
                cm.sendOk("�һ��ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
                cm.dispose();
         }
		 }else if (selection == 33){
		if (cm.haveItem(4000377, 150) &&cm.getMeso() >=0) {
                cm.gainItem(4000377,-150);
				cm.gainItem(5281000, 1);
                cm.sendOk("�һ��ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
                cm.dispose();
         }
		 }else if (selection == 34){
		if (cm.haveItem(4000377, 300) &&cm.getMeso() >=0) {
                cm.gainItem(4000377,-300);
				cm.gainItem(2100004, 1);
                cm.sendOk("�һ��ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
                cm.dispose();
         }
		 }else if (selection == 35){
		if (cm.haveItem(4000377, 150) &&cm.getMeso() >=0) {
                cm.gainItem(4000377,-150);
				cm.gainItem(5076000, 1);
                cm.sendOk("�һ��ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("#v4000377##z4000377#Ǯ��׬,ʺ�ѳ�!  ������!#k");
                cm.dispose();
         }
}
}
}
}
