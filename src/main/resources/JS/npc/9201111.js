/* ==================
 脚本类型: NPC	    
 脚本作者：久久    
 联系方式：121418194
 =====================
 */
function start() {
if (cm.getPlayer().getMap().getId() == 803011100) {
        cm.sendOk("你就要湿透了，去做海盗最拿手的事——挖战利品！小心，下面的水被称为重水，它的密度如此之大，我怀疑你是否能游过它！注意观察…你寻求的遗迹为一把枪，这是一个古老的武器最优秀的海盗所持有的-- Steel Fist Jack！它被埋藏在你在大海下面发现的许多宝箱中。这不容易……海盗们因为把东西埋在最不可能的地方而闻名，所以深挖并保持警惕。那些水域里有鲨鱼，而且更糟！");
cm.dispose();
} else if (cm.getPlayer().getMap().getId() == 803000000) {
cm.sendOk("很久以前，一个奇怪的战士冲上岸边钜格。据说这是一个神秘的武士团成员，他们使用类似利爪的武器和基于炮弹的大炮击败敌人。被称为“Steel Fist Jack”，他在战斗中是非常有效的狡猾和欺骗。最后，他造了一艘船，离开了码头，寻找他以前的船员和船长。");
cm.dispose();
}
}
