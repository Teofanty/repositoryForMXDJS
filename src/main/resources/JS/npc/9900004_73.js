function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#L1##r#v4170002#��ȡ500Ԫ���#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("���������಻��2���ո�");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("�ֽ������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(4170002,1)){
				cm.gainItem(4170002, -1);
				cm.gainItem(2022070, 20);//�����ߵ�ף��
				cm.gainItem(5041000, 10);//�߼�˲��ʯ
				cm.gainItem(5390006, 3);//�����ϻ�����
				cm.gainItem(4000487, 3);//��Ӱ��
				cm.gainItem(5150040, 3);//�ʼ�����
				cm.gainItem(4002000, 10);//����ţ��Ʊ
				cm.gainItem(4002001, 10);//����ţ��Ʊ
				cm.gainItem(4002002, 1);//������Ʊ
				cm.gainItem(4002003, 3);//��ˮ����Ʊ
				cm.gainItem(4031559, 5);//��˹��Ʊ
            cm.sendOk("�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ�˷�Ҷð�յ������������");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
		}
    }
}


