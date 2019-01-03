var status = -1;
var need = 1;

function start() {
 action(1, 0, 0);
}
 
function action(mode, type, selection){
	 if(mode == 1){
		 status++;
	 } else {
		 cm.dispose();
		 returm;
	 }
	 if(status == 0){
		 cm.sendYesNo("你想去万圣节活动地图吗?金币需要#r" + need);
	 } else if(status == 1){
		 if(cm.getPlayer().getMeso() < need){
			 cm.sendNext("你的金币不够 ");
			 cm.dispose();
			 return;
		 }
		 cm.gainMeso(-need);
		cm.warp(229000000, 0);
		cm.dispose();
		}
 }