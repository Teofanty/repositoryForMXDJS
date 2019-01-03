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
			cm.sendSimple("您的当前积分为：#r"+ cm.getcz() +"#k\r\n#L0#10点积分兑换#v4001266##z4001266##l\r\n#L1#200点积分兑换#v4001094##z4001094##l");
        } else if (status == 1) {
            if (selection == 0) {
				if (cm.getcz() >= 10 ) {
                    cm.gaincz(-10);
                    cm.gainItem(4001266, 1);				
                    cm.sendOk("成功兑换了#v4001266##z4001266#");
                    cm.dispose();
                } else {
                    cm.sendOk("积分不足!");
                    cm.dispose();
                }	
        } else if (selection == 1) {	
                if (cm.getcz() >= 200 ) {
                    cm.gaincz(-200);
                    cm.gainItem(4001094, 1);				
                    cm.sendOk("成功兑换了#v4001094##z4001094#");
                    cm.dispose();
                } else {
                    cm.sendOk("积分不足!");
                    cm.dispose();
                }			
}
}
}
}