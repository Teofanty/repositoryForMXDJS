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
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 60; i++) {
                text += "";
            }
            text +=" 需要35张#b#v4002000##z4002000##k\r\n每通过一关废弃获得一张#v4002000##z4002000#\r\n";
            text += "#L1##r兑换#v1072634##z1072634#\r\n";
            cm.sendOk(text);
        } else if (selection == 1) {
			if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格	
            cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法抽奖.");		
            cm.dispose();		
        } else if (cm.haveItem(4002000, 35)) {
                cm.gainItem(4002000,-35);
                cm.gainMeso(-1);
                cm.gainItem(1072634,1);
                cm.sendOk("合成#v1072634#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足!");
                cm.dispose();
            }
            }
			}
		}
    


