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
                cm.sendNext("如果需要抵用券中介服务在来找我吧。");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            var gsjb = "";
            gsjb = "  #e此处兑换 #b-点券 -\r\n\r\n";
            gsjb += "  当前点券:#r" + cm.getPlayer().getCSPoints(1) + "#k#d";
            gsjb += "  当前抵用券:#r" + cm.getPlayer().getCSPoints(2) + "#k\r\n#d";
            //gsjb +="#L0##b1个#v4000463#兑换200点券 #l\r\n\r\n";
            gsjb += "#L1##b50个#v4001176#+50W兑换1个#v4020009##l\r\n\r\n\r\n";
            gsjb += "#L4##b枫叶兑换抵用券 #fUI/Basic/BtHide3/mouseOver/0# #b比例 - (#r1 = 1#b)#l\r\n\r\n\r\n";
            gsjb += "#L5##b枫叶兑换点券 #fUI/Basic/BtHide3/mouseOver/0# #b比例 - (#r1 = 1#b)#l\r\n\r\n\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (selection == 0) {
                if (!cm.haveItem(4000463, 1)) {
                    cm.sendOk("你没有1个#v4000463##z4000463#。");
                    cm.dispose();
                } else {
                    cm.gainItem(4000463, -1);
                    cm.gainDJ(+200);
                    cm.sendOk("恭喜你成功兑换了200点券。");
                    cm.dispose();
                }
            } else if (selection == 1) {
                if (cm.getInventory(1).isFull(0)) {//判断第一个也就是装备栏的装备栏是否有一个空格
                    cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换.");
                    cm.dispose();
                } else if (!cm.haveItem(4001176, 50)) {
                    cm.sendOk("你没有50个#v4001176##z4001176#。");
                    cm.dispose();
                } else if (!cm.getMeso() >= 500000) {//判断多少金币
                    cm.sendOk("你没有50w。");
                    cm.dispose();
                } else {
                    cm.gainItem(4001176, -50);
                    cm.gainMeso(-500000);//金币
                    cm.gainItem(4020009, 1);
                    cm.sendOk("恭喜你成功兑换了1个#v4020009##z4020009#。");
                    cm.dispose();
                }
            } else if (selection == 3) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4001126).iterator();
                if (cm.haveItem(4001126) == 0) {
                    cm.sendNext("您的帐户#v4001126#数量不足兑换点券。");
                    status = -1;
                } else {
                    beauty = 4;
                    cm.sendGetNumber("请输入#b#z4001126##k兑换#r点券#k的数量:\r\n#b比例 - (#r1 = 1#b)\r\n你的账户信息 - \r\n点券数量: #r" +
                        cm.getPlayer().getCSPoints(1) + "   \r\n", 1, 1, iter.next().getQuantity());

                }

            } else if (selection == 4) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4001126).iterator();
                if (cm.haveItem(4001126) == 0) {
                    cm.sendNext("您的帐户#v4001126#数量不足兑换抵用券。");
                    status = -1;
                } else {
                    beauty = 3;
                    cm.sendGetNumber("请输入#b#z4001126##k兑换#r抵用券#k的数量:\r\n#b比例 - (#r1 = 1#b)\r\n你的账户信息 - \r\n抵用券数量: #r" +
                        cm.getPlayer().getCSPoints(2) + "   \r\n", 1, 1, iter.next().getQuantity());

                }
            } else if (selection == 5) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4001126).iterator();
                if (cm.haveItem(4001126) == 0) {
                    cm.sendNext("您的帐户#v4001126#数量不足兑换点券。");
                    status = -1;
                } else {
                    beauty = 4;
                    cm.sendGetNumber("请输入#b#z4001126##k兑换#r点券#k的数量:\r\n#b比例 - (#r1 = 1#b)\r\n你的账户信息 - \r\n点券数量: #r" +
                        cm.getPlayer().getCSPoints(1) + "   \r\n", 1, 1, iter.next().getQuantity());

                }

            }


        } else if (status == 2) {
            if (beauty == 1) {
                if (selection <= 0) {
                    cm.sendOk("输入的兑换数字错误。");
                    cm.dispose();
                    /*
                     } else if (selection >= 200) {
                     sl = (selection / 200) + 1;
                     } else {
                     sl = 3;
                     }

                     //if(cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull()){
                     if (cm.getSpace(4) < sl) {
                     cm.sendOk("你的背包“其它”空间不足!请至少有" + sl + "个空间以上.\r\n如果上面有出现小数的话请入位!\r\n如：出现<至少有7.5个空间以上>那么您就需要留8个空间!");
                     cm.dispose();
                     */
                } else if (cm.getPlayer().getCSPoints(2) >= selection * 300) {
                    cm.gainD(-selection * 300);
                    cm.gainItem(4001126, selection);
                    cm.sendOk("您成111功将 #r " + (selection * 300) + " #k抵用券 兑换成#v4001126# x #r" + selection + " #k")
                } else {
                    cm.sendNext("兑换" + selection + "个#z4001126##v4001126# 需要#r " + (selection * 300) + "#k抵用券。您没有足够的抵用券。");
                    cm.dispose();
                }
            } else if (beauty == 2) {
                if (cm.getPlayer().getCSPoints(1), selection) {
                    cm.getPlayer().modifyCSPoints(1, -selection, true);//扣除点券
                    cm.gainItem(4001126, selection);
                    cm.sendOk("您成功将#r " + (selection) + " 点券#k换为#z4001126##v4001126# x #r" + (selection) + " #k枫叶。");
                } else {
                    cm.sendNext("您的输入的数量错误，无法兑换枫叶。");
                    cm.dispose();
                }

            } else if (beauty == 3) {
                if (cm.haveItem(4001126, selection)) {
                    cm.gainItem(4001126, -selection);
                    cm.gainD(+Math.floor(selection));
                    cm.sendOk("您成功将#z4001126##v4001126# x #r" + selection + " #k换为#r " + Math.floor(selection) + " #k抵用券。");
                } else {
                    cm.sendNext("您的输入的数量错误，无法兑换抵用券。");
                    cm.dispose();
                }

            } else if (beauty == 4) {
                if (cm.haveItem(4001126, selection)) {
                    cm.gainItem(4001126, -selection);
                    cm.gainDJ(+Math.floor(selection));
                    cm.sendOk("您成功将#z4001126##v4001126# x #r" + selection + " #k换为#r " + Math.floor(selection) + " #k点券。");
                } else {
                    cm.sendNext("您的输入的数量错误，无法兑换点券。");
                    cm.dispose();
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}
