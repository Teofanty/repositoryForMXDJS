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
            text += "               		��Ϸ����\r\n" //showghrs
			text += "2018��1��16��\r\n"
			text += "  1������Ů�������͡�\r\n"
			text += "2018��1��15��\r\n"
			text += "  1������Ů���ķ��͡�\r\n"
			text += "2018��1��11��\r\n"
			text += "  1�����Ӻ���ʱ�䵽150���ӡ�\r\n"
			text += "2018��1��10��\r\n"
			text += "  1�����ͺ���110���������ʡ�\r\n"
			text += "2017��12��14��\r\n"
			text += "  1�������͸����� ���� ���غ������ǡ�\r\n"
			text += "2017��12��10��\r\n"
			text += "  1������6Сʱ���߽�����\r\n"
			text += "2017��12��8��\r\n"
			text += "  1������� ���ӽ�ҳ齱��\r\n"
			text += "2017��12��5��\r\n"
			text += "  1�������г� �ζ�NPC �����Ϸ����˵����\r\n"
			text += "2017��12��4��\r\n"
			text += "  1������BOSS ���ӵ��䡣\r\n"
			text += "  2�����ֹ�԰ȥ�� ��ɮ����Ϊ ����BOSS��\r\n"
           
            cm.sendOk(text); 
			cm.dispose(); 
        } 
	}
}