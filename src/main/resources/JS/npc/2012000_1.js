/* ==================
 脚本类型:  NPC	    
 脚本作者：月亮     
 联系方式：2412614144
 =====================
 */

var select;
var status = 0;

function start() {
    var where = "你好,我是负责售船票的,请问你想去魔法密林哪里?";
    cm.sendSimple(where);
}

function action(mode, type, selection) {
    if(mode < 1) {
        cm.dispose();
    } else {
        status++;
        if (status == 1) {
            select = selection;
            cm.sendYesNo("你确定要购买#r魔法密林船票#k? 需要15分钟, 它会花费你5000金币#k. 请问你是否确定要购买#k?");
        } else if(status == 2) {
            if (cm.getMeso() < 5000)
                cm.sendOk("你确定你有5000金币#k? 如果有的话,我劝您检查下身上其他栏位看是否有没有满了.");
            else {
                cm.gainMeso(-5000);
                cm.gainItem(4031047,1);
            }
            cm.dispose();
        }
    }
}
