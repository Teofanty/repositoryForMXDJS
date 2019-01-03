/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = 0;
var item;
var selected;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.dispose();
	return;
    } else if (status == 2 && mode == 0) {
	cm.sendNext("这个 " + item + " 不好制作，准备好材料再来找我。");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
		if (cm.isQuestActive(20528) ==1 ) {//判断判断任务
	    cm.sendNext("是奇里社让你来找我的？？");
	} else {
	    cm.sendOk("你没有接受驯养提提奥的任务!")
	    cm.dispose();
	}
    } else if (status == 1) {
	cm.sendSimple("你想要做什么#b\r\n#L0#第一阶段浓缩断奶食#l\r\n\r\n#L1#第二阶段浓缩断奶食#l\r\n\r\n#L2#第三阶段浓缩断奶食#l");
    } else if (status == 2) {
	selected = selection;
	if (selection == 0) {
	    item = "#v4032196##r#z4032196#";
	    cm.sendYesNo("所以，你想要做" + item + "? \r\n那么你需要的材料有:#b30个#v4000236##z4000236#+30个#v4000237##z4000237#+30个#v4000238##z4000238#+200W金币");
	} else if (selection == 1) {
	    item = "#v4032197##r#z4032197#";
	    cm.sendYesNo("所以，你想要做" + item + "? \r\n那么你需要的材料有: #b30个#v4000239##z4000239#+30个#v4000241##z4000241#+30个#v4000242##z4000242#+300W金币");
	} else if (selection == 2) {
	    item = "#v4032198##r#z4032198#";
	    cm.sendYesNo("所以，你想要做" + item + "? \r\n那么你需要的材料有: #b30个#v4000262##z4000262#+30个#v4000263##z4000263#+30个#v4000265##z4000265#+400W金币");
	}
    } else if (status == 3) {
	if (selected == 0) {
	    if (!cm.haveItem(4000236,30)) { 
		cm.sendOk("#v4000236##z4000236#不足！");
        cm.dispose();
		} else if (!cm.haveItem(4000237,30)) {
		cm.sendOk("#v4000237##z4000237#不足！");
        cm.dispose();
		} else if (!cm.haveItem(4000238,30)) {
		cm.sendOk("#v4000238##z4000238#不足！");
        cm.dispose();
		} else if (cm.getMeso() < 2000000){//判断多少金币
		cm.sendOk("你没有200万金币！");
        cm.dispose();
	    } else {
		cm.gainMeso(-2000000);
		cm.gainItem(4000236, -30);
		cm.gainItem(4000237, -30);
		cm.gainItem(4000238, -30);
		cm.gainItem(4032196, 3);
		cm.sendOk("做好了你要的 " + item + "。");
		cm.dispose();
	    }
	} else if (selected == 1) {
	    if (!cm.haveItem(4000239,30)) { 
		cm.sendOk("#v4000239##z4000239#不足！");
        cm.dispose();
		} else if (!cm.haveItem(4000241,30)) {
		cm.sendOk("#v4000241##z4000241#不足！");
        cm.dispose();
		} else if (!cm.haveItem(4000242,30)) {
		cm.sendOk("#v4000242##z4000242#不足！");
        cm.dispose();
		} else if (cm.getMeso() < 3000000){//判断多少金币
		cm.sendOk("你没有300万金币！");
        cm.dispose();
	    } else {
		cm.gainMeso(-3000000);
		cm.gainItem(4000239, -30);
		cm.gainItem(4000241, -30);
		cm.gainItem(4000242, -30);
		cm.gainItem(4032197, 3);
		cm.sendOk("做好了你要的 " + item + "。");
		cm.dispose();
	    }
	} else if (selected == 2) {
	    if (!cm.haveItem(4000262,30)) { 
		cm.sendOk("#v4000262##z4000262#不足！");
        cm.dispose();
		} else if (!cm.haveItem(4000263,30)) {
		cm.sendOk("#v4000263##z4000263#不足！");
        cm.dispose();
		} else if (!cm.haveItem(4000265,30)) {
		cm.sendOk("#v4000265##z4000265#不足！");
        cm.dispose();
		} else if (cm.getMeso() < 4000000){//判断多少金币
		cm.sendOk("你没有400万金币！");
        cm.dispose();
	    } else {
		cm.gainMeso(-4000000);
		cm.gainItem(4000262, -30);
		cm.gainItem(4000263, -30);
		cm.gainItem(4000265, -30);
		cm.gainItem(4032198, 3);
		cm.sendOk("做好了你要的 " + item + "。");
		cm.dispose();
	    }
	}
	cm.dispose();
    }
}