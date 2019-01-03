/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = 0;
var beauty = 0;

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
	cm.sendYesNo("如果你使用#i5152000#,我会随机变换你的脸……你还想使用#b#t5152056##k?");
    } else if (status == 1){
	var face = cm.getPlayerStat("FACE");
	var facetype;

	if (cm.getPlayerStat("GENDER") == 0) {
	    facetype = [20033,20035,20036,20061,20043,20044,20049,20050,20052,20077,20037,20046,20048,20053];
	} else {
	    facetype = [20133,20135,20136,20161,20143,20144,20149,20150,20152,20177,20137,20146,20148,20153];
	}
	for (var i = 0; i < facetype.length; i++) {
	    facetype[i] = facetype[i] + face % 1000 - (face % 100);
	}

	if (cm.setRandomAvatar(5152000, facetype) == 1) {
	    cm.sendNext("享受你的新脸型!");
	} else {
	    cm.sendNext("对不起，但没有一张一般会员卡,我不能对你进行整形手术。");
	}
	cm.dispose();
    }
}
