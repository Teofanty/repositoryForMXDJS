/* ==================
 �ű�����: NPC	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 function start() {
	var suiji = Math.floor((Math.random()*200)+100);
                if (cm.haveItem(2022465, 1)) {
					cm.gainItem(2022465,-1);
					cm.gainD(+suiji);
                    cm.sendOk("���ɹ���#r#v2022465##z2022465##k�һ���#r" + suiji + " #k����ȯ��");
					cm.laba(cm.getPlayer().getName() + " ����" + " : " + "[��������]�һ���" + suiji + " �����ȯ",11);
                cm.dispose();
                } else {
                    cm.sendNext("��û��#v2022465##z2022465##k���޷��һ�����ȯ��");
                    cm.dispose();
                }
	}