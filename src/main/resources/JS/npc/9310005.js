/* ==================
 �ű�����: NPC    
 �ű���Ȩ��һ�ߺ��Ŷ�-ά��
 ��ϵ�ۿۣ�297870163
 =====================
 */
var wupdm = 4000194;//��Ʒ����
var wupsl = 50;//��Ʒ����
var zuiduocs = 6;//ÿ�������ս�Ĵ���
function start() {
    cm.sendYesNo("��ȷ����Ҫʹ��"+wupsl+"��#v"+wupdm+"##z"+wupdm+"#����#rͨ��#k��\r\n������Ѿ����룺#r"+cm.getPlayer().getBossLog("wugong1")+"#k�� ");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("��... �������㲢û��׼���á�");
	cm.dispose();
	} else if (!cm.haveItem(wupdm, wupsl)) {
       cm.sendOk("��û��"+wupsl+"��#v"+wupdm+"##z"+wupdm+"#!");
       cm.dispose();
	} else if(cm.getPlayer().getBossLog("wugong1") >= zuiduocs){
        cm.sendOk("������Ѿ����룺#r"+cm.getPlayer().getBossLog("wugong1")+"#k��,���������� !");
		cm.dispose();
	} else {
	cm.gainItem(wupdm, -wupsl);
    cm.warp(701010322, "sp");	
	cm.getPlayer().setBossLog('wugong1');
    cm.dispose();
    }
}
