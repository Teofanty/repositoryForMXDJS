importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);

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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "\r\n\r\n官方网站赞助 ：#r您已经赞助过：#r" + cm.getcz() + "#k 元\r\n由于维持服务器需要费用,希望得到大家支持.赞助比例1:100点卷！ #r#每日首冲满20多送2000点券和经验卷轴(1W经验*2 )首冲满50多送一个12小时的精灵吊坠(分开冲不算首冲!!)请确认装备消耗栏是否有空,不补)#k\r\n"
            //text += "#e#r#L0#赞助排行榜#l#n\r\n\r\n"
            text += "#e#r#L1#单击转到赞助网站#l#n\r\n\r\n"
            //text += "#e#r#L222#领取首冲奖励#l#n\r\n\r\n"
            text += "#e#r#L2#【赞助领取-当前#g " + cm.getwzcz() + "#r点券尚未领取请点击领取】#l#n\r\n\r\n"
            //if (cm.getczlz()==0) {//判断累积到100元以上 第一个礼包没领取
            //text += "#e#r#L99#累计赞助50元领取: 1张#v4310018#+10W金币#l#n\r\n\r\n"
            // text += "#e#r#L4#累计赞助100元领取: 3个#v4310018#+50W金币#l#n\r\n\r\n"
            //} else if (cm.getczlz()==1) {//判断累积到300元以上 第2个礼包没领取
            //text += "#e#r#L5#累计赞助300元领取: 3个#v4310019#+3个#v4310014#+150W金币+（#v2049100##v2340000#各5张）#l#n\r\n\r\n"
            //} else if (cm.getczlz()==2) {//判断累积到500元以上 第3个礼包没领取
            //text += "#e#r#L6#累计赞助500元领取: （#v1082149#双G+7+#v2049100##v2340000#各10张+10个#v4031456#）#l#n\r\n\r\n"
            //} else if (cm.getczlz()==3) {//判断累积到500元以上 第3个礼包没领取
            //text += "#e#r#L7#累计赞助800元领取: （#v1082149#全属性+7）+10个#v4031456#+（#v2049100##v2340000#各35张）+400W金币#l#n\r\n\r\n"
            //} else if (cm.getczlz()==4) {//判断累积到500元以上 第3个礼包没领取
            text += "#e#r#L8#累计赞助1000元领取: （#v1142219#全属性+10）+（#v2049100##v2340000#各35张）+500W金币#l#n\r\n\r\n"
            //} else if (cm.getczlz()==5) {//判断累积到500元以上 第3个礼包没领取
            //text += "#e#r#L9#累计赞助1300元领取: （#v2049100##v2340000#各45张）#l#n\r\n\r\n"
            //text += "#e#r#L11#累计赞助1600元领取: （#v3015051#想要别的椅子私聊群主或者大仙可以换）#l#n\r\n\r\n"

            //text += "#e#r#L15#累计赞助2000元领取: （#v1022225#属性全8装备等级75因为法师的弱势性智力魔攻多加10为18 装备之后无法放入仓库 不可剪刀）#l#n\r\n\r\n"
            if (cm.getczlz() == 8) {
                text += "#e#r#L17#累计赞助2300元领取: 3个#v4310018#+3个#v4310019#+3个#v4310014#+200W金币+（#v2049100##v2340000#各10张）#l#n\r\n\r\n"
            } else if (cm.getczlz() == 9) {
                text += "#e#r#L18#累计赞助2600元领取: （#v1082149#全属性+7）+（#v2049100##v2340000#各30张）+400W金币#l#n\r\n\r\n"
            } else if (cm.getczlz() == 10) {
                text += "#e#r#L20#累计赞助2800元领取: （#v1142219#全属性+10领到小号上）+（#v2049100##v2340000#各35张）+#v2370000#*3+#v2370002#*3+#v2370005#*3+500W金币#l#n\r\n\r\n"
            } else if (cm.getczlz() == 11) {
                text += "#e#r#L21#累计赞助3300元领取: （#v3015051#想要别的椅子私聊群主或者大仙可以换+#v4020009#*100）#l#n\r\n\r\n"
            } else if (cm.getczlz() == 12) {
                text += "#e#r#L22#累计赞助3700元领取: （#v1022225#属性全8装备等级75因为法师的弱势性智力魔攻多加10为18 装备之后无法放入仓库 不可剪刀）+（#v4020009#*100））#l#n\r\n\r\n"
            } else if (cm.getczlz() == 13) {
                text += "#e#r#L23#累计赞助4000元领取: （#v2049100##v2340000#各45张）#l#n\r\n\r\n"
            } else if (cm.getczlz() == 14) {
                text += "#e#r#L29#累计赞助4600元领取: （#v4020009#*500+200个#v4031456#）#l#n\r\n\r\n"

            }
            text += "\r\n#e#r#L55#冲值积分(豆豆)奖励兑换#l#n\r\n\r\n";
            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
                cm.showcz();
                cm.dispose();
            } else if (selection == 222) {
                cm.openNpc(9900004, 25);
            } else if (selection == 1) {
                cm.openWeb("http://top.shoukabao.com:99/Payment/Service/617419baef24f6ffeed2b8c9100c5c0c");
                cm.sendOk("赞助完毕后,#r请单击确认返回，赞助领取\r\n");
                status = -1;
            } else if (selection == 2) {
                var j = cm.getwzcz();
                if (cm.getwzcz() == 0) {
                    cm.sendOk("您当前未兑现金额为" + cm.getwzcz() + "点券 ，兑换失败！\r\n#r赞助比例1点券=100点卷.");
                    status = -1;
                } else if (cm.getPlayer().getBossLog("meirisc") == 0 && cm.getwzcz() >= 5000) {//判断有充值记录
                    cm.setwzcz(-j);
                    cm.gainDJ(j * 1);
                    cm.gaincz(+j * 0.01);
                    cm.gainDJ(+2000);//2370004
                    cm.gainItem(2370004, 2);
                    cm.getPlayer().gainBeans(+j);
                    var ii = MapleItemInformationProvider.getInstance();
                    var type = ii.getInventoryType(1122017); //获得装备的类形
                    var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // 生成一个Equip类
                    cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
                    var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
                    toDrop.setExpiration(temptime);
                    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
                    cm.getPlayer().setBossLog('meirisc');//给bosslog记录
                    cm.sendOk("兑现成功！获得" + j * 1 + "点卷！" + j + "颗豆豆（换线或重上才刷新），每日首冲50多获得2000点券.经验书*2和12小时的#v1122017#\r\n#r赞助比例1点券=100点卷.");
                    cm.worldMessage(6, "玩家：[" + cm.getName() + "]每日首冲,感谢对重燃冒险岛的支持~");
                    cm.dispose();
                } else if (cm.getPlayer().getBossLog("meirisc") == 0 && cm.getwzcz() >= 2000) {//判断有充值记录
                    cm.setwzcz(-j);
                    cm.gainDJ(j * 1);
                    cm.gaincz(+j * 0.01);
                    cm.getPlayer().gainBeans(+j);
                    cm.gainDJ(+2000);//2370004
                    cm.gainItem(2370004, 2);
                    cm.getPlayer().setBossLog('meirisc');//给bosslog记录
                    cm.sendOk("兑现成功！获得" + j * 1 + "点卷！" + j + "颗豆豆（换线或重上才刷新），每日首冲20多获得2000点券和经验书*2\r\n#r赞助比例1点券=100点卷.");
                    cm.worldMessage(6, "玩家：[" + cm.getName() + "]每日首冲,感谢对重燃冒险岛的支持~");
                    cm.dispose();
                } else {//判断有充值记录
                    cm.setwzcz(-j);
                    cm.gainDJ(j * 1);
                    cm.gaincz(+j * 0.01);
                    cm.getPlayer().gainBeans(+j);
                    cm.sendOk("兑现成功！获得" + j * 1 + "点卷！" + j + "颗豆豆（换线或重上才刷新），每日首冲20多获得2000点券和经验书*2\r\n#r赞助比例1点券=100点卷.");
                    cm.worldMessage(6, "感谢玩家：[" + cm.getName() + "]对重燃冒险岛的支持~么么哒");
                    cm.dispose();
                }

                //cm.sendOk("兑现成功！获得"+ j*1 + "点卷！每日首冲20多获得2000点券和经验书*2\r\n#r赞助比例1点券=100点卷.");
                if (cm.gettgr() != 0) {//有推广人
                    cm.gaintgrjl(cm.gettgr(), +j * 0.05);//5%
                }
                cm.sendOk("兑现成功！获得" + j * 1 + "点卷！\r\n#r赞助比例1点券=100点卷.");
                cm.dispose();
                return;

            } else if (selection == 3) {
                cm.openNpc(9900004, 1001);//物品兑换

            } else if (selection == 4) {//100元
                if (cm.getInventory(4).isFull(0)) {
                    cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getcz() < 100) {//判断累积到 第一个礼包没领取
                    cm.sendOk("赞助还不够100元！");
                    cm.dispose();
                } else if (cm.getczlz() != 0) {//判断累积到 第一个礼包没领取
                    cm.sendOk("已经领取过了！\r\n当前赞助：" + cm.getcz() + "元");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//给记录
                    cm.gainItem(4310018, 3);
                    cm.gainMeso(500000);
                    cm.sendOk("成功兑换")
                    status = -1;
                }
            } else if (selection == 5) {//赞助300元
                if (cm.getInventory(4).isFull(1)) {
                    cm.sendOk("#b请保证其它栏位至少有2个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b请保证消耗栏位至少有2个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getcz() < 300) {//判断累积到 第一个礼包没领取
                    cm.sendOk("赞助还不够300元！");
                    cm.dispose();
                } else if (cm.getczlz() != 1) {//判断累积到 第一个礼包没领取
                    cm.sendOk("已经领取过了！\r\n当前赞助：" + cm.getcz() + "元");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//给记录
                    cm.gainItem(4310019, 3);
                    cm.gainItem(4310014, 3);
                    cm.gainMeso(1500000);
                    cm.gainItem(2049100, 5);
                    cm.gainItem(2340000, 5);
                    cm.sendOk("成功兑换")
                    status = -1;
                }
            } else if (selection == 6) {//500元
                /*if (cm.getInventory(4).isFull(1)){
                 cm.sendOk("#b请保证其它栏位至少有2个空格,否则无法兑换");
                 cm.dispose();
                 } else */
                if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b请保证消耗栏位至少有2个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getcz() < 500) {//判断累积到 第一个礼包没领取
                    cm.sendOk("赞助还不够500元！");
                    cm.dispose();
                } else if (cm.getczlz() != 2) {//判断累积到 第一个礼包没领取
                    cm.sendOk("已经领取过了！\r\n当前赞助：" + cm.getcz() + "元");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//给记录
                    var ii = MapleItemInformationProvider.getInstance();
                    var type = ii.getInventoryType(1082149); //获得装备的类形
                    var toDrop = ii.randomizeStats(ii.getEquipById(1082149)).copy(); // 生成一个Equip类
                    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
                    //toDrop.setExpiration(temptime);
                    //toDrop. setFlag(1);//上锁
                    toDrop.setStr(0);//给力量
                    toDrop.setDex(0);//给敏捷
                    toDrop.setInt(0);//给智力
                    toDrop.setLuk(0);//给运气
                    //toDrop. setHp(50);//给HP
                    //toDrop. setMp(50);//给MP
                    toDrop.setWatk(7);//攻击
                    toDrop.setMatk(7);//魔法力
                    /*toDrop. setWdef(99);//物理防御
                     toDrop. setMdef(99);//魔法防御
                     toDrop. setAcc(99);//命中
                     toDrop. setAvoid(99);//回避
                     toDrop. setHands(99);//手技
                     toDrop. setSpeed(99);//移动
                     toDrop. setJump(99);//跳跃*/
                    cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
                    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
                    cm.gainItem(2049100, 10);
                    cm.gainItem(2340000, 10);
                    cm.gainItem(4031456, 10);
                    cm.sendOk("成功兑换")
                    status = -1;
                }
            } else if (selection == 7) {//800
                if (cm.getInventory(4).isFull(0)) {
                    cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b请保证消耗栏位至少有2个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getcz() < 800) {//判断累积到 第一个礼包没领取
                    cm.sendOk("赞助还不够800元！");
                    cm.dispose();
                } else if (cm.getczlz() != 3) {//判断累积到 第一个礼包没领取
                    cm.sendOk("已经领取过了！\r\n当前赞助：" + cm.getcz() + "元");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//给记录
                    var ii = MapleItemInformationProvider.getInstance();
                    var type = ii.getInventoryType(1082149); //获得装备的类形
                    var toDrop = ii.randomizeStats(ii.getEquipById(1082149)).copy(); // 生成一个Equip类
                    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
                    //toDrop.setExpiration(temptime);
                    //toDrop. setFlag(1);//上锁
                    toDrop.setStr(7);//给力量
                    toDrop.setDex(7);//给敏捷
                    toDrop.setInt(7);//给智力
                    toDrop.setLuk(7);//给运气
                    //toDrop. setHp(50);//给HP
                    //toDrop. setMp(50);//给MP
                    toDrop.setWatk(7);//攻击
                    toDrop.setMatk(7);//魔法力
                    /*toDrop. setWdef(99);//物理防御
                     toDrop. setMdef(99);//魔法防御
                     toDrop. setAcc(99);//命中
                     toDrop. setAvoid(99);//回避
                     toDrop. setHands(99);//手技
                     toDrop. setSpeed(99);//移动
                     toDrop. setJump(99);//跳跃*/
                    cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
                    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
                    cm.gainItem(4031456, 10);
                    cm.gainItem(2049100, 35);
                    cm.gainItem(2340000, 35);
                    cm.gainMeso(4000000);
                    cm.sendOk("成功兑换")
                    status = -1;
                }
            } else if (selection == 8) {//1000
                if (cm.getInventory(4).isFull(0)) {
                    cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b请保证消耗栏位至少有2个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getcz() < 1000) {//判断累积到 第一个礼包没领取
                    cm.sendOk("赞助还不够1000元！");
                    cm.dispose();
                } else if (cm.getczlz() != 100) {//判断累积到 第一个礼包没领取
                    cm.sendOk("已经领取过了！\r\n当前赞助：" + cm.getcz() + "元");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//给记录
                    var ii = MapleItemInformationProvider.getInstance();
                    var type = ii.getInventoryType(1142219); //获得装备的类形
                    var toDrop = ii.randomizeStats(ii.getEquipById(1142219)).copy(); // 生成一个Equip类
                    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
                    //toDrop.setExpiration(temptime);
                    toDrop.setFlag(1);//上锁
                    toDrop.setStr(10);//给力量
                    toDrop.setDex(10);//给敏捷
                    toDrop.setInt(10);//给智力
                    toDrop.setLuk(10);//给运气
                    //toDrop. setHp(50);//给HP
                    //toDrop. setMp(50);//给MP
                    toDrop.setWatk(10);//攻击
                    toDrop.setMatk(10);//魔法力
                    /*toDrop. setWdef(99);//物理防御
                     toDrop. setMdef(99);//魔法防御
                     toDrop. setAcc(99);//命中
                     toDrop. setAvoid(99);//回避
                     toDrop. setHands(99);//手技
                     toDrop. setSpeed(99);//移动
                     toDrop. setJump(99);//跳跃*/
                    cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
                    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
                    cm.gainItem(2049100, 35);
                    cm.gainItem(2340000, 35);
                    cm.gainMeso(5000000);
                    cm.sendOk("成功兑换")
                    status = -1;
                }
            } else if (selection == 9) {//1300
                if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b请保证消耗栏位至少有2个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getcz() < 1300) {//判断累积到 第一个礼包没领取
                    cm.sendOk("赞助还不够1300元！");
                    cm.dispose();
                } else if (cm.getczlz() != 5) {//判断累积到 第一个礼包没领取
                    cm.sendOk("已经领取过了！\r\n当前赞助：" + cm.getcz() + "元");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//给记录
                    cm.gainItem(2049100, 45);
                    cm.gainItem(2340000, 45);
                    cm.sendOk("成功兑换")
                    status = -1;
                }
            } else if (selection == 11) {//1600元
                /*if (cm.getInventory(4).isFull(1)){
                 cm.sendOk("#b请保证其它栏位至少有2个空格,否则无法兑换");
                 cm.dispose();
                 } else */
                if (cm.getInventory(3).isFull(1)) {
                    cm.sendOk("#b请保证设置栏位至少有2个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getcz() < 1600) {//判断累积到 第一个礼包没领取
                    cm.sendOk("赞助还不够1600元！");
                    cm.dispose();
                } else if (cm.getczlz() != 6) {//判断累积到 第一个礼包没领取
                    cm.sendOk("已经领取过了！\r\n当前赞助：" + cm.getcz() + "元");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//给记录
                    //cm.gainItem(4310019, 3);
                    //cm.gainItem(4310014, 3);
                    //cm.gainMeso(1500000);
                    cm.gainItem(3015051, 1);
                    cm.sendOk("成功兑换")
                    status = -1;
                }
            } else if (selection == 15) {//2000
                if (cm.getInventory(1).isFull(0)) {
                    cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
                    cm.dispose();

                } else if (cm.getcz() < 2000) {//判断累积到 第一个礼包没领取
                    cm.sendOk("赞助还不够2000元！");
                    cm.dispose();
                } else if (cm.getczlz() != 7) {//判断累积到 第一个礼包没领取
                    cm.sendOk("已经领取过了！\r\n当前赞助：" + cm.getcz() + "元");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//给记录
                    var ii = MapleItemInformationProvider.getInstance();
                    var type = ii.getInventoryType(1022225); //获得装备的类形
                    var toDrop = ii.randomizeStats(ii.getEquipById(1022225)).copy(); // 生成一个Equip类
                    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
                    //toDrop.setExpiration(temptime);
                    toDrop.setFlag(1);//上锁
                    toDrop.setStr(8);//给力量
                    toDrop.setDex(8);//给敏捷
                    toDrop.setInt(18);//给智力
                    toDrop.setLuk(8);//给运气
                    //toDrop. setHp(50);//给HP
                    //toDrop. setMp(50);//给MP
                    toDrop.setWatk(8);//攻击
                    toDrop.setMatk(18);//魔法力
                    /*toDrop. setWdef(99);//物理防御
                     toDrop. setMdef(99);//魔法防御
                     toDrop. setAcc(99);//命中
                     toDrop. setAvoid(99);//回避
                     toDrop. setHands(99);//手技
                     toDrop. setSpeed(99);//移动
                     toDrop. setJump(99);//跳跃*/
                    cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
                    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
                    cm.sendOk("成功兑换")
                    status = -1;
                }
            } else if (selection == 17) {//2300元
                if (cm.getInventory(4).isFull(0)) {
                    cm.sendOk("#b请保证其它栏位至少有3个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b请保证消耗栏位至少有2个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getcz() < 2300) {//判断累积到 第一个礼包没领取
                    cm.sendOk("赞助还不够2300元！");
                    cm.dispose();
                } else if (cm.getczlz() != 8) {//判断累积到 第一个礼包没领取
                    cm.sendOk("已经领取过了！\r\n当前赞助：" + cm.getcz() + "元");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//给记录
                    cm.gainItem(4310018, 3);
                    cm.gainItem(4310019, 3);
                    cm.gainItem(4310014, 3);
                    cm.gainItem(2049100, 10);
                    cm.gainItem(2340000, 10);
                    cm.gainMeso(2000000);
                    cm.sendOk("成功兑换")
                    status = -1;
                }
            } else if (selection == 18) {//2600
                if (cm.getInventory(4).isFull(0)) {
                    cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b请保证消耗栏位至少有2个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getcz() < 2600) {//判断累积到 第一个礼包没领取
                    cm.sendOk("赞助还不够2600元！");
                    cm.dispose();
                } else if (cm.getczlz() != 9) {//判断累积到 第一个礼包没领取
                    cm.sendOk("已经领取过了！\r\n当前赞助：" + cm.getcz() + "元");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//给记录
                    var ii = MapleItemInformationProvider.getInstance();
                    var type = ii.getInventoryType(1082149); //获得装备的类形
                    var toDrop = ii.randomizeStats(ii.getEquipById(1082149)).copy(); // 生成一个Equip类
                    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
                    //toDrop.setExpiration(temptime);
                    //toDrop. setFlag(1);//上锁
                    toDrop.setStr(7);//给力量
                    toDrop.setDex(7);//给敏捷
                    toDrop.setInt(7);//给智力
                    toDrop.setLuk(7);//给运气
                    //toDrop. setHp(50);//给HP
                    //toDrop. setMp(50);//给MP
                    toDrop.setWatk(7);//攻击
                    toDrop.setMatk(7);//魔法力
                    /*toDrop. setWdef(99);//物理防御
                     toDrop. setMdef(99);//魔法防御
                     toDrop. setAcc(99);//命中
                     toDrop. setAvoid(99);//回避
                     toDrop. setHands(99);//手技
                     toDrop. setSpeed(99);//移动
                     toDrop. setJump(99);//跳跃*/
                    cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
                    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
                    cm.gainItem(2049100, 30);
                    cm.gainItem(2340000, 30);
                    cm.gainMeso(4000000);
                    cm.sendOk("成功兑换")
                    status = -1;
                }
            } else if (selection == 20) {//3700
                if (cm.getInventory(4).isFull(0)) {
                    cm.sendOk("#b请保证其它栏位至少有1个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b请保证消耗栏位至少有2个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getcz() < 2800) {//判断累积到 第一个礼包没领取
                    cm.sendOk("赞助还不够2800元！");
                    cm.dispose();
                } else if (cm.getczlz() != 10) {//判断累积到 第一个礼包没领取
                    cm.sendOk("已经领取过了！\r\n当前赞助：" + cm.getcz() + "元");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//给记录
                    var ii = MapleItemInformationProvider.getInstance();
                    var type = ii.getInventoryType(1142219); //获得装备的类形
                    var toDrop = ii.randomizeStats(ii.getEquipById(1142219)).copy(); // 生成一个Equip类
                    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
                    //toDrop.setExpiration(temptime);
                    toDrop.setFlag(1);//上锁
                    toDrop.setStr(10);//给力量
                    toDrop.setDex(10);//给敏捷
                    toDrop.setInt(10);//给智力
                    toDrop.setLuk(10);//给运气
                    //toDrop. setHp(50);//给HP
                    //toDrop. setMp(50);//给MP
                    toDrop.setWatk(10);//攻击
                    toDrop.setMatk(10);//魔法力
                    /*toDrop. setWdef(99);//物理防御
                     toDrop. setMdef(99);//魔法防御
                     toDrop. setAcc(99);//命中
                     toDrop. setAvoid(99);//回避
                     toDrop. setHands(99);//手技
                     toDrop. setSpeed(99);//移动
                     toDrop. setJump(99);//跳跃*/
                    cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
                    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
                    cm.gainItem(2370000, 3);
                    cm.gainItem(2370002, 3);
                    cm.gainItem(2370005, 3);
                    cm.gainItem(2049100, 35);
                    cm.gainItem(2340000, 35);//#v2370000#*3+#v2370002#*3+#v2370005#*3
                    cm.gainMeso(5000000);
                    cm.sendOk("成功兑换")
                    status = -1;
                }
            } else if (selection == 21) {//3300元
                if (cm.getInventory(4).isFull(1)) {
                    cm.sendOk("#b请保证其它栏位至少有2个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getInventory(3).isFull(1)) {
                    cm.sendOk("#b请保证设置栏位至少有2个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getcz() < 3300) {//判断累积到 第一个礼包没领取
                    cm.sendOk("赞助还不够3300元！");
                    cm.dispose();
                } else if (cm.getczlz() != 11) {//判断累积到 第一个礼包没领取
                    cm.sendOk("已经领取过了！\r\n当前赞助：" + cm.getcz() + "元");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//给记录
                    //cm.gainItem(4310019, 3);
                    cm.gainItem(4020009, 100);
                    //cm.gainMeso(1500000);
                    cm.gainItem(3015051, 1);
                    cm.sendOk("成功兑换")
                    status = -1;

                }
            } else if (selection == 22) {//3700
                if (cm.getInventory(1).isFull(0)) {
                    cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getInventory(4).isFull(1)) {
                    cm.sendOk("#b请保证其它栏位至少有2个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b请保证消耗栏位至少有2个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getcz() < 3700) {//判断累积到 第一个礼包没领取
                    cm.sendOk("赞助还不够3700元！");
                    cm.dispose();
                } else if (cm.getczlz() != 12) {//判断累积到 第一个礼包没领取
                    cm.sendOk("已经领取过了！\r\n当前赞助：" + cm.getcz() + "元");
                    cm.dispose();
                } else {

                    cm.setczlz(1);//给记录
                    var ii = MapleItemInformationProvider.getInstance();
                    var type = ii.getInventoryType(1022225); //获得装备的类形
                    var toDrop = ii.randomizeStats(ii.getEquipById(1022225)).copy(); // 生成一个Equip类
                    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
                    //toDrop.setExpiration(temptime);
                    toDrop.setFlag(1);//上锁
                    toDrop.setStr(8);//给力量
                    toDrop.setDex(8);//给敏捷
                    toDrop.setInt(18);//给智力
                    toDrop.setLuk(8);//给运气
                    //toDrop. setHp(50);//给HP
                    //toDrop. setMp(50);//给MP
                    toDrop.setWatk(8);//攻击
                    toDrop.setMatk(18);//魔法力
                    /*toDrop. setWdef(99);//物理防御
                     toDrop. setMdef(99);//魔法防御
                     toDrop. setAcc(99);//命中
                     toDrop. setAvoid(99);//回避
                     toDrop. setHands(99);//手技
                     toDrop. setSpeed(99);//移动
                     toDrop. setJump(99);//跳跃*/
                    cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
                    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
                    cm.gainItem(4020009, 100);
                    cm.sendOk("成功兑换")
                    status = -1;
                }
            } else if (selection == 23) {//1300
                if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b请保证消耗栏位至少有2个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getcz() < 4000) {//判断累积到 第一个礼包没领取
                    cm.sendOk("赞助还不够4000元！");
                    cm.dispose();
                } else if (cm.getczlz() != 13) {//判断累积到 第一个礼包没领取
                    cm.sendOk("已经领取过了！\r\n当前赞助：" + cm.getcz() + "元");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//给记录
                    cm.gainItem(2049100, 45);
                    cm.gainItem(2340000, 45);
                    cm.sendOk("成功兑换")
                    status = -1;
                }
            } else if (selection == 29) {//4000
                if (cm.getInventory(4).isFull(6)) {
                    cm.sendOk("#b请保证其它栏位至少有7个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getcz() < 4600) {//判断累积到 第一个礼包没领取
                    cm.sendOk("赞助还不够4600元！");
                    cm.dispose();
                } else if (cm.getczlz() != 14) {//判断累积到 第一个礼包没领取
                    cm.sendOk("已经领取过了！\r\n当前赞助：" + cm.getcz() + "元");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//给记录
                    cm.gainItem(4031456, 200);
                    cm.gainItem(4020009, 500);
                    cm.sendOk("成功兑换")
                    status = -1;
                }
            } else if (selection == 30) {//4000
                if (cm.getInventory(4).isFull(6)) {
                    cm.sendOk("#b请保证其它栏位至少有7个空格,否则无法兑换");
                    cm.dispose();
                } else if (cm.getcz() < 5200) {//判断累积到 第一个礼包没领取
                    cm.sendOk("赞助还不够5200元！");
                    cm.dispose();
                } else if (cm.getczlz() != 15) {//判断累积到 第一个礼包没领取
                    cm.sendOk("已经领取过了！\r\n当前赞助：" + cm.getcz() + "元");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//给记录
                    cm.gainItem(4031456, 200);
                    cm.gainItem(4020009, 500);
                    cm.sendOk("成功兑换")
                    status = -1;
                }
            } else if (selection == 55) {//4000
                cm.openNpc(9900004, 2001);
            }


        }

    }
}




