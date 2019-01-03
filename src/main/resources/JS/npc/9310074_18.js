function start() {
    status = -1;

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
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
            if (cm.getPlayer().getMapId() == 108010101 || cm.getPlayer().getMapId() == 108010201 || cm.getPlayer().getMapId() == 108010301 || cm.getPlayer().getMapId() == 108010401 || cm.getPlayer().getMapId() == 108010501) {
                cm.sendOk("本地图暂时无法使用使用拍卖功能");
                cm.dispose();
                return;
            }
            //cm.laba(cm.getName() + "" + " : " + "成功进行了第二次转职" + jobName + ".....~",11);				
            //cm.laba(cm.getPlayer().getName() + " [征集令]" + " : " + "[废弃都市组队任务]需要勇士一起完成",9);
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "               #v3994071##v3994084##v3994062##v3994071##v3994082##v3994062#\r\n" //showghrs
            //text += "               #e#d当天在线时长：" + cm.getPlayer().getzxsj() + " 分钟\r\n"//2
			
           text += "#L20##e#d60*#v4001176#+1000抵用+250W兑换#v2340000##l\r\n\r\n"
			//text += "#L13##e#d#v1382047#可兑换25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"
			//text += "#L14##e#d#v1382045#可兑换25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"
			//text += "#L15##e#d#v1382046#可兑换25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"
			//text += "#L16##e#d#v1382048#可兑换25*#v4000245#+25*#v4000244#+10*#v4020009##l\r\n\r\n"
            cm.sendOk(text); 
			//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
        } else if (selection == 1) {
			if(cm.getPlayer().getBossLog("签到") >= 1){//判断签到记录
			    cm.sendOk("你今天已经签过到,请明天再来签到!");
                cm.dispose();
			} else if(cm.getLevel() < 70){//判断等级
					cm.sendOk("你没有达到70级无法签到!70级以后在来找我吧!");
					cm.dispose();
			} else if (!cm.haveItem(4000487, 10)) {//判断物品
					cm.sendOk("你没有10个#v4000487##z4000487#,无法进行签到!");
					cm.dispose();
			} else{
					cm.gainItem(4000487, -10);//扣除物品
					cm.gainExp(50000);//给5万经验的意思
					cm.gainItem(4032398, 1);//给物品
					cm.sendOk("恭喜你,签到成功!");
					cm.getPlayer().setBossLog('签到');//给签到记录
					cm.worldMessage(5,"玩家：["+cm.getName()+"]成功进行了签到,大家恭喜他/她吧.");
					cm.dispose();
			}
		} else if (selection == 20) {
			if (cm.getInventory(2).isFull(0)){
				cm.sendOk("#b请保证消耗栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4001176,60)) {//判断物品
			    cm.sendOk("#b你没有60个#v4001176##z4001176#");
				cm.dispose();
			} else if (!cm.getMeso() >= 2500000){//判断多少金币
			cm.sendOk("#b你没有足够的金币");
				cm.dispose();
			} else if(!cm.getPlayer().getCSPoints(1) >= 1000){//判断抵用券
			cm.sendOk("#b你没有足够的抵用");
				cm.dispose();
			} else{
				cm.gainD(-1000);//抵用券
                cm.gainMeso(-2500000);//金币
				cm.gainItem(4001176, -60);//给物品
				cm.gainItem(2340000, 1);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	
	}
		} else if (selection == 3) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b请保证其他栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (cm.haveItem(4000074, 200)) {//判断物品
				cm.gainItem(4000074, -200);//给物品
				cm.gainItem(4000487, 10);//给物品
				cm.sendOk("成功将200个#v4000074##z4000074#兑换了10个#v4000487##z4000487#!");
				cm.dispose();
			} else{
				cm.sendOk("你没有200个#v4000074##z4000074#!");
				cm.dispose();
			}
				} else if (selection == 5) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b请保证其他栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (cm.haveItem(4031025, 10)) {//判断物品
				cm.gainItem(4031025, -10);//给物品
				cm.gainItem(4000487, 10);//给物品
				cm.sendOk("成功将10个#v4031025##z4031025#兑换了10个#v4000487##z4000487#!");
				cm.dispose();
			} else{
				cm.sendOk("你没有10个#v4031025##z4031025#!");
				cm.dispose();
			}
		} else if (selection == 9) {
			if (cm.getInventory(2).isFull(0)){
				cm.sendOk("#b请保证消耗栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4032398,2)) {//判断物品
			    cm.sendOk("#b你没有2个#v4032398##z4032398#");
				cm.dispose();
			} else if (cm.getMeso() < 2500000){//判断多少金币
			    cm.sendOk("#b你的金币小于2500000元");
				cm.dispose();
			} else{
				cm.gainMeso(-2500000);//给物品
				cm.gainItem(4032398, -2);//给物品
				cm.gainItem(2340000, 1);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
			
			}
				} else if (selection == 10) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4032398,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4032398##z4032398#");
				cm.dispose();
			} else if (!cm.haveItem(4000039,200)) {//判断物品
			    cm.sendOk("#b你没有200个#v4000039##z4000039#");
				cm.dispose();
			} else if (!cm.haveItem(4000176,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v4000176##z4000176#");
				cm.dispose();
			} else{
				cm.gainItem(4032398, -1);//给物品4000176
				cm.gainItem(4000176, -1);//给物品4000176
				cm.gainItem(4000039, -200);//给物品
				cm.gainItem(4020009, 1);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
			
			}
			} else if (selection == 11) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4000232,300)) {//判断物品
			    cm.sendOk("#b你没有300个#v4000232##z4000232#");
				cm.dispose();
			} else if (!cm.haveItem(4000234,300)) {//判断物品
			    cm.sendOk("#b你没有300个#v4000234##z4000234#");
				cm.dispose();
			} else if (!cm.haveItem(4000231,300)) {//判断物品
			    cm.sendOk("#b你没有300个#v4000176##z4000176#");
				cm.dispose();
			} else{
				cm.gainItem(4000232, -300);//给物品4000176
				cm.gainItem(4000234, -300);//给物品4000176
				cm.gainItem(4000231, -300);//给物品
				cm.gainItem(4000245, 1);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
			
		}
		} else if (selection == 12) {
			if (cm.getInventory(4).isFull(0)){
				cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(4000232,300)) {//判断物品
			    cm.sendOk("#b你没有300个#v4000232##z4000232#");
				cm.dispose();
			} else if (!cm.haveItem(4000234,300)) {//判断物品
			    cm.sendOk("#b你没有300个#v4000234##z4000234#");
				cm.dispose();
			} else if (!cm.haveItem(4000231,300)) {//判断物品
			    cm.sendOk("#b你没有300个#v4000176##z4000176#");
				cm.dispose();
			} else{
				cm.gainItem(4000232, -300);//给物品4000176
				cm.gainItem(4000234, -300);//给物品4000176
				cm.gainItem(4000231, -300);//给物品
				cm.gainItem(4000244, 1);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
			
		}	
		} else if (selection == 13) {
			if (cm.getInventory(4).isFull(2)){
				cm.sendOk("#b请保证其它栏位至少有3个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(1382047,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v1382047##z1382047#");
				cm.dispose();
			} else{
				
				cm.gainItem(1382047, -1);//给物品
				cm.gainItem(4000244, 25);//给物品
				cm.gainItem(4000245, 25);//给物品
				cm.gainItem(4020009, 10);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 14) {
			if (cm.getInventory(4).isFull(2)){
				cm.sendOk("#b请保证其它栏位至少有3个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(1382045,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v1382045##z1382045#");
				cm.dispose();
			} else{
				
				cm.gainItem(1382045, -1);//给物品
				cm.gainItem(4000244, 25);//给物品
				cm.gainItem(4000245, 25);//给物品
				cm.gainItem(4020009, 10);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 15) {
			if (cm.getInventory(4).isFull(2)){
				cm.sendOk("#b请保证其它栏位至少有3个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(1382046,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v1382046##z1382046#");
				cm.dispose();
			} else{
				
				cm.gainItem(1382046, -1);//给物品
				cm.gainItem(4000244, 25);//给物品
				cm.gainItem(4000245, 25);//给物品
				cm.gainItem(4020009, 10);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
	} else if (selection == 16) {
			if (cm.getInventory(4).isFull(2)){
				cm.sendOk("#b请保证其它栏位至少有3个空格,否则无法兑换");
				cm.dispose();
			} else if (!cm.haveItem(1382048,1)) {//判断物品
			    cm.sendOk("#b你没有1个#v1382048##z1382048#");
				cm.dispose();
			} else{
				
				cm.gainItem(1382048, -1);//给物品
				cm.gainItem(4000244, 25);//给物品
				cm.gainItem(4000245, 25);//给物品
				cm.gainItem(4020009, 10);//给物品
				cm.sendOk("兑换成功!");
				cm.dispose();
	}
}}}