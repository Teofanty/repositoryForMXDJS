/* ==================
 脚本类型: NPC	    
 脚本作者：久久    
 联系方式：121418194
 =====================
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    var em = cm.getEventManager("CWKPQ");
    if (em == null) {
	cm.sendNext("绯红任务事件未被启动");
	cm.dispose();
	return;
    }
    switch(cm.getPlayer().getMapId()) {
	case 803010700:
	    if (status == 0) {
		cm.sendNext("哎，你已经做到了。让我实话告诉你吧，他们已经发现我们了。警卫马上就要来了。我们最好快点。");
	    } else if (status == 1) {
		cm.sendNext("前往圣殿的路已经被摧毁了，我们必须找到另一条路，它将带我们穿过许多死亡陷阱。");
	    } else if (status == 2) {
		cm.sendNext("你可以在附近找到一个入口…你最好找到它，快。我会赶上的。");
		cm.dispose();
		em.setProperty("glpq1", "1");
	    }
	    break;
	case 803010800:
	   if (status == 0) {
		cm.sendNext("我们成功地做到了！现在，我相信我们每一个冒险家都能穿过这些死亡陷阱。");
	   } else if (status == 1) {
		cm.sendNext("圣坛需要使用不同冒险家的技能来激活。一旦五个人都成功激活了，我们就可以通过这扇门了。");
		cm.dispose();
	   }
	   break;
	case 803010900:
	   if (status == 0) {
		cm.sendNext("在这里有许多圣坛，每名冒险家都能够激活一个圣坛，当所有圣坛都激活之后，五个冒险者都必须爬到最顶端，然后进入传送门来进行确认！");
	   } else if (status == 1) {
		cm.sendNext("当心这些死亡陷阱：糙石巨柱。他们伤害会非常高！");
		cm.dispose();
	   }
	   break;
	case 803011000:
	   if (status == 0) {
		cm.sendNext("现在你看到了许多圣坛。然而，他们中的一些不工作了。");
	   } else if (status == 1) {
		cm.sendNext("某些机关会在你的路上被触发，当然这些机关会影响你打开圣坛。试试这些圣坛让他们运作起来。");
		cm.dispose();
	   }
	   break;
	case 803011100:
	   if (status == 0) {
		cm.sendNext("很惊讶你竟然走了这么远到达了这里！你在这里看到的是战斗巨人的雕像，但它没有任何的武器。");
	   } else if (status == 1) {
		cm.sendNext("雕像周围有五个房间，房间旁边都有一座雕像，他们围绕着这座巨人雕像.");
	   } else if (status == 2) {
		cm.sendNext("我怀疑每个房间都有雕像的五个武器遗物之一。");
	   } else if (status == 3) {
		cm.sendNext("把武器带回来，把它们这些遗物恢复到雕像上！");
		cm.dispose();
	   }
	   break;
	case 803011200:
		cm.dispose();
		cm.openNpc(9201115,0);
		break;

    }
}
