importPackage(Packages.client);
var l = ["��","һ","��","��","��","��","��"];
var d = new Date().getDay();
var str = "����" + l[d];
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if(cm.getPlayer().getBossLog("ÿ������") == 0){
	var ���� = 50;
	var ��Ʒ����= 2340000;
	var ��Ʒ����= 0;
	} else if(cm.getPlayer().getBossLog("ÿ������") == 1){
	var ���� = 100;
	var ��Ʒ����= 2340000;
	var ��Ʒ����= 0;
	} else if(cm.getPlayer().getBossLog("ÿ������") == 2){
	var ���� = 150;
	var ��Ʒ����= 2340000;
	var ��Ʒ����= 0;
	} else if(cm.getPlayer().getBossLog("ÿ������") == 3){
	var ���� = 200;
	var ��Ʒ����= 2340000;
	var ��Ʒ����= 0;
	} else if(cm.getPlayer().getBossLog("ÿ������") == 4){
	var ���� = 200;
	var ��Ʒ����= 2340000;
	var ��Ʒ����= 0;
	} else if(cm.getPlayer().getBossLog("ÿ������") == 5){
	var sj = Math.floor(Math.random()*2);
	var ���� = 200;
	var ��Ʒ����= 2340000;
	var ��Ʒ����= 1;
	var ��Ʒ����1= 2049100;
	var ��Ʒ����1= 1;
	} else if(cm.getPlayer().getBossLog("ÿ������") == 6){
	var ���� = 300;
	var ��Ʒ����= 2340000;
	var ��Ʒ����= 1;
	var ��Ʒ����1= 2049100;
	var ��Ʒ����1= 1;
	}
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var txt = "";
			
			var ����1 = cm.getPlayer().getBossLog("ÿ������")
            txt = "����ÿ������NPC�������Ѿ����:#r"+����1+"#k��\r\n���񽫻�ý���#k\r\n\r\n";
            if (cm.getPlayer().getBossLog("ÿ������") >= 6){
                txt += "���Ѿ������ÿ������ÿ��6�Σ�";
                 cm.sendOk(txt);
				 cm.dispose();
            }else if (d == 0){
			    txt += "#L7##b�ռ�"+����+"��#v4000020##z4000020##l";
                cm.sendSimple(txt);
			}else if (d == 6){
			    txt += "#L6##b�ռ�"+����+"��#v4000020##z4000020##l";
                cm.sendSimple(txt);
			}else if (d == 5){
			    txt += "#L5##b�ռ�"+����+"��#v4000020##z4000020##l";
                cm.sendSimple(txt);
			}else if (d == 4){
			    txt += "#L4##b�ռ�"+����+"��#v4000015##z4000015##l";
                cm.sendSimple(txt);
			}else if (d == 3){
			    txt += "#L3##b�ռ�"+����+"��#v4000015##z4000015##l";
                cm.sendSimple(txt);
			}else if (d == 2){
			    txt += "#L2##b�ռ�"+����+"��#v4000015##z4000015##l";
                cm.sendSimple(txt);
			}else if (d == 1){
			    txt += "#L1##b�ռ�"+����+"��#v4000015##z4000015##l";
                cm.sendSimple(txt);
				 }
        } else if (selection == 1) {
			if (cm.getInventory(2).isFull(0)){//�жϵڶ���Ҳ������������װ�����Ƿ���һ���ո�
		        cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷���ȡ.");
		        cm.dispose();
			 } else if (cm.haveItem(4000015,����) && sj == 1){//�������
				 cm.gainItem(4000015, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(��Ʒ����, ��Ʒ����);//��Ʒ
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
			} else if (cm.haveItem(4000015,����) && sj == 0){//�������
				 cm.gainItem(4000015, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(��Ʒ����1, ��Ʒ����1);//��Ʒ
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
            } else if (cm.haveItem(4000015,����)){
				cm.gainItem(4000015, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�"+����+"��#v4000015##z4000015#������!");
                cm.dispose();
            }
        } else if (selection == 2) {
           if (cm.getInventory(2).isFull(0)){//�жϵڶ���Ҳ������������װ�����Ƿ���һ���ո�
		        cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷���ȡ.");
		        cm.dispose();
			 } else if (cm.haveItem(4000015,����) && sj == 1){//�������
				 cm.gainItem(4000015, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(��Ʒ����, ��Ʒ����);//��Ʒ
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
			 } else if (cm.haveItem(4000015,����) && sj == 0){//�������
				 cm.gainItem(4000015, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(��Ʒ����1, ��Ʒ����1);//��Ʒ
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
            } else if (cm.haveItem(4000015,����)){
				cm.gainItem(4000015, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�"+����+"��#v4000015##z4000015#������!");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.getInventory(2).isFull(0)){//�жϵڶ���Ҳ������������װ�����Ƿ���һ���ո�
		        cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷���ȡ.");
		        cm.dispose();
			 } else if (cm.haveItem(4000015,����) && sj == 1){//�������
				 cm.gainItem(4000015, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(��Ʒ����, ��Ʒ����);//��Ʒ
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
				} else if (cm.haveItem(4000015,����) && sj == 0){//�������
				 cm.gainItem(4000015, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(��Ʒ����1, ��Ʒ����1);//��Ʒ
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
            } else if (cm.haveItem(4000015,����)){
				cm.gainItem(4000015, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�"+����+"��#v4000015##z4000015#������!");
                cm.dispose();
            }
        } else if (selection == 4) {
           if (cm.getInventory(2).isFull(0)){//�жϵڶ���Ҳ������������װ�����Ƿ���һ���ո�
		        cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷���ȡ.");
		        cm.dispose();
			 } else if (cm.haveItem(4000015,����) && sj == 1){//�������
				 cm.gainItem(4000015, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(��Ʒ����, ��Ʒ����);//��Ʒ
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
				} else if (cm.haveItem(4000015,����) && sj == 0){//�������
				 cm.gainItem(4000015, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(��Ʒ����1, ��Ʒ����1);//��Ʒ
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
				
            } else if (cm.haveItem(4000015,����)){
				cm.gainItem(4000015, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�"+����+"��#v4000015##z4000015#������!");
                cm.dispose();
            }
        } else if (selection == 5) {
           if (cm.getInventory(2).isFull(0)){//�жϵڶ���Ҳ������������װ�����Ƿ���һ���ո�
		        cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷���ȡ.");
		        cm.dispose();
			 } else if (cm.haveItem(4000020,����) && sj == 1){//�������
				 cm.gainItem(4000020, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(��Ʒ����, ��Ʒ����);//��Ʒ
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
			} else if (cm.haveItem(4000020,����) && sj == 0){//�������
				 cm.gainItem(4000020, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(��Ʒ����1, ��Ʒ����1);//��Ʒ
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
            } else if (cm.haveItem(4000020,����)){
				cm.gainItem(4000020, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�"+����+"��#v4000020##z4000020#������!");
                cm.dispose();
            }
        } else if (selection == 6) {
             if (cm.getInventory(2).isFull(0)){//�жϵڶ���Ҳ������������װ�����Ƿ���һ���ո�
		        cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷���ȡ.");
		        cm.dispose();
			 } else if (cm.haveItem(4000020,����) && sj == 1){//�������
				 cm.gainItem(4000020, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(��Ʒ����, ��Ʒ����);//��Ʒ
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
				} else if (cm.haveItem(4000020,����) && sj == 0){//�������
				 cm.gainItem(4000020, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(��Ʒ����1, ��Ʒ����1);//��Ʒ
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
            } else if (cm.haveItem(4000020,����)){
				cm.gainItem(4000020, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�"+����+"��#v4000020##z4000020#������!");
                cm.dispose();
            }
        } else if (selection == 7) {
           if (cm.getInventory(2).isFull(0)){//�жϵڶ���Ҳ������������װ�����Ƿ���һ���ո�
		        cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷���ȡ.");
		        cm.dispose();
			 } else if (cm.haveItem(4000020,����) && sj == 1){//�������
				 cm.gainItem(4000020, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(��Ʒ����, ��Ʒ����);//��Ʒ
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
			 } else if (cm.haveItem(4000020,����) && sj ==0){//�������
				 cm.gainItem(4000020, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(��Ʒ����1, ��Ʒ����1);//��Ʒ
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
            } else if (cm.haveItem(4000020,����)){
				cm.gainItem(4000020, -����);
                cm.sendOk("��ϲ������˽���!");
				cm.gainExp(20000);//��2�������˼  
				cm.gainMeso(60000);//�����
				cm.getPlayer().setBossLog('ÿ������');
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�"+����+"��#v4000020##z4000020#������!");
                cm.dispose();
            }
            }
            }
            } 
        
    

