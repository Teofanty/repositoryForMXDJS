/* ==================
 �ű�����:  NPC	    
 �ű����ߣ���Ϸ���Ŷ�    
 ��ϵ�ۿۣ�297870163   609654666 
 =====================
 */
var status = 0;
var levelValid = 0;

function start() 
	{
	status = -1;
	action(1, 0, 0);
	}

function action(mode, type, selection)
{
	if (mode == -1)
	{
		cm.dispose();
	}
	else if (mode == 0)
	{
		cm.sendOk("�õ����Ҫ��ս#b��ɮ#k��ʱ������.");
		cm.dispose();
	} 
	else 
	{
	if (mode == 1)
	status++;
	else
	status--;
		
	if (status == 0)
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                cm.dispose();
				} else if (!cm.partyMembersInMap()) {
                cm.sendOk("��ȷ����Ķ�����������Ա���ڱ���ͼ.");
                cm.dispose();
                }else if(cm.getLevel() < 130){//�жϵȼ�
	            cm.sendOk("�ӳ���Ҫ130���ſ�������!");
                cm.dispose();
				}else if( cm.getPlayer().getBossLog("shaoling") >= 2) {
	            cm.sendOk("����,�޶�ÿ��ֻ����ս2�Σ�");
                cm.dispose();
                }else if(cm.getPartyBosslog("shaoling",1) == false) {//�ж�����Ƿ�2��
	            cm.sendOk("�����ж�����ս�����Ѿ����꣡");
                cm.dispose();
		        }else if(party.getMembers().size() < 1) {//�ж�����
	            cm.sendOk("��Ҫ 2 �����ϵ���Ӳ��ܽ��룡!");
                cm.dispose();
				}else if(!cm.getPlayerCount(702060000) <= 0) {//�ж�������û����
	            cm.sendOk("����������ʱ�޷����룡!");
                cm.dispose();
				
		}else{
	//map = cm.getPlayer().getMap();
	cm.getMap(702060000).resetFully();//��ͼˢ��
	//cm.spawnMobOnMap(9600025,1,351,580,702060000);
	cm.warpParty(702060000, 0);
	cm.setPartyBosslog("shaoling");//���ŶӴ���
	//cm.getPlayer().startMapTimeLimitTask(1200, map);//����ͼʱ��
	cm.dispose();
		}
	}
}
