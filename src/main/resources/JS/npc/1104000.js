/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

 var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	cm.sendNextS("我是#p1204001#黑色翅膀的成员，你怎么敢来打扰我呢？ 你害我的老毛病又犯了，我发誓要效忠黑魔法师，要是我抓住你了，我会让你付出代价的！", 9);
    } else if (status == 1) {
	cm.sendNextPrevS("#b(黑色翅膀? 他们是谁? 而怎么会又跟黑魔法发誓扯到关系，也许应该报告。)#k", 3);
    } else if (status == 2) {
	cm.forceCompleteQuest(21728); //完成任务
	cm.warp(105070300, 3);
	cm.dispose();
    }
}