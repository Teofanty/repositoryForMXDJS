/* ==================
 �ű�����: NPC    
 �ű���Ȩ��һ�ߺ��Ŷ�-ά��
 ��ϵ�ۿۣ�297870163
 =====================
 */
var zuididj = 70;//��͵ȼ�
function start() {
    cm.sendYesNo("��ս��������Ҫ������\r\n��͵ȼ� ��#r"+zuididj+"#k��!");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("��... �������㲢û��׼���á�");
	cm.dispose();
	} else if(cm.getLevel() < zuididj){
        cm.sendOk("��ĵȼ����� ��#r"+zuididj+"#k��!");
		cm.dispose();
	} else {
	cm.warp(701010321, 0);
	cm.dispose();
    }
}
