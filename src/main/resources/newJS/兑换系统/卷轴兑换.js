
var itemList = [2044901,2044902,2044802, 2044801, 2044702, 2044701, 2044602, 2044601, 2044501, 2044502,
    2044402, 2044401, 2044302, 2044301, 2044201, 2044202, 2044102, 2044101, 2044002, 2044001, 2043802,
    2043801, 2043702, 2043701, 2043302, 2043301, 2043202, 2043201, 2043102, 2043101, 2043002, 2043001,
    2040801, 2040802, 2040915, 2040914, 2040532, 2040534, 2040517,
    2040516, 2040514, 2040513, 2040502, 2040501, 2040323, 2040321, 2040317, 2040316, 2040302, 2040301];
//2040804 手套攻击卷60  2040805 手套攻击卷10 2040816 手套魔力卷10  2040817 手套魔力60
var needItem = 4310014;
var needAmount = 10;

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
            text += "\t\t\t#e欢迎来到#b卷轴兑换中心 #k!#n\r\n\r\n";
            text += "#e#b您可以用"+needAmount+"个 #v"+needItem+"##z"+needItem+"#（副本获得）来兑换一个卷轴#k#n\r\n\r\n";
            for (var i = 0; i < itemList.length; i++) {
                text += "#L"+ i + "##b兑换 #v"+itemList[i]+"##z"+itemList[i]+"##l\r\n\r\n";
            }
            cm.sendSimple(text);
        }  else if (selection != -1) {
            if (!cm.haveItem(needItem, needAmount)){
                cm.sendOk("物品 #v" + needItem + "#  不足，确认后重试。")
                cm.dispose();
                return;
            }

            cm.gainItem(needItem, -needAmount);
            cm.gainItem(itemList[selection], 1);
            cm.sendOk("恭喜你，成功兑换 #v" + itemList[selection] + "##z"+itemList[selection]+"#");
            cm.dispose();
        }
    }
}

