importPackage(Packages.client);
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var txt = "";
            txt = "我是每日任务NPC！完成了任务将获得奖励#k\r\n\r\n";

            if ( cm.getPlayer().getBossLog('21-50-1') == 1){
				txt += "#r你今天已经完成过了,请明天在来吧!";
                cm.sendOk(txt);
                cm.dispose();

            }else{
                txt += "#L1##b收集100个#v4000020#";
                cm.sendSimple(txt);
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000020,100) ){
		        cm.gainItem(4000020, -100);
                cm.sendOk("恭喜您获得了奖励!");
				//cm.gainItem(4031559, 1);//给这个物品1个的意思
				cm.gainItem(4002002, 1);//给这个物品1个的意思
				cm.gainMeso(20000);
				cm.gainExp(40000);
				cm.getPlayer().setBossLog('21-50-1');
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请收集50个#v4000020#交给我!");
                cm.dispose();
            }
        }
    }
}
