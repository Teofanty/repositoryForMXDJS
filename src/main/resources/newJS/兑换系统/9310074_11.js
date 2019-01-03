importPackage(net.sf.odinms.client);
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);

var level_1 = [4031558];
var amount_1 = [200];
var property_1 = [1, 1, 20];

var level_2 = [4031559];
var amount_2 = [300];
             //四维，攻击
var property_2 = [3, 4, 50];

var level_3 = [4310014];
var amount_3 = [30];
var property_3 = [5, 1, 80];

var level_4 = [4031560];
var amount_4 = [800];
var property_4 = [8, 6, 100];

var all_level = [level_1, level_2, level_3, level_4];
var all_amount = [amount_1, amount_2, amount_3, amount_4];
var all_property = [property_1, property_2, property_3, property_4];

var ring_list = [1032149, 1082245, 1072455, 1012474];

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
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "\t\t\t#e欢迎来到#b副本装备兑换中心 #k!#n\r\n\r\n";
            text += "#L1#" + getNeedStr(level_1, amount_1, ring_list[0]) + "\r\n\r\n(四维属性+1 攻/魔+1 血/蓝+20)废弃副本获得#b#l\r\n";
            text += "#L2#" + getNeedStr(level_2, amount_2, ring_list[1]) + "\r\n\r\n(四维属性+3 攻/魔+4 血/蓝+50)玩具副本获得#b#l\r\n";
            text += "#L3#" + getNeedStr(level_3, amount_3, ring_list[2]) + "\r\n\r\n(四维属性+5 攻/魔+1 血/蓝+80)女神副本获得#b#l\r\n";
            text += "#L4#" + getNeedStr(level_4, amount_4, ring_list[3]) + "\r\n\r\n(四维属性+8 攻/魔+4 血/蓝+100)海盗副本获得#b#l\r\n";
            cm.sendSimple(text);
        }  else if (selection != 0) {
            selection = selection - 1;
            var levelList = all_level[selection];
            var amountList = all_amount[selection];
            var flag = true;
            var notHaveIndex;
            for (var i = 0; i < levelList.length; i++) {
                flag = flag && cm.haveItem(levelList[i], amountList[i])
                if (!flag) {
                    notHaveIndex = i;
                    break;
                }
            }

            if (!flag) {
                cm.sendOk("物品 #v" + levelList[notHaveIndex] + "#  不足，请收集好再来。")
                cm.dispose();
                return;
            }

            for (var i = 0; i < levelList.length; i++) {
                cm.gainItem(levelList[i], 0 - amountList[i]);
            }

            var propertyX = all_property[selection];
            giveEquipment(propertyX[0], propertyX[1], propertyX[2], ring_list[selection]);
            cm.sendOk("成功兑换副本装备！");
            cm.dispose();

        }
    }
}


function getNeedStr(levelList, amountList, zhuangbei) {
    var str = '';
    for (var i = 0; i < levelList.length; i++) {
        str = str + amountList[i] + '个#v' + levelList[i] + '# '
    }
    return str + '兑换#r#v' + zhuangbei + '#' + "#z" + zhuangbei + "##b#l";
}

function giveEquipment(siwei, property,hmp, zhuangbeima) {
    var ii = MapleItemInformationProvider.getInstance();
    var type = ii.getInventoryType(zhuangbeima); //获得装备的类形
    var toDrop = ii.randomizeStats(ii.getEquipById(zhuangbeima)).copy(); // 生成一个Equip类
    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
    //toDrop.setExpiration(temptime);
    toDrop.setFlag(1);//上锁
    toDrop.setStr(siwei); //给力量
    toDrop.setDex(siwei); //给敏捷
    toDrop.setInt(siwei); //给智力
    toDrop.setLuk(siwei); //给运气
    //toDrop. setHp(hpmp);//给HP
    //toDrop. setMp(hpmp);//给MP

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
    cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop, false)); //刷新背包
}
