importPackage(Packages.client);
importPackage(Packages.tools);
importPackage(java.awt);
importPackage(java.lang);
var status = 0;
var totAp = 0;
var kou =0;
var newAp;
var newStr;
var newDex;
var newInt;
var newLuk;
var Strings = Array("","","","","");
var aplist;
var apnamelist = Array(1,2,3,4);//用来排序的数组
var statup;
var p;
var needLevel = 180;//需要的等级
var Skills = Array(1121010,1001003,1001004,1001005,1101004,1101005,1101006,1101007,1111002,1111003,1111004,1111005,1111006,1111007,1111008,1121000,1121001,1121006,1121011,1201004,1201005,1201006,1201007,1211002,1211003,1211004,1211005,1211006,1211007,1211008,1211009,1221000,1221001,1221002,1221003,1221004,1221007,1221011,1221012,1301005,1301006,1311003,1311005,1311006,1311007,1311008,1321000,1321001,1321003,1321007,1321010,2001002,2001003,2001004,2001005,2101001,2101003,2101004,2101005,2111002,2111003,2111004,2111005,2111006,2121000,2121001,2121002,2121003,2121004,2121005,2121006,2121007,2121008,2201001,2201003,2201004,2201005,2211002,2211003,2211004,2211005,2211006,2221000,2221001,2221002,2221003,2221004,2221005,2221006,2221007,2221008,2301002,2301003,2301004,2301005,2311002,2311004,2311005,2311006,2321000,2321001,2321002,2321003,2321004,2321005,2321007,2321009,3101003,3101005,3111002,3111003,3111005,3121000,3121003,3121006,3121007,3121008,3121009,3201003,3201005,3211002,3211003,3211004,3211005,3221000,3221001,3221003,3221005,3221006,3221007,3221008,4001002,4001334,4001344,4101003,4101005,4111001,4111003,4111004,4111005,4121000,4121003,4121004,4121006,4121007,4121008,4121009,4201002,4201004,4201005,4211001,4211002,4211003,4211004,4211005,4211006,4220005,4221000,4221001,4221003,4221004,4221006,4221007,4221007,4221008,5001001,5001002,5001003,5001005,5101002,5101003,5101004,5101005,5101007,5110000,5110001,5111002,5111004,5111005,5111006,5121000,5121001,5121002,5121003,5121004,5121005,5121007,5121008,5121010,5201001,5201002,5201003,5201004,5201005,5201006,5210000,5211001,5211002,5211004,5211005,5211006,5220011,5221000,5221003,5221004,5221006,5221007,5221008,5221009,5221010,11001001,11001002,11001003,11001004,11101001,11101003,11101004,11101005,11111001,11111002,11111003,11111007,12001001,12001002,12001003,12001004,12101000,12101001,12101002,12101004,12101005,12101006,12111002,12111003,12111004,12111005,12111006,13001003,13001004,13101001,13101005,13101006,13111004,13111005,13111006,13111007,14001004,14001005,14100005,14101002,14101006,14110004,14111001,14111002,14111005,14111006,15001001,15001002,15001003,15001004,15100004,15101003,15101005,15101006,15110000,15111001,15111002,15111003,15111004,15111006,15111007,20000012,20000024,21000000,21000002,21001003,21100000,21100001,21100002,21100004,21100005,21101003,21110000,21110002,21110003,21110004,21110006,21110007,21110008,21111001,21111005,21120001,21120002,21120004,21120005,21120006,21120007,21121000,21121003,21121008,4111002);  //这里设置转身后不保留的技能
function start() {
	statup = new java.util.ArrayList();
	p = cm.c.getPlayer();
  totAp = p.getRemainingAp() + p.getStr() + p.getDex() + p.getInt() + p.getLuk();  //总能力点	
  newStr =  p.getStr();
	newDex =  p.getDex();	
	newInt =  p.getInt();
	newLuk =  p.getLuk();
	aplist= Array(p.getStr(), p.getDex(), p.getInt(), p.getLuk()); 	
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {//ExitChat
		cm.dispose();
  }else if (mode == 0){//No
		cm.sendOk("好的, 请告诉我你确定需要 #b投胎转世#k.");
		cm.dispose();
	}else{            //Regular Talk
		if (mode == 1)
    status++;
    else
    status--;    
    if (status == 0) {	

		
			 mxb = 50;
	    	
			cm.sendYesNo("你是否想转生呢？？系统判定你只等级到达#r "+ needLevel+" #k既可以转生。\r\n由于你是  #b（额外赠送属性。其他属性变成初始4点。每次获得属性为 转生次数）！目前已经转生了#r次！\r\n#b转生保留技能：\r\n#r#s2201002# #s2321006# #s2311001# #s2321008# #s9001008# #s1321002# #s11111004# #s1311001# #s1311002# #s1311004# #s14101003# #s3121002# #s3121004# #s3111004# #s4111006# #s11111006# #s2311003# \r\n#b#e转生需要消耗:一枚#v4000487# 和 "+mxb+"冒险币");		
		}else if (status == 1) {
			if(cm.getPlayer().getLevel() < needLevel){
      	cm.sendOk("很抱歉, 您需要" +  needLevel + "级，才可以投胎转世.");
	      cm.dispose();
       }else if (cm.haveItem(4000487) == false){ 
	      cm.sendOk("你没有带来#b#v4000487##k "); 
	      cm.dispose(); 
      }else if (cm.getMeso() < mxb) {
	    	cm.sendOk("你没有" +mxb+"金币,我不能帮你的忙哦."); 
	      cm.dispose();
      }else{	
      	var temp;
				for (var j = 0; j < 3; j++){   //有名的冒气泡排顺法。主要用于排列数组apnamelist里的数据。实现从大到小排列能力值。
	 				for (var i = 0; i < 3 - j; i++){
						if(aplist[i] < aplist[i+1]){
							temp = aplist[i];
							aplist[i] = aplist[i+1];
							aplist[i+1] = temp;				
							temp = apnamelist[i];
							apnamelist[i] = apnamelist[i+1];
							apnamelist[i+1] = temp;
						}
	  			}
			 	} 
      	if(p.getRemainingAp() >= kou){
			 		newAp = p.getRemainingAp() - kou;
					Strings[0] = " AP值将扣去 #r" + kou + " #k点";	
					kou = 0;
				}else{
					newAp =0;
					kou = kou - p.getRemainingAp();
					if (p.getRemainingAp() > 0){
					Strings[0] = " AP值将扣去 #r" + p.getRemainingAp() + " #k点";
					}  
				}
				for(x = 0; x < 4; x++){
					if(kou > 0){
						if(apnamelist[x] == 1){					
							if(p.getStr() - 4 >= kou){
								newStr = p.getStr() - kou;
								Strings[1] = " 力量将扣去 #r" + kou + "#k 点";
								kou = 0;			
							}else{
								newStr = 4;
								kou = kou - (p.getStr() - 4);
								Strings[1] = " 力量将扣去 #r" + (p.getStr() - 4) + "#k 点";			
							}
						}else if(apnamelist[x] == 2){
							if(p.getDex() - 4 >= kou){
								newDex = p.getDex() - kou;
								Strings[2] = " 敏捷将扣去 #r" + kou + "#k 点";			
								kou = 0;
							}else{
								newDex = 4;
								kou = kou - (p.getDex() - 4);
								Strings[2] = " 敏捷将扣去 #r" + (p.getDex() - 4) + "#k 点";			
							}
						}else if(apnamelist[x] == 3){
							if(p.getInt() - 4 >= kou){
								newInt = p.getInt() - kou;
								Strings[3] = " 智力将扣去 #r" + kou + "#k 点";
								kou = 0;
							}else{
								newInt = 4;
								kou = kou - (p.getInt() - 4);
								Strings[3] = " 智力将扣去 #r" + (p.getInt() - 4) + "#k 点";
							}
						}else if(apnamelist[x] == 4){
							if(p.getLuk() - 4 >= kou){
								newLuk = p.getLuk() - kou;
								Strings[4] = " 运气将扣去 #r" + kou + "#k 点";
								kou = 0;
							}else{
								newInt = 4;
								kou = kou - (p.getLuk() - 4);
								Strings[4] = " 运气将扣去 #r" + (p.getLuk() - 4) + "#k 点";
							}
						}
						if (kou < 1) break;
					}	
				}
			var St = "";
			for(s = 0; s < 5; s++){
				if(Strings[s] != "") St = St + Strings[s] + "\r\n";
			}
	    cm.sendOk("#e#b您做得非常好, 你现在确定要投胎转世吗？#r等级属性将回到出生状态噢#n ");
	    }
      }else if (status == 2){
					cm.sendSimple("恭喜你修炼有成. 你想投胎成为什么职业呢?#b\r\n#L0#新手#l\r\n#L1#战童#l\r\n#L2#初心者#l#k");
			}else if (status == 3){	      
				if(selection == 0)  {						
		    	cm.changeJob(0);
        }
				if(selection == 1){	
	        cm.changeJob(2000);
        }
				if(selection == 2){			
        	cm.changeJob(1000);        	
	      }
				cm.gainMeso(-mxb);
	      cm.gainItem(4000487,-1);
	      for(var n = 0; n < Skills.length; n++){
	      	cm.getPlayer().changeSkillLevel(SkillFactory.getSkill(Skills[n]),0,0); //清除一些不保留的技能
	      } 
	      
        cm.sendNext("#e#b您做得非常好#k, 您已经成功转生了,您现在的属性点情况如下：\r\n" + "   力量: #r" + newStr + " #k点" + "\r\n   敏捷: #r" + newDex + " #k点" + "\r\n   智力: #r" + newInt + " #k点" + "\r\n   运气: #r" + newLuk + " #k点" + "\r\n   未分配的AP: #r" + newAp + " #k点");
			p.chongsheng(4,4,4,4,0);//力量,敏捷,智慧,运气,ap点
				//cm.getPlayer().saveToDB(true);
				cm.serverNotice("[系统]: 玩家 [" + cm.getPlayer().getName() + "] 触碰神秘的力量,竟然了却红尘,投胎转世了！");  
 				cm.dispose();           
		}
  }
}
 
