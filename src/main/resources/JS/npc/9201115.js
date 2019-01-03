/* ==================
 脚本类型: NPC	    
 脚本作者：久久    
 联系方式：121418194
 =====================
 */
var status = -1;function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
	if(cm.getPlayer().getMapId()!=803011200){
		cm.sendOk("想战斗的话，就来挑战绯红副本吧！\r\n\t联系QQ121418194独家修复！");
		cm.dispose();
		return;
	}
    if (!cm.isLeader()) {
	cm.sendNext("请你的队长来找我！");
	cm.dispose();
	return;
    }
	var em = cm.getEventManager("CWKPQ");
	if (em != null) {
		if (em.getProperty("glpq6").equals("0")) {
			if (status == 0) {
				cm.sendNext("欢迎来到宗师议事厅。今晚我将是你的接待员…");
			} else if (status == 1) {
				cm.sendNext("今晚，你们将会成为一场盛宴..啊哈哈…");
			} else if (status == 2) {
				cm.sendNext("让我们的精英护卫来陪你狂欢！");
				cm.mapMessage(6, "来吧！精英们，进场吧！");
				for (var i = 0; i < 10; i++) {
					var mob = em.getMonster(9400594);
					cm.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1337 + (java.lang.Math.random() * 1337), 276));
				}
				for (var i = 0; i < 20; i++) {
					var mob = em.getMonster(9400582);
					cm.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1337 + (java.lang.Math.random() * 1337), 276));
				}
				em.setProperty("glpq6", "1");
				cm.dispose();
			}
		} else if (em.getProperty("glpq6").equals("1")) {
			if (cm.getMap().getAllMonster().size() == 0) {
				if (status == 0) {
					cm.sendOk("呃，怎么可能？你打败了他们？");
				} else if (status == 1) {
					cm.sendNext("好吧，不管怎么样！宗师们会好好对待你们的。");
					cm.mapMessage(6, "宗师们来了！");

					//MV or Heron
					var mob = em.getMonster(9400589);
					cm.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1000, 276));

					//Margana
					var mob1 = em.getMonster(9400590);
					cm.getMap().spawnMonsterOnGroundBelow(mob1, new java.awt.Point(-22, 1));

					//Red Nirg
					var mob2 = em.getMonster(9400591);
					cm.getMap().spawnMonsterOnGroundBelow(mob2, new java.awt.Point(-22, 276));

					//Hsalf
					var mob4 = em.getMonster(9400593);
					cm.getMap().spawnMonsterOnGroundBelow(mob4, new java.awt.Point(496, 276));

					//Rellik
					var mob3 = em.getMonster(9400592);
					cm.getMap().spawnMonsterOnGroundBelow(mob3, new java.awt.Point(-496, 276));

					em.setProperty("glpq6", "2");
					cm.dispose();
				}
			} else {
				cm.sendOk("别管我。精英护卫会让你爽的！");
				cm.dispose();
			}
		} else if (em.getProperty("glpq6").equals("2")) {
			if (cm.getMap().getAllMonster().size() == 0) {
				cm.sendOk("什么？啊…这怎么可能？");
				cm.mapMessage(5, "前往下一个关卡的门已经被打开了");
				cm.dispose();
				em.setProperty("glpq6", "3");
			} else {
				cm.sendOk("别找我。宗师们会好好招待你的！");
				cm.dispose();
			}
		} else {
			cm.dispose();
		}
	} else {
		cm.dispose();
	}

}
