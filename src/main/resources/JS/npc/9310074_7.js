/* ==================
 脚本类型: NPC	    
 脚本作者: 游戏盒团队-维多利亚 
 联系扣扣: 297870163
 =====================
 */
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
var status = 0;
var zones = 0;
var ItemId = Array(
        //物品1         物品2    货币    数量
	Array(1072664,4031456,150,400,4020009, "0"),
    Array(1082432,4031456,150,400,4020009, "1"),
	Array(1032142,4031456,80,80,4020009, "2"),
	Array(1052460,4031456,200,500,4020009, "3")
	
        //如需其它道具兑换，请按照此格式自行添置。
        //代码,价格,介绍
);


function start() {
	 status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
cm.dispose();
    } else {
if (status >= 0 && mode == 0) {
    cm.dispose();
    return;
}
if (mode == 1)
    status++;
else
    status--;
if (status == 0) {

var selStr = "您好，请选择您需要兑换的物品\r\n★#r角色剩余:#v4031456# x " + cm.getPlayer().getItemQuantity(4031456, false) + " 枚!\t#v4020009# x " + cm.getPlayer().getItemQuantity(4020009, false) + " 枚!";
for (var i = 0; i < ItemId.length; i++) {
    selStr += "\r\n#L" + i + "##i" + ItemId[i][0] + "##z" + ItemId[i][0] + "##k = #r#v " + ItemId[i][1] + " ##k X#e" + ItemId[i][2] + "#n个+" + ItemId[i][3] + "个#v " + ItemId[i][4] + " ##l";
   }
cm.sendSimple(selStr);
    } else if (status == 1) {
		 if (zones == 1) {
cm.sendNext("你让我帮你做什么呢？", 2);
zones = 2;
    } else if (zones == 0) {
if (cm.getInventory(1).isFull(0)){//判断第2个也就是装备栏是否有一个空格	
                    cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法购买.");	
                    cm.dispose();
} else if (!cm.haveItem(ItemId[selection][1], ItemId[selection][2])) {
	cm.sendOk("你没有足够的#v4031456##z4031456#兑换。");
     cm.dispose();
} else if (!cm.haveItem(ItemId[selection][4], ItemId[selection][3])) {
	cm.sendOk("你没有足够的#v4020009##z4020009#兑换。");
     cm.dispose();
					 } else {
                    cm.gainItem(ItemId[selection][1], -ItemId[selection][2]);
					cm.gainItem(ItemId[selection][4], -ItemId[selection][3]);
                    cm.gainItem(ItemId[selection][0], 1);
                    cm.getPlayer().saveToDB(true, true);
                    cm.sendOk("兑换成功,商品#i" + ItemId[selection][0] + ":# #b#t" + ItemId[selection][0] + "##k已送往背包。");
                   status = -1;
}

    }}}}
