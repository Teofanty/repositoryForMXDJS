/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
function start() {
    if (cm.isQuestActive(2180)) {
	cm.warp(912000100);
    } else {
        cm.sendOk("牛棚是对别人的限制，我恐怕我不能让你去那里.");
    }
    cm.dispose();
}