importPackage(Packages.client);
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
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
            txt = "����ÿ������NPC����������񽫻�ý���#k\r\n\r\n";

            if (cm.getPlayer().getBossLog("meirirenwu") == 1){// cm.getPS()  ����˼�� ��ȡ����ֵ�������0 �͵ó���û�п�ʼ���� �����������е�һ������!
			    txt += "#r������Ѿ���ɹ���,������������!";
                cm.sendOk(txt);
                cm.dispose();
            }else{
                txt += "#L1##b�ռ�100��#v4000037##l";
                cm.sendSimple(txt);
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000037,100) ){//|| cm.getBossLog("wugong") == 12){
                //cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ�����һ���ˡ�ֻ���賿12��ˢ�²��У�
				cm.gainItem(4000037, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559,1);//�������Ʒ1������˼
				cm.gainItem(4031560,1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000037#������!");
                cm.dispose();
            }
        }
    }
}
