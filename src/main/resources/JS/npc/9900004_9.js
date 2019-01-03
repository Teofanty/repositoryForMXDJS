importPackage(net.sf.sunms.tools);
importPackage(net.sf.sunms.client);
importPackage(net.sf.sunms.server);
importPackage(java.util);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools);
importPackage(Packages.tools.packet);
var status = 0;

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {

	    var   textzz = "充值兑换比例 ：1元 = 100点卷#k\r\n#d#e冲值赞助请联系管理或者群公告上有\r\n";

		textzz += " #n#r#L0#【网站充值领取-当前有#g "+cm.getwzcz() +"#r点券尚未领取请点击领取 】#l#n\r\n\r\n";
		cm.sendSimple (textzz);  

	}else if (status == 1) {

	if (selection == 0){//充值领取
		if(cm.getwzcz()==0){
		cm.sendOk("您当前未兑现金额为"+ cm.getwzcz() +"点券 ，兑换失败！\r\n#r充值比例1元=100点卷.");
		cm.dispose();	
		}else{
		var  j = cm.getwzcz();
		cm.setwzcz(-j);
		cm.gainDJ(j*1);
        cm.gaincz(+j);	
        cm.sendOk("兑现成功！获得"+ j*1 + "点卷！\r\n#r充值比例1元=100点卷.");
		cm.dispose();
		}
		
}else if (selection == 1){//100
         cm.openNpc(9900004, 91);
			}
			}
			}

}


