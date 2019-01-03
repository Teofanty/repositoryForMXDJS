/* ==================
 脚本类型: 道具
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
function start() {
    if (im.getInventory(1).getNumFreeSlot() < 1 || im.getInventory(2).getNumFreeSlot() < 3) {
        im.sendOk("请增加库存空间.");
        im.dispose();
        return;
    }
    im.gainItem(2290723, 1);
    im.gainItem(2500000, 1);
    im.gainPotentialItem(1402015, 1, 19); //Unique
    im.gainItem(2430909, 1);
    if (im.nextInt(100) < 10) {
        im.gainItem(1052526, 1);
    }
    im.removeItem(2430892);
    im.dispose();
}