/* ==================
 �ű�����: NPC	    
 �ű����ߣ�һ�ߺ�-ά��   
 ��ϵ��ʽ��297870163
 =====================
 */
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";


var status = 0;
var nx = 1000;
var jilv = 0;
var costa;
var xx = -1;

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function GetRandomNum(Min,Max){  
		var Range = Max - Min;  
		var Rand = Math.random();  
		return(Min + Math.round(Rand * Range));  
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
		if (mode == 1)
		status++;
		else
		status--;





	if (status == 0) {
		
   	    var add = "#r"+cm.getChannelServer().getServerName()+"ð�յ�#k,#r�Ĳ�ϵͳ#k\r\n ";

		add += ""+xxx+"-������ע���#e#b[��ע]#n#k\r\n ";

		add += ""+xxx+"-�ӱ��Ĳ��������������ʵ���,�������Ӹ��ʽ���.\r\n ";

		add += ""+xxx+"-��ǰ��עѺ��:#b<#e#r ����ȯ�Ĳ� #n#b>#b<#e#r "+nx+" ����ȯ#n#b >#k\r\n";

		add += "#L0#"+ttt+"-[#r��ע#k]#l\r\n\r\n";

		add += "#L1#"+ttt+"-[#b1:1������#k]#l";

		add += "#L2#"+ttt+"-[#b1:2������#k]#l";

		add += "#L3#"+ttt+"-[#b1:3������#k]#l";

		cm.sendSimple (add);

	} else if (status == 1) {

	if (selection == 0){
		cm.sendOk("#b�ɹ���ע#r1000����ȯ#b,���ȷ����鿴.");
		nx = nx + 1000
		status = -1; 

	} else if (selection == 1){

   	    var add = "#b<#e#r ����ȯ�Ĳ� #n#b>\r\n\r\n";

		add += ""+ttt+"-��ѡ�����[#r����1:1#b].\r\n";

		add += ""+ttt+"-����ѺעΪ[#r"+nx+"������ȯ#b].\r\n";

		add += ""+ttt+"-���ʤ������ȡ[#r��������"+nx*1+"����ȯ#b]�Ľ���.\r\n";

		add += ""+ttt+"-���[#r��#b]��ʼ�Ĳ�,���[#r����#b]�����Ĳ�.";

		cm.sendYesNo (add); 

		jilv = 1; 

		xx=0

	} else if (selection == 2){

   	    var add = "#b<#e#r ����ȯ�Ĳ� #n#b>\r\n\r\n";

		add += ""+ttt+"-��ѡ�����[#r����1:2#b].\r\n";

		add += ""+ttt+"-����ѺעΪ[#r"+nx+"������ȯ#b].\r\n";

		add += ""+ttt+"-���ʤ������ȡ[#r��������"+nx*2+"����ȯ#b]�Ľ���.\r\n";

		add += ""+ttt+"-���[#r��#b]��ʼ�Ĳ�,���[#r����#b]�����Ĳ�.";

		cm.sendYesNo (add); 

		jilv = 2; 

		xx=0

	} else if (selection == 3){

   	    var add = "#b<#e#r ����ȯ�Ĳ� #n#b>\r\n\r\n";

		add += ""+ttt+"-��ѡ�����[#r����1:3#b].\r\n";

		add += ""+ttt+"-����ѺעΪ[#r"+nx+"������ȯ#b].\r\n";

		add += ""+ttt+"-���ʤ������ȡ[#r��������"+nx*3+"����ȯ#b]�Ľ���.\r\n";

		add += ""+ttt+"-���[#r��#b]��ʼ�Ĳ�,���[#r����#b]�����Ĳ�.";

		cm.sendYesNo (add); 

		jilv = 3; 

		xx=0

		}

	} else if (status == 2) {

	if (xx == 0){
		if (jilv == 0){
		} else if (jilv != 0){
		if (cm.getPlayer().getCSPoints(2) < nx) {
		cm.sendOk("#b���ĵ���ȯ����,���ܲμӶĲ�.....");
		status = -1; 
		}else {
		jiaru = GetRandomNum(0,jilv);
		if (jiaru == 0) {
		nx = nx * jilv
		cm.gainD(nx);
		cm.sendOk("#b��ϲ,���Ѿ����ȫʤ...");
		cm.laba(cm.getPlayer().getName() + " [�Ĳ�ϵͳ]" + " : " + "�ڵ���ȯ��ƴ��ʤ����,��/�������["+nx+"����ȯ]",11);
        status = -1; 
		} else {
		cm.gainD(-nx);
		cm.sendOk("#b���簡.������....");
		cm.laba(cm.getPlayer().getName() + " [�Ĳ�ϵͳ]" + " : " + "�ڵ���ȯ��ƴ��ʧ����,��/��ʧȥ��["+nx+"����ȯ]",11);
		status = -1; 
		}
		}
		}





		









		}					
		}
		}
		}

