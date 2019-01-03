importPackage(net.sf.cherry.client);

var status = 0;
var jobName;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendOk("�����ܺ�Ŷ~~�����ı��뷨�ǵ���ʱ�����ҡ�ף����ˣ�");
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("�ˣ����� #b����Ա#k �ҿ��԰��������תְŶ~~��");
        } else if (status == 1) {
            if(cm.getJob() >= 1000 && cm.getJob() <= 1510){
                cm.sendNext("�ۣ�������ʿ�ŵ�һԱ���Һܸ���Ϊ�����Ŷ������");
                status = 161;
                return;
            }
            if(cm.getJob() >= 2000){
                cm.sendNext("��~~ս��ս��������ְҵŶ~�Һܸ���Ϊ�����Ŷ������");
                status = 163;
                return;
            }

        }   else if (status == 156) {
            cm.changeJob(job);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְ�ɹ���");
            cm.dispose();

        } else if (status == 161) {
            if(cm.getJob() == 1000 && cm.getLevel()>=10){
                cm.sendSimple("�������㻹��һ��������,��ѡ��һ���ʺ��Լ���ְҵ��!#b\r\n#L0#����ʿ#l #L1#����ʿ#l #L2#����ʹ��#l #L3#ҹ����#l #L4#��Ϯ��#l#k");
            }else if(parseInt(cm.getJob() / 100) >10 && cm.getLevel()>=30 && cm.getJob()%100 == 0){
                cm.sendYesNo("�����ȷ��Ҫ���еڶ���תְ����");
            }else if(parseInt(cm.getJob() / 100) >10 && cm.getLevel()>=70 && cm.getJob()%10 == 0){
                cm.sendYesNo("�����ȷ��Ҫ���е�����תְ����");
            }else{
                cm.sendOk("��Ŀǰ����������ʹ���ҵķ���Ŷ!");
                cm.dispose();
            }
        } else if (status == 162) {
            if(cm.getJob() == 1000 && cm.getLevel()>=10){
                if (selection == 0) {
                    job = 1100;
                } else if (selection == 1) {
                    job = 1200;
                } else if (selection == 2) {
                    job = 1300;
                } else if (selection == 3) {
                    job = 1400;
                } else if (selection == 4) {
                    job = 1500;
                }
                cm.changeJob(job);
                //cm.gainItem(1142066,1);
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְΪ��ʿ��ְҵ��");
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(parseInt(cm.getJob() / 100) >10 && cm.getLevel()>=30 && cm.getJob()%100 == 0){
                cm.changeJob(cm.getJob()+10);
                //cm.gainItem(1142067,1);
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְΪ��ʿ��ְҵ��");
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(parseInt(cm.getJob() / 100) >10 && cm.getLevel()>=70 && cm.getJob()%10 == 0){
                //cm.gainItem(1142068,1);
                cm.getPlayer().gainAp(5);
                cm.changeJob(cm.getJob()+1);
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְΪ��ʿ��ְҵ��");
                cm.sendOk("תְ�ɹ���ϣ�����Ժ��ð��֮·˳��!");
            }
            cm.dispose();
        } else if (status == 164) {
            if(cm.getJob() == 2000 && cm.getLevel() >=10){
                cm.sendYesNo("ս��ս������\r\n�������㻹��һ��սͯ,��ȷ��Ҫ���е�һ��תְ��");
            } else if(cm.getJob() == 2100 && cm.getLevel() >=30) {
                cm.sendYesNo("ս��ս�����������ȷ��Ҫ���еڶ���תְ����");
            } else if(cm.getJob() == 2110 && cm.getLevel() >=70){
                cm.sendYesNo("ս��ս�����������ȷ��Ҫ���е�����תְ����");
            } else if(cm.getJob() == 2111 && cm.getLevel() >=120) {
                cm.sendYesNo("ս��ս�����������ȷ��Ҫ���е��Ĵ�תְ����");
            } else if(cm.getJob() == 2112 && cm.getLevel() >120) {
                cm.sendOk("���Ѿ���������е�תְ�������������Ͱɣ���");
            } else {
                cm.sendOk("������Ŀǰ���������һ�����Ϊ������Ŷ�����Ͱɣ�");
                cm.dispose();
            }
        } else if (status == 165) {
            if(cm.getJob() == 2000 && cm.getLevel() >=10){
                cm.changeJob(2100);
                //cm.gainItem(1142129,1);
                //cm.gainItem(1442077,1);
                //cm.gainItem(2000022,50);
                //cm.gainItem(2000023,50);
                cm.teachSkill(21000000,0,10);
                cm.teachSkill(21001001,0,5);
                cm.teachSkill(21000002,0,20);
                cm.teachSkill(21000004,0,10);
                cm.teachSkill(21001003,0,20);
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְΪս��ְҵ��");
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(cm.getJob() == 2100 && cm.getLevel() >=30){
                cm.changeJob(2110);
                //cm.gainItem(1142130,1);
                //cm.gainItem(1442078,1);
                cm.teachSkill(21100000,0,20);
                cm.teachSkill(21100001,0,20);//�����ػ�
                cm.teachSkill(21100002,0,20);
                cm.teachSkill(21100007,0,10);//��Ӱ����
                cm.teachSkill(21101003,0,5);//��ѹ
                cm.teachSkill(21101005,0,10);//������Ѫ
                cm.teachSkill(21101006,0,10);//��ѩì
                cm.teachSkill(21100010,0,20); //�ռ�ì
                cm.teachSkill(21100008,0,5);// ����ѵ��
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְΪս��ְҵ��");
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(cm.getJob() == 2110 && cm.getLevel() >=70){
                //cm.gainItem(1142131,1);
                // cm.getPlayer().gainAp(3);
                cm.changeJob(2111);
                cm.teachSkill(21110002,0,20);//
                cm.teachSkill(21110000,0,20);//
                cm.teachSkill(21110003,0,30);//
                cm.teachSkill(21110004,0,30);//
                cm.teachSkill(21110006,0,30);//
                cm.teachSkill(21110007,0,20);//
                cm.teachSkill(21110008,0,20);//
                cm.teachSkill(21111001,0,20);//
                cm.teachSkill(21111005,0,20);//
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְΪս��ְҵ��");
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(cm.getJob() == 2111 && cm.getLevel() >=120){
                //cm.gainItem(1142132,1);
                //cm.getPlayer().gainAp(5);
                cm.teachSkill(21121000,0,30);
                cm.teachSkill(21120001,0,30);
                cm.teachSkill(21120002,0,30);
                cm.teachSkill(21120004,0,30);
                cm.teachSkill(21120005,0,30);
                cm.teachSkill(21120006,0,30);
                cm.teachSkill(21120007,0,30);
                cm.teachSkill(21120009,0,30);
                cm.teachSkill(21120010,0,30);
                cm.teachSkill(21121000,0,30);
                cm.teachSkill(21121003,0,30);
                cm.teachSkill(21121008,0,5);
                cm.changeJob(2112);
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer().getName() + "] ��NPC������Ա ����תְΪս��ְҵ��");
                cm.sendOk("תְ�ɹ���ϣ�����Ժ��ð��֮·˳����");
            }
            cm.dispose();
        } else {
            cm.dispose();
        }

    }
}
