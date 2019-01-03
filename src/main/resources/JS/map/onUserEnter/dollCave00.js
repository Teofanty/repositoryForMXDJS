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
		Thread.sleep(2100);
		ms.getDirectionStatus(true);
		ms.EnableUI(1); // Disable UI
		Thread.sleep(2100);
		ms.getDirectionInfo(3,0);
		ms.getDirectionInfo(1,30);
		Thread.sleep(2100);
		ms.getDirectionInfo("Effect/Direction3.img/effect/tuto/BalloonMsg0/0", 2100, 0, -120, 0, 0);
		ms.getDirectionInfo(1,2100);
		Thread.sleep(2800);
		ms.getDirectionInfo(3, 2);
		ms.getDirectionInfo(1, 420);
		Thread.sleep(420);
		ms.getDirectionInfo(3, 1);
		ms.getDirectionInfo(1, 420);
		Thread.sleep(420);
		ms.getDirectionInfo(3, 2);
		ms.getDirectionInfo(1, 420);
		Thread.sleep(420);
		ms.getDirectionInfo(3, 0);
		ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/BalloonMsg0/1", 2100, 0, -120, 0, 0);
		ms.getDirectionInfo(1, 1800);
		Thread.sleep(2800);
		ms.getDirectionInfo("Effect/Direction3.img/effect/tuto/BalloonMsg0/1", 2100, 0, -120, 0, 0);
		ms.getDirectionInfo(1, 2100);
		Thread.sleep(2800);
		ms.getDirectionEffect("Effect/Direction3.img/effect/tuto/key/0", 3000000, -300, 0);
		ms.getDirectionEffect("Effect/Direction3.img/effect/tuto/key/0", 3000000, 0, 0);
		ms.getDirectionEffect("Effect/Direction3.img/effect/tuto/key/0", 3000000, 300, 0);
		ms.getDirectionEffect("Effect/Direction3.img/effect/tuto/key/1", 3000000, 540, 70);
		ms.getDirectionInfo(1, 1200);
		Thread.sleep(1800);
		ms.getDirectionInfo("Effect/Direction3.img/effect/tuto/BalloonMsg0/2", 2100, 0, -120, 0, 0);
		ms.getDirectionInfo(1, 2100);
		Thread.sleep(2800);
		ms.topMsg("按下左右键移动.");
		ms.getDirectionInfo(1, 3000);
		Thread.sleep(3800);
		ms.topMsg("去那里的门户，按向上键移动到下一个地图.");
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

