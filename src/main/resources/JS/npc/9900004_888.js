 
importPackage(Packages.client);
importPackage(Packages.client.inventory);

var status = -1;
var beauty = 0;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendOk("�����Ҫð�յ��ƹ�����������Ұɡ�");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
			
			
            var gsjb = "";
            gsjb ="  #e��ӭ����ð�յ��ƹ�ϵͳ����ǰ���Ƽ���"+cm.showtgr()+"��\r\n\r\n";//ͳ�ƶ��ٸ��˺�
            gsjb +="  �����ƹ�ID���ǣ�"+cm.getPlayer().getAccountID()+"#k#d";//��ʾ�˺ŵ�
			gsjb +="  ��������ƹ�ID�󣬱��Ƽ����˷��Ժ��ֵ�Է����ɻ��5%�Ķ����ȯ#k\r\n#d";
			gsjb +="#L2##b��д�����Ƽ���ID��#l\r\n\r\n";
			gsjb +="#L3##b���ƹ��ȯ��ȡ-��ǰ#g "+cm.gettgrjl() +"#r��ȯ��δ��ȡ������ȡ��#l\r\n\r\n\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
        if (selection == 2) {
        beauty = 1;
        cm.sendGetNumber("�������� �ƹ���id ����������д�Լ�id����#k", 1, 1, 90000000);
        } else if (selection == 3) {
        if(cm.gettgrjl()==0){//�жϱ��Ӧ����
		cm.sendOk("����ǰδ���ֽ��Ϊ"+ cm.gettgrjl() +"��ȯ !");
		cm.dispose();	
		}else{
		var  j = cm.gettgrjl();
		cm.gaintgrjl(cm.getPlayer().getAccountID(),-j);
		cm.gainDJ(j*1);
        cm.sendOk("���ֳɹ������"+ j*1 + "���.");
		cm.dispose();
        }
		}
        } else if (status == 2) {
            if (beauty == 1) {
                 if(cm.istgr(selection)== false ){
                    cm.sendNext("��������ƹ�ID�����ڣ����������롣");
                    status = -1;
                } else if(cm.getPlayer().getAccountID()== selection){
					cm.sendOk("���ˣ��Լ���ô���Ƽ��Լ��أ�");
                    status = -1;
				} else if(cm.gettgr() != 0 ){
					cm.sendOk("���Ѿ��Ǽǹ����ƹ�ID,�����ٵǼǻ��߸��ĵ�Ŷ��");
                    status = -1;
                } else {					 
					cm.settgr(selection);
                    cm.sendOk("�ɹ��Ǽ����ƹ��ˣ�лл���Ĳ��롣��Ǽ����ƹ�ID�ǣ�#r"+selection+"");
                    cm.dispose();
                }
                }
        }
    }
}
