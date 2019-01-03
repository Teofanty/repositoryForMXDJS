
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) { 
var 序号=0;
		var 最大值=cm.getPMAX(序号);
		var 自己捐献数量 = cm.getPNew(序号);
		var 世界等级= cm.getMax();
	if (mode == -1) {
        cm.dispose();
    } else {
		if (mode == 1) {
			status++;
		} else {
			cm.dispose();
			return;
		}
    /*if (cm.getClient().getChannel() >= 2) {
        cm.sendNext("只能在1频道进行捐献.");
        cm.dispose();
        return;
    }*/
    if (status == 0) {

			if(世界等级==200){
				
		    cm.sendOk("魔王的封印已经解开！世界等级已到达极限200，你们拥有极限的力量可以打败魔王去了！");
			cm.dispose();
			return;	
		}else{
		cm.sendNext("冒险岛世界被魔王暴力封印！\r\n\r\n当前抵用券:"+cm.getPlayer().getCSPoints(2)+"\r\n\r\n收集#v4001128#炸开封印，突破等级上限！\r\n当前世界等级上限：#r"+世界等级);
		}
		
    } else if (status == 1) {
		var textx = "#v4001128#收集现状 \n\r #B" + cm.getPercentage(自己捐献数量,最大值) + "# "+cm.getPercentage(自己捐献数量,最大值)+"%\n\r 如果我们把它们集中起来，世界等级封印就解除了一分……\r\n";
		if(cm.getPlayer().isGM()){
			cm.sendSimple(textx+"#r(只有GM才会显示)#k\n\r #b#L0#为世界捐献#v4001128##l#k  \n\r #L2#清理进度(只有GM才会显示)#l\n\r #L3#初始化世界等级进度(只有GM才会显示)#l#k");
			
		//cm.sendSimple("解锁该地图需要用到拼图的力量-#b火药桶#k \n\r #b#L0# 我把火药桶带来了。#l#k \n\r #b#L1# 请告诉我现在的收集进度。#l#k \n\r #b#L2# 清理记忆拼图(只有GM才会显示)。 #l#k \n\r #b#L3# 初始化世界等级(只有GM才会显示)。 #l#k\n\r\n\r #b< 在库存的记忆拼图数 : "+自己捐献数量+" 最大值 "+最大值+"个 >#k");
		}else{
			cm.sendSimple(textx+"\n\r #b#L0#为世界捐献#v4001128##l#k");
		}
    } else if (status == 2) {
        if (selection == 1) {
            cm.sendNext("火药桶收集现状 \n\r #B" + cm.getPercentage(自己捐献数量,最大值) + "# "+cm.getPercentage(自己捐献数量,最大值)+"%\n\r 如果我们把它们集中起来，该地图的封印就解除了……");
            //cm.safeDispose();
        cm.dispose();
        } else if (selection == 2) {
			 
	  cm.gainPNew(-cm.getPNew(序号),序号);
        cm.sendNext("清理成功.");
        cm.dispose();
		} else if (selection == 3) {
		cm.setPNewMAX(0,200,序号);	 //设置物品最大值
	  cm.setMax(10,1);//世界等级为10
        cm.sendNext("世界等级重重置到了10级.");
        cm.dispose();
        } else if (selection == 0) {
             cm.sendGetNumber("你把#z4001128#带来了吗？很好写上你捐献的个数.............#k", 1, 1, 100000);
        }
    } else if (status == 3) {
        var num = selection;
        if (num == 0) {
            cm.sendOk("小子，你包里真的有#v4001128##z4001128#吗？\r\n 别拿这种事开玩笑！");
			cm.dispose();
			return;
		}else if(最大值 < 自己捐献数量 + num){
            cm.sendOk("物品数量超过了"+ (自己捐献数量 + num - 最大值) +"个！");
			cm.dispose();
			return;
        } else if (cm.haveItem(4001128, num)) {
            cm.gainItem(4001128, -num);
			cm.getPlayer().modifyCSPoints(2,+Math.floor(1 * num));
            
		    cm.gainPNew(num,序号);
			
			cm.worldMessage(0x06,"玩家 "+cm.getPlayer().getName()+" 为世界捐献【火药桶】"+num+"个,封印力量削减一分，并获得" + Math.floor(1 * num) + "抵用卷 ");
			if(cm.getPercentage(cm.getPNew(序号),最大值)==100){
			cm.getPlayer().MapEffectlaba("火药桶爆炸！封印削弱！世界等级提升至"+(世界等级+10));	
			cm.worldMessage(0x06,"玩家 "+cm.getPlayer().getName()+" 捐献是发现有异动！世界等级提升至"+(世界等级+10));
			cm.setMax((世界等级+10),1);//增加世界等级
			cm.setPNewMAX(0, (最大值*2),序号);
			}
			

        }else{
            cm.sendOk("小子，你包里真的有拼图的力量吗？\r\n 别拿这种事开玩笑！");
		}
        cm.dispose();
		}
	}
}
