
/*  
 
 NPC��Ȩ:                ǧѩð�յ� 	        
 NPC����: 		        �ۺ�NPC
 �����ˣ�����ؼ
 */

var status = -1;
var itemList = Array(
	Array(3010036,600, "1"),//������ǧ
    Array(3010043,600, "1"),//ħŮ�ķ�ɨ��
	Array(3010044,600, "2"),//ͬһ��ɡ��
	Array(3010049,600, "3"),//ħŮ�ķ�ɨ��
	Array(1052668,600, "4"),//ѩ����
	Array(3010071,600, "5"),//������
	Array(3010077,600, "6"),//èͷӥ����
	Array(3010085,600, "7"),//����������
	Array(3010094,600, "8"),//ƯƯ������
	Array(3010098,600, "9"),//����լ��
	Array(3010100,600, "10"),//��������
	Array(3010099,600, "11"),//����������
	Array(3010110,600, "12"),//���ʴ��������
	Array(3010111,600, "13"),//��������
	Array(3010113,600, "14"),//�Ļ귢��������
	Array(3010114,600, "15"),//��²�Ұɣ�����
	Array(3010115,600, "16"),//�ܱ�����
	Array(3010116,600, "17"),//ҡ��֮������
	Array(3010124,600, "18"),//����˹��������
	Array(3010126,600, "19"),//����ħ����
	Array(3010313,800, "20"),//�ۺ���������
	Array(3010128,800, "21"),//��������
	Array(3010131,800, "22"),//̰����è��
	Array(3010132,800, "23"),//����������
	Array(3010133,800, "24"),//������
	Array(3010152,800, "25"),//������������
	Array(3010025,800, "26"),//5�����Ҷ�����
	Array(3010146,800, "27"),//������ˮ����Ҷ����
	Array(3010291,800, "28"),//���տ�����
	Array(3010139,800, "29"),//˽�ܿռ�
	Array(3010171,800, "30"),//����������
	Array(3010172,800, "31"),//�ǿ�����
	Array(3010168,800, "32"),//������������
	Array(3010180,800, "33"),//HP����
	Array(3010181,800, "34"),//MP����
	Array(3010185,800, "35"),//С���Ʒ����
	Array(3010057,800, "36"),//Ѫɫõ��
	Array(3010622,800, "38"),//�ҵĺ��ѵ���֮��
	Array(3010545,800, "41"),//ǧ�������
	Array(3010453,800, "42"),//���ӳ˷���
	Array(3010454,800, "43"),//�����ƶ���
	Array(3010493,800, "44"),//�Ǿ�����
	Array(3010494,800, "45"),//TV����
	Array(3010527,800, "46"),//�����
	Array(3010531,800, "47"),//С���ϳ���
	Array(3010565,800, "48"),//�ҵ�Ů������
	Array(3010589,800, "49"),//��Ҫ��磡
	Array(3010587,800, "50"),//ʱ�佺��
	Array(3010593,800, "51"),//�����
	Array(3010609,800, "52"),//����������
	Array(3010608,800, "53"),//��������������
	Array(3010664,800, "54"),//��������
	Array(3010661,800, "55"),//�����������
	Array(3010660,800, "56"),//�λù����Ǳ�����
	Array(3010658,800, "57"),//�������ϱ�����
	Array(3010678,800, "58"),//���Ӷ�֮��Ϣ
	Array(3010690,800, "59"),//���˷ɴ�����
	Array(3010739,800, "60"),//ѩ���㲨����
	Array(3010744,800, "61"),//ð�յ���שͷ������
	Array(3010752,800, "62"),//õ������
	Array(3010754,800, "63"),//�ٹ�ҹ��
	Array(3010756,800, "64"),//�����в�è����
	Array(3010767,800, "65"),//ѩ������
	Array(3010760,800, "66"),//�Ŵ�ԡ������
	Array(3010795,800, "67"),//ɭ������Ϣ��
	Array(3010806,800, "68"),//��ӣ������
	Array(3010848,2500, "70"),//���̺���˹�����
	Array(3010849,2500, "71"),//�����������
	Array(3010947,2500, "72"),//�����������һ��
	Array(3010850,3000, "73"),//�������ۼ�����
	Array(3012024,3000, "74"),//ɳ̲��������
	Array(3015058,3000, "77"),//����ͷ׻���Ѳ����
	Array(3015060,3000, "78")//����ǹ�����

        );
var selectedItem = -1;
var selequantity = -1;
var selectedCos = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "���ã���ѡ������Ҫ�һ�����Ʒ                          ��#r���:#r"+cm.getPlayer().getCSPoints(1) + "#k��\r\n";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "# #k��Ҫ #r" + itemList[i][1] + "#k���#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selequantity = item[1];
            cm.sendYesNo("�һ� #i" + selectedItem + "# ��Ҫ #r" + selequantity + "#k�������ȷ���һ���?");//��������� �ǵû� 40000000������ţ��
        } else {
            cm.sendOk("�һ�����,����ϵ����Ա��");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selequantity <= 0 || selectedItem <= 0) {
            cm.sendOk("�һ�����,����ϵ����Ա��");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >=selequantity) {//��������� �ǵû�
            if (cm.canHold(selectedItem)) {
				cm.gainD(-selequantity, true);
                cm.gainItem(selectedItem, 1);
                cm.sendOk("�һ��ɹ�,��Ʒ#i" + selectedItem + ":# #b#t" + selectedItem + "##k������������");
                        cm.dispose();
						} else {
                cm.sendOk("����������Ŀ������һ�����ϵĿռ�ſ��Խ��жһ���");
				cm.dispose();
            }

        } else {
            cm.sendOk("��û���㹻�ĵ���һ���");
			            cm.dispose();
						            return;
        }
        status = -1;
    }
}