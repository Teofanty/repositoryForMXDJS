/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("�ţ�û��ʲô�ɵ��ĵġ��⽫�������ˮƽ�������׾١������������������֪������׼����.");
	    qm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("�ţ� #p1101002#���㣬�ǰɣ�����������������������ʿ�����֡���ӭ�����Һܸ��˼����㣡 �ҵ�������#p1102000#. I''m����ѵ��ʦ����Ȼ���Ҳ���һ���˵ģ�����Ը���.");
    } else if (status == 1) {
	qm.sendNextPrev("���Ǳ���Ϊ��ʿ�� �㿴��#p1101001# ˭�Ǵ�������һ���ʱ���ǲ��ǣ� ��ʿ��ͬһ��ͥ��#p1101001#, ���������ڲ�ͬ�����͡���Ȼ������û�п��������κ��ˣ���Ϊ����ֻ������ʥ�ء����ϰ����ʿ���κ�ʱ�䡣");
    } else if (status == 2) {
	qm.sendNextPrev("Ŷ�����֪��������ʥ��û�й������û��һ��а��ĵ��Ҵ�ʥ�ء����ǣ��㲻Ҫ���ġ�������ͨ��������õĹ���ѵ��#p1101001# �������.");
    } else if (status == 3) {
	qm.askAcceptDecline("���ƺ�׼������������ȡ�õĳɾͣ�����Ϊ��Ӧ��ֱ�ӽ������Ը��Ƚ�������˹�������ȥ����#b15ֻ#r#o100122#������#m130010100##k#k.ʹ����ߵ��ŵ���#b����ɭ��II#k.");
    } else if (status == 4) {
	qm.summonMsg(12);
	qm.forceStartQuest(20020);
	qm.forceCompleteQuest(20100);
	qm.forceStartQuest();
	qm.dispose();
    }
}

function end(mode, type, selection) {
}