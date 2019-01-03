/* ==================
 脚本类型: 道具
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function start() {
    if (im.getInventory(2).getNumFreeSlot() < 1) {
        im.sendOk("请做一些库存空间.");
        im.dispose();
        return;
    }
    im.sendSimple("你喜欢什么滚动?\r\n#L0##i2046070:##t2046070##l\r\n#L1##i2046071:##t2046071##l\r\n#L2##i2046146:##t2046146##l\r\n#L3#End Chat#l")
}

function action(mode, type, selection) {
    if (mode != 1 || selection == 3) {
        im.dispose();
        return;
    }
    if (selection == 0) {
        im.gainItem(2046070, 1);
    } else if (selection == 1) {
        im.gainItem(2046071, 1);
    } else if (selection == 2) {
        im.gainItem(2046146, 1);
    }
    im.removeItem(2430669);
    im.dispose();
}