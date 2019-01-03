
var status = 0;
var job;
var dianjuan="100";//扣除的点卷

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
var ss =MapleItemInformationProvider.getInstance();//每天一次
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
			cm.sendNext("欢迎来到#r" + cm.getChannelServer().getServerName() + "点卷强化系统!\r\n\r\n#k#d70%机率#k获得随机：力量 敏捷 运气 智力 MP HP 物攻 魔攻 其中一项+1效果 #d ");
		} else if (status == 1) {
					
     
						
			if(cc!= null&&cc2!= null){
			 cm.sendYesNo("你要强化的装备为:\r\n\r\n装备#v"+cc.getItemId()+"#\r\n\r\n#r#e确定要开始强化吗?");
			} else{
			cm.sendOk("#b第一格子无东西#k");	
			cm.dispose();
			} 
			
		} else if (status == 2) {// MapleItemInformationProvider.getInstance()
		        if (cm.getPlayer().getCSPoints(1) >= dianjuan) {//判断点卷
		            cm.sendOk("点卷不足!");
				    cm.dispose();
/*            } else if (cm.getBossLog("qianghua2") == 3){//每天3次
                cm.sendOk("你今天已经强化过了,请明天在来吧!");
                cm.dispose();  */
		} else if (ss.isCash(cc.getItemId()) == true){//每天3次
                cm.sendOk("A:装备为点装!不能强化");
                cm.dispose();
} else if (cm.getInventory(1).getItem(1) == null)  {
		            cm.sendOk("请把要强化的装备放在第一格才能进行.");
				    cm.dispose();
} else if(cm.getInventory(1).getItem(1).getExpiration() != -1) {
		            cm.sendOk("A:装备限时装备不能进行强化.");
				    cm.dispose();	
		} else {
			
var statup = new java.util.ArrayList();
var sj = Math.floor(Math.random()*2);//几率
		 cm.gainDJ(-dianjuan);//扣除点卷
		 
		 if(sj==0){
			 
                   var itemId1 = cm.getInventory(1).getItem(1).getItemId();
		 var citem = cm.getInventory(1).getItem(1).copy();
		  var cii = MapleItemInformationProvider.getInstance();
					var stype =  cii.getInventoryType(itemId1);

var getOne1 = Math.floor(Math.random()*8);

var txt =""
 if(getOne1==0){
	 if((citem.getUpgradeSlots() +  citem.getLevel())>=100){
	cm.sendOk("#e强升级次数已到达极限100次!");		
	cm.dispose();
	 } else{
	citem.setUpgradeSlots(citem.getUpgradeSlots()+ 1); 
	txt +="升级次数+1"; 
 }
 cm.dispose();
} else if (getOne1==1){
	if(citem.getStr()>32700){
	cm.sendOk("#r#e强化失败！属性超过32700");		
	cm.dispose();
	}
	citem.setStr(citem.getStr()+ 1); 
	txt +="力量+1"; 
		
} else if(getOne1==2){
			if(citem.getInt()>32700){
	cm.sendOk("#r#e强化失败！属性超过32700");		
	cm.dispose();
	}
	citem.setInt(citem.getInt()+ 1); 
	txt +="智力+1"; 

} else if(getOne1==3){
			if(citem.getLuk()>32700){
	cm.sendOk("#r#e强化失败！属性超过32700");		
	cm.dispose();
	}
	citem.setLuk(citem.getLuk()+ 1); 
	txt+="运气+1"; 

} else if(getOne1==4){
					if(citem.getDex()>32700){
	cm.sendOk("#r#e强化失败！属性超过32700");		
	cm.dispose();
	}
	citem.setDex(citem.getDex()+ 1); 
	txt +="敏捷+1"; 

} else if(getOne1==5){
				if(citem.getHp()>30000){
	cm.sendOk("#r#e强化失败！属性超过30000");		
	cm.dispose();
	citem.setHp(citem.getHp()+ 1); 
	txt +="HP+1"; 

	}
} else if(getOne1==6){
				if(citem.getMp()>30000){
	cm.sendOk("#r#e强化失败！属性超过30000");		
	cm.dispose();
	}
	citem.setMp(citem.getMp()+ 1); 
	txt +="MP+1"; 

} else if(getOne1==7){
					if(citem.getMatk()>32700){
	cm.sendOk("#r#e强化失败！属性超过32700");		
	cm.dispose();
	}
	citem.setMatk(citem.getMatk()+ 1); 
	txt +="魔法力+1"; 

} else if(getOne1==8){
					if(citem.getWatk()>32700){
	cm.sendOk("#r#e强化失败！属性超过32700");		
	cm.dispose();
	}
	citem.setWatk(citem.getWatk()+ 1); 
	txt +="物攻+1"; 

 } else{
	cm.sendOk("#r#e强化失败！");	
	cm.dispose();	 	 
 }
          
		  if(txt!=""){
		 citem.setFlag(1);
		 
		 MapleInventoryManipulator.removeFromSlot(cm.getC(),stype,1,1, false);
		 MapleInventoryManipulator.addFromDrop(cm.getC(), citem,false);
         cm.itemlaba("随机强化成功+"+txt,citem);
		 cm.sendOk("#r#e强化成功,祝您游戏愉快!#k \r\n"+txt); 
		 cm.dispose();
		}else {
		cm.sendOk("#r#e强化失败！");
        //cm.laba(cm.getPlayer().getName() + "『强化公告』" + " : " + "在自由市场-使用随机强化失败！大家一起为他（她）祈祷吧！",11);		
		cm.dispose();	 
		 }
		}else {
		cm.sendOk("#r#e强化失败！");	 
		//cm.laba(cm.getPlayer().getName() + "『强化公告』" + " : " + "在自由市场-使用随机强化失败！大家一起为他（她）祈祷吧！",11);	
		cm.dispose();
				 }

		}
		}
	}
}	