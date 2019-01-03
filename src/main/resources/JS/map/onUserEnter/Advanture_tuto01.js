/* ==================
 脚本类型:  地图 
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */


importPackage(Packages.scripting);
importPackage(java.lang);

function start(ms) {
	try {
		 ms.getDirectionStatus(true);
		 ms.EnableUI(1);
		 ms.getMap().resetFully();
		 ms.spawnReactorOnGroundBelow(1008010, 365, 216);
		 ms.getDirectionInfo(1, 3000);
		 Thread.sleep(3000);
		 ms.getDirectionInfo("Effect/Direction3.img/effect/tuto/BalloonMsg0/3", 2100, 0, -120, 0, 0);
		 ms.getDirectionInfo(1, 1800);
		 Thread.sleep(1800);
		 ms.topMsg("按Ctrl键使用普通攻击.");
		 ms.EnableUI(0);
		 
	} 
	catch(e) {
		if (e.rhinoException != null) {
			e.rhinoException.printStackTrace();
		}
		else if(e.javaException != null) {
			e.javaException.printStackTrace();
		}
	}
}


	