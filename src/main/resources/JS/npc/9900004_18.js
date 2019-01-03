/* ==================
 脚本类型:  NPC	    
 脚本作者：月亮     
 联系方式：2412614144
 =====================
 */

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || mode == 0) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		if (status == 0) {
			cm.sendSimple ("1天权 省力又省心还省精 妈妈再也不用担心你的爆肝了 \r\n#b#L0#1天权双倍经验卡 [1000点卷]#l\r\n#L1#1天权双倍爆率卡 [1000点卷]#l\r\n");
		} else if (status == 1) {
			if (selection == 0) {
				if (cm.getPlayer().getCSPoints(1) < 1000) {		
					cm.sendOk("你没有足够的点卷。无法购买！");
					cm.dispose();
					return;
				}
				else if (cm.getPlayer().getLevel() < 1) {
					cm.sendOk("没点卷还脸丑 还想购买#b1天权双倍经验卡#k.去去去!去买3小时权的 ");
					cm.dispose();
					return;
				}
				    cm.gainItem(5210002,1,1);
					cm.gainDJ(-1000);
					cm.sendOk("  肝哥,购买#b1天权双倍经验卡#k成功了 去拼命爆肝吧 凤姐在比武招亲 谁第一就能娶她 "); 
					cm.dispose(); 
					return; 	
				} 
			
			if (selection == 1) {
				if (cm.getPlayer().getCSPoints(1) < 1000) {
					cm.sendOk("你没有足够的点卷。无法购买！");
					cm.dispose();
					return;
				}
				else if (cm.getPlayer().getLevel() < 2) {
					cm.sendOk("没点卷还脸丑 还想购买#b1天权双倍爆率卡#k.去去去!去买3小时权的 ");
					cm.dispose();
					return;
				}
				    cm.gainItem(5360000,1,1);
					cm.gainDJ(-1000);
					cm.sendOk("  肝哥,购买#b1天权双倍爆率卡#k成功了 多爆点 晚上做嫖资 容嬷嬷在等着你 "); 
					cm.dispose(); 
					return; 	
				} 
			if (selection == 2) {
				if (cm.getPlayer().getCSPoints(1) < 10000) {
					cm.sendOk("你没有足够的点卷。无法购买！");
					cm.dispose();
					return;
				}
				else if (cm.getPlayer().getLevel() < 200) {
					cm.sendOk("你至少需要#b200#k级才可购买#b赤羚龙#k.加油吧！欢迎再次光临！");
					cm.dispose();
					return;
				}
				    cm.gainItem(1912000,1);
				    cm.gainItem(1902002,1) ;
					cm.gainDJ(-10000);
					cm.teachSkill(1004,1,1);
					cm.sendOk("恭喜你购买#b赤羚龙#k成功！"); 
					cm.dispose(); 
					return; 	
				} 
			}
	}
}
