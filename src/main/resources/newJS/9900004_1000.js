importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);

function start() {
    status = -1;

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "\r\n\r\n�ٷ���վ���� ��#r���Ѿ���������#r" + cm.getcz() + "#k Ԫ\r\n����ά�ַ�������Ҫ����,ϣ���õ����֧��.��������1:100��� #r#ÿ���׳���20����2000��ȯ�;������(1W����*2 )�׳���50����һ��12Сʱ�ľ����׹(�ֿ��岻���׳�!!)��ȷ��װ���������Ƿ��п�,����)#k\r\n"
            //text += "#e#r#L0#�������а�#l#n\r\n\r\n"
            text += "#e#r#L1#����ת��������վ#l#n\r\n\r\n"
            //text += "#e#r#L222#��ȡ�׳影��#l#n\r\n\r\n"
            text += "#e#r#L2#��������ȡ-��ǰ#g " + cm.getwzcz() + "#r��ȯ��δ��ȡ������ȡ��#l#n\r\n\r\n"
            //if (cm.getczlz()==0) {//�ж��ۻ���100Ԫ���� ��һ�����û��ȡ
            //text += "#e#r#L99#�ۼ�����50Ԫ��ȡ: 1��#v4310018#+10W���#l#n\r\n\r\n"
            text += "#e#r#L4#�ۼ�����100Ԫ��ȡ: 3��#v4310018#+50W���#l#n\r\n\r\n"
            //} else if (cm.getczlz()==1) {//�ж��ۻ���300Ԫ���� ��2�����û��ȡ
            text += "#e#r#L5#�ۼ�����300Ԫ��ȡ: 3��#v4310019#+3��#v4310014#+150W���+��#v2049100##v2340000#��5�ţ�#l#n\r\n\r\n"
            //} else if (cm.getczlz()==2) {//�ж��ۻ���500Ԫ���� ��3�����û��ȡ
            text += "#e#r#L6#�ۼ�����500Ԫ��ȡ: ��#v1082149#˫G+7+#v2049100##v2340000#��10��+10��#v4031456#��#l#n\r\n\r\n"
            //} else if (cm.getczlz()==3) {//�ж��ۻ���500Ԫ���� ��3�����û��ȡ
            text += "#e#r#L7#�ۼ�����800Ԫ��ȡ: ��#v1082149#ȫ����+7��+10��#v4031456#+��#v2049100##v2340000#��35�ţ�+400W���#l#n\r\n\r\n"
            //} else if (cm.getczlz()==4) {//�ж��ۻ���500Ԫ���� ��3�����û��ȡ
            text += "#e#r#L8#�ۼ�����1000Ԫ��ȡ: ��#v1142219#ȫ����+10��+10��#v4031456#+��#v2049100##v2340000#��35�ţ�+500W���#l#n\r\n\r\n"
            //} else if (cm.getczlz()==5) {//�ж��ۻ���500Ԫ���� ��3�����û��ȡ
            text += "#e#r#L9#�ۼ�����1300Ԫ��ȡ: ��#v2049100##v2340000#��45�ţ�#l#n\r\n\r\n"
            text += "#e#r#L11#�ۼ�����1600Ԫ��ȡ: ��#v3015051#��Ҫ�������˽��Ⱥ�����ߴ��ɿ��Ի���#l#n\r\n\r\n"

            text += "#e#r#L15#�ۼ�����2000Ԫ��ȡ: ��#v1022225#����ȫ8װ���ȼ�75��Ϊ��ʦ������������ħ�����10Ϊ18 װ��֮���޷�����ֿ� ���ɼ�����#l#n\r\n\r\n"
            if (cm.getczlz() == 8) {
                text += "#e#r#L17#�ۼ�����2300Ԫ��ȡ: 3��#v4310018#+3��#v4310019#+3��#v4310014#+200W���+��#v2049100##v2340000#��10�ţ�#l#n\r\n\r\n"
            } else if (cm.getczlz() == 9) {
                text += "#e#r#L18#�ۼ�����2600Ԫ��ȡ: ��#v1082149#ȫ����+7��+��#v2049100##v2340000#��30�ţ�+400W���#l#n\r\n\r\n"
            } else if (cm.getczlz() == 10) {
                text += "#e#r#L20#�ۼ�����2800Ԫ��ȡ: ��#v1142219#ȫ����+10�쵽С���ϣ�+��#v2049100##v2340000#��35�ţ�+#v2370000#*3+#v2370002#*3+#v2370005#*3+500W���#l#n\r\n\r\n"
            } else if (cm.getczlz() == 11) {
                text += "#e#r#L21#�ۼ�����3300Ԫ��ȡ: ��#v3015051#��Ҫ�������˽��Ⱥ�����ߴ��ɿ��Ի�+#v4020009#*100��#l#n\r\n\r\n"
            } else if (cm.getczlz() == 12) {
                text += "#e#r#L22#�ۼ�����3700Ԫ��ȡ: ��#v1022225#����ȫ8װ���ȼ�75��Ϊ��ʦ������������ħ�����10Ϊ18 װ��֮���޷�����ֿ� ���ɼ�����+��#v4020009#*100����#l#n\r\n\r\n"
            } else if (cm.getczlz() == 13) {
                text += "#e#r#L23#�ۼ�����4000Ԫ��ȡ: ��#v2049100##v2340000#��45�ţ�#l#n\r\n\r\n"
            } else if (cm.getczlz() == 14) {
                text += "#e#r#L29#�ۼ�����4600Ԫ��ȡ: ��#v4020009#*500+200��#v4031456#��#l#n\r\n\r\n"

            }
            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
                cm.showcz();
                cm.dispose();
            } else if (selection == 222) {
                cm.openNpc(9900004, 25);
            } else if (selection == 1) {
                cm.openWeb("www2.shoukabao.com/Payment/Service/02dcdb791d60332d5407e252600e72ff");
                cm.sendOk("������Ϻ�,#r�뵥��ȷ�Ϸ��أ�������ȡ\r\n");
                status = -1;
            } else if (selection == 2) {
                var j = cm.getwzcz();
                if (cm.getwzcz() == 0) {
                    cm.sendOk("����ǰδ���ֽ��Ϊ" + cm.getwzcz() + "��ȯ ���һ�ʧ�ܣ�\r\n#r��������1��ȯ=100���.");
                    status = -1;
                } else if (cm.getPlayer().getBossLog("meirisc") == 0 && cm.getwzcz() >= 5000) {//�ж��г�ֵ��¼
                    cm.setwzcz(-j);
                    cm.gainDJ(j * 1);
                    cm.gaincz(+j * 0.01);
                    cm.gainDJ(+2000);//2370004
                    cm.gainItem(2370004, 2);
                    cm.getPlayer().gainBeans(+j);
                    var ii = MapleItemInformationProvider.getInstance();
                    var type = ii.getInventoryType(1122017); //���װ��������
                    var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
                    cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                    var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
                    toDrop.setExpiration(temptime);
                    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                    cm.getPlayer().setBossLog('meirisc');//��bosslog��¼
                    cm.sendOk("���ֳɹ������" + j * 1 + "���" + j + "�Ŷ��������߻����ϲ�ˢ�£���ÿ���׳�50����2000��ȯ.������*2��12Сʱ��#v1122017#\r\n#r��������1��ȯ=100���.");
                    cm.worldMessage(6, "��ң�[" + cm.getName() + "]ÿ���׳�,��л����֮����֧��~");
                    cm.dispose();
                } else if (cm.getPlayer().getBossLog("meirisc") == 0 && cm.getwzcz() >= 2000) {//�ж��г�ֵ��¼
                    cm.setwzcz(-j);
                    cm.gainDJ(j * 1);
                    cm.gaincz(+j * 0.01);
                    cm.getPlayer().gainBeans(+j);
                    cm.gainDJ(+2000);//2370004
                    cm.gainItem(2370004, 2);
                    cm.getPlayer().setBossLog('meirisc');//��bosslog��¼
                    cm.sendOk("���ֳɹ������" + j * 1 + "���" + j + "�Ŷ��������߻����ϲ�ˢ�£���ÿ���׳�20����2000��ȯ�;�����*2\r\n#r��������1��ȯ=100���.");
                    cm.worldMessage(6, "��ң�[" + cm.getName() + "]ÿ���׳�,��л����֮����֧��~");
                    cm.dispose();
                } else {//�ж��г�ֵ��¼
                    cm.setwzcz(-j);
                    cm.gainDJ(j * 1);
                    cm.gaincz(+j * 0.01);
                    cm.getPlayer().gainBeans(+j);
                    cm.sendOk("���ֳɹ������" + j * 1 + "���" + j + "�Ŷ��������߻����ϲ�ˢ�£���ÿ���׳�20����2000��ȯ�;�����*2\r\n#r��������1��ȯ=100���.");
                    cm.worldMessage(6, "��л��ң�[" + cm.getName() + "]����֮����֧��~ôô��");
                    cm.dispose();
                }

                //cm.sendOk("���ֳɹ������"+ j*1 + "���ÿ���׳�20����2000��ȯ�;�����*2\r\n#r��������1��ȯ=100���.");
                if (cm.gettgr() != 0) {//���ƹ���
                    cm.gaintgrjl(cm.gettgr(), +j * 0.05);//5%
                }
                cm.sendOk("���ֳɹ������" + j * 1 + "���\r\n#r��������1��ȯ=100���.");
                cm.dispose();
                return;

            } else if (selection == 3) {
                cm.openNpc(9900004, 1001);//��Ʒ�һ�

            } else if (selection == 4) {//100Ԫ
                if (cm.getInventory(4).isFull(0)) {
                    cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getcz() < 100) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("����������100Ԫ��");
                    cm.dispose();
                } else if (cm.getczlz() != 0) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("�Ѿ���ȡ���ˣ�\r\n��ǰ������" + cm.getcz() + "Ԫ");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//����¼
                    cm.gainItem(4310018, 3);
                    cm.gainMeso(500000);
                    cm.sendOk("�ɹ��һ�")
                    status = -1;
                }
            } else if (selection == 5) {//����300Ԫ
                if (cm.getInventory(4).isFull(1)) {
                    cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getcz() < 300) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("����������300Ԫ��");
                    cm.dispose();
                } else if (cm.getczlz() != 1) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("�Ѿ���ȡ���ˣ�\r\n��ǰ������" + cm.getcz() + "Ԫ");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//����¼
                    cm.gainItem(4310019, 3);
                    cm.gainItem(4310014, 3);
                    cm.gainMeso(1500000);
                    cm.gainItem(2049100, 5);
                    cm.gainItem(2340000, 5);
                    cm.sendOk("�ɹ��һ�")
                    status = -1;
                }
            } else if (selection == 6) {//500Ԫ
                /*if (cm.getInventory(4).isFull(1)){
                 cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷��һ�");
                 cm.dispose();
                 } else */
                if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getcz() < 500) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("����������500Ԫ��");
                    cm.dispose();
                } else if (cm.getczlz() != 2) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("�Ѿ���ȡ���ˣ�\r\n��ǰ������" + cm.getcz() + "Ԫ");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//����¼
                    var ii = MapleItemInformationProvider.getInstance();
                    var type = ii.getInventoryType(1082149); //���װ��������
                    var toDrop = ii.randomizeStats(ii.getEquipById(1082149)).copy(); // ����һ��Equip��
                    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
                    //toDrop.setExpiration(temptime);
                    //toDrop. setFlag(1);//����
                    toDrop.setStr(0);//������
                    toDrop.setDex(0);//������
                    toDrop.setInt(0);//������
                    toDrop.setLuk(0);//������
                    //toDrop. setHp(50);//��HP
                    //toDrop. setMp(50);//��MP
                    toDrop.setWatk(7);//����
                    toDrop.setMatk(7);//ħ����
                    /*toDrop. setWdef(99);//�������
                     toDrop. setMdef(99);//ħ������
                     toDrop. setAcc(99);//����
                     toDrop. setAvoid(99);//�ر�
                     toDrop. setHands(99);//�ּ�
                     toDrop. setSpeed(99);//�ƶ�
                     toDrop. setJump(99);//��Ծ*/
                    cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                    cm.gainItem(2049100, 10);
                    cm.gainItem(2340000, 10);
                    cm.gainItem(4031456, 10);
                    cm.sendOk("�ɹ��һ�")
                    status = -1;
                }
            } else if (selection == 7) {//800
                if (cm.getInventory(4).isFull(0)) {
                    cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getcz() < 800) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("����������800Ԫ��");
                    cm.dispose();
                } else if (cm.getczlz() != 3) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("�Ѿ���ȡ���ˣ�\r\n��ǰ������" + cm.getcz() + "Ԫ");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//����¼
                    var ii = MapleItemInformationProvider.getInstance();
                    var type = ii.getInventoryType(1082149); //���װ��������
                    var toDrop = ii.randomizeStats(ii.getEquipById(1082149)).copy(); // ����һ��Equip��
                    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
                    //toDrop.setExpiration(temptime);
                    //toDrop. setFlag(1);//����
                    toDrop.setStr(7);//������
                    toDrop.setDex(7);//������
                    toDrop.setInt(7);//������
                    toDrop.setLuk(7);//������
                    //toDrop. setHp(50);//��HP
                    //toDrop. setMp(50);//��MP
                    toDrop.setWatk(7);//����
                    toDrop.setMatk(7);//ħ����
                    /*toDrop. setWdef(99);//�������
                     toDrop. setMdef(99);//ħ������
                     toDrop. setAcc(99);//����
                     toDrop. setAvoid(99);//�ر�
                     toDrop. setHands(99);//�ּ�
                     toDrop. setSpeed(99);//�ƶ�
                     toDrop. setJump(99);//��Ծ*/
                    cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                    cm.gainItem(4031456, 10);
                    cm.gainItem(2049100, 35);
                    cm.gainItem(2340000, 35);
                    cm.gainMeso(4000000);
                    cm.sendOk("�ɹ��һ�")
                    status = -1;
                }
            } else if (selection == 8) {//1000
                if (cm.getInventory(4).isFull(0)) {
                    cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getcz() < 1000) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("����������1000Ԫ��");
                    cm.dispose();
                } else if (cm.getczlz() != 4) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("�Ѿ���ȡ���ˣ�\r\n��ǰ������" + cm.getcz() + "Ԫ");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//����¼
                    var ii = MapleItemInformationProvider.getInstance();
                    var type = ii.getInventoryType(1142219); //���װ��������
                    var toDrop = ii.randomizeStats(ii.getEquipById(1142219)).copy(); // ����һ��Equip��
                    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
                    //toDrop.setExpiration(temptime);
                    toDrop.setFlag(1);//����
                    toDrop.setStr(10);//������
                    toDrop.setDex(10);//������
                    toDrop.setInt(10);//������
                    toDrop.setLuk(10);//������
                    //toDrop. setHp(50);//��HP
                    //toDrop. setMp(50);//��MP
                    toDrop.setWatk(10);//����
                    toDrop.setMatk(10);//ħ����
                    /*toDrop. setWdef(99);//�������
                     toDrop. setMdef(99);//ħ������
                     toDrop. setAcc(99);//����
                     toDrop. setAvoid(99);//�ر�
                     toDrop. setHands(99);//�ּ�
                     toDrop. setSpeed(99);//�ƶ�
                     toDrop. setJump(99);//��Ծ*/
                    cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                    cm.gainItem(4031456, 10);
                    cm.gainItem(2049100, 35);
                    cm.gainItem(2340000, 35);
                    cm.gainMeso(5000000);
                    cm.sendOk("�ɹ��һ�")
                    status = -1;
                }
            } else if (selection == 9) {//1300
                if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getcz() < 1300) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("����������1300Ԫ��");
                    cm.dispose();
                } else if (cm.getczlz() != 5) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("�Ѿ���ȡ���ˣ�\r\n��ǰ������" + cm.getcz() + "Ԫ");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//����¼
                    cm.gainItem(2049100, 45);
                    cm.gainItem(2340000, 45);
                    cm.sendOk("�ɹ��һ�")
                    status = -1;
                }
            } else if (selection == 11) {//1600Ԫ
                /*if (cm.getInventory(4).isFull(1)){
                 cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷��һ�");
                 cm.dispose();
                 } else */
                if (cm.getInventory(3).isFull(1)) {
                    cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getcz() < 1600) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("����������1600Ԫ��");
                    cm.dispose();
                } else if (cm.getczlz() != 6) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("�Ѿ���ȡ���ˣ�\r\n��ǰ������" + cm.getcz() + "Ԫ");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//����¼
                    //cm.gainItem(4310019, 3);
                    //cm.gainItem(4310014, 3);
                    //cm.gainMeso(1500000);
                    cm.gainItem(3015051, 1);
                    cm.sendOk("�ɹ��һ�")
                    status = -1;
                }
            } else if (selection == 15) {//2000
                if (cm.getInventory(1).isFull(0)) {
                    cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�");
                    cm.dispose();

                } else if (cm.getcz() < 2000) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("����������2000Ԫ��");
                    cm.dispose();
                } else if (cm.getczlz() != 7) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("�Ѿ���ȡ���ˣ�\r\n��ǰ������" + cm.getcz() + "Ԫ");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//����¼
                    var ii = MapleItemInformationProvider.getInstance();
                    var type = ii.getInventoryType(1022225); //���װ��������
                    var toDrop = ii.randomizeStats(ii.getEquipById(1022225)).copy(); // ����һ��Equip��
                    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
                    //toDrop.setExpiration(temptime);
                    toDrop.setFlag(1);//����
                    toDrop.setStr(8);//������
                    toDrop.setDex(8);//������
                    toDrop.setInt(18);//������
                    toDrop.setLuk(8);//������
                    //toDrop. setHp(50);//��HP
                    //toDrop. setMp(50);//��MP
                    toDrop.setWatk(8);//����
                    toDrop.setMatk(18);//ħ����
                    /*toDrop. setWdef(99);//�������
                     toDrop. setMdef(99);//ħ������
                     toDrop. setAcc(99);//����
                     toDrop. setAvoid(99);//�ر�
                     toDrop. setHands(99);//�ּ�
                     toDrop. setSpeed(99);//�ƶ�
                     toDrop. setJump(99);//��Ծ*/
                    cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                    cm.sendOk("�ɹ��һ�")
                    status = -1;
                }
            } else if (selection == 17) {//2300Ԫ
                if (cm.getInventory(4).isFull(0)) {
                    cm.sendOk("#b�뱣֤������λ������3���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getcz() < 2300) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("����������2300Ԫ��");
                    cm.dispose();
                } else if (cm.getczlz() != 8) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("�Ѿ���ȡ���ˣ�\r\n��ǰ������" + cm.getcz() + "Ԫ");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//����¼
                    cm.gainItem(4310018, 3);
                    cm.gainItem(4310019, 3);
                    cm.gainItem(4310014, 3);
                    cm.gainItem(2049100, 10);
                    cm.gainItem(2340000, 10);
                    cm.gainMeso(2000000);
                    cm.sendOk("�ɹ��һ�")
                    status = -1;
                }
            } else if (selection == 18) {//2600
                if (cm.getInventory(4).isFull(0)) {
                    cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getcz() < 2600) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("����������2600Ԫ��");
                    cm.dispose();
                } else if (cm.getczlz() != 9) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("�Ѿ���ȡ���ˣ�\r\n��ǰ������" + cm.getcz() + "Ԫ");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//����¼
                    var ii = MapleItemInformationProvider.getInstance();
                    var type = ii.getInventoryType(1082149); //���װ��������
                    var toDrop = ii.randomizeStats(ii.getEquipById(1082149)).copy(); // ����һ��Equip��
                    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
                    //toDrop.setExpiration(temptime);
                    //toDrop. setFlag(1);//����
                    toDrop.setStr(7);//������
                    toDrop.setDex(7);//������
                    toDrop.setInt(7);//������
                    toDrop.setLuk(7);//������
                    //toDrop. setHp(50);//��HP
                    //toDrop. setMp(50);//��MP
                    toDrop.setWatk(7);//����
                    toDrop.setMatk(7);//ħ����
                    /*toDrop. setWdef(99);//�������
                     toDrop. setMdef(99);//ħ������
                     toDrop. setAcc(99);//����
                     toDrop. setAvoid(99);//�ر�
                     toDrop. setHands(99);//�ּ�
                     toDrop. setSpeed(99);//�ƶ�
                     toDrop. setJump(99);//��Ծ*/
                    cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                    cm.gainItem(2049100, 30);
                    cm.gainItem(2340000, 30);
                    cm.gainMeso(4000000);
                    cm.sendOk("�ɹ��һ�")
                    status = -1;
                }
            } else if (selection == 20) {//3700
                if (cm.getInventory(4).isFull(0)) {
                    cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getcz() < 2800) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("����������2800Ԫ��");
                    cm.dispose();
                } else if (cm.getczlz() != 10) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("�Ѿ���ȡ���ˣ�\r\n��ǰ������" + cm.getcz() + "Ԫ");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//����¼
                    var ii = MapleItemInformationProvider.getInstance();
                    var type = ii.getInventoryType(1142219); //���װ��������
                    var toDrop = ii.randomizeStats(ii.getEquipById(1142219)).copy(); // ����һ��Equip��
                    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
                    //toDrop.setExpiration(temptime);
                    toDrop.setFlag(1);//����
                    toDrop.setStr(10);//������
                    toDrop.setDex(10);//������
                    toDrop.setInt(10);//������
                    toDrop.setLuk(10);//������
                    //toDrop. setHp(50);//��HP
                    //toDrop. setMp(50);//��MP
                    toDrop.setWatk(10);//����
                    toDrop.setMatk(10);//ħ����
                    /*toDrop. setWdef(99);//�������
                     toDrop. setMdef(99);//ħ������
                     toDrop. setAcc(99);//����
                     toDrop. setAvoid(99);//�ر�
                     toDrop. setHands(99);//�ּ�
                     toDrop. setSpeed(99);//�ƶ�
                     toDrop. setJump(99);//��Ծ*/
                    cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                    cm.gainItem(2370000, 3);
                    cm.gainItem(2370002, 3);
                    cm.gainItem(2370005, 3);
                    cm.gainItem(2049100, 35);
                    cm.gainItem(2340000, 35);//#v2370000#*3+#v2370002#*3+#v2370005#*3
                    cm.gainMeso(5000000);
                    cm.sendOk("�ɹ��һ�")
                    status = -1;
                }
            } else if (selection == 21) {//3300Ԫ
                if (cm.getInventory(4).isFull(1)) {
                    cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getInventory(3).isFull(1)) {
                    cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getcz() < 3300) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("����������3300Ԫ��");
                    cm.dispose();
                } else if (cm.getczlz() != 11) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("�Ѿ���ȡ���ˣ�\r\n��ǰ������" + cm.getcz() + "Ԫ");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//����¼
                    //cm.gainItem(4310019, 3);
                    cm.gainItem(4020009, 100);
                    //cm.gainMeso(1500000);
                    cm.gainItem(3015051, 1);
                    cm.sendOk("�ɹ��һ�")
                    status = -1;

                }
            } else if (selection == 22) {//3700
                if (cm.getInventory(1).isFull(0)) {
                    cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getInventory(4).isFull(1)) {
                    cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getcz() < 3700) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("����������3700Ԫ��");
                    cm.dispose();
                } else if (cm.getczlz() != 12) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("�Ѿ���ȡ���ˣ�\r\n��ǰ������" + cm.getcz() + "Ԫ");
                    cm.dispose();
                } else {

                    cm.setczlz(1);//����¼
                    var ii = MapleItemInformationProvider.getInstance();
                    var type = ii.getInventoryType(1022225); //���װ��������
                    var toDrop = ii.randomizeStats(ii.getEquipById(1022225)).copy(); // ����һ��Equip��
                    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
                    //toDrop.setExpiration(temptime);
                    toDrop.setFlag(1);//����
                    toDrop.setStr(8);//������
                    toDrop.setDex(8);//������
                    toDrop.setInt(18);//������
                    toDrop.setLuk(8);//������
                    //toDrop. setHp(50);//��HP
                    //toDrop. setMp(50);//��MP
                    toDrop.setWatk(8);//����
                    toDrop.setMatk(18);//ħ����
                    /*toDrop. setWdef(99);//�������
                     toDrop. setMdef(99);//ħ������
                     toDrop. setAcc(99);//����
                     toDrop. setAvoid(99);//�ر�
                     toDrop. setHands(99);//�ּ�
                     toDrop. setSpeed(99);//�ƶ�
                     toDrop. setJump(99);//��Ծ*/
                    cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
                    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                    cm.gainItem(4020009, 100);
                    cm.sendOk("�ɹ��һ�")
                    status = -1;
                }
            } else if (selection == 23) {//1300
                if (cm.getInventory(2).isFull(1)) {
                    cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getcz() < 4000) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("����������4000Ԫ��");
                    cm.dispose();
                } else if (cm.getczlz() != 13) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("�Ѿ���ȡ���ˣ�\r\n��ǰ������" + cm.getcz() + "Ԫ");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//����¼
                    cm.gainItem(2049100, 45);
                    cm.gainItem(2340000, 45);
                    cm.sendOk("�ɹ��һ�")
                    status = -1;
                }
            } else if (selection == 29) {//4000
                if (cm.getInventory(4).isFull(6)) {
                    cm.sendOk("#b�뱣֤������λ������7���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getcz() < 4600) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("����������4600Ԫ��");
                    cm.dispose();
                } else if (cm.getczlz() != 14) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("�Ѿ���ȡ���ˣ�\r\n��ǰ������" + cm.getcz() + "Ԫ");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//����¼
                    cm.gainItem(4031456, 200);
                    cm.gainItem(4020009, 500);
                    cm.sendOk("�ɹ��һ�")
                    status = -1;
                }
            } else if (selection == 30) {//4000
                if (cm.getInventory(4).isFull(6)) {
                    cm.sendOk("#b�뱣֤������λ������7���ո�,�����޷��һ�");
                    cm.dispose();
                } else if (cm.getcz() < 5200) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("����������5200Ԫ��");
                    cm.dispose();
                } else if (cm.getczlz() != 15) {//�ж��ۻ��� ��һ�����û��ȡ
                    cm.sendOk("�Ѿ���ȡ���ˣ�\r\n��ǰ������" + cm.getcz() + "Ԫ");
                    cm.dispose();
                } else {
                    cm.setczlz(1);//����¼
                    cm.gainItem(4031456, 200);
                    cm.gainItem(4020009, 500);
                    cm.sendOk("�ɹ��һ�")
                    status = -1;
                }
            }


        }

    }
}




