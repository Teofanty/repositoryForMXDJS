
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) { 
var ���=0;
		var ���ֵ=cm.getPMAX(���);
		var �Լ��������� = cm.getPNew(���);
		var ����ȼ�= cm.getMax();
	if (mode == -1) {
        cm.dispose();
    } else {
		if (mode == 1) {
			status++;
		} else {
			cm.dispose();
			return;
		}
    /*if (cm.getClient().getChannel() >= 2) {
        cm.sendNext("ֻ����1Ƶ�����о���.");
        cm.dispose();
        return;
    }*/
    if (status == 0) {

			if(����ȼ�==200){
				
		    cm.sendOk("ħ���ķ�ӡ�Ѿ��⿪������ȼ��ѵ��Ｋ��200������ӵ�м��޵��������Դ��ħ��ȥ�ˣ�");
			cm.dispose();
			return;	
		}else{
		cm.sendNext("ð�յ����类ħ��������ӡ��\r\n\r\n��ǰ����ȯ:"+cm.getPlayer().getCSPoints(2)+"\r\n\r\n�ռ�#v4001128#ը����ӡ��ͻ�Ƶȼ����ޣ�\r\n��ǰ����ȼ����ޣ�#r"+����ȼ�);
		}
		
    } else if (status == 1) {
		var textx = "#v4001128#�ռ���״ \n\r #B" + cm.getPercentage(�Լ���������,���ֵ) + "# "+cm.getPercentage(�Լ���������,���ֵ)+"%\n\r ������ǰ����Ǽ�������������ȼ���ӡ�ͽ����һ�֡���\r\n";
		if(cm.getPlayer().isGM()){
			cm.sendSimple(textx+"#r(ֻ��GM�Ż���ʾ)#k\n\r #b#L0#Ϊ�������#v4001128##l#k  \n\r #L2#�������(ֻ��GM�Ż���ʾ)#l\n\r #L3#��ʼ������ȼ�����(ֻ��GM�Ż���ʾ)#l#k");
			
		//cm.sendSimple("�����õ�ͼ��Ҫ�õ�ƴͼ������-#b��ҩͰ#k \n\r #b#L0# �Ұѻ�ҩͰ�����ˡ�#l#k \n\r #b#L1# ����������ڵ��ռ����ȡ�#l#k \n\r #b#L2# �������ƴͼ(ֻ��GM�Ż���ʾ)�� #l#k \n\r #b#L3# ��ʼ������ȼ�(ֻ��GM�Ż���ʾ)�� #l#k\n\r\n\r #b< �ڿ��ļ���ƴͼ�� : "+�Լ���������+" ���ֵ "+���ֵ+"�� >#k");
		}else{
			cm.sendSimple(textx+"\n\r #b#L0#Ϊ�������#v4001128##l#k");
		}
    } else if (status == 2) {
        if (selection == 1) {
            cm.sendNext("��ҩͰ�ռ���״ \n\r #B" + cm.getPercentage(�Լ���������,���ֵ) + "# "+cm.getPercentage(�Լ���������,���ֵ)+"%\n\r ������ǰ����Ǽ����������õ�ͼ�ķ�ӡ�ͽ���ˡ���");
            //cm.safeDispose();
        cm.dispose();
        } else if (selection == 2) {
			 
	  cm.gainPNew(-cm.getPNew(���),���);
        cm.sendNext("����ɹ�.");
        cm.dispose();
		} else if (selection == 3) {
		cm.setPNewMAX(0,200,���);	 //������Ʒ���ֵ
	  cm.setMax(10,1);//����ȼ�Ϊ10
        cm.sendNext("����ȼ������õ���10��.");
        cm.dispose();
        } else if (selection == 0) {
             cm.sendGetNumber("���#z4001128#�������𣿺ܺ�д������׵ĸ���.............#k", 1, 1, 100000);
        }
    } else if (status == 3) {
        var num = selection;
        if (num == 0) {
            cm.sendOk("С�ӣ�����������#v4001128##z4001128#��\r\n ���������¿���Ц��");
			cm.dispose();
			return;
		}else if(���ֵ < �Լ��������� + num){
            cm.sendOk("��Ʒ����������"+ (�Լ��������� + num - ���ֵ) +"����");
			cm.dispose();
			return;
        } else if (cm.haveItem(4001128, num)) {
            cm.gainItem(4001128, -num);
			cm.getPlayer().modifyCSPoints(2,+Math.floor(1 * num));
            
		    cm.gainPNew(num,���);
			
			cm.worldMessage(0x06,"��� "+cm.getPlayer().getName()+" Ϊ������ס���ҩͰ��"+num+"��,��ӡ��������һ�֣������" + Math.floor(1 * num) + "���þ� ");
			if(cm.getPercentage(cm.getPNew(���),���ֵ)==100){
			cm.getPlayer().MapEffectlaba("��ҩͰ��ը����ӡ����������ȼ�������"+(����ȼ�+10));	
			cm.worldMessage(0x06,"��� "+cm.getPlayer().getName()+" �����Ƿ������춯������ȼ�������"+(����ȼ�+10));
			cm.setMax((����ȼ�+10),1);//��������ȼ�
			cm.setPNewMAX(0, (���ֵ*2),���);
			}
			

        }else{
            cm.sendOk("С�ӣ�����������ƴͼ��������\r\n ���������¿���Ц��");
		}
        cm.dispose();
		}
	}
}
