/* ==================
 脚本类型: 道具
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
var extra = 
[2430457, 1122017, 2049413];

function start() {
    if (im.getInventory(1).getNumFreeSlot() < 3 || im.getInventory(2).getNumFreeSlot() < 1
        || im.getInventory(4).getNumFreeSlot() < 1) {
        im.sendOk("请增加库存空间.");
        im.dispose();
        return;
    }
    im.gainPotentialItem(1003550, 1, 18); //Epic
    im.gainPotentialItem(1003414, 1, 18); //Epic
    im.gainItem(4310034, 20);
    var item = extra[im.nextInt(extra.length)];
    if (item == 1122017) {
        im.gainItemPeriod(item, 1, 7);
    } else {
        im.gainItem(item, 1);
    }
    im.removeItem(2430880);
    im.dispose();
}