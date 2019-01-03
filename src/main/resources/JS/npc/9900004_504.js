/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 function start() {
	var suiji = Math.floor((Math.random()*200)+100);
                if (cm.haveItem(2022465, 1)) {
					cm.gainItem(2022465,-1);
					cm.gainD(+suiji);
                    cm.sendOk("您成功将#r#v2022465##z2022465##k兑换了#r" + suiji + " #k抵用券。");
					cm.laba(cm.getPlayer().getName() + " 打开了" + " : " + "[心跳箱子]兑换了" + suiji + " 点抵用券",11);
                cm.dispose();
                } else {
                    cm.sendNext("您没有#v2022465##z2022465##k，无法兑换抵用券。");
                    cm.dispose();
                }
	}