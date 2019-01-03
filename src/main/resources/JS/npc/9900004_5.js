var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2# ";

/*
 * 
 * @wnms
 * @大擂台传送副本npc
 */
function start() {
    status = -1;
    action(1, 0, 0);
}
var 冒险币 = 5000;
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
			var tt = "请选择你要去的副本或BOSS：[更多副本、BOSS后期更新]\r\n";
			tt += "#L0#"+红色箭头+"#e#d挑战BOSS闹钟#l\t\t#L1#"+红色箭头+"挑战BOSS妖僧#l\r\n"
			tt += "#L2#"+红色箭头+"挑战BOSS扎昆#l\t\t#L3#"+红色箭头+"挑战BOSS黑龙#l\r\n"
			tt += "#L4#"+红色箭头+"挑战BOSS鱼王#l\t\t#L5#"+红色箭头+"挑战BOSS天狗#l\r\n"
			tt += "#L6#"+红色箭头+"挑战BOSS品克缤#l\t  #L7#"+红色箭头+"挑战BOSS暴力熊#l\r\n"
			tt += "#L8#"+红色箭头+"挑战BOSS树精王#l\t  #L9#"+红色箭头+"挑战BOSS蜈蚣#l\r\n\r\n"
			tt += "#k=============================================="
			tt += "#L10##b"+红色箭头+"#e#rLv10.英语学院副本#l  #L11##b"+红色箭头+"#e#d#rLv10.月妙组队副本#k#l\r\n"
			tt += "#L12#"+红色箭头+"#d#rLv21.废弃组队副本#l  #L13#"+红色箭头+"#d#rLv35.玩具组队副本#l\r\n"
			tt += "#L14#"+红色箭头+"#d#rLv51.天空组队副本#l  #L15#"+红色箭头+"#d#rLv55.海盗组队副本#l\r\n"
			tt += "#L16#"+红色箭头+"Lv70.罗密欧与朱丽叶组队副本#l\r\n"
			tt += "#L17#"+红色箭头+"#d#rLv100.毒物组队副本#l\r\n"
			tt += "#L18#"+红色箭头+"#d#rLv130.人偶师组队副本#l\r\n"
			tt += "#L19#"+红色箭头+"#d#rLv120.天关副本[可单人]\r\n"
			tt += "#L20#"+红色箭头+"#d#rLv120.挑战绯红副本#k#l\r\n"
			tt += "#L21#"+红色箭头+"#d#rLv30.怪物嘉年华(组队对抗副本.最低2V2)\r\n"
			tt += "#L22#"+红色箭头+"#d#r遗址公会对抗战(家族副本)#l\r\n"
            cm.sendSimple(tt);
        } else if (status == 1) {
            if (selection == 0) {
			cm.warp(220080000);//闹钟
            cm.dispose();
            } else if (selection == 1) {
			cm.warp(702070400);//妖憎
			cm.dispose();
            }else if(selection == 2) {
			cm.warp(211042300);//扎昆
			cm.dispose();
            } else if (selection == 3) {
			cm.warp(240040700);//黑龙  
			cm.dispose();  
            } else if (selection == 4) {
			cm.warp(230040420);//鱼王
			cm.dispose();
            }else if (selection == 5) {
			cm.warp(800020130);//天狗
			cm.dispose();
            }else if (selection == 6) {
			cm.warp(270050000);//品克缤
			cm.dispose();
            }else if (selection == 7) {
			cm.warp(551030100);//暴力熊
			cm.dispose();
            }else if (selection == 8) {
			cm.warp(541020700);//树妖
			cm.dispose();
            }else if (selection == 9) {
			cm.warp(701010320);//蜈蚣
			cm.dispose();
            }else if (selection == 10) {
			cm.warp(702090400);//英语学副本
			cm.dispose();
            }else if (selection == 11) {
			cm.warp(100000200);//月妙副本	
			cm.dispose();
            }else if (selection == 12) {
			cm.warp(103000000);//废弃副本
			cm.dispose();
            }else if (selection == 13) {
			cm.warp(221024500);//玩具组队
			cm.dispose();
            }else if (selection == 14) {
			cm.warp(200080101);//天空组队	
			cm.dispose();
            }else if (selection == 15) {
			cm.warp(251010404);//海盗组队
			cm.dispose();
            }else if (selection == 16) {
			cm.warp(261000011);//罗密欧与朱丽叶副本
			cm.dispose();
            }else if (selection == 17) {
			cm.warp(300030100);//毒物组队副本
			cm.dispose();
            }else if (selection == 18) {
			cm.warp(910510001);//人偶
			cm.dispose();
            }else if (selection == 19) {
			cm.warp(925020000);//毒物组队副本
			cm.dispose();
            }else if (selection == 20) {
			cm.warp(803001200);
			cm.dispose();//绯红副本
            }else if (selection == 21) {
			cm.warp(980000000);
			cm.dispose();//怪物嘉年华
            }else if (selection == 22) {
			cm.warp(101030104);
			cm.dispose();//遗址公会对抗战
			}
        }
    }
}


