
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
			cm.sendNext("��ӭ����#r" + cm.getChannelServer().getServerName() + "���ǿ��ϵͳ!\r\n\r\n#k#d70%����#k������������ ���� ���� ���� MP HP �﹥ ħ�� ����һ��+1Ч�� #d ");
		} else if (status == 1) {
					
     
						
			if(cc!= null&&cc2!= null){
			 cm.sendYesNo("��Ҫǿ����װ��Ϊ:\r\n\r\nװ��#v"+cc.getItemId()+"#\r\n\r\n#r#eȷ��Ҫ��ʼǿ����?");
			} else{
			cm.sendOk("#b��һ�����޶���#k");	
			cm.dispose();
			} 
			
		} else if (status == 2) {// MapleItemInformationProvider.getInstance()
		        if (cm.getPlayer().getCSPoints(1) >= dianjuan) {//�жϵ��
		            cm.sendOk("�����!");
				    cm.dispose();
/*            } else if (cm.getBossLog("qianghua2") == 3){//ÿ��3��
                cm.sendOk("������Ѿ�ǿ������,������������!");
                cm.dispose();  */
		} else if (ss.isCash(cc.getItemId()) == true){//ÿ��3��
                cm.sendOk("A:װ��Ϊ��װ!����ǿ��");
                cm.dispose();
} else if (cm.getInventory(1).getItem(1) == null)  {
		            cm.sendOk("���Ҫǿ����װ�����ڵ�һ����ܽ���.");
				    cm.dispose();
} else if(cm.getInventory(1).getItem(1).getExpiration() != -1) {
		            cm.sendOk("A:װ����ʱװ�����ܽ���ǿ��.");
				    cm.dispose();	
		} else {
			
var statup = new java.util.ArrayList();
var sj = Math.floor(Math.random()*2);//����
		 cm.gainDJ(-dianjuan);//�۳����
		 
		 if(sj==0){
			 
                   var itemId1 = cm.getInventory(1).getItem(1).getItemId();
		 var citem = cm.getInventory(1).getItem(1).copy();
		  var cii = MapleItemInformationProvider.getInstance();
					var stype =  cii.getInventoryType(itemId1);

var getOne1 = Math.floor(Math.random()*8);

var txt =""
 if(getOne1==0){
	 if((citem.getUpgradeSlots() +  citem.getLevel())>=100){
	cm.sendOk("#eǿ���������ѵ��Ｋ��100��!");		
	cm.dispose();
	 } else{
	citem.setUpgradeSlots(citem.getUpgradeSlots()+ 1); 
	txt +="��������+1"; 
 }
 cm.dispose();
} else if (getOne1==1){
	if(citem.getStr()>32700){
	cm.sendOk("#r#eǿ��ʧ�ܣ����Գ���32700");		
	cm.dispose();
	}
	citem.setStr(citem.getStr()+ 1); 
	txt +="����+1"; 
		
} else if(getOne1==2){
			if(citem.getInt()>32700){
	cm.sendOk("#r#eǿ��ʧ�ܣ����Գ���32700");		
	cm.dispose();
	}
	citem.setInt(citem.getInt()+ 1); 
	txt +="����+1"; 

} else if(getOne1==3){
			if(citem.getLuk()>32700){
	cm.sendOk("#r#eǿ��ʧ�ܣ����Գ���32700");		
	cm.dispose();
	}
	citem.setLuk(citem.getLuk()+ 1); 
	txt+="����+1"; 

} else if(getOne1==4){
					if(citem.getDex()>32700){
	cm.sendOk("#r#eǿ��ʧ�ܣ����Գ���32700");		
	cm.dispose();
	}
	citem.setDex(citem.getDex()+ 1); 
	txt +="����+1"; 

} else if(getOne1==5){
				if(citem.getHp()>30000){
	cm.sendOk("#r#eǿ��ʧ�ܣ����Գ���30000");		
	cm.dispose();
	citem.setHp(citem.getHp()+ 1); 
	txt +="HP+1"; 

	}
} else if(getOne1==6){
				if(citem.getMp()>30000){
	cm.sendOk("#r#eǿ��ʧ�ܣ����Գ���30000");		
	cm.dispose();
	}
	citem.setMp(citem.getMp()+ 1); 
	txt +="MP+1"; 

} else if(getOne1==7){
					if(citem.getMatk()>32700){
	cm.sendOk("#r#eǿ��ʧ�ܣ����Գ���32700");		
	cm.dispose();
	}
	citem.setMatk(citem.getMatk()+ 1); 
	txt +="ħ����+1"; 

} else if(getOne1==8){
					if(citem.getWatk()>32700){
	cm.sendOk("#r#eǿ��ʧ�ܣ����Գ���32700");		
	cm.dispose();
	}
	citem.setWatk(citem.getWatk()+ 1); 
	txt +="�﹥+1"; 

 } else{
	cm.sendOk("#r#eǿ��ʧ�ܣ�");	
	cm.dispose();	 	 
 }
          
		  if(txt!=""){
		 citem.setFlag(1);
		 
		 MapleInventoryManipulator.removeFromSlot(cm.getC(),stype,1,1, false);
		 MapleInventoryManipulator.addFromDrop(cm.getC(), citem,false);
         cm.itemlaba("���ǿ���ɹ�+"+txt,citem);
		 cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k \r\n"+txt); 
		 cm.dispose();
		}else {
		cm.sendOk("#r#eǿ��ʧ�ܣ�");
        //cm.laba(cm.getPlayer().getName() + "��ǿ�����桻" + " : " + "�������г�-ʹ�����ǿ��ʧ�ܣ����һ��Ϊ�����������ɣ�",11);		
		cm.dispose();	 
		 }
		}else {
		cm.sendOk("#r#eǿ��ʧ�ܣ�");	 
		//cm.laba(cm.getPlayer().getName() + "��ǿ�����桻" + " : " + "�������г�-ʹ�����ǿ��ʧ�ܣ����һ��Ϊ�����������ɣ�",11);	
		cm.dispose();
				 }

		}
		}
	}
}	