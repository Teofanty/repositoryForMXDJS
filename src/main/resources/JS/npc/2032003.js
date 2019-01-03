/* ==================
 脚本类型:  NPC	    
 脚本作者： 维多利亚  
 联系方式： 297870163
 =====================
 */
 
var status;
 
function start() {
    status = -1;
    action(1, 0, 0);
}
 
function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("恭喜你得到这个！ 嗯，我想我最好给你你的 #b#v4031062##z4031062##k.  你一定赢了!");
    }
    else if (status == 1) {
	cm.sendNextPrev("那么，时间让你开始.");
    } else if (status == 2) {
	if (cm.getInventory(4).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格		
	cm.sendOk("#b请保证其它栏栏位至少有1个空格,否则无法领取.");		
	cm.dispose();
	} else {
	cm.startQuest(100202);
	cm.completeQuest(100202);
    cm.gainExp(10000);
	cm.gainItem(4031062,1);
	cm.warp(211042300);
	cm.dispose();
	}
    }
}