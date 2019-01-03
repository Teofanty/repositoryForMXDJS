/* ==================
 脚本类型: 道具
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
var extra = 
[1182006, 1312065, 1322096, 1302152, 1402095, 1412065, 1422066, 1432086, 1442116, 1372084,
1452111, 1462099, 1522018, 1332130, 1472122, 1342036, 1482084, 1492085, 1532018, 1382104
];

function start() {
    if (im.getInventory(1).getNumFreeSlot() < 2 || im.getInventory(2).getNumFreeSlot() < 5) {
        im.sendOk("请增加库存空间.");
        im.dispose();
        return;
    }
    im.gainItem(2501000, 1);
    im.gainItem(2430473, 1);
    im.gainPotentialItem(1003360, 1, 18); //Epic
    im.gainItem(2500000, 1);
    im.gainItem(2430457, 1);
    im.gainItem(2022740 + im.nextInt(6), 1);
    if (im.nextInt(100) < 10) {
        im.gainItem(extra[im.nextInt(extra.length)], 1);
    }
    im.removeItem(2430472);
    im.dispose();
}