/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if(qm.getQuestStatus(4762)== 2){
			qm.sendOk("���Ѿ���ȡ������������Ŭ����15�����Ի���½����");
			qm.completeQuest();
			qm.dispose();
			}else{
			qm.sendNext("#k��ϲ�㵱ǰ�ȼ��Ѿ�����#b10#k����");
			}
		} else if (status == 1) {
			(cm.getInventory(5).isFull(1)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
            cm.sendOk("#b�뱣֤�ֽ���λ������2���ո�ſ�����ȡ.");	//�Ի���
            cm.dispose();//����
	    } else if(cm.getPlayer().getOneTimeLog("10������") >= 1){//�ж����ü�¼
			cm.sendOk("���Ѿ���ȡ����ǰ�ȼ�����!");//�Ի���
			cm.dispose();//����
		} else if(cm.getLevel() >= 10){//�жϵȼ�
			cm.gainItem(5211047, 1, 7);//˫�����鿨7��
			cm.gainItem(5030000, 1);//˫�����鿨7���Ӷ����
			cm.getPlayer().setOneTimeLog("10������");//�����ü�¼
			cm.sendOk("�һ������ɹ�");//�Ի���
			cm.dispose();//����
			} else {
			cm.sendOk("��û�дﵽ��ǰ�ȼ�!");//�Ի���
			cm.dispose();//����
	    }	
	}
}