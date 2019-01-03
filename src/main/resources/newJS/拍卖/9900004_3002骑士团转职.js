importPackage(net.sf.cherry.client);

var status = 0;
var jobName;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendOk("天气很好哦~~如果你改变想法记的随时来找我。祝你好运！");
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("嗨，我是 #b管理员#k 我可以帮助你快速转职哦~~！");
        } else if (status == 1) {
            if(cm.getJob() >= 1000 && cm.getJob() <= 1510){
                cm.sendNext("哇，你是骑士团的一员，我很高兴为你服务哦！！！");
                status = 161;
                return;
            }
            if(cm.getJob() >= 2000){
                cm.sendNext("哇~~战神战起来！新职业哦~我很高兴为你服务哦！！！");
                status = 163;
                return;
            }

        }   else if (status == 156) {
            cm.changeJob(job);
            cm.sendOk("转职成功！加油锻炼，当你变的强大的时候记的来找我哦！");
            cm.serverNotice("[转职系统]: 恭喜 [" + cm.getPlayer().getName() + "] 在NPC：管理员 快速转职成功！");
            cm.dispose();

        } else if (status == 161) {
            if(cm.getJob() == 1000 && cm.getLevel()>=10){
                cm.sendSimple("看起来你还是一个初心者,快选择一个适合自己的职业吧!#b\r\n#L0#魂骑士#l #L1#炎术士#l #L2#风灵使者#l #L3#夜行者#l #L4#奇袭者#l#k");
            }else if(parseInt(cm.getJob() / 100) >10 && cm.getLevel()>=30 && cm.getJob()%100 == 0){
                cm.sendYesNo("您真的确定要进行第二次转职了吗？");
            }else if(parseInt(cm.getJob() / 100) >10 && cm.getLevel()>=70 && cm.getJob()%10 == 0){
                cm.sendYesNo("您真的确定要进行第三次转职了吗？");
            }else{
                cm.sendOk("您目前的条件不能使用我的服务哦!");
                cm.dispose();
            }
        } else if (status == 162) {
            if(cm.getJob() == 1000 && cm.getLevel()>=10){
                if (selection == 0) {
                    job = 1100;
                } else if (selection == 1) {
                    job = 1200;
                } else if (selection == 2) {
                    job = 1300;
                } else if (selection == 3) {
                    job = 1400;
                } else if (selection == 4) {
                    job = 1500;
                }
                cm.changeJob(job);
                //cm.gainItem(1142066,1);
                cm.serverNotice("[转职系统]: 恭喜 [" + cm.getPlayer().getName() + "] 在NPC：管理员 快速转职为骑士团职业！");
                cm.sendOk("转职成功！加油锻炼，当你变的强大的时候记的来找我哦！");
            } else if(parseInt(cm.getJob() / 100) >10 && cm.getLevel()>=30 && cm.getJob()%100 == 0){
                cm.changeJob(cm.getJob()+10);
                //cm.gainItem(1142067,1);
                cm.serverNotice("[转职系统]: 恭喜 [" + cm.getPlayer().getName() + "] 在NPC：管理员 快速转职为骑士团职业！");
                cm.sendOk("转职成功！加油锻炼，当你变的强大的时候记的来找我哦！");
            } else if(parseInt(cm.getJob() / 100) >10 && cm.getLevel()>=70 && cm.getJob()%10 == 0){
                //cm.gainItem(1142068,1);
                cm.getPlayer().gainAp(5);
                cm.changeJob(cm.getJob()+1);
                cm.serverNotice("[转职系统]: 恭喜 [" + cm.getPlayer().getName() + "] 在NPC：管理员 快速转职为骑士团职业！");
                cm.sendOk("转职成功！希望您以后的冒险之路顺利!");
            }
            cm.dispose();
        } else if (status == 164) {
            if(cm.getJob() == 2000 && cm.getLevel() >=10){
                cm.sendYesNo("战神战起来！\r\n看起来你还是一个战童,您确定要进行第一次转职吗？");
            } else if(cm.getJob() == 2100 && cm.getLevel() >=30) {
                cm.sendYesNo("战神战起来！您真的确定要进行第二次转职了吗？");
            } else if(cm.getJob() == 2110 && cm.getLevel() >=70){
                cm.sendYesNo("战神战起来！您真的确定要进行第三次转职了吗？");
            } else if(cm.getJob() == 2111 && cm.getLevel() >=120) {
                cm.sendYesNo("战神战起来！您真的确定要进行第四次转职了吗？");
            } else if(cm.getJob() == 2112 && cm.getLevel() >120) {
                cm.sendOk("你已经完成了所有的转职工作。继续加油吧！！");
            } else {
                cm.sendOk("按照您目前的条件，我还不能为您服务哦！加油吧！");
                cm.dispose();
            }
        } else if (status == 165) {
            if(cm.getJob() == 2000 && cm.getLevel() >=10){
                cm.changeJob(2100);
                //cm.gainItem(1142129,1);
                //cm.gainItem(1442077,1);
                //cm.gainItem(2000022,50);
                //cm.gainItem(2000023,50);
                cm.teachSkill(21000000,0,10);
                cm.teachSkill(21001001,0,5);
                cm.teachSkill(21000002,0,20);
                cm.teachSkill(21000004,0,10);
                cm.teachSkill(21001003,0,20);
                cm.serverNotice("[转职系统]: 恭喜 [" + cm.getPlayer().getName() + "] 在NPC：管理员 快速转职为战神职业！");
                cm.sendOk("转职成功！加油锻炼，当你变的强大的时候记的来找我哦！");
            } else if(cm.getJob() == 2100 && cm.getLevel() >=30){
                cm.changeJob(2110);
                //cm.gainItem(1142130,1);
                //cm.gainItem(1442078,1);
                cm.teachSkill(21100000,0,20);
                cm.teachSkill(21100001,0,20);//三重重击
                cm.teachSkill(21100002,0,20);
                cm.teachSkill(21100007,0,10);//幻影狼牙
                cm.teachSkill(21101003,0,5);//抗压
                cm.teachSkill(21101005,0,10);//连环吸血
                cm.teachSkill(21101006,0,10);//冰雪矛
                cm.teachSkill(21100010,0,20); //终极矛
                cm.teachSkill(21100008,0,5);// 物理训练
                cm.serverNotice("[转职系统]: 恭喜 [" + cm.getPlayer().getName() + "] 在NPC：管理员 快速转职为战神职业！");
                cm.sendOk("转职成功！加油锻炼，当你变的强大的时候记的来找我哦！");
            } else if(cm.getJob() == 2110 && cm.getLevel() >=70){
                //cm.gainItem(1142131,1);
                // cm.getPlayer().gainAp(3);
                cm.changeJob(2111);
                cm.teachSkill(21110002,0,20);//
                cm.teachSkill(21110000,0,20);//
                cm.teachSkill(21110003,0,30);//
                cm.teachSkill(21110004,0,30);//
                cm.teachSkill(21110006,0,30);//
                cm.teachSkill(21110007,0,20);//
                cm.teachSkill(21110008,0,20);//
                cm.teachSkill(21111001,0,20);//
                cm.teachSkill(21111005,0,20);//
                cm.serverNotice("[转职系统]: 恭喜 [" + cm.getPlayer().getName() + "] 在NPC：管理员 快速转职为战神职业！");
                cm.sendOk("转职成功！加油锻炼，当你变的强大的时候记的来找我哦！");
            } else if(cm.getJob() == 2111 && cm.getLevel() >=120){
                //cm.gainItem(1142132,1);
                //cm.getPlayer().gainAp(5);
                cm.teachSkill(21121000,0,30);
                cm.teachSkill(21120001,0,30);
                cm.teachSkill(21120002,0,30);
                cm.teachSkill(21120004,0,30);
                cm.teachSkill(21120005,0,30);
                cm.teachSkill(21120006,0,30);
                cm.teachSkill(21120007,0,30);
                cm.teachSkill(21120009,0,30);
                cm.teachSkill(21120010,0,30);
                cm.teachSkill(21121000,0,30);
                cm.teachSkill(21121003,0,30);
                cm.teachSkill(21121008,0,5);
                cm.changeJob(2112);
                cm.serverNotice("[转职系统]: 恭喜 [" + cm.getPlayer().getName() + "] 在NPC：管理员 快速转职为战神职业！");
                cm.sendOk("转职成功！希望您以后的冒险之路顺利！");
            }
            cm.dispose();
        } else {
            cm.dispose();
        }

    }
}
