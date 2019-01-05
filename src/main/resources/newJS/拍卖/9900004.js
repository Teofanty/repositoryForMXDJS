function start() {
    status = -1;

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            if (cm.getPlayer().getMapId() == 108010101 || cm.getPlayer().getMapId() == 108010201 || cm.getPlayer().getMapId() == 108010301 || cm.getPlayer().getMapId() == 108010401 || cm.getPlayer().getMapId() == 108010501) {
                cm.sendOk("本地图暂时无法使用使用拍卖功能");
                cm.dispose();
                return;
            }

            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }

            text += "             #v3991028##v3991017##v3994071##v3994082##v3994062#\r\n"
            text += "               #e#d当天在线时长：" + cm.getPlayer().getzxsj() + " 分钟\r\n"
            text += "#n当前点卷：#r" + cm.getPlayer().getCSPoints(1) + "#d点           #n抵用券：#r" + cm.getPlayer().getCSPoints(2) + "#d点 \r\n" //  #d#e豆豆：#r" + cm.getPlayer().getBeans() + "#d#e点

            text += "#L1##e#d每日签到#l     #L2##e#d在线奖励#l     #L3##e#r赞助充值#l\r\n\r\n"
            text += "#L5##e#d删除道具#l     #L6##e#d排行榜#l       #L4##e#d推广系统#l\r\n\r\n"
            text += "#L7##e#d勋章领取#l     #L8##e#r练级推荐#l     #L9##e#d同步商城#l\r\n\r\n"
            //text += "#L10##e#d海岛技能#l\r\n\r\n #L14##e#d主城传送#l"
            text += "#L15##e#d骑士团/战神转职#l  #L16##e#r现金道具#l\r\n\r\n"
            text += " #e#r   更新 : #e#d欢迎大家~                      "
            if (cm.getPlayer().isGM()) {
                text += "-----------#k以下功能只有GM才看得见-----------\r\n"
                text += "#L18##e#r分身系统#l       #L19##e#r传送身边#l     #L20##e#r满技能#l\r\n\r\n"
                text += "#L21##e#r传送地图#l       #L22##e#r副本传送#l     #L23##e#r测试#l"
            }
            cm.sendOk(text);

        } else if (selection == 1) {
            cm.openNpc(9900004, 1);//签到
        } else if (selection == 2) {
            //	if(cm.getLevel() >= 70){//判断等级
            cm.openNpc(9900004, 2);
            //} else {
            //cm.openNpc(9900004, 21);
            //	}
        } else if (selection == 3) {
            cm.openNpc(9900004, 1000);//充值
        } else if (selection == 4) {
            cm.openNpc(9900004, 888);//推荐人系统
        } else if (selection == 5) {
            cm.openNpc(9900004, 10);//删除道具
        } else if (selection == 6) {
            cm.openNpc(9900004, 6);//排行榜
        } else if (selection == 7) {
            cm.openNpc(9900004, 25);//勋章
        } else if (selection == 14) {
            cm.openNpc(9900004, 14);//勋章
        } else if (selection == 9) {
            cm.openNpc(9900004, 34);//同步商城
        } else if (selection == 8) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "射手训练场-----------------适合 1 ~ 30 级(推荐)\r\n"
            text += "猪的海岸-------------------适合 10 ~ 20 级\r\n"
            text += "地铁一号线<第1地区>--------适合 20 ~ 30 级\r\n"
            text += "野猪的领土-----------------适合 20 ~ 35 级\r\n"
            text += "火焰之地IV---------------适合 25 ~ 40 级(推荐)\r\n"
            text += "野猪的领土Ⅱ---------------适合 20 ~ 35 级\r\n"
            text += "蚂蚁广场-------------------适合 20 ~ 40 级\r\n"
            text += "露台大厅-------------------适合 40 ~ 70 级\r\n"
            text += "危险的峡谷Ⅱ---------------适合 40 ~ 60 级\r\n"
            text += "龙穴-----------------------适合 40 ~ 70 级\r\n"
            text += "地铁一号线<第4地区>--------适合 50 ~ 70 级\r\n"
            text += "巨人之林-------------------适合 60 ~ 80 级\r\n"
            text += "死亡之林Ⅳ-----------------适合 55 ~ 70 级\r\n"
            text += "十年药草地-----------------适合 45 ~ 60 级\r\n"
            text += "初级修炼场-----------------适合 50 ~ 60 级\r\n"
            text += "大佛的邂逅-----------------适合 50 ~ 70 级\r\n"
            text += "云彩公园Ⅲ-----------------适合 35 ~ 60 级\r\n"
            text += "幽灵船２-------------------适合 60 ~ 90 级\r\n"
            text += "黑暗庭院Ⅰ-----------------适合 70 ~ 90 级\r\n"
            text += "狼蛛洞穴Ⅰ----------------适合 80 ~ 120 级\r\n"
            text += "火焰死亡战场--------------适合 85 ~ 120 级\r\n"
            text += "消失的时间----------------适合 85 ~ 120 级\r\n"
            text += "时间停止之间--------------适合 95 ~ 120 级\r\n"
            text += "阴森世界入口--------------适合 95 ~ 120 级\r\n"
            text += "乌鲁城入口----------------适合 95 ~ 150 级\r\n"
            text += "龙之巢穴入口-------------适合 100 ~ 150 级\r\n"
            text += "忘却之路5----------------适合 120 ~ 150 级\r\n"
            cm.sendOk(text);
            cm.dispose();
        } else if (selection == 18) { //分身系统
            if (cm.getPlayer().getCloneSize() != 0) {
                cm.getPlayer().dropMessage(5, "您的分身已经存在");
                cm.dispose();
                return;
            } else {
                cm.fs();
                cm.dispose();
                return;
            }
        } else if (selection == 15) { //传送骑士团战神转职
            cm.openNpc(9900004, 3002);
        } else if (selection == 16) { //现金道具
            cm.openNpc(9900004, 4001);
        } else if (selection == 19) { //传送对方身边
            cm.openNpc(9900004, 766);
        } else if (selection == 10) { //传送对方身边
            cm.openNpc(9900004, 9997);
        } else if (selection == 20) { //传送对方身边
            cm.openNpc(9900004, 997);
        } else if (selection == 21) { //传送
            cm.openNpc(9900004, 996);
        } else if (selection == 22) { //副本传送
            cm.openNpc(9900004, 995);
        } else if (selection == 23) { //测试商城
            cm.openNpc(9900004, 889);

            //cm.showfame();
            //cm.dispose();
        }
    }
}