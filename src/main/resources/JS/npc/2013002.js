var status;

var itemList = new Array(
    2100000,2100001,2100002,2100003,2100004,2100005,2100006,2100007,2100017,2100018,2100019,2044702,2044701,2044602,
    2044601,2044501,2044502,2044402,2044401,2044302,2044301,2044201,2044202,2044102,2044101,
    2044002,2044001,2043802,2043801,2043702,2043701,2043302,2043301,2043202,2043201,2043102,
    2043101,2043002,2043001,2040801,2040814,2040815,2040816,2040817,2040802,2040915,2040914,2040805,2040804,2040532,2040534,2040517,2040516,
    2040514,2040513,2040502,2040501,2040323,2040321,2040317,2040316,2040302,2040301, //1x use items
    4003000,1322054,1332056,1382039,1402039,1422029,1432040,1442051,1452045,1462040,1472055,
    4020000,4020000,4020001,4020001,4020002,4020002,4020003,4020003,4020004,4020004,4020005,
    4020005,4020006,4020006,4010000,4010000,4010001,4010001,4010002,4010002,4010003,4010003,
    4010004,4010004,4010005,4010005,4010006,4020007,4020008,4003000); //etc items

var randNum = Math.floor(Math.random()*(itemList.length + 1));
var randItem = itemList[randNum];
var qty;


switch (randItem) {
    case 4020000:
    case 4020001:
    case 4020002:
    case 4020003:
    case 4020004:
    case 4020005:
    case 4020006:
    case 4010000:
    case 4010001:
    case 4010002:
    case 4010003:
    case 4010004:
    case 4010005:
        qty = 10;
        break;
    case 4010006:
    case 4020007:
    case 4020008:
        qty = 10;
        break;
    case 4003000:
        qty = 10;
        break;
    case 2000002:
    case 2000003:
        qty = 50;
        break;
    case 2000006:
        qty = 50;
        break;
    case 2000004:
        qty = 20;
        break;
    default:
        qty = 1;
}

function start() {
    status = -1;
    action(1,0,0);
}

function action(mode, type, selection) {
    var em = cm.getEventManager("OrbisPQ");
    if (em == null) {
        cm.dispose();
        return;
    }
    for (var i = 4001044; i < 4001064; i++) {
        cm.removeAll(i); //holy
    }
    switch(cm.getMapId()) {
        case 920010100: //center stage, minerva warps to bonus
            //em.setProperty("done", "1");
            cm.showEffect(false, "quest/party/clear");
            cm.playSound(false, "Party1/Clear");
            cm.warpParty(920011100);//全体传送
            cm.givePartyExp(180000);//给全体经验
            cm.getPlayer().endPartyQuest(1203);
            cm.dispose();
            break;
        default:
            if (mode == -1) {
                cm.dispose();
            }
            if (mode == 1)
                status ++;
            else
                status --;
            if (status == 0) {
                cm.sendNext("请确认你的其他栏有没有空两格,剩下的栏位空一格就好,确认都有空再来跟我对话");
            } else if (status == 1) {
                if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格
                    cm.sendOk("#b请保证装备栏位至少有1个空格,否则无法领取.");
                    cm.dispose();
                } else if (cm.getInventory(2).isFull(0)){//判断第二个也就是消耗栏的装备栏是否有一个空格
                    cm.sendOk("#b请保证消耗栏位至少有1个空格,否则无法领取.");
                    cm.dispose();
                } else if (cm.getInventory(3).isFull(0)){//判断第三个也就是设置栏的装备栏是否有一个空格
                    cm.sendOk("#b请保证设置栏位至少有1个空格,否则无法领取.");
                    cm.dispose();
                } else if (cm.getInventory(4).isFull(3)){//判断第四个也就是其它栏的装备栏是否有一个空格
                    cm.sendOk("#b请保证其它栏位至少有4个空格,否则无法领取.");
                    cm.dispose();
                } else if (cm.getInventory(5).isFull(0)){//判断第五个也就是现金栏的装备栏是否有一个空格
                    cm.sendOk("#b请保证现金栏位至少有1个空格,否则无法领取.");
                    cm.dispose();
                } else {
                    cm.gainItem(4310030, 2);
                    cm.gainItem(4031456, 1);
                    cm.gainItem(4031559, 1);//汉斯邮票
                    cm.gainItem(randItem, qty);//随机物品
                    cm.warp(200080101);
                    cm.worldMessage(6,"玩家：["+cm.getName()+"]和他/她的小伙伴们完成了女神塔副本.");
                    cm.dispose();
                    break;
                }
            }
    }}
