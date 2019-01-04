var status = -1;
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var mh1   ="#fUI/GuildMark/Mark/Animal/00002011/1#";//兔兔
var mh2   ="#fUI/GuildMark/Mark/Animal/00002011/5#";//兔兔
var mh3   ="#fUI/GuildMark/Mark/Animal/00002011/4#";//兔兔
var mh4   ="#fUI/GuildMark/Mark/Animal/00002011/9#";//兔兔
var mh5   ="#fUI/GuildMark/Mark/Animal/00002011/8#";//兔兔
var mh6   ="#fUI/GuildMark/Mark/Animal/00002011/10#";//兔兔
var mh7   ="#fUI/GuildMark/Mark/Animal/00002011/12#";//兔兔
var mh8   ="#fUI/GuildMark/Mark/Animal/00002011/15#";//兔兔
var mh9   ="#fUI/GuildMark/Mark/Animal/00002011/16#";//兔兔
var mh10   ="#fUI/GuildMark/Mark/Animal/00002011/6#";//兔兔
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 1) {
        status++;
    } else if (mode == 0 && status != 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
        var text = "#ro#b○#do#g○#bo#d○#ro#g○#do#r○#bo#d○#go#r○#k<#r#e师徒系统#n#k>#r○#go#d○#go#r○#do#b○#go#r○#bo#d○#go#r○#b#k\r\n\r\n";
        for (i = 0; i < 10; i++) {
            text += "";
        }

        text += "#L1#"+mh10+"我要建立师门#l#k                #L6##b"+感叹号+"师徒系统说明#l#k\r\n\r\n"
        text += mh1 + mh1 + mh1 + mh1 + mh1 + mh1 + mh1 + mh1 + mh1 + mh1 + mh1 + mh1 + mh1+ mh1+ mh1+ mh1+ mh1+ mh1+ mh1+ mh1+ mh1+ mh1+ mh1 + mh1 + mh1 + "\r\n";


        //text += "#L6##b"+感叹号+"师徒系统说明#k\r\n\r\n"
        text += "#L2#"+mh10+"带徒入门#l                #r#L5#"+mh9+"退出师门#l#k\r\n"
        text += "#L3#"+mh10+"带徒出师#l\r\n"
        text += "#L8#"+mh10+"徒弟列表#l\r\n"
        text += "#L4#"+mh10+"逐徒出师#l\r\n"
//cm.getPlayer().setshituLog(3,"454448");
        cm.sendSimple(text);
    } else if (status == 1){
        if (selection == 1){//建立师门
            var id = cm.getPlayer().getId();
            if (cm.getPlayer().getLevel() < 135){
                cm.sendOk("#r你的等级不够135级,无法建立师门!");
                cm.dispose();
                return;
            }else if(cm.getPlayer().getOneTimeLog("师傅") < 1){
                cm.getPlayer().setOneTimeLog("师傅");

                cm.sendOk("你成功建立了师门,赶紧去收徒吧!");
                cm.worldMessage(6,"【师徒系统】[" + cm.getChar().getName() + "]成功建立了师门,要找师傅的赶紧了!");
                cm.dispose();
            } else {
                cm.sendOk("你已经建立过师门了!去收徒吧!");
                cm.dispose();
            }

        } else if (selection == 2){//拜师
            if (cm.getParty() == null) {
                cm.sendNext("请组队后在来找我！");
                cm.dispose();
                return;
            } else if (cm.allMembersHere() == false){
                cm.sendOk("#r请确认徒弟或者师傅在同一个地图。");
                cm.dispose();
                return;
            } else if (cm.getPlayer().getOneTimeLog("师傅") < 1) {
                cm.sendOk("请让师傅找我对话");
                cm.dispose();
                return;
            } else if (cm.isLeader()&&cm.getPlayer().getOneTimeLog("师傅") < 1) {
                cm.sendOk("请让师傅当队长找我对话");
                cm.dispose();
                return;
            }


            var mapId = cm.getPlayer().getMapId();
            var party = cm.getPlayer().getParty().getMembers();
            var it = party.iterator();
//var cPlayer = it.next();
//var victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
//var TDid = victim.getId();
//v//ar a1_1 = cm.getPlayer().getOneTimeLog(TDid);//自己的收徒记录ID
//var shoutu = victim.getOneTimeLog(TDid);
//var chushi = victim.getOneTimeLog("出师");
//var id = cm.getPlayer().getId();
//var tcsm = victim.getOneTimeLog("退出师门");
//var jrsm = victim.getOneTimeLog(TDid);

            while (it.hasNext()) {
                var cPlayer = it.next();
                victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if (victim.getId() != cm.getPlayer().getId()) {
                    next = true;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("请确认都在这一张地图、并且都在线以及队伍中沒有其他人");
                cm.dispose();
                return;
            }



//cm.worldMessage(6,"【师徒系统】[" + cm.getChar().getName() + "]成功建立了师门,要找师傅的赶紧了!"+cm.getPlayer.isshitu(3));
            if (victim ==null){
                cm.sendOk("获取不到徒弟信息,请组队,师傅为队长,徒弟在同一地图同一频道!");
                cm.dispose();
                return;
            } else if (victim.getLevel() > 70){
                cm.sendOk(victim.getId() +"徒弟等级是否已经大于70级了!"+victim.getLevel());
                cm.dispose();
                return;
            } else if (cm.getPlayer().isshitu(victim.getId())){
                cm.sendOk("你已经收过这个徒弟了");
                cm.dispose();
                return;
            } else if (cm.getPlayer().getOneTimeLog("师傅") < 1){
                cm.sendOk("你还没建立师门呢");
                cm.dispose();
                return;
            } else if (cm.getPlayer().getParty().getMembers().size() != 2){
                cm.sendOk("每次只能带一个徒弟入门（请2人组队）");
                cm.dispose();
                return;
            } else {
                cm.getPlayer().setshituLog(victim.getId(),victim.getName());
                //cm.getPlayer().setOneTimeLog("daitu");
                //cm.givePartyBossLog("收徒");
                //cm.getPlayer().setOneTimeLog(TDid);
                cm.sendOk("你成功收了"+victim.getName()+"为徒弟！");
                cm.worldMessage(6,"【师徒系统】"+cm.getPlayer().getName()+"收"+victim.getName()+"为徒弟！");
                //victim.dropMessage(cm.getPlayer().victim.getName()+" 成为你的师傅!" );
                //Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"师徒系统" + " : ["+ cm.getPlayer().getName() +"]收了["+victim.getName()+"]为徒弟，请徒弟进行确认！",true).getBytes());
                cm.dispose();
                return;
            }

        } else if (selection == 3){
            if (cm.getParty() == null) {
                cm.sendNext("组队后在来找我");
                cm.dispose();
                return;
            }else if (cm.getPlayer().getOneTimeLog("师傅") < 1){
                cm.sendOk("你还没建立师门呢");
                cm.dispose();
                return;
            }


            var party = cm.getPlayer().getParty().getMembers();
            var it = party.iterator();

            while (it.hasNext()) {
                var cPlayer = it.next();
                victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if (victim.getId() != cm.getPlayer().getId()) {
                    next = true;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("获取不到徒弟信息,请组队,师傅为队长,徒弟在同一地图同一频道");
                cm.dispose();
                return;
            }


            if (!cm.isLeader()) {
                cm.sendNext("请让师傅为队长找我对话");
                cm.dispose();
                return;
            } else if (victim.getLevel() < 130){
                cm.sendOk("你的徒弟等级不够130级，不能出师！");
                cm.dispose();
            } else if (cm.getPlayer().getOneTimeLog("师傅") < 1){
                cm.sendOk("你还没建立师门呢");
                cm.dispose();
                return;
            } else if (cm.getPlayer().isshitu(victim.getId())==false){
                cm.sendOk("你确定这是你徒弟吗？？？"+victim.getName());
                cm.dispose();
                return;
            } else {
                //出师奖励;

                cm.gainItem(2049100,30);//给师傅混沌
                victim.gainItem(2049100,10);//给徒弟混沌
                cm.gainDJ(5000);//给点券第二种函数
                victim.modifyCSPoints(1,2000);//给徒弟点卷
                cm.getPlayer().killshituLog(victim.getId());//删除师徒表
                cm.worldMessage(6,"【"+cm.getPlayer().getName()+"】:吾徒 "+victim.getName()+" 今日已成人出师,望众江湖侠士多多提携照顾,万分感谢.");
                cm.dispose();
            }
        } else if (selection == 4){
            //cm.sendOk("暂不支持此功能");
            //cm.dispose();
            cm.openNpc(9900004,78);
        } else if (selection == 5){


            if(cm.getPlayer().isshitu(cm.getPlayer().getId())==false){
                cm.sendOk("你没有师傅");
                cm.dispose();
            } else {
                cm.getPlayer().killshituLogbyname(cm.getPlayer().getName());
                cm.sendOk("你已强行推出师门");
                cm.dispose();
            }

        } else if (selection == 6){
            cm.sendOk("师门系统介绍：\r\n徒弟等级：必须小于70级\r\n师父等于：必须大于135级\r\n\r\n徒弟达到130级即可出师\r\n\r\n徒弟出师获得 #r8888#k点卷\r\n师父出师获得：#r经验x5000万、5000点券、#v4001126#*5、#v4001126#*3、#v4001126#*10。\r\n\r\n\r\n");
            cm.dispose();
        } else if (selection == 7){
            var id = cm.getPlayer().getId();
            if (cm.getPlayer().getLevel() > 130){
                cm.sendOk("师傅不需要确认！");
                cm.dispose();
                return;
            } else if (cm.getBossLog("收徒") >= 1 && cm.getPlayer().getOneTimeLog(id) == 0){
                cm.getPlayer().setOneTimeLog(id);
                cm.sendOk("师徒关系确认成功！");
                Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"师徒系统" + " : ["+ cm.getPlayer().getName() +"]师徒关系确认成功。",true).getBytes());
                cm.dispose();
            } else {
                cm.sendOk("你已经确认过了。或者\r\n");
                cm.dispose();
            }
        } else if (selection == 8){
            //cm.sendOk("你已经确认过了。或者\r\n");
            var ss =cm.getPlayer().getshitu();
            cm.sendOk("你所有徒弟如下:\r\n"+ss);
            cm.dispose();


        }

    }

}