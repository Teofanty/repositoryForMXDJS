function start() {
    status = -1;

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
		if(cm.getLevel() >= 100){//判断等级
		var 兑换次数 = 9999;
		} else if(cm.getLevel() >= 70){//判断等级
		var 兑换次数 = 40;
		} else if(cm.getLevel() >= 50){//判断等级
		var 兑换次数 = 15;
		} else {
		var 兑换次数 = 5;
		}
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "欢迎来到兑换血量管理员\r\n"
			text += "#n#k当前等级:#r"+cm.getLevel()+"#k级\r\n可以兑换:#r"+兑换次数+"#k次\r\n当前已经兑换了:#r"+cm.getPlayer().getOneTimeLog("dhHP")+"#k次\r\n当前已经兑换了:#r"+cm.getPlayer().getOneTimeLog("dhMP")+"#k次\r\n" 
			text += "#n#k当前点卷：#r" +cm.getPlayer().getCSPoints(1) +  "#d点\r\n" 
            text += "#L1##e#d2000点兑换200血#l\r\n\r\n"
			text += "#L2##e#d2000点兑换200蓝#l\r\n\r\n"
			cm.sendOk(text); 
        } else if (selection == 1) {
			if(cm.getPlayer().getOneTimeLog("dhHP") >= 兑换次数){//判断永久记录
			cm.sendOk("你当前等级只可以兑换#r"+兑换次数+"#k次,请努力升级后在来找我吧!");
            cm.dispose();
			} else if(cm.getPlayer().getCSPoints(1) < 2000){//判断点券
			cm.sendOk("你没有#r2000#k点券,无法进行兑换!");
            cm.dispose();
			} else {
			cm.gainDJ(-2000);//给点券第二种函数
			cm.getPlayer().setOneTimeLog("dhHP");//给永久记录
			cm.getPlayer().addmaxHP(+200);
			cm.sendOk("恭喜你.成功的兑换了200点血量!");
            status = -1;

        }
		} else if (selection == 2) {
			if(cm.getPlayer().getOneTimeLog("dhMP") >= 兑换次数){//判断永久记录
			cm.sendOk("你当前等级只可以兑换#r"+兑换次数+"#k次,请努力升级后在来找我吧!");
            cm.dispose();
			} else if(cm.getPlayer().getCSPoints(1) < 2000){//判断点券
			cm.sendOk("你没有#r2000#k点券,无法进行兑换!");
            cm.dispose();
			} else {
			cm.gainDJ(-2000);//给点券第二种函数
			cm.getPlayer().setOneTimeLog("dhMP");//给永久记录
			cm.getPlayer().addmaxMP(+200);
			cm.sendOk("恭喜你.成功的兑换了200点蓝量!");
            status = -1;

        }
    }
}}