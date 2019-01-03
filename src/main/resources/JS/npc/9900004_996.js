/*
 *
 *  此脚本由乐章网络制作完成
 * 购买商业脚本请加群:1049548
 *
 */


importPackage(net.sf.MS079.client);

var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

//------------------------------------------------------------------------

var chosenMap = -1;
var monsters = 0;
var towns = 0;
var bosses = 0;
var fuben = 0;

//------------------------------------------------------------------------

var bossmaps = Array(
Array(104000400,0,"蜗牛王BOSS  "),
Array(100000005,0,"蘑菇王BOSS  "),
Array(105070002,0,"僵尸蘑菇王BOSS  "), 
Array(105090900,0,"被诅咒的寺院：蝙蝠怪BOSS  "),    
Array(101000300,0,"魔法密林码头：蝙蝠魔BOSS  "),  
Array(211040101,0,"雪人谷：雪人BOSS  "), 
Array(240020402,0,"喷火龙栖息地：喷火龙BOSS  "), 
Array(240020101,0,"格瑞芬多森林：飞鸟BOSS  ")  
														
		);

//------------------------------------------------------------------------

var monstermaps = Array(
		Array(104040000,0,"射手训练场-----------------适合 1 ~ 15 级玩家"),
		Array(104010001,0,"猪的海岸-------------------适合 10 ~ 20 级玩家"), 
		Array(103000101,0,"地铁一号线<第1地区>--------适合 20 ~ 30 级玩家"), 
		Array(101040001,0,"野猪的领土-----------------适合 20 ~ 35 级玩家"), 
		Array(101040003,0,"钢之黑怪之地---------------适合 20 ~ 35 级玩家"), 
		Array(101030001,0,"野猪的领土Ⅱ---------------适合 20 ~ 35 级玩家"), 
		Array(105070001,0,"蚂蚁广场-------------------适合 20 ~ 40 级玩家"), 
		Array(220010500,0,"露台大厅-------------------适合 40 ~ 70 级玩家"), 
		Array(106000002,0,"危险的峡谷Ⅱ---------------适合 40 ~ 60 级玩家"), 
		Array(105090300,0,"龙穴-----------------------适合 40 ~ 70 级玩家"), 
		Array(103000105,0,"地铁一号线<第4地区>--------适合 50 ~ 70 级玩家"), 
		Array(105040306,0,"巨人之林-------------------适合 60 ~ 80 级玩家"), 
		Array(211041400,0,"死亡之林Ⅳ-----------------适合 55 ~ 70 级玩家"), 
		Array(251010000,0,"十年药草地-----------------适合 45 ~ 60 级玩家"), 
		Array(250020000,0,"初级修炼场-----------------适合 50 ~ 60 级玩家"),
		Array(800020130,0,"大佛的邂逅-----------------适合 50 ~ 70 级玩家"), 
		Array(200040000,0,"云彩公园Ⅲ-----------------适合 35 ~ 60 级玩家"),
		Array(541010010,0,"幽灵船２-------------------适合 60 ~ 90 级玩家"),
		Array(200010301,0,"黑暗庭院Ⅰ-----------------适合 70 ~ 90 级玩家"),
		Array(600020300,0,"狼蛛洞穴Ⅰ-----------------适合 80 ~ 120 级玩家"), 
		Array(240020100,0,"火焰死亡战场---------------适合 85 ~ 120 级玩家"),
		Array(220070201,0,"消失的时间-----------------适合 85 ~ 120 级玩家"), 
		Array(220070301,0,"时间停止之间---------------适合 95 ~ 120 级玩家"),
		Array(551030100,0,"阴森世界入口---------------适合 95 ~ 120 级玩家"),  
		Array(541020000,0,"乌鲁城入口-----------------适合 95 ~ 150 级玩家"),
		Array(240040500,0,"龙之巢穴入口---------------适合 100 ~ 150 级玩家"), 
		Array(270030500,0,"忘却之路5------------------适合 120 ~ 150 级玩家")  
		); 

//------------------------------------------------------------------------

var townmaps = Array(

										Array(104000000,0,"明珠港"), 
										Array(100000000,0,"射手村"), 
										Array(101000000,0,"魔法密林"), 
										Array(102000000,0,"勇士部落"), 
										Array(103000000,0,"废弃都市"), 
										Array(105040300,0,"林中之城"), 
										Array(200000000,0,"天空之城"),
										Array(211000000,0,"冰峰雪域"), 
										Array(230000000,0,"水下世界"),  
										Array(222000000,0,"童话村"), 
										Array(220000000,0,"玩具城"),
										Array(240000000,0,"神木村"), 
										Array(701000000,0,"东方神州"),
										Array(250000000,0,"武陵"), 
										Array(702000000,0,"少林寺"), 
										Array(800000000,0,"日本古代神社") ,
										Array(500000000,0,"泰国"),
                                        Array(140000000,0,"里恩"),
                                        Array(106020000,0,"蘑菇城堡"),
										Array(120000000,0,"诺特勒斯号码头"),
										Array(260000000,0,"沙漠之城"), 
										Array(600000000,0,"新叶城"), 
										Array(261000000,0,"马加提亚"), 
										Array(221000000,0,"地球防御本部"), 
										Array(251000000,0,"百草堂"),
										Array(701000200,0,"上海豫园"),
										Array(130000000,0,"圣地"),   
										Array(540010000,0,"新加坡机场"),
										Array(541000000,0,"新加坡码头"),
										Array(300000000,0,"艾林森林"), 
										Array(270000100,0,"时间神殿"), 
										Array(970000000,0,"摄影棚") 
										
		);

//---------//Array(700000000,0,"结婚地图") ---------------------------------------------------------------

var fubenmaps = Array(
		Array(800020400,0,"家族PK地图"),
		Array(193000000,0,"网吧地图")						
		);

//------------------------------------------------------------------------

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("#b好的,下次再见.");
		cm.dispose();
		} else {
	if (status >= 0 && mode == 0) {
		cm.sendOk("#b好的,下次再见.");
		cm.dispose();
		return;
		}
	if (mode == 1) {
		status++;
		} else {
		status--;
		}

//------------------------------------------------------------------------

	if (status == 0) {

   	    var add = "欢迎来到#r某某冒险岛#k,我是本服最大的传送员,";

		add += "冒险到世界地图我都可以为你送到,";

		add += "为方便玩家,管理设置了练级地图,组队副本,小BOSS地图直接传送,";

		add += "如果你有什么更好的地图,不防联系管理员添加,感谢你对本服的支持.#b\r\n\r\n";

		add += "#e#d#L0#城镇传送#l ";

		add += "           #L1#练级传送#l\r\n\r\n";

		add += "#L2#小BOSS传送#l ";

		add += "         #L6#活动地图#l\r\n\r\n";


 
		cm.sendSimple (add);    

//------------------------------------------------------------------------
				
	} else if (status == 1) {

	if (selection == 0){
		var selStr = "选择你的目的地吧.#b";
		for (var i = 0; i < townmaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + townmaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		towns = 1;
		}

	if (selection == 1) {
		var selStr = "选择你的目的地吧.#b";
		for (var i = 0; i < monstermaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + monstermaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		monsters = 1;
		}

	if (selection == 2) {
		var selStr = "选择你的目的地吧.#b";
		for (var i = 0; i < bossmaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + bossmaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		bosses = 1;
		}

	if (selection == 3) {
		var map = net.sf.MS079.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(280030000);
		var zha1 = map.getCharacters().toArray().length;
		var map = net.sf.MS079.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(280030000);
		var zha2 = map.getCharacters().toArray().length;
		var map = net.sf.MS079.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(280030000);
		var zha3 = map.getCharacters().toArray().length;
		var map = net.sf.MS079.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(280030000);
		var zha4 = map.getCharacters().toArray().length;

		var map = net.sf.MS079.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(240060200);
		var hei1 = map.getCharacters().toArray().length;
		var map = net.sf.MS079.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(240060200);
		var hei2 = map.getCharacters().toArray().length;
		var map = net.sf.MS079.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(240060200);
		var hei3 = map.getCharacters().toArray().length;
		var map = net.sf.MS079.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(240060200);
		var hei4 = map.getCharacters().toArray().length

		var map = net.sf.MS079.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(270050100);
		var pb1 = map.getCharacters().toArray().length;
		var map = net.sf.MS079.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(270050100);
		var pb2 = map.getCharacters().toArray().length;
		var map = net.sf.MS079.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(270050100);
		var pb3 = map.getCharacters().toArray().length;
		var map = net.sf.MS079.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(270050100);
		var pb4 = map.getCharacters().toArray().length

		var map = net.sf.MS079.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(220080001);
		var nao1 = map.getCharacters().toArray().length;
		var map = net.sf.MS079.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(220080001);
		var nao2 = map.getCharacters().toArray().length;
		var map = net.sf.MS079.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(220080001);
		var nao3 = map.getCharacters().toArray().length;
		var map = net.sf.MS079.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(220080001);
		var nao4 = map.getCharacters().toArray().length

   	    var add = "以下所示为各线的BOSS战况#b\r\n";

		add += ""+aaa+"[#r频道一#b]\r\n";

		add += ""+zzz+"[#d扎昆#b]：#r"+zha1+"#b人  [#d黑龙#b]：#r"+hei1+"#b人  [#dPB#b]：#r"+pb1+"#b人  [#d闹钟#b]：#r"+nao1+"#b人\r\n\r\n";

		add += ""+aaa+"[#r频道二#b]\r\n";

		add += ""+zzz+"[#d扎昆#b]：#r"+zha2+"#b人  [#d黑龙#b]：#r"+hei2+"#b人  [#dPB#b]：#r"+pb2+"#b人  [#d闹钟#b]：#r"+nao2+"#b人\r\n\r\n";

		add += ""+aaa+"[#r频道三#b]\r\n";

		add += ""+zzz+"[#d扎昆#b]：#r"+zha3+"#b人  [#d黑龙#b]：#r"+hei3+"#b人  [#dPB#b]：#r"+pb3+"#b人  [#d闹钟#b]：#r"+nao3+"#b人\r\n\r\n";

		add += ""+aaa+"[#r频道四#b]\r\n";

		add += ""+zzz+"[#d扎昆#b]：#r"+zha4+"#b人  [#d黑龙#b]：#r"+hei4+"#b人  [#dPB#b]：#r"+pb4+"#b人  [#d闹钟#b]：#r"+nao4+"#b人\r\n\r\n";
 
		cm.sendOk (add); 

		cm.dispose();
                   }

	if (selection == 6) {
cm.openNpc(9310100, 0);//活动
                   }
	if (selection == 5) {
cm.warp(700000000,0);
cm.dispose();

                   }
//------------------------------------------------------------------------

	} else if (status == 2) {

	if (towns == 1) {
		cm.sendYesNo("你确定要去 " + townmaps[selection][2] + "?");
		chosenMap = selection;
		towns = 2;

	} else if (monsters == 1) {
		cm.sendYesNo("你确定要去 " + monstermaps[selection][2] + "?");
		chosenMap = selection;
		monsters = 2;

	} else if (bosses == 1) {
		cm.sendYesNo("你确定要去 " + bossmaps[selection][2] + "?");
		chosenMap = selection;
		bosses = 2;

	} else if (fuben == 1) {
		cm.sendYesNo("你确定要去 " + fubenmaps[selection][2] + "?");
		chosenMap = selection;
		fuben = 2;

		}

//----------------------------------------------------------------------

	} else if (status == 3) {

	if (towns == 2) {
		if(cm.getMeso()>=townmaps[chosenMap][1]){
		cm.warp(townmaps[chosenMap][0], 0);
		cm.gainMeso(-townmaps[chosenMap][1]);
		}else{
		cm.sendOk("你没有足够的金币哦!");
		}
		cm.dispose();

	} else if (monsters == 2) {
		if(cm.getMeso()>=monstermaps[chosenMap][1]){
		cm.warp(monstermaps[chosenMap][0], 0);
		cm.gainMeso(-monstermaps[chosenMap][1]);
		}else{
		cm.sendOk("你没有足够的金币哦!");
		}
		cm.dispose();

	} else if (bosses == 2) {
		if(cm.getMeso()>=bossmaps[chosenMap][1]){
		cm.warp(bossmaps[chosenMap][0], 0);
		cm.gainMeso(-bossmaps[chosenMap][1]);
		}else{
		cm.sendOk("你没有足够的金币哦!");
		}
		cm.dispose();

	} else if (fuben == 2) {
		if(cm.getMeso()>=fubenmaps[chosenMap][1]){
		cm.warp(fubenmaps[chosenMap][0], 0);
		cm.gainMeso(-fubenmaps[chosenMap][1]);
		}else{
		cm.sendOk("你没有足够的金币哦!");
		}
		cm.dispose();

                }

//------------------------------------------------------------------------

		}
		}
		}

