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

	    var   textzz = "��ֵ�һ����� ��1Ԫ = 100���#k\r\n#d#e��ֵ��������ϵ�������Ⱥ��������\r\n";

		textzz += " #n#r#L0#����վ��ֵ��ȡ-��ǰ��#g "+cm.getwzcz() +"#r��ȯ��δ��ȡ������ȡ ��#l#n\r\n\r\n";
		cm.sendSimple (textzz);  

	}else if (status == 1) {

	if (selection == 0){//��ֵ��ȡ
		if(cm.getwzcz()==0){
		cm.sendOk("����ǰδ���ֽ��Ϊ"+ cm.getwzcz() +"��ȯ ���һ�ʧ�ܣ�\r\n#r��ֵ����1Ԫ=100���.");
		cm.dispose();	
		}else{
		var  j = cm.getwzcz();
		cm.setwzcz(-j);
		cm.gainDJ(j*1);
        cm.gaincz(+j);	
        cm.sendOk("���ֳɹ������"+ j*1 + "���\r\n#r��ֵ����1Ԫ=100���.");
		cm.dispose();
		}
		
}else if (selection == 1){//100
         cm.openNpc(9900004, 91);
			}
			}
			}

}


