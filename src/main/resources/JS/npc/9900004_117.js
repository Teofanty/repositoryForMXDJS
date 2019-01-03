/*兑换NPC 作者:bay 廖*/
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

            cm.sendOk("欢迎光临！");
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
			//text +=" 兑换:#v4000040#1 HP/MP+50\r\n\r\n";
            text +=" 兑换所需要材料:1个#v4001083#\r\n";
            text += "#L1##d我要兑换#v4000463#\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
		if (cm.getInventory(1).isFull(1)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
        } else if (!cm.haveItem(4001083, 1)) {
                cm.sendOk("#v4001083#不足1个！");
				cm.dispose();
		} else if (cm.getMeso() <=1) {
                cm.sendOk("金币不足1金币！");
				cm.dispose();
		} else {
                cm.gainItem(4001083,-1);//这里扣除物品
                cm.gainMeso(-1);
cm.gainItem(4000463,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//这里给物品,后面的是属性
//赋值物品代码,力量,敏捷,智力,运气,HP,MP,攻击力,魔法力,防御力,魔法防御力,命中率,回避率,移动速度,跳跃力
cm.dispose();
            }
			}
		}
    }