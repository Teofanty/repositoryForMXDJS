importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
var oldWeaponList = [1432038,1312031,1422028,1302059,1412026,1442045,1372032,1382036,1382045,1382046,1382047,1382048,1482013,1492013,1452044,1462039,1332050,1472051,1472113,1402037];
var newWeaponList = [1432106,1312077,1422078,1302179,1412076,1442143,1372125,1382131,1372039,1372040,1372041,1372042,1482109,1492108,1452136,1462125,1332157,1472148,1472113,1402037];

var newWeaponList1 = [1432106,1312077,1422078,1302179,1412076,1442143,1372125,1382131,1372039,1372040,1372041,1372042,1482109,1492108,1452136,1462125,1332157,1472148];
//������ٵ�ȯ�һ�����
var cost = 8000;

function start() {
    status = -1;

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var text = "";
		 text += "#e#r	\r\n\r\n			��֮��ר���������� #l#n\r\n\r\n#e#d��֮����������,Ϊ�˵ֿ���֮����ǿ����޴��ɾ�������������Ϊ����������ڴ�,��֮������ʿ��ͨ�����Լ��ɻ�ø�ǿ���ר������!!";
		 if(cm.getPlayer().getOneTimeLog("��һ�׶�ר������") == 0){//�ж����ü�¼
        text += "\r\n	#L0#ר������������һ�׶�#l \r\n\r\n �����������Ʒ��\r\n#v4000177# * 1000 �� 100W \r\n����100W����";  
		}else if ((cm.getPlayer().getOneTimeLog("��һ�׶�ר������")  == 1) && (cm.getPlayer().getOneTimeLog("�ڶ��׶�ר������")  == 0)) {
		text += "\r\n   #L1#ר�����������ڶ��׶�#l\r\n\r\n\r\n �����������Ʒ��\r\n#v4000270# * 500ؼ#v4000268# * 500ؼ#v4000269# * 500��300W\r\n����300W����";
		}else if ((cm.getPlayer().getOneTimeLog("�ڶ��׶�ר������")  == 1) && (cm.getPlayer().getOneTimeLog("�����׶�ר������")  == 0)) {
		text += "\r\n	#L2#ר���������������׶�#l \r\n\r\n\r\n �����������Ʒ��\r\n#v4000446# * 60+#v4000459# * 60+#v4000460# * 2+300W \r\n����200W����#v4000244#*3+#v4000245#*3";
		}else if ((cm.getPlayer().getOneTimeLog("�����׶�ר������")  == 1) && (cm.getPlayer().getOneTimeLog("���Ľ׶�ר������")  == 0)) {
		text += "\r\n#L3#ר�������������Ľ׶�#l\r\n\r\n\r\n�����������Ʒ��\r\n#v4000451# * 60+#v4000453# * 60+#v4000460# * 2+500W\r\n����200W����#v4000244#*3+#v4000245#*3";
		}else if ((cm.getPlayer().getOneTimeLog("���Ľ׶�ר������")  == 1) && (cm.getPlayer().getOneTimeLog("����׶�ר������")  == 0)) {
		text += "\r\n	#L4#ר��������������׶�#l\r\n\r\n\r\n�����������Ʒ��\r\n#v4000175#*1+#v4032398#*1+#v4001176#*100";   
		}else if ((cm.getPlayer().getOneTimeLog("����׶�ר������")  == 1) && (cm.getPlayer().getOneTimeLog("�����׶�ר������")  == 0)) {
			 //text += "#e#rδ�����";
		text += "\r\n#L5#ר���������������׶�#l\r\n\r\n�����������Ʒ��\r\n#v4032398#+8000��ȯ+5000����(��ȯ��������������ý�Ҷһ�Ŷ~)";
        }else if ((cm.getPlayer().getOneTimeLog("�����׶�ר������")  == 1) && (cm.getPlayer().getOneTimeLog("���߽׶�ר������")  == 0)) {
		text += "\r\n			ר�������һ�(ע�������)#l\r\n";
		for( i = 0; i< oldWeaponList.length; i++){
			text += "\r\n#L" + (10 + i) + "# #v" + oldWeaponList[i] + "# �һ� #v" + newWeaponList[i] + "# #l\r\n";
		}	
		}else if(cm.getPlayer().getOneTimeLog("���߽׶�ר������")  == 1){
		text += "\r\n			ר�������һ�#l\r\n";
		for( i = 0; i< newWeaponList1.length; i++){
			text += "\r\n#L" + (50 + i) + "# #v" + newWeaponList1[i] + "# + " + cost + " ���һ��� #v" + newWeaponList1[i] + "# #l\r\n";
		}
		}
        cm.sendOk(text); 
		}else if (status == 1){
		if (selection == 0){
           if (!cm.haveItem(4000177,1000) || (cm.getMeso() < 1000000)) {
			   cm.sendOk("������߲��㣺�����������Ʒ��\r\n#v4000177# * 1000��100W\r\n");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("��һ�׶�ר������") > 0) {
			   cm.sendOk("��������ɣ��޷��ٴ���ɡ�");
			   cm.dispose();
		   }else{
			   cm.gainItem(4000177,-1000);
			   cm.gainExp(1000000);//
			   cm.gainMeso(-1000000);
			   cm.getPlayer().setOneTimeLog("��һ�׶�ר������");
			   cm.sendOk("��һ�׶���������ɡ�")
			   cm.worldMessage(5, "��ר������������� [" + cm.getPlayer().getName() + "] ����ˡ�������һ�׶����񡱣���ҹ�ϲTA~")
			   cm.dispose();			
		   }

			
		}else if (selection == 1){
		   if ( !cm.haveItem(4000270,500) || (cm.getMeso() < 3000000 ) || !cm.haveItem(4000268,500) || !cm.haveItem(4000269,500)) {
			   cm.sendOk("������߲��㣺�����������Ʒ��\r\n#v4000270# * 500ؼ#v4000268# * 500ؼ#v4000269# * 500��200W");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("�ڶ��׶�ר������") > 0) {
			   cm.sendOk("��������ɣ��޷��ٴ���ɡ�");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("��һ�׶�ר������")  == 0) {
			   cm.sendOk("���������һ�׶ε�����");
			   cm.dispose();
		   }else{
			   cm.gainItem(4000270,-500);
			   cm.gainItem(4000268,-500);
			   cm.gainItem(4000269,-500);
			   cm.gainMeso(-3000000);
			   cm.gainExp(2000000);//
			   cm.getPlayer().setOneTimeLog("�ڶ��׶�ר������");
			   cm.sendOk("�ڶ��׶���������ɡ�")
			   cm.worldMessage(5, "��ר������������� [" + cm.getPlayer().getName() + "] ����ˡ������ڶ��׶����񡱣���ҹ�ϲTA~")
			   cm.dispose();			
			}

		}else if (selection == 2){
			if (!cm.haveItem(4000446,60) || (cm.getMeso() < 5000000 ) || !cm.haveItem(4000459,60) || !cm.haveItem(4000460,2)) {
			   cm.sendOk("������߲��㣺�����������Ʒ��\r\n#v4000446# * 60+#v4000459# * 60+#v4000460# * 2+200W ����#v4000244#*3+#v4000245#*3");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("�����׶�ר������") > 0) {
			   cm.sendOk("��������ɣ��޷��ٴ���ɡ�");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("�ڶ��׶�ר������")  == 0) {
			   cm.sendOk("���������һ�׶ε�����");
			   cm.dispose();
		   }else{
			   cm.gainItem(4000446,-60);
			   cm.gainItem(4000459,-60);
			   cm.gainItem(4000460,-2);
			   cm.gainMeso(-5000000);
			   cm.gainExp(2000000);
			   cm.gainItem(4000244,3);
			   cm.gainItem(4000245,3);
			   cm.getPlayer().setOneTimeLog("�����׶�ר������")
			   cm.sendOk("�����׶���������ɡ�")
			   cm.worldMessage(5, "��ר������������� [" + cm.getPlayer().getName() + "] ����ˡ����������׶����񡱣���ҹ�ϲTA~")
          	cm.dispose();			
			}

			
		}else if (selection == 3){
			if (!cm.haveItem(4000451,60)|| (cm.getMeso() < 5000000 ) || !cm.haveItem(4000453,60) || !cm.haveItem(4000460,2)) {
			   cm.sendOk("������߲��㣺�����������Ʒ��\r\n#v4000451# * 60+#v4000453# * 60+#v4000460# * 2+200W����#v4000244#*3+#v4000245#*3");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("���Ľ׶�ר������") > 0) {
			   cm.sendOk("��������ɣ��޷��ٴ���ɡ�");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("�����׶�ר������")  == 0) {
			   cm.sendOk("���������һ�׶ε�����");
			   cm.dispose();
		   }else{
			   cm.gainItem(4000451,-60);
			   cm.gainItem(4000453,-60);
			   cm.gainItem(4000460,-2);
			   cm.gainMeso(-5000000);
			   cm.gainItem(4000244,3);
			   cm.gainItem(4000245,3);
			   cm.gainExp(2000000);
			   cm.getPlayer().setOneTimeLog("���Ľ׶�ר������")
			   cm.sendOk("���Ľ׶���������ɡ�")
			   cm.worldMessage(5, "��ר������������� [" + cm.getPlayer().getName() + "] ����ˡ��������Ľ׶����񡱣���ҹ�ϲTA~")
           	cm.dispose();			
			}

		}else if (selection == 4){
			if (!cm.haveItem(4000175,1) || !cm.haveItem(4032398,1) || !cm.haveItem(4001176,100)) {
			   cm.sendOk("������߲��㣺�����������Ʒ��\r\n#v4000175#*1+#v4032398#*1+#v4001176#*100");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("����׶�ר������") > 0) {
			   cm.sendOk("��������ɣ��޷��ٴ���ɡ�");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("���Ľ׶�ר������")  == 0) {
			   cm.sendOk("���������һ�׶ε�����");
			   cm.dispose();
		   }else{
			   cm.gainItem(4000175,-1);
			   cm.gainItem(4032398,-1);
			   cm.gainItem(4001176,-100);
			   cm.getPlayer().setOneTimeLog("����׶�ר������")
			   cm.sendOk("����׶���������ɡ�")
			   cm.worldMessage(5, "��ר������������� [" + cm.getPlayer().getName() + "] ����ˡ���������׶����񡱣���ҹ�ϲTA~")
           	cm.dispose();			
			}

			
		}else if (selection == 5){
		   if (!cm.haveItem(4032398,1) ||!(cm.getPlayer().getCSPoints(1) >= 8000)||!(cm.getPlayer().getCSPoints(2) >= 5000)) {
			   cm.sendOk("������߲��㣺�����������Ʒ��\r\n#v4032398#+8000��ȯ+5000����(��ȯ��������������ý�Ҷһ�Ŷ~)");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("�����׶�ר������") > 0) {
			   cm.sendOk("��������ɣ��޷��ٴ���ɡ�");
			   cm.dispose();
		   }else if (cm.getPlayer().getOneTimeLog("����׶�ר������")  == 0) {
			   cm.sendOk("���������һ�׶ε�����");
			   cm.dispose();
		   }else{
			   cm.gainItem(4032398,-1);
		   cm.gainDJ(-8000);//��ȯ
		   cm.gainD(-5000);//��ȯ
		   cm.getPlayer().setOneTimeLog("�����׶�ר������")
		   cm.sendOk("�����׶���������ɡ�")
		   cm.worldMessage(5, "��ר������������� [" + cm.getPlayer().getName() + "] ����ˡ����������׶����񡱣���ҹ�ϲTA~")
           cm.dispose();			
		   }
		   
		}else if((selection >= 10) && (selection < 50)){
		   if (cm.getPlayer().getOneTimeLog("���߽׶�ר������") > 0) {
			   cm.sendOk("��������ɣ��޷��ٴ���ɡ�");
			   cm.dispose();
			   return;
		   }else if (cm.getPlayer().getOneTimeLog("�����׶�ר������")  == 0) {
			   cm.sendOk("���������һ�׶ε�����");
			   cm.dispose();
			   return;
		   }
			if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
				cm.dispose();
				return;
			}
			var index = selection - 10;
			if (!cm.haveItem(oldWeaponList[index],1)){
				cm.sendOk("û����Ӧ�������������������Ʒ��\r\n#z" + oldWeaponList[index] + "# * 1");
			   cm.dispose();
			   return;
			}
			if (index >= 18){
				if( (cm.getInventory(1).getItem(1)== null) || (cm.getInventory(1).getItem(1).getItemId() != oldWeaponList[index])){
					cm.sendOk("#b�뽫Ҫǿ����װ��#v" + oldWeaponList[index] + "#���ڵ�һ��#k");	
					cm.dispose();
					return;
				}
				intensifyEquip(index);
				cm.getPlayer().setOneTimeLog("���߽׶�ר������")
				cm.gainItem(newWeaponList1[index],-1);
				cm.sendOk("#b��ϲ��ɹ�����������������.");
				cm.dispose();
				return;
			}
			cm.gainItem(oldWeaponList[index],-1); 
			var property = getProperty(index);
			giveEquip(newWeaponList[index], ((index < 6) || (index > 11)),  property);
			cm.getPlayer().setOneTimeLog("���߽׶�ר������");
			cm.sendOk("#b��ϲ��һ��ɹ�.");
			cm.dispose();
			return;
		}else if(selection >= 50){
			if (cm.getPlayer().getCSPoints(1) < cost){
				cm.sendOk("#b��ȷ�Ͼ����㹻�ĵ�ȯ,�����޷��һ�.");
				cm.dispose();
				return;
			}
			if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
				cm.dispose();
				return;
			}
			var index = selection - 50;
			if (!cm.haveItem(newWeaponList1[index],1)){
				cm.sendOk("û����Ӧ�������������������Ʒ��\r\n#z" + newWeaponList1[index] + "# * 1");
			   cm.dispose();
			   return;
			}
			cm.gainDJ(-cost);
			cm.gainItem(newWeaponList1[index],-1);
			var property = getProperty(index);
			giveEquip(newWeaponList1[index], ((index < 6) || (index > 11)),  property);
			cm.sendOk("#b��ϲ��һ��ɹ�.");
			cm.dispose();
		}
    }}
}

function getProperty(index){
	if (index == 0){
		return 130 + getRandom(6); //125-131
	}
	if (index < 6){
		return 140 + getRandom(5);  //135-140
	}
	if(index == 6){
		return 158 + getRandom(5);  //153-158
	}
	if (index == 7){
		return 160 + getRandom(5);  //160-165
	}
	if (index == 8){
		return 155 + getRandom(5);  //155-160
	}
	if (index < 12 ){
		return 140 + getRandom(10);	//140-150
	}
	if (index < 13){
		return 100 + getRandom(8); //95-103
	}
	if (index < 14){
		return 103 + getRandom(8); //98-106
	}
	if (index == 14){
		return 130 + getRandom(5); //125-130
	}
	if (index == 15){
		return 132 + getRandom(5); //127-132
	}
	if (index == 16){
		return 128 + getRandom(5); //123-128
	}
	if (index == 17){
		return 66 + getRandom(5); //63-68
	}
}
				//װ��ID, �Ƿ�������, ���Դ�С, �������� 
function giveEquip(equipId, isPhysic, property){
	var ii = MapleItemInformationProvider.getInstance();		                
	var type = ii.getInventoryType(equipId); //���װ��������
	var toDrop = ii.randomizeStats(ii.getEquipById(equipId)).copy(); // ����һ��Equip��
	toDrop. setFlag(1);//����
	toDrop. setStr(5);//������
	toDrop. setDex(5);//������ 
	toDrop. setInt(5);//������
	toDrop. setLuk(5);//������
	if (isPhysic){
		toDrop.setWatk(property);//����
	}else{
		toDrop.setMatk(property);//ħ����	
	}
	//
	//toDrop. setHp(random5 * 10);//��HP
	//toDrop. setMp(random6 * 10);//��MP
	cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
	cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
}

function getRandom(max){
	return Math.floor(Math.random()*(max+1));
}

function intensifyEquip(index){
	var levelTime = cm.getInventory(1).getItem(1).getLevel();
	var targetId = cm.getInventory(1).getItem(1).getItemId();
	var item = cm.getInventory(1).getItem(1).copy();
	var ii = MapleItemInformationProvider.getInstance();
	var type =  ii.getInventoryType(targetId);
	var sx0 = item.getStr();//��ȡװ����ǰ����0
	var sx1 = item.getDex();//��ȡװ����ǰ����1
	var sx2 = item.getInt();//��ȡװ����ǰ����2
	var sx3 = item.getLuk();//��ȡװ����ǰ����3
	var sx4 = item.getHp();//��ȡװ����ǰHP4
	var sx5 = item.getMp();//��ȡװ����ǰMP5
	var sx6 = item.getWatk();//��ȡװ����ǰ�﹥6
	var sx7 = item.getMatk();//��ȡװ����ǰħ��7
	var sx8 = item.getWdef();//��ȡװ����ǰ���8
	var sx9 = item.getMdef();//��ȡװ����ǰħ��9
	var sx10= item.getAcc();//��ȡװ����ǰ����10
	var sx11= item.getAvoid();//��ȡװ����ǰ�ر�11
	var sx12= item.getHands();//��ȡװ����ǰ�ּ�12
	var sx13= item.getSpeed();//��ȡװ����ǰ�ƶ��ٶ�13
	var sx14= item.getJump();//��ȡװ����ǰ��Ծ��14
	var sx15= item.getUpgradeSlots();
	item.setFlag(1);//����
	item.setStr(sx0);
	item.setDex(sx1);
	item.setInt(sx2);
	item.setLuk(sx3);
	item.setHp(sx4);
	item.setMp(sx5);
	item.setWatk(sx6);
	item.setMatk(sx7);
	item.setWdef(sx8);
	item.setMdef(sx9);
	item.setAcc(sx10);
	item.setAvoid(sx11);
	item.setHands(sx12);
	item.setSpeed(sx13);
	item.setJump(sx14);
	item.setJump(sx14);
	item.setLevel(+levelTime);
	item.setUpgradeSlots(sx15 + (index - 14));
	MapleInventoryManipulator.removeFromSlot(cm.getC(),type,1,1, false);
	cm.getPlayer().getInventory(type).addItem(item);//�����װ���������
	cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, item, false)); //ˢ�±���
}