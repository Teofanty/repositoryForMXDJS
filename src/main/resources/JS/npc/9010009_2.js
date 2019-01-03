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

            if (cm.getPlayer().getBossLog("meirirenwu") == 1){// cm.getPS()  的意思是 读取跑商值如果等于0 就得出他没有开始跑商 就运行他进行第一环跑商!
			    txt += "#r你今天已经完成过了,请明天在来吧!";
                cm.sendOk(txt);
                cm.dispose();
            }else{
                txt += "#L1##b收集100个#v4000037##l";
                cm.sendSimple(txt);
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000037,100) ){//|| cm.getBossLog("wugong") == 12){
                //cm.gainPS(1);//cm.gainPS(1);  的意思是 你完成跑商第一环的时候给予你 跑商值+1这样你就无法在重复做第一环了。只有凌晨12点刷新才行！
				cm.gainItem(4000037, -100);
                cm.sendOk("恭喜您获得了奖励!");
				cm.gainItem(4031559,1);//给这个物品1个的意思
				cm.gainItem(4031560,1);//给这个物品1个的意思
				cm.gainMeso(10000);//给金币1万的意思
				cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu');
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请收集100个#v4000037#交给我!");
                cm.dispose();
            }
        }
    }
}
