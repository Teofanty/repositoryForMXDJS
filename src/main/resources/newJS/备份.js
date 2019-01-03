importPackage(net.sf.odinms.client);
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
importPackage(Packages.client.inventory);


var level_1 = [4031561];
var amount_1 = [1];
var property_1 = [2, 2, 0];

var level_2 = [4031560];
var amount_2 = [1];
//四维，攻击
var property_2 = [4, 4, 0];

var level_3 = [4031558];
var amount_3 = [1];
var property_3 = [6, 6, 0];

var level_4 = [4031559];
var amount_4 = [1];
var property_4 = [8, 8, 100];

var all_level = [level_1, level_2, level_3, level_4];
var all_amount = [amount_1, amount_2, amount_3, amount_4];
var all_property = [property_1, property_2, property_3, property_4];

var ring_list = [1142014, 1142017, 1142022, 1142031];

var isOneTime = true;
var oneTimeName = "fubenxunzhang_"

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
            text += "#L1#" + getNeedStr(level_1, amount_1, ring_list[0]) + "\r\n\r\n(四维属性+2 攻/魔+2 )月妙副本获得#b#l\r\n";
            text += "#L2#" + getNeedStr(level_2, amount_2, ring_list[1]) + "\r\n\r\n(四维属性+4 攻/魔+4 )废弃副本获得#b#l\r\n";
            text += "#L3#" + getNeedStr(level_3, amount_3, ring_list[2]) + "\r\n\r\n(四维属性+6 攻/魔+6 )玩具副本获得#b#l\r\n";
            text += "#L4#" + getNeedStr(level_4, amount_4, ring_list[3]) + "\r\n\r\n(四维属性+8 攻/魔+8 )女神副本获得#b#l\r\n";
            cm.sendSimple(text);
        }  else if (selection != 0) {
            var index = selection - 1;
            var levelList = all_level[index];
            var amountList = all_amount[index];
            var flag = true;
            var notHaveIndex;
            var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(levelList[0]).iterator();
            if (!cm.haveItem(levelList[0])) {
                cm.sendNext("您的#v"+ levelList[0] +"#数量不足兑换勋章。");
                status = -1;
            }else {
                cm.sendGetNumber("请输入#b#z"+ levelList[0] +"##k兑换#r勋章#k的有效天数（1张 = 1天）: \r\n", 1, 1, iter.next().getQuantity());
            }

            if (status == 1) {
                cm.sendOk("selection: "+ selection + ", status : "+ status);
                cm.dispose();
                if (selection <= 0) {
                    cm.sendOk("输入的兑换数字错误。");
                    cm.dispose();
                }else {
                    var resultAmount = amountList[0] * selection;
                    for (var i = 0; i < levelList.length; i++) {
                        flag = flag && cm.haveItem(levelList[i], resultAmount)
                        if (!flag) {
                            notHaveIndex = i;
                            break;
                        }
                    }
                    if (!flag) {
                        cm.sendOk("物品 #v" + levelList[notHaveIndex] + "#  不足 " + selection + "张，请收集好再来。")
                        cm.dispose();
                        return;
                    }
                    for (var i = 0; i < levelList.length; i++) {
                        cm.gainItem(levelList[i], 0 - resultAmount);
                    }
                    //TODO fix 1.天数不对 2.兑换后无对话
                    cm.sendOk("成功兑换勛章" + selection + "天！");
                    var propertyX = all_property[index];
                    giveEquipment(propertyX[0], propertyX[1], propertyX[2], selection, ring_list[index]);
                }
                status = -1;
            }else {
                cm.dispose();
            }
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
