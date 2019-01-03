/* RED 1st impact
    Monster Park Shuttle
    Made by Daenerys
*/

var status = 0;
var m;

function start() {
    if (cm.getMapId() == 951000000) {
        cm.sendYesNo("Would you like to go back?");
        m = 1;
        return;
    }
    cm.sendYesNo("啊，我们最喜欢的客户！你愿意去史皮格曼的怪物公园?");
}

function action(mode, type, selection) {
    if (mode == 1) {
        if (m == 1) {
            cm.warp(cm.getSavedLocation("MONSTER_PARK"));
        } else {
            cm.warp(951000000);
            cm.saveReturnLocation("MONSTER_PARK");
        }
    }
    cm.dispose();
}