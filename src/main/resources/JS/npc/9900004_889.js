/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = 0;
var beauty = 0;
var price = 1000000;
var mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023,20024,20029,20030,20031,20032,20033,20035,20036,20037,20038,20040,20043,20044,20045,20046,20047,20048,20049,20050,20051,20052,20053,20054,20055,20056,20057,20058,20059,20060,20061,20062,20063,20064,20065,20066,20067,20068,20069,20070,20074,20075,20076,20077,20080,20081,20082,20083,20084,20085,20086,20087,20088,20090,20093,20094,20095,20096,20097,20098,20099);
var fface = Array(24088,24082,24081,24079,24077,24075,24074,24073,24072,24071,24070,24069,24068,24066,24065,24064,24063,24062,24061,24058,24055,24054,24053,24052,24051,24050,24041,24040,24039,24038,24037,24036,24035,24032,24030,24029,24028,24027,24016,24025,24024,24022,24020,24019,24017,24015,24013,24012,24011,24003,21511,21323,21108,21099,21095,21094,21093,21090,21089,21088,21087,21079,21076,21070,21069,21068,21067,21066,21065,21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21015, 21016, 21017, 21018, 21019, 21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027,21028,21029,21030,21031,21033,21034,21035,21036,21038,21041,21042,21043,21044,21045,21046,21047,21048,21049,21050,21052,21053,21054,21055,21056,21057,21058,21059,21060,21061,21062,21063,21064,21065,21069,21070,21071,21072,21073,21074,21075,21077,21078,21079,21080,21081,21082,21083,21084,21085,21086,21089,21090,21091,21092,21093,21094,21095,21096,21097,21098,21099);
var facenew = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("我是黛玛院长.如果你有#b#t5152001##k任何机会.那么怎么样让我帮整形?\r\n\#L2#使用#b#t5152001##k");
        } else if (status == 1) {
            if (selection == 1) {
                if(cm.getMeso() >= price) {
                    cm.gainMeso(-price);
                    cm.gainItem(5152001, 1);
                    cm.sendOk("尽情的享受你的新造型吧!");
                } else
                    cm.sendOk("你没有足够的资本来购买优惠券!");
                cm.dispose();
            } else if (selection == 2) {
                facenew = Array();
                if (cm.getPlayer().getGender() == 0) {
                    for(var i = 0; i < mface.length; i++)
                        facenew.push(mface[i] + cm.getPlayer().getFace()% 1000 - (cm.getPlayer().getFace()% 100));
                }
                if (cm.getPlayer().getGender() == 1) {
                    for(var i = 0; i < fface.length; i++)
                        facenew.push(fface[i] + cm.getPlayer().getFace()% 1000 - (cm.getPlayer().getFace()% 100));
                }
                cm.sendStyle("请选择一个你喜欢的",facenew);
            }
        }
        else if (status == 2){
            cm.dispose();
            if (cm.haveItem(5152001) == true){
                cm.gainItem(5152001, -1);
                cm.setFace(facenew[selection]);
                cm.sendOk("尽情的享受你的新造型吧!!");
            } else
                cm.sendOk("您貌似没有#b#t5152001##k..");
        }
    }
}
