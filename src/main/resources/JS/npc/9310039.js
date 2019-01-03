/* ==================
 脚本类型:  NPC	    
 脚本作者：游戏盒团队    
 联系扣扣：297870163   609654666 
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
		cm.sendOk("好的如果要挑战#b妖僧#k随时来找我.");
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
                cm.sendOk("你不是队长。请你们队长来说话吧！");
                cm.dispose();
				} else if (!cm.partyMembersInMap()) {
                cm.sendOk("请确保你的队伍里所有人员都在本地图.");
                cm.dispose();
                }else if(cm.getLevel() < 130){//判断等级
	            cm.sendOk("队长需要130级才可以申请!");
                cm.dispose();
				}else if( cm.getPlayer().getBossLog("shaoling") >= 2) {
	            cm.sendOk("您好,限定每天只能挑战2次！");
                cm.dispose();
                }else if(cm.getPartyBosslog("shaoling",1) == false) {//判断组队是否2次
	            cm.sendOk("队伍中队友挑战次数已经用完！");
                cm.dispose();
		        }else if(party.getMembers().size() < 1) {//判断人数
	            cm.sendOk("需要 2 人以上的组队才能进入！!");
                cm.dispose();
				}else if(!cm.getPlayerCount(702060000) <= 0) {//判断里面有没有人
	            cm.sendOk("里面有人暂时无法进入！!");
                cm.dispose();
				
		}else{
	//map = cm.getPlayer().getMap();
	cm.getMap(702060000).resetFully();//地图刷新
	//cm.spawnMobOnMap(9600025,1,351,580,702060000);
	cm.warpParty(702060000, 0);
	cm.setPartyBosslog("shaoling");//给团队次数
	//cm.getPlayer().startMapTimeLimitTask(1200, map);//给地图时间
	cm.dispose();
		}
	}
}
