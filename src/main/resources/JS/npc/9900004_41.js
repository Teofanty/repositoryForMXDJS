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

            if ( cm.getPlayer().getBossLog('21-50-1') == 1){
				txt += "#r������Ѿ���ɹ���,������������!";
                cm.sendOk(txt);
                cm.dispose();

            }else{
                txt += "#L1##b�ռ�100��#v4000020#";
                cm.sendSimple(txt);
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000020,100) ){
		        cm.gainItem(4000020, -100);
                cm.sendOk("��ϲ������˽���!");
				//cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4002002, 1);//�������Ʒ1������˼
				cm.gainMeso(20000);
				cm.gainExp(40000);
				cm.getPlayer().setBossLog('21-50-1');
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�50��#v4000020#������!");
                cm.dispose();
            }
        }
    }
}