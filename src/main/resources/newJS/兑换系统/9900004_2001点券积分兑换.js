importPackage(net.sf.odinms.client);
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
importPackage(Packages.client.inventory);


var award1 = [2340000, 2049100];
var amount1 = [10, 10];
var need1 = [150];

var award2 = [1112793];
var amount2 = [1];
var need2 = [200];

var award3 = [2340000, 2049100];
var amount3 = [20, 20];
var need3 = [300];

var allNeed = [need1, need2, need3];
var allAward = [award1, award2, award3];
var allAmount = [amount1, amount2, amount3];
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

            var text = "";

            text += "\t\t\t#e欢迎来到#b充值奖励兑换中心 #k!#n\r\n\r\n";

            for( i = 0; i < allNeed.length; i++) {
                text += "#L" + i + "#" + allNeed[i][0] + '个豆豆，兑换:#l  \r\n\r\n'+ getNeedStr( allAward[i], allAmount[i]) + "\r\n\r\n";
            }
            cm.sendSimple(text);
        }  else if (selection != -1) {
            var targetNeed = allNeed[selection];
            var targetAward = allAward[selection];
            var targetAmont = allAmount[selection];

            if (cm.getPlayer().getBeans() < targetNeed[0]){
                cm.sendOk("豆豆数量不足！请确认好数量后再来。（兑换后豆豆显示数量需要换线或重登才会刷新）")
                cm.dispose();
                return;
        }

        cm.getPlayer().gainBeans(-targetNeed[0]);

        for (var i = 0; i < targetAward.length; i++) {
            cm.gainItem(targetAward[i], targetAmont[i]);
        }

        cm.sendOk("兑换成功！");
            cm.dispose();
        }
    }
}


function getNeedStr(award, amount) {
    var str = "";
    for (var i = 0; i < award.length; i++) {
        str += "     " + amount[i] + '个#r#v' + award[i] + '#' + "#z" + award[i] + "##b#l\r\n\r\n";
    }
    return str;
}

function giveEquipment(siwei, property, hmp, date, zhuangbeima) {
    var ii = MapleItemInformationProvider.getInstance();
    var type = ii.getInventoryType(zhuangbeima); //获得装备的类形
    var toDrop = ii.randomizeStats(ii.getEquipById(zhuangbeima)).copy(); // 生成一个Equip类
    var temptime = (System.currentTimeMillis() + date * 24 * 60 * 60 * 1000); //时间
    toDrop.setExpiration(temptime);
    toDrop.setFlag(1);//上锁
    toDrop.setStr(siwei); //给力量
    toDrop.setDex(siwei); //给敏捷
    toDrop.setInt(siwei); //给智力
    toDrop.setLuk(siwei); //给运气
    toDrop. setHp(hmp);//给HP
    toDrop. setMp(hmp);//给MP

    toDrop.setMatk(property); //攻击
    toDrop.setWatk(property); //魔法力

    //toDrop. setWdef(fangyu);//物理防御
    //toDrop. setAcc(99);//命中
    /*toDrop. setMdef(99);//魔法防御
     toDrop. setAvoid(99);//回避
     toDrop. setHands(99);//手技
     toDrop. setSpeed(99);//移动
     toDrop. setJump(99);跳跃
     toDrop.setUpgradeSlots(7);可砸卷次数*/
    cm.getPlayer().getInventory(type).addItem(toDrop); //将这个装备放入包中
    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
}
