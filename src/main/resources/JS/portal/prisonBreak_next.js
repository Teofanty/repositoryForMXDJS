/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
 function enter(pi) {
        if (pi.getPlayer().getParty() != null) {
				var cleared = false;
				switch(pi.getMapId() / 100) {
					case 9211601:
					case 9211605:
						cleared = true;
						break;
					case 9211602:
					case 9211604:
						cleared = pi.getMap().getAllMonstersThreadsafe().size() == 0;
						break;
					case 9211606:
						cleared = pi.getPlayer().getEventInstance() != null && pi.getPlayer().getEventInstance().getProperty("kentaSaving") != null && pi.getPlayer().getEventInstance().getProperty("kentaSaving").equals("0");
						break;
				}
				if (cleared) {
					pi.warpParty(pi.getMapId() + 100);
					pi.playPortalSE();
				} else {
					pi.playerMessage(5,"此门不可用.");
				}
        } else {
                pi.playerMessage(5,"此门不可用.");
        }
}