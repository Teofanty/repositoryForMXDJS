/*�һ�NPC ����:bay ��*/
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

            cm.sendOk("��ӭ���٣�");
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
            for (i = 0; i < 60; i++) {
                text += "";
            }
			//text +=" �һ�:#v4000040#1 HP/MP+50\r\n\r\n";
            text +=" �һ�����Ҫ����:1��#v4001083#\r\n";
            text += "#L1##d��Ҫ�һ�#v4000463#\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
		if (cm.getInventory(1).isFull(1)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
        } else if (!cm.haveItem(4001083, 1)) {
                cm.sendOk("#v4001083#����1����");
				cm.dispose();
		} else if (cm.getMeso() <=1) {
                cm.sendOk("��Ҳ���1��ң�");
				cm.dispose();
		} else {
                cm.gainItem(4001083,-1);//����۳���Ʒ
                cm.gainMeso(-1);
cm.gainItem(4000463,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//�������Ʒ,�����������
//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,�ƶ��ٶ�,��Ծ��
cm.dispose();
            }
			}
		}
    }