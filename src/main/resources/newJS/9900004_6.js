
var status = -1;
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var mh1   ="#fUI/GuildMark/Mark/Animal/00002011/1#";//����
var mh2   ="#fUI/GuildMark/Mark/Animal/00002011/5#";//����
var mh3   ="#fUI/GuildMark/Mark/Animal/00002011/4#";//����
var mh4   ="#fUI/GuildMark/Mark/Animal/00002011/9#";//����
var mh5   ="#fUI/GuildMark/Mark/Animal/00002011/8#";//����
var mh6   ="#fUI/GuildMark/Mark/Animal/00002011/10#";//����
var mh7   ="#fUI/GuildMark/Mark/Animal/00002011/12#";//����
var mh8   ="#fUI/GuildMark/Mark/Animal/00002011/15#";//����
var mh9   ="#fUI/GuildMark/Mark/Animal/00002011/16#";//����
var mh10   ="#fUI/GuildMark/Mark/Animal/00002011/6#";//����
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    
    if (mode == 1) {
        status++;
    } else if (mode == 0 && status != 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
		    var text = "#ro#b��#do#g��#bo#d��#ro#g��#do#r��#bo#d��#go#r��#k<#r#eʦͽϵͳ#n#k>#r��#go#d��#go#r��#do#b��#go#r��#bo#d��#go#r��#b#k\r\n\r\n";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			
			text += "#L1#"+mh10+"��Ҫ����ʦ��#l#k                #L6##b"+��̾��+"ʦͽϵͳ˵��#l#k\r\n\r\n"
			text += mh1 + mh1 + mh1 + mh1 + mh1 + mh1 + mh1 + mh1 + mh1 + mh1 + mh1 + mh1 + mh1+ mh1+ mh1+ mh1+ mh1+ mh1+ mh1+ mh1+ mh1+ mh1+ mh1 + mh1 + mh1 + "\r\n";
			
	
	//text += "#L6##b"+��̾��+"ʦͽϵͳ˵��#k\r\n\r\n"
	text += "#L2#"+mh10+"��ͽ����#l                #r#L5#"+mh9+"�˳�ʦ��#l#k\r\n"
	text += "#L3#"+mh10+"��ͽ��ʦ#l\r\n"
	text += "#L8#"+mh10+"ͽ���б�#l\r\n"
	text += "#L4#"+mh10+"��ͽ��ʦ#l\r\n"
//cm.getPlayer().setshituLog(3,"454448");
	cm.sendSimple(text);
    } else if (status == 1){
		if (selection == 1){//����ʦ��
			var id = cm.getPlayer().getId();
			if (cm.getPlayer().getLevel() < 135){
				cm.sendOk("#r��ĵȼ�����135��,�޷�����ʦ��!");
				cm.dispose();
				return;
			}else if(cm.getPlayer().getOneTimeLog("ʦ��") < 1){
				cm.getPlayer().setOneTimeLog("ʦ��");
				
				cm.sendOk("��ɹ�������ʦ��,�Ͻ�ȥ��ͽ��!");
				cm.worldMessage(6,"��ʦͽϵͳ��[" + cm.getChar().getName() + "]�ɹ�������ʦ��,Ҫ��ʦ���ĸϽ���!");
				cm.dispose();
			} else {
				cm.sendOk("���Ѿ�������ʦ����!ȥ��ͽ��!");
				cm.dispose();
			}
			
        } else if (selection == 2){//��ʦ
			if (cm.getParty() == null) {
                cm.sendNext("����Ӻ��������ң�");
                cm.dispose();
                return;
            } else if (cm.allMembersHere() == false){
				cm.sendOk("#r��ȷ��ͽ�ܻ���ʦ����ͬһ����ͼ��");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getOneTimeLog("ʦ��") < 1) {
                cm.sendOk("����ʦ�����ҶԻ�");
                cm.dispose();
                return;
			} else if (cm.isLeader()&&cm.getPlayer().getOneTimeLog("ʦ��") < 1) {
                cm.sendOk("����ʦ�����ӳ����ҶԻ�");
                cm.dispose();
                return;
			}


var mapId = cm.getPlayer().getMapId();
var party = cm.getPlayer().getParty().getMembers();
var it = party.iterator();
//var cPlayer = it.next();
//var victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
//var TDid = victim.getId();
//v//ar a1_1 = cm.getPlayer().getOneTimeLog(TDid);//�Լ�����ͽ��¼ID
//var shoutu = victim.getOneTimeLog(TDid);
//var chushi = victim.getOneTimeLog("��ʦ");
//var id = cm.getPlayer().getId();
//var tcsm = victim.getOneTimeLog("�˳�ʦ��");
//var jrsm = victim.getOneTimeLog(TDid);

            while (it.hasNext()) {
                var cPlayer = it.next();
                victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if (victim.getId() != cm.getPlayer().getId()) {
                    next = true;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("��ȷ�϶�����һ�ŵ�ͼ�����Ҷ������Լ������Л]��������");
                cm.dispose();
                return;
            }



//cm.worldMessage(6,"��ʦͽϵͳ��[" + cm.getChar().getName() + "]�ɹ�������ʦ��,Ҫ��ʦ���ĸϽ���!"+cm.getPlayer.isshitu(3));
			if (victim ==null){
				cm.sendOk("��ȡ����ͽ����Ϣ,�����,ʦ��Ϊ�ӳ�,ͽ����ͬһ��ͼͬһƵ��!");
				cm.dispose();
				return;
			} else if (victim.getLevel() > 70){
				cm.sendOk(victim.getId() +"ͽ�ܵȼ��Ƿ��Ѿ�����70����!"+victim.getLevel());
				cm.dispose();
				return;
			} else if (cm.getPlayer().isshitu(victim.getId())){
				cm.sendOk("���Ѿ��չ����ͽ����");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getOneTimeLog("ʦ��") < 1){
				cm.sendOk("�㻹û����ʦ����");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getParty().getMembers().size() != 2){
				cm.sendOk("ÿ��ֻ�ܴ�һ��ͽ�����ţ���2����ӣ�");
				cm.dispose();
				return;
			} else {
					cm.getPlayer().setshituLog(victim.getId(),victim.getName());
                                        //cm.getPlayer().setOneTimeLog("daitu");
					//cm.givePartyBossLog("��ͽ");
					//cm.getPlayer().setOneTimeLog(TDid);
					cm.sendOk("��ɹ�����"+victim.getName()+"Ϊͽ�ܣ�");
					cm.worldMessage(6,"��ʦͽϵͳ��"+cm.getPlayer().getName()+"��"+victim.getName()+"Ϊͽ�ܣ�");
					//victim.dropMessage(cm.getPlayer().victim.getName()+" ��Ϊ���ʦ��!" );
					//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ʦͽϵͳ" + " : ["+ cm.getPlayer().getName() +"]����["+victim.getName()+"]Ϊͽ�ܣ���ͽ�ܽ���ȷ�ϣ�",true).getBytes());
					cm.dispose();
					return;
					}
			
		} else if (selection == 3){
			if (cm.getParty() == null) {
                		cm.sendNext("��Ӻ���������");
                		cm.dispose();
                		return;
            }else if (cm.getPlayer().getOneTimeLog("ʦ��") < 1){
				cm.sendOk("�㻹û����ʦ����");
				cm.dispose();
				return;
			}
			
			
			var party = cm.getPlayer().getParty().getMembers();
			var it = party.iterator();
			
			            while (it.hasNext()) {
                var cPlayer = it.next();
                victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if (victim.getId() != cm.getPlayer().getId()) {
                    next = true;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("��ȡ����ͽ����Ϣ,�����,ʦ��Ϊ�ӳ�,ͽ����ͬһ��ͼͬһƵ��");
                cm.dispose();
                return;
            }
			
			
			if (!cm.isLeader()) {
                		cm.sendNext("����ʦ��Ϊ�ӳ����ҶԻ�");
                		cm.dispose();
                		return;
			} else if (victim.getLevel() < 130){
				cm.sendOk("���ͽ�ܵȼ�����130�������ܳ�ʦ��");
				cm.dispose();
			} else if (cm.getPlayer().getOneTimeLog("ʦ��") < 1){
				cm.sendOk("�㻹û����ʦ����");
				cm.dispose();
				return;
           	} else if (cm.getPlayer().isshitu(victim.getId())==false){
				cm.sendOk("��ȷ��������ͽ���𣿣���"+victim.getName());
				cm.dispose();
				return;
			} else {
				//��ʦ����;
		
				cm.gainItem(2049100,30);//��ʦ������
				victim.gainItem(2049100,10);//��ͽ�ܻ���
                cm.gainDJ(5000);//����ȯ�ڶ��ֺ���
				victim.modifyCSPoints(1,2000);//��ͽ�ܵ��
				 cm.getPlayer().killshituLog(victim.getId());//ɾ��ʦͽ��
				cm.worldMessage(6,"��"+cm.getPlayer().getName()+"��:��ͽ "+victim.getName()+" �����ѳ��˳�ʦ,���ڽ�����ʿ�����Я�չ�,��ָ�л.");
				cm.dispose();
			}
		} else if (selection == 4){
			//cm.sendOk("�ݲ�֧�ִ˹���");
			//cm.dispose();
			cm.openNpc(9900004,78);
		} else if (selection == 5){
		
			
			if(cm.getPlayer().isshitu(cm.getPlayer().getId())==false){
		     cm.sendOk("��û��ʦ��");
			cm.dispose();
			} else {
				cm.getPlayer().killshituLogbyname(cm.getPlayer().getName());
				cm.sendOk("����ǿ���Ƴ�ʦ��");
			cm.dispose();
			}
			
		} else if (selection == 6){
			cm.sendOk("ʦ��ϵͳ���ܣ�\r\nͽ�ܵȼ�������С��70��\r\nʦ�����ڣ��������135��\r\n\r\nͽ�ܴﵽ130�����ɳ�ʦ\r\n\r\nͽ�ܳ�ʦ��� #r8888#k���\r\nʦ����ʦ��ã�#r����x5000��5000��ȯ��#v4001126#*5��#v4001126#*3��#v4001126#*10��\r\n\r\n\r\n");
			cm.dispose();
		} else if (selection == 7){
			var id = cm.getPlayer().getId();
			if (cm.getPlayer().getLevel() > 130){
				cm.sendOk("ʦ������Ҫȷ�ϣ�");
				cm.dispose();
				return;
			} else if (cm.getBossLog("��ͽ") >= 1 && cm.getPlayer().getOneTimeLog(id) == 0){
				cm.getPlayer().setOneTimeLog(id);
				cm.sendOk("ʦͽ��ϵȷ�ϳɹ���");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ʦͽϵͳ" + " : ["+ cm.getPlayer().getName() +"]ʦͽ��ϵȷ�ϳɹ���",true).getBytes());
				cm.dispose();
			} else {
				cm.sendOk("���Ѿ�ȷ�Ϲ��ˡ�����\r\n");
			cm.dispose();
			}
			} else if (selection == 8){
				//cm.sendOk("���Ѿ�ȷ�Ϲ��ˡ�����\r\n");
				var ss =cm.getPlayer().getshitu();
				cm.sendOk("������ͽ������:\r\n"+ss);
				cm.dispose();
				
			
		}
		
    }
	
}