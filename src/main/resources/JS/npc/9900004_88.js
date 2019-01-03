/*
 * @维多
 * @国庆币兑换
 */
//---------变量区-------
var 红色箭头 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2# ";

importPackage(net.sf.sunms.client);
var status = 0;
var zones = 0;
//4000425
/**/
var ItemId = Array(
        //物品1         物品2    货币    数量
    Array(4001254,4031456,500, "1"),//闪耀的冒险岛纪念币
    Array(2340000,4031456,500, "2"),//兑换 祝福卷轴
    Array(1082149,4031456,300, "3"),//兑换 工地手套(褐）
    Array(1102041,4031456,300, "4"),//兑换 浪人披风(粉 )
    Array(1102042,4031456,300, "5"),//兑换 浪人披风(紫)
    Array(2040025,4031456,200, "6"),//头盔智力卷轴60%
    Array(2040024,4031456,200, "7"),//头盔智力卷轴10%
    Array(2040804,4031456,200, "8"),//手套攻击卷轴60%
    Array(2040805,4031456,200, "9"),//手套攻击卷轴10%
    Array(2040817,4031456,200, "10"),//手套魔力卷轴60%
    Array(2040816,4031456,200, "11"),//手套魔力卷轴10%
    Array(2040914,4031456,200, "12"),//盾牌攻击卷轴60%
    Array(2040915,4031456,200, "13"),//盾牌攻击卷轴10%
    Array(2040919,4031456,200, "14"),//盾牌魔力卷轴60%
    Array(2040920,4031456,200, "15"),//盾牌魔力卷轴10%
    Array(2041307,4031456,200, "16"),//腰带敏捷卷轴60%
    Array(2041308,4031456,200, "17"),//腰带敏捷卷轴10%
    Array(2041301,4031456,200, "18"),//腰带力量卷轴60%
    Array(2041302,4031456,200, "19"),//腰带力量卷轴10%
    Array(2041310,4031456,200, "20"),//腰带运气卷轴60%
    Array(2041311,4031456,200, "21"),//腰带运气卷轴10%
    Array(2041304,4031456,200, "22"),//腰带智力卷轴60%
    Array(2041305,4031456,200, "23"),//腰带智力卷轴10%
    Array(2040301,4031456,200, "24"),//耳环智力卷轴60%
    Array(2040302,4031456,200, "25"),//耳环智力卷轴10%
    Array(2040317,4031456,200, "26"),//耳环敏捷卷轴60%
    Array(2040318,4031456,200, "27")//耳环敏捷卷轴10%   最后一颗结尾去掉, 
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
            sl = cm.getPlayer().getItemQuantity(4031456, false);
            StringS = "#b#n   角色剩余:" + sl + " 颗#v4031456#";
            for (var i = 0; i < ItemId.length; i++) {
                StringS += "\r\n#L" + i + "##b" + 红色箭头 + "#b#v " + ItemId[i][1] + " #" + ItemId[i][2] + "#n颗#k 兑换 #r#v" + ItemId[i][0] + "##z" + ItemId[i][0] + "##k#l";
            }
            cm.sendSimple(StringS, 2);
            zones == 0;

        } else if (status == 1) {
            if (zones == 0) {
                    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b请保证装备栏位至少有2个空格,否则无法购买.");
                        cm.dispose();
                    } else if (cm.getInventory(2).isFull()){
                        cm.sendOk("#b请保证消耗栏位至少有2个空格,否则无法购买.");
                        cm.dispose();
                    } else if (cm.getInventory(3).isFull()){
                        cm.sendOk("#b请保证设置栏位至少有2个空格,否则无法购买.");
                        cm.dispose();
                    } else if (cm.getInventory(4).isFull()){
                        cm.sendOk("#b请保证其他栏位至少有2个空格,否则无法购买.");
                        cm.dispose();
                } else if (cm.haveItem(ItemId[selection][1], ItemId[selection][2])) {
                    cm.gainItem(ItemId[selection][1], -ItemId[selection][2]);
                    cm.gainItem(ItemId[selection][0], 1);
                    cm.sendOk("兑换成功，请检背包!"); 
                    cm.dispose();
                } else {
                    cm.sendOk("#v4031456#不足！");
                    cm.dispose();
                }
            }
        }
    }
}	