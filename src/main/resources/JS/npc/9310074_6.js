 
importPackage(Packages.client);
importPackage(Packages.client.inventory);


var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var mats;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("如果需要抵用卷中介服务在来找我吧。");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            var gsjb = "";
            gsjb ="  #e此处兑换 #b- 币管理员 -\r\n\r\n";
			gsjb +="#L1##b金币兑换#v4310018# #fUI/Basic/BtHide3/mouseOver/0# #b比例 - (#r600W = 1#b)#l\r\n\r\n";
            gsjb +="#L2##b经验兑换#v4310019# #fUI/Basic/BtHide3/mouseOver/0# #b比例 - (#r1000W = 1#b)#l\r\n\r\n";
			gsjb +="#L3##b点券兑换#v4310014# #fUI/Basic/BtHide3/mouseOver/0# #b比例 - (#r1500 = 1#b)#l\r\n\r\n";
			

			cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (selection == 1) {
               var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4310018).iterator();
               if (cm.getMeso() < 6000000){//判断多少金币
                    cm.sendNext("您的帐户金币不足600万。");
                     cm.dispose();
				} else if (cm.getInventory(4).isFull(0)){//判断第四个也就是其它栏的装备栏是否有一个空格
		        cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换.");
		        cm.dispose();
                } else {
                    beauty = 1;
                    cm.sendGetNumber("请输入#b#z4310018##k兑换#r金币#k的数量:\r\n#b比例 - (#r6000000 = 1#b)\r\n你的账户信息 - \r\n    金币数量: " +
                            cm.getMeso() + "\r\n", 1, 1,cm.getMeso() );

                }
			} else if (selection == 2) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4310019).iterator();
                if (cm.getPlayer().getExp() < 1000000){//判断多少经验
                    cm.sendNext("您的经验不足1000万。");
                     cm.dispose();
				} else if (cm.getInventory(4).isFull(0)){//判断第四个也就是其它栏的装备栏是否有一个空格
		        cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换.");
		        cm.dispose();
                } else {
                    beauty = 2;
                    cm.sendGetNumber("请输入#b#z4310019##k兑换#r经验#k的数量:\r\n#b比例 - (#r100W = 1#b)\r\n你的账户信息 - \r\n    经验数量: " +
                             cm.getPlayer().getExp() + "\r\n", 1, 1,cm.getPlayer().getExp());

                }
            } else if (selection == 3) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4310014).iterator();
                if (cm.getPlayer().getCSPoints(1) < 1500) {
                    cm.sendNext("您的帐户点券不足1500点。");
                    cm.dispose();
				} else if (cm.getInventory(4).isFull(0)){//判断第四个也就是其它栏的装备栏是否有一个空格
		        cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换.");
		        cm.dispose();
                } else {
                    beauty = 3;
                    cm.sendGetNumber("请输入#b#z4310014##k兑换#r点券#k的数量:\r\n#b比例 - (#r1500 = 1#b)\r\n你的账户信息 - \r\n点券数量: #r" +
                            cm.getPlayer().getCSPoints(1) + "   \r\n", 1, 1, cm.getPlayer().getCSPoints(1));

                }

            }


        } else if (status == 2) {
            if (beauty == 1) {
                 if (cm.getMeso() >= 6000000*selection){//判断多少金币
                    cm.gainMeso(- 6000000*selection);//扣除多少金币
                    cm.gainItem(4310018, selection);
                    cm.sendOk("您成功将 #r " + 6000000*selection + " #k金币 兑换成#r" + selection + " 个#v4310018#")
					status = -1;
                } else {
                    cm.sendNext("您没有#r " + 6000000*selection + "#k金币进行兑换。");
                    status = -1;
                }
            } else if (beauty == 2) {
                if (cm.getPlayer().getExp() >= 1000000*selection){//判断多少金币
                    cm.gainExp(- 1000000*selection);//扣除多少金币
                    cm.gainItem(4310019, selection);
                    cm.sendOk("您成功将 #r " + 1000000*selection + " #k经验 兑换成#r" + selection + " 个#v4310019#")
					status = -1;
                } else {
                    cm.sendNext("您没有#r " + 1000000*selection + "#k经验进行兑换。");
                    status = -1;
                }
            } else if (beauty == 3) {
                if(cm.getPlayer().getCSPoints(1) >= 1500*selection){//判断多少金币
                    cm.gainDJ(- 1500*selection);//扣除多少金币
                    cm.gainItem(4310014, selection);
                    cm.sendOk("您成功将 #r " + 1500*selection + " #k点券 兑换成#r" + selection + " 个#v4310014#")
					status = -1;
                } else {
                    cm.sendNext("您没有#r " + 1500*selection + "#k点券进行兑换。");
                    status = -1;
                }
			
        }
    }
}}
