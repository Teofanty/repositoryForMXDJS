/* ==================
 脚本类型: 道具
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function start() {
    if (im.getInventory(1).getNumFreeSlot() < 1 || im.getInventory(2).getNumFreeSlot() < 2
        || im.getInventory(4).getNumFreeSlot() < 1) {
        im.sendOk("请增加库存空间.");
        im.dispose();
        return;
    }
    im.gainItem(4310066, 5);
    im.gainItem(1662024, 1);
    im.gainItem(2431405, 1);
    var scrollRandom = im.nextInt(3);
    im.gainItem(scrollRandom == 0 ? 2046964 : scrollRandom == 1 ? 2046965 : 2047801, 1);
    im.removeItem(24301806);
    im.dispose();
}