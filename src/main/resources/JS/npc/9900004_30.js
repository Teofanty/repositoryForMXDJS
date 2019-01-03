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
    } else 
        if (status == 0) {
		    cm.sendNext("看起来你现在真的很忙。如果你要参与本期邂逅GM,合影活动请点击确定.!");
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendYesNo("你想看到很多冒险都参与了吗,快来吧 !");
    } else if (status == 1) {
        cm.saveLocation("MULUNG_TC");		
	    cm.warp(970000002,0);
		cm.worldMessage(2,"玩家：["+cm.getName()+"]在游戏右下角拍卖进入了本期邂逅GM,合影活动.还没进去的小伙伴们赶快进入.");
        cm.dispose();
    }
}