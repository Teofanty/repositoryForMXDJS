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
		 cm.sendYesNo("����ȥ��ʥ�ڻ��ͼ��?�����Ҫ#r" + need);
	 } else if(status == 1){
		 if(cm.getPlayer().getMeso() < need){
			 cm.sendNext("��Ľ�Ҳ��� ");
			 cm.dispose();
			 return;
		 }
		 cm.gainMeso(-need);
		cm.warp(229000000, 0);
		cm.dispose();
		}
 }