/*
 *
 *  �˽ű������������������
 * ������ҵ�ű����Ⱥ:1049548
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
Array(104000400,0,"��ţ��BOSS  "),
Array(100000005,0,"Ģ����BOSS  "),
Array(105070002,0,"��ʬĢ����BOSS  "), 
Array(105090900,0,"���������Ժ�������BOSS  "),    
Array(101000300,0,"ħ��������ͷ������ħBOSS  "),  
Array(211040101,0,"ѩ�˹ȣ�ѩ��BOSS  "), 
Array(240020402,0,"�������Ϣ�أ������BOSS  "), 
Array(240020101,0,"����Ҷ�ɭ�֣�����BOSS  ")  
														
		);

//------------------------------------------------------------------------

var monstermaps = Array(
		Array(104040000,0,"����ѵ����-----------------�ʺ� 1 ~ 15 �����"),
		Array(104010001,0,"��ĺ���-------------------�ʺ� 10 ~ 20 �����"), 
		Array(103000101,0,"����һ����<��1����>--------�ʺ� 20 ~ 30 �����"), 
		Array(101040001,0,"Ұ�������-----------------�ʺ� 20 ~ 35 �����"), 
		Array(101040003,0,"��֮�ڹ�֮��---------------�ʺ� 20 ~ 35 �����"), 
		Array(101030001,0,"Ұ���������---------------�ʺ� 20 ~ 35 �����"), 
		Array(105070001,0,"���Ϲ㳡-------------------�ʺ� 20 ~ 40 �����"), 
		Array(220010500,0,"¶̨����-------------------�ʺ� 40 ~ 70 �����"), 
		Array(106000002,0,"Σ�յ�Ͽ�Ȣ�---------------�ʺ� 40 ~ 60 �����"), 
		Array(105090300,0,"��Ѩ-----------------------�ʺ� 40 ~ 70 �����"), 
		Array(103000105,0,"����һ����<��4����>--------�ʺ� 50 ~ 70 �����"), 
		Array(105040306,0,"����֮��-------------------�ʺ� 60 ~ 80 �����"), 
		Array(211041400,0,"����֮�֢�-----------------�ʺ� 55 ~ 70 �����"), 
		Array(251010000,0,"ʮ��ҩ�ݵ�-----------------�ʺ� 45 ~ 60 �����"), 
		Array(250020000,0,"����������-----------------�ʺ� 50 ~ 60 �����"),
		Array(800020130,0,"��������-----------------�ʺ� 50 ~ 70 �����"), 
		Array(200040000,0,"�Ʋʹ�԰��-----------------�ʺ� 35 ~ 60 �����"),
		Array(541010010,0,"���鴬��-------------------�ʺ� 60 ~ 90 �����"),
		Array(200010301,0,"�ڰ�ͥԺ��-----------------�ʺ� 70 ~ 90 �����"),
		Array(600020300,0,"���붴Ѩ��-----------------�ʺ� 80 ~ 120 �����"), 
		Array(240020100,0,"��������ս��---------------�ʺ� 85 ~ 120 �����"),
		Array(220070201,0,"��ʧ��ʱ��-----------------�ʺ� 85 ~ 120 �����"), 
		Array(220070301,0,"ʱ��ֹ֮ͣ��---------------�ʺ� 95 ~ 120 �����"),
		Array(551030100,0,"��ɭ�������---------------�ʺ� 95 ~ 120 �����"),  
		Array(541020000,0,"��³�����-----------------�ʺ� 95 ~ 150 �����"),
		Array(240040500,0,"��֮��Ѩ���---------------�ʺ� 100 ~ 150 �����"), 
		Array(270030500,0,"��ȴ֮·5------------------�ʺ� 120 ~ 150 �����")  
		); 

//------------------------------------------------------------------------

var townmaps = Array(

										Array(104000000,0,"�����"), 
										Array(100000000,0,"���ִ�"), 
										Array(101000000,0,"ħ������"), 
										Array(102000000,0,"��ʿ����"), 
										Array(103000000,0,"��������"), 
										Array(105040300,0,"����֮��"), 
										Array(200000000,0,"���֮��"),
										Array(211000000,0,"����ѩ��"), 
										Array(230000000,0,"ˮ������"),  
										Array(222000000,0,"ͯ����"), 
										Array(220000000,0,"��߳�"),
										Array(240000000,0,"��ľ��"), 
										Array(701000000,0,"��������"),
										Array(250000000,0,"����"), 
										Array(702000000,0,"������"), 
										Array(800000000,0,"�ձ��Ŵ�����") ,
										Array(500000000,0,"̩��"),
                                        Array(140000000,0,"���"),
                                        Array(106020000,0,"Ģ���Ǳ�"),
										Array(120000000,0,"ŵ����˹����ͷ"),
										Array(260000000,0,"ɳĮ֮��"), 
										Array(600000000,0,"��Ҷ��"), 
										Array(261000000,0,"�������"), 
										Array(221000000,0,"�����������"), 
										Array(251000000,0,"�ٲ���"),
										Array(701000200,0,"�Ϻ�ԥ԰"),
										Array(130000000,0,"ʥ��"),   
										Array(540010000,0,"�¼��»���"),
										Array(541000000,0,"�¼�����ͷ"),
										Array(300000000,0,"����ɭ��"), 
										Array(270000100,0,"ʱ�����"), 
										Array(970000000,0,"��Ӱ��") 
										
		);

//---------//Array(700000000,0,"����ͼ") ---------------------------------------------------------------

var fubenmaps = Array(
		Array(800020400,0,"����PK��ͼ"),
		Array(193000000,0,"���ɵ�ͼ")						
		);

//------------------------------------------------------------------------

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("#b�õ�,�´��ټ�.");
		cm.dispose();
		} else {
	if (status >= 0 && mode == 0) {
		cm.sendOk("#b�õ�,�´��ټ�.");
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

   	    var add = "��ӭ����#rĳĳð�յ�#k,���Ǳ������Ĵ���Ա,";

		add += "ð�յ������ͼ�Ҷ�����Ϊ���͵�,";

		add += "Ϊ�������,����������������ͼ,��Ӹ���,СBOSS��ͼֱ�Ӵ���,";

		add += "�������ʲô���õĵ�ͼ,������ϵ����Ա���,��л��Ա�����֧��.#b\r\n\r\n";

		add += "#e#d#L0#������#l ";

		add += "           #L1#��������#l\r\n\r\n";

		add += "#L2#СBOSS����#l ";

		add += "         #L6#���ͼ#l\r\n\r\n";


 
		cm.sendSimple (add);    

//------------------------------------------------------------------------
				
	} else if (status == 1) {

	if (selection == 0){
		var selStr = "ѡ�����Ŀ�ĵذ�.#b";
		for (var i = 0; i < townmaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + townmaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		towns = 1;
		}

	if (selection == 1) {
		var selStr = "ѡ�����Ŀ�ĵذ�.#b";
		for (var i = 0; i < monstermaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + monstermaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		monsters = 1;
		}

	if (selection == 2) {
		var selStr = "ѡ�����Ŀ�ĵذ�.#b";
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

   	    var add = "������ʾΪ���ߵ�BOSSս��#b\r\n";

		add += ""+aaa+"[#rƵ��һ#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+zha1+"#b��  [#d����#b]��#r"+hei1+"#b��  [#dPB#b]��#r"+pb1+"#b��  [#d����#b]��#r"+nao1+"#b��\r\n\r\n";

		add += ""+aaa+"[#rƵ����#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+zha2+"#b��  [#d����#b]��#r"+hei2+"#b��  [#dPB#b]��#r"+pb2+"#b��  [#d����#b]��#r"+nao2+"#b��\r\n\r\n";

		add += ""+aaa+"[#rƵ����#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+zha3+"#b��  [#d����#b]��#r"+hei3+"#b��  [#dPB#b]��#r"+pb3+"#b��  [#d����#b]��#r"+nao3+"#b��\r\n\r\n";

		add += ""+aaa+"[#rƵ����#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+zha4+"#b��  [#d����#b]��#r"+hei4+"#b��  [#dPB#b]��#r"+pb4+"#b��  [#d����#b]��#r"+nao4+"#b��\r\n\r\n";
 
		cm.sendOk (add); 

		cm.dispose();
                   }

	if (selection == 6) {
cm.openNpc(9310100, 0);//�
                   }
	if (selection == 5) {
cm.warp(700000000,0);
cm.dispose();

                   }
//------------------------------------------------------------------------

	} else if (status == 2) {

	if (towns == 1) {
		cm.sendYesNo("��ȷ��Ҫȥ " + townmaps[selection][2] + "?");
		chosenMap = selection;
		towns = 2;

	} else if (monsters == 1) {
		cm.sendYesNo("��ȷ��Ҫȥ " + monstermaps[selection][2] + "?");
		chosenMap = selection;
		monsters = 2;

	} else if (bosses == 1) {
		cm.sendYesNo("��ȷ��Ҫȥ " + bossmaps[selection][2] + "?");
		chosenMap = selection;
		bosses = 2;

	} else if (fuben == 1) {
		cm.sendYesNo("��ȷ��Ҫȥ " + fubenmaps[selection][2] + "?");
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
		cm.sendOk("��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

	} else if (monsters == 2) {
		if(cm.getMeso()>=monstermaps[chosenMap][1]){
		cm.warp(monstermaps[chosenMap][0], 0);
		cm.gainMeso(-monstermaps[chosenMap][1]);
		}else{
		cm.sendOk("��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

	} else if (bosses == 2) {
		if(cm.getMeso()>=bossmaps[chosenMap][1]){
		cm.warp(bossmaps[chosenMap][0], 0);
		cm.gainMeso(-bossmaps[chosenMap][1]);
		}else{
		cm.sendOk("��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

	} else if (fuben == 2) {
		if(cm.getMeso()>=fubenmaps[chosenMap][1]){
		cm.warp(fubenmaps[chosenMap][0], 0);
		cm.gainMeso(-fubenmaps[chosenMap][1]);
		}else{
		cm.sendOk("��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

                }

//------------------------------------------------------------------------

		}
		}
		}

