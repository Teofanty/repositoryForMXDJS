var status = 0;
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
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		var Editing = false //true=显示;false=开始活动
          if(Editing){
          cm.sendOk("暂停运作");
          cm.dispose();
          return;
        } 
			cm.sendSimple("赞助充值1000点券可获得10点积分以此类推。\r\n 您的当前积分为：#r"+ cm.getcz() +"#k\r\n#L0#20积分兑换#v4000463##l\r\n\r\n#L1#100积分兑换#v3012024##l\r\n\r\n#L2#500积分兑换#v3010070##l\r\n\r\n#L3#1000积分兑换#v4251202##l");
        } else if (status == 1) {
            if (selection == 0) {
			 if (cm.getcz() >= 20 ) {
                    cm.gaincz(-20);                   
		            cm.gainItem(4000463, 1);
					 cm.sendOk("恭喜你,成功兑换了#v4000463##z4000463#!\r\n");
                    cm.worldMessage(6,"恭喜[ " + cm.getPlayer().getName() + "] 成功兑换了国庆币 ，大家一起祝贺他(她)吧!");
                    cm.dispose();
                } else {
                    cm.sendOk("积分不足!");
                    cm.dispose();
                }
            } else if (selection == 1) {
				if (cm.getcz() >= 100 ) {
                    cm.gaincz(-100);                   
		            cm.gainItem(3012024, 1);
					cm.sendOk("恭喜你,成功兑换了#v3012024##z3012024#!\r\n");
                    cm.worldMessage(6,"恭喜[ " + cm.getPlayer().getName() + "] 成功兑换了沙滩排球椅 ，大家一起祝贺他(她)吧!");
                    cm.dispose();
                } else {
                    cm.sendOk("积分不足!");
                    cm.dispose();
                }
            } else if (selection == 2) {
                if (cm.getcz() >= 500 ) {
                    cm.gaincz(-500);                   
		            cm.gainItem(3010070, 1);
					cm.sendOk("恭喜你,成功兑换了#v3010070##z3010070#!\r\n");
                    cm.worldMessage(6,"恭喜[ " + cm.getPlayer().getName() + "] 成功兑换了巨无霸品克缤 ，大家一起祝贺他(她)吧!");
                    cm.dispose();
                } else {
                    cm.sendOk("积分不足!");
                    cm.dispose();
                }	
				} else if (selection == 3) {
                if (cm.getcz() >= 1000 ) {
                    cm.gaincz(-10);                   
		            cm.gainItem(4251202, 1);
					cm.sendOk("恭喜你,成功兑换了#v4251202##z4251202#!\r\n");
                    cm.worldMessage(6,"恭喜[ " + cm.getPlayer().getName() + "] 成功兑换了高等五彩水晶 ，大家一起祝贺他(她)吧!");
                    cm.dispose();
                } else {
                    cm.sendOk("积分不足!");
                    cm.dispose();
                }	
                } else if (selection == 4) {
                if (cm.getcz() >= 10 ) {
                    cm.gaincz(-10);                   
		            cm.gainItem(4001002, 5);
					cm.sendOk("恭喜你,成功兑换了#v4001002##z4001002#!\r\n");
                    cm.worldMessage(6,"恭喜[ " + cm.getPlayer().getName() + "] 成功兑换了小说 ，大家一起祝贺他(她)吧!");
                    cm.dispose();
                } else {
                    cm.sendOk("积分不足!");
                    cm.dispose();
                }					
}}}}
