
var status = 0;
var job;
var dianjuan="100";//�۳��ĵ��
importPackage(java.util);
importPackage(net.sf.sunms.client);
importPackage(net.sf.sunms.server);
importPackage(java.util);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools);
importPackage(Packages.tools.packet);

function start() {

	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
var ss =MapleItemInformationProvider.getInstance();//ÿ��һ��
var cc = cm.getInventory(1).getItem(1);
var cc2 = cm.getInventory(1).getItem(2);
	if (mode == -1) {
		cm.dispose();
	} else {
		if ((mode == 0 && status == 2) || (mode == 0 && status == 13)) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("��ӭ����#r" + cm.getChannelServer().getServerName() + "��Ʒǿ��ϵͳ!\r\n\r\n#k#d#r10%#k�ĸ���ǿ��һ����Ʒ��ȫ����+2��������+2��ħ����+4 hp+15,mp+15#d ");
		} else if (status == 1) {	
if(cm.getInventory(1).getItem(1).getUpgradeSlots()==0){
	cm.sendOk("#e�����Ʒ��ǿ������Ϊ0��,�޷��ڼ���ǿ��!");		
	cm.dispose();		
} else if(cm.getInventory(1).getItem(1).getItemId()==1113072 || cm.getInventory(1).getItem(1).getItemId()==1012058 || cm.getInventory(1).getItem(1).getItemId()==1012059 || cm.getInventory(1).getItem(1).getItemId()==1012060 || cm.getInventory(1).getItem(1).getItemId()==1012061 || cm.getInventory(1).getItem(1).getItemId()==1122001 || cm.getInventory(1).getItem(1).getItemId()==1122002 || cm.getInventory(1).getItem(1).getItemId()==1122003 || cm.getInventory(1).getItem(1).getItemId()==1122004 || cm.getInventory(1).getItem(1).getItemId()==1122005 || cm.getInventory(1).getItem(1).getItemId()==1122006 || cm.getInventory(1).getItem(1).getItemId()==1113072 || cm.getInventory(1).getItem(1).getItemId()==1113073 || cm.getInventory(1).getItem(1).getItemId()==1113074 || cm.getInventory(1).getItem(1).getItemId()==1132244 || cm.getInventory(1).getItem(1).getItemId()==1132245 || cm.getInventory(1).getItem(1).getItemId()==1122264 || cm.getInventory(1).getItem(1).getItemId()==1012056 || cm.getInventory(1).getItem(1).getItemId()==1022047 || cm.getInventory(1).getItem(1).getItemId()==1022073 || cm.getInventory(1).getItem(1).getItemId()==1122074 || cm.getInventory(1).getItem(1).getItemId()==1032017 || cm.getInventory(1).getItem(1).getItemId()==1032030 || cm.getInventory(1).getItem(1).getItemId()==1032031 || cm.getInventory(1).getItem(1).getItemId()==1122118){//�жϵ�һ���ǲ������ID
			 cm.sendYesNo("��Ҫǿ����װ��Ϊ:\r\n\r\nװ��#v"+cc.getItemId()+"#\r\n\r\n#r#eȷ��Ҫ��ʼǿ����?");
			} else{
			cm.sendOk("#b���������Ʒ����һ�����ڷ��ڵ�һ����\r\n#v1113072##v1012058##v1012059##v1012060##v1012061##v1122001##v1122002##v1122003##v1122004##v1122005##v1122006##v1113073##v1113074##v1132243##v1132244##v1132245##v1122264##v1012056##v1022047##v1022073##v1122074##v1032017##v1032030##v1032031##v1122118##k");	
			cm.dispose();
			} 
		} else if (status == 2) {
		if (!cm.haveItem(4020009, 75)) {
			cm.sendOk("#b��û��75��#v4020009##z4020009#.");
		    cm.dispose();
      } else if(cm.getInventory(1).getItem(1).getExpiration() != -1) {
		            cm.sendOk("A:װ����ʱװ�����ܽ���ǿ��.");
				    cm.dispose();	
		} else {
			
var statup = new java.util.ArrayList();
var sj = Math.floor(Math.random()*1.9);//���ʱ���1.6����60%
		  cm.gainItem(4020009,-75);
		 
		 if(sj==0){
			 
         var itemId1 = cm.getInventory(1).getItem(1).getItemId();
		 var citem = cm.getInventory(1).getItem(1).copy();
		 var cii = MapleItemInformationProvider.getInstance();
		 var stype =  cii.getInventoryType(itemId1);

var getOne1 = Math.floor(Math.random()*40);//���������������

var txt =""
 if (getOne1==1){
	if(citem.getStr()>32700){
	cm.sendOk("#r#eǿ��ʧ�ܣ����Գ���32700");		
	cm.dispose();
	}
	citem.setStr(citem.getStr()+ 2); //����
	citem.setInt(citem.getInt()+ 2); //����
	citem.setLuk(citem.getLuk()+ 2); //����
	citem.setDex(citem.getDex()+2); //����
	citem.setHp(citem.getHp()+ 15); 
	citem.setMp(citem.getMp()+ 15); 
	citem.setMatk(citem.getMatk()+4); //ħ����
	citem.setWatk(citem.getWatk()+ 2); //�﹥
	txt +="����/����/����/����+2  �﹥+2 ħ����+4  HP/MP+15"; 	
} else if(getOne1==2){
			if(citem.getInt()>32700){
	cm.sendOk("#r#eǿ��ʧ�ܣ����Գ���32700");		
	cm.dispose();
	}
	citem.setStr(citem.getStr()+ 2); //����
	citem.setInt(citem.getInt()+ 2); //����
	citem.setLuk(citem.getLuk()+ 2); //����
	citem.setDex(citem.getDex()+2); //����
	citem.setHp(citem.getHp()+ 15); 
	citem.setMp(citem.getMp()+ 15); 
	citem.setMatk(citem.getMatk()+4); //ħ����
	citem.setWatk(citem.getWatk()+ 2); //�﹥
	txt +="����/����/����/����+2  �﹥+2 ħ����+4  HP/MP+15"; 	
} else if(getOne1==3){
			if(citem.getLuk()>32700){
	cm.sendOk("#r#eǿ��ʧ�ܣ����Գ���32700");		
	cm.dispose();
	}
	citem.setStr(citem.getStr()+ 2); //����
	citem.setInt(citem.getInt()+ 2); //����
	citem.setLuk(citem.getLuk()+ 2); //����
	citem.setDex(citem.getDex()+2); //����
	citem.setHp(citem.getHp()+ 15); 
	citem.setMp(citem.getMp()+ 15); 
	citem.setMatk(citem.getMatk()+4); //ħ����
	citem.setWatk(citem.getWatk()+ 2); //�﹥
	txt +="����/����/����/����+2  �﹥+2 ħ����+4  HP/MP+15"; 	

} else if(getOne1==4){
					if(citem.getDex()>32700){
	cm.sendOk("#r#eǿ��ʧ�ܣ����Գ���32700");		
	cm.dispose();
	}
	citem.setStr(citem.getStr()+ 2); //����
	citem.setInt(citem.getInt()+ 2); //����
	citem.setLuk(citem.getLuk()+ 2); //����
	citem.setDex(citem.getDex()+2); //����
	citem.setHp(citem.getHp()+ 15); 
	citem.setMp(citem.getMp()+ 15); 
	citem.setMatk(citem.getMatk()+4); //ħ����
	citem.setWatk(citem.getWatk()+ 2); //�﹥
	txt +="����/����/����/����+2  �﹥+2 ħ����+4  HP/MP+15"; 	

} else if(getOne1==5){
				if(citem.getHp()>30000){
	cm.sendOk("#r#eǿ��ʧ�ܣ����Գ���30000");		
	cm.dispose();
	}
	citem.setStr(citem.getStr()+ 2); //����
	citem.setInt(citem.getInt()+ 2); //����
	citem.setLuk(citem.getLuk()+ 2); //����
	citem.setDex(citem.getDex()+2); //����
	citem.setHp(citem.getHp()+ 15); 
	citem.setMp(citem.getMp()+ 15); 
	citem.setMatk(citem.getMatk()+4); //ħ����
	citem.setWatk(citem.getWatk()+ 2); //�﹥
	txt +="����/����/����/����+2  �﹥+2 ħ����+4  HP/MP+15"; 	
} else if(getOne1==6){
				if(citem.getMp()>30000){
	cm.sendOk("#r#eǿ��ʧ�ܣ����Գ���30000");		
	cm.dispose();
	}
	citem.setStr(citem.getStr()+ 2); //����
	citem.setInt(citem.getInt()+ 2); //����
	citem.setLuk(citem.getLuk()+ 2); //����
	citem.setDex(citem.getDex()+2); //����
	citem.setHp(citem.getHp()+ 15); 
	citem.setMp(citem.getMp()+ 15); 
	citem.setMatk(citem.getMatk()+4); //ħ����
	citem.setWatk(citem.getWatk()+ 2); //�﹥
	txt +="����/����/����/����+2  �﹥+2 ħ����+4  HP/MP+15"; 	
} else if(getOne1==7){
					if(citem.getMatk()>32700){
	cm.sendOk("#r#eǿ��ʧ�ܣ����Գ���32700");		
	cm.dispose();
	}
	citem.setStr(citem.getStr()+ 2); //����
	citem.setInt(citem.getInt()+ 2); //����
	citem.setLuk(citem.getLuk()+ 2); //����
	citem.setDex(citem.getDex()+2); //����
	citem.setHp(citem.getHp()+ 15); 
	citem.setMp(citem.getMp()+ 15); 
	citem.setMatk(citem.getMatk()+4); //ħ����
	citem.setWatk(citem.getWatk()+ 2); //�﹥
	txt +="����/����/����/����+2  �﹥+2 ħ����+4  HP/MP+15"; 	
} else if(getOne1==8){
					if(citem.getWatk()>32700){
	cm.sendOk("#r#eǿ��ʧ�ܣ����Գ���32700");		
	cm.dispose();
	}
	citem.setStr(citem.getStr()+ 2); //����
	citem.setInt(citem.getInt()+ 2); //����
	citem.setLuk(citem.getLuk()+ 2); //����
	citem.setDex(citem.getDex()+2); //����
	citem.setHp(citem.getHp()+ 15); 
	citem.setMp(citem.getMp()+ 15); 
	citem.setMatk(citem.getMatk()+4); //ħ����
	citem.setWatk(citem.getWatk()+ 2); //�﹥
	txt +="����/����/����/����+2  �﹥+2 ħ����+4  HP/MP+15"; 	
 } else{
	cm.sendOk("#r#eʱ����Ƭ����һ�����⣬������Ʒδ�����κα仯��");	
	cm.dispose();	 	 
 }
          
		  if(txt!=""){
		 //citem.setFlag(1);//����
		 citem.setLevel(citem.getLevel()+1);
		 citem.setUpgradeSlots(citem.getUpgradeSlots()-1);
		 MapleInventoryManipulator.removeFromSlot(cm.getC(),stype,1,1, false);
		 MapleInventoryManipulator.addFromDrop(cm.getC(), citem,false);
        // cm.itemlaba("10%ʱ����Ƭ����һ�����⣬��ʱ��Ů��֮���������ĳ�����ص�����+"+txt,citem);
		 cm.sendOk("#r#e10%ʱ����Ƭ����һ�����⣬��ʱ��Ů��֮���������ĳ�����ص�����!#k \r\n"+txt); 
		 cm.dispose();
		}else {
		var itemId1 = cm.getInventory(1).getItem(1).getItemId();
		 var citem = cm.getInventory(1).getItem(1).copy();
		 var cii = MapleItemInformationProvider.getInstance();
		 var stype =  cii.getInventoryType(itemId1);
		citem.setUpgradeSlots(citem.getUpgradeSlots()-1);
		MapleInventoryManipulator.removeFromSlot(cm.getC(),stype,1,1, false);
		 MapleInventoryManipulator.addFromDrop(cm.getC(), citem,false);
		cm.sendOk("#r#e10%ʱ����Ƭ����һ�����⣬������Ʒδ�����κα仯��");
        //cm.laba(cm.getPlayer().getName() + "��ǿ�����桻" + " : " + "�������г�-ʹ�����ǿ��ʧ�ܣ����һ��Ϊ�����������ɣ�",11);		
		cm.dispose();	 
		 }
		}else {
		var itemId1 = cm.getInventory(1).getItem(1).getItemId();
		 var citem = cm.getInventory(1).getItem(1).copy();
		 var cii = MapleItemInformationProvider.getInstance();
		 var stype =  cii.getInventoryType(itemId1);
		citem.setUpgradeSlots(citem.getUpgradeSlots()-1);
		MapleInventoryManipulator.removeFromSlot(cm.getC(),stype,1,1, false);
		 MapleInventoryManipulator.addFromDrop(cm.getC(), citem,false);
		cm.sendOk("#r#e10%ʱ����Ƭ����һ�����⣬������Ʒδ�����κα仯��");	
		//cm.laba(cm.getPlayer().getName() + "��ǿ�����桻" + " : " + "�������г�-ʹ�����ǿ��ʧ�ܣ����һ��Ϊ�����������ɣ�",11);	
		cm.dispose();
				 }

		}
		}
	}
}	
