 
importPackage(Packages.client);
importPackage(Packages.client.inventory);

var status = -1;
var beauty = 0;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendOk("如果需要冒险岛推广服务在来找我吧。");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
			
			
            var gsjb = "";
            gsjb ="  #e欢迎来到冒险岛推广系统，当前共推荐了"+cm.showtgr()+"人\r\n\r\n";//统计多少个账号
            gsjb +="  您的推广ID号是："+cm.getPlayer().getAccountID()+"#k#d";//显示账号的
			gsjb +="  玩家输入推广ID后，被推荐的人凡以后充值对方均可获得5%的额外点券#k\r\n#d";
			gsjb +="#L2##b填写您的推荐人ID号#l\r\n\r\n";
			gsjb +="#L3##b【推广点券领取-当前#g "+cm.gettgrjl() +"#r点券尚未领取请点击领取】#l\r\n\r\n\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
        if (selection == 2) {
        beauty = 1;
        cm.sendGetNumber("请您输入 推广人id （不可以填写自己id）。#k", 1, 1, 90000000);
        } else if (selection == 3) {
        if(cm.gettgrjl()==0){//判断表吧应该是
		cm.sendOk("您当前未兑现金额为"+ cm.gettgrjl() +"点券 !");
		cm.dispose();	
		}else{
		var  j = cm.gettgrjl();
		cm.gaintgrjl(cm.getPlayer().getAccountID(),-j);
		cm.gainDJ(j*1);
        cm.sendOk("兑现成功！获得"+ j*1 + "点卷！.");
		cm.dispose();
        }
		}
        } else if (status == 2) {
            if (beauty == 1) {
                 if(cm.istgr(selection)== false ){
                    cm.sendNext("你输入的推广ID不存在，请重新输入。");
                    status = -1;
                } else if(cm.getPlayer().getAccountID()== selection){
					cm.sendOk("别逗了，自己怎么能推荐自己呢？");
                    status = -1;
				} else if(cm.gettgr() != 0 ){
					cm.sendOk("您已经登记过了推广ID,不能再登记或者更改的哦！");
                    status = -1;
                } else {					 
					cm.settgr(selection);
                    cm.sendOk("成功登记了推广人，谢谢您的参与。你登记了推广ID是：#r"+selection+"");
                    cm.dispose();
                }
                }
        }
    }
}
