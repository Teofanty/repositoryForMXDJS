importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 60; i++) {
                text += "";
            }
            text +="#k一年一度的端午节又到了，首先祝愿大家节日快乐，炎炎夏日，坐在树荫下钓鱼吃粽子也很不错呢。\r\n";
            text +="#r兑换#v1142146#钓鱼王勋章力量，敏捷，智力，运气各+5，HP,MP+50。需要前往钓鱼场获得:#v2022034#\r\n";
            text +="#v2022034#*30\r\n";
			text +="#b收集好了,我要交换\r\n#L1##e#r确认前请确保装备栏目保留空位"
			cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(2022034, 30)) {
                cm.gainItem(2022034,-30);
        var ii = MapleItemInformationProvider.getInstance();		                
        var type = ii.getInventoryType(1142146); //获得装备的类形
        var toDrop = ii.randomizeStats(ii.getEquipById(1142146)).copy(); // 生成一个Equip类
		//var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
		//toDrop.setExpiration(temptime); 
		//toDrop. setFlag(1);//上锁
		toDrop. setStr(5);//给力量
		toDrop. setDex(5);//给敏捷 
		toDrop. setInt(5);//给智力
		toDrop. setLuk(5);//给运气
		toDrop. setHp(50);//给HP
		toDrop. setMp(50);//给MP
		toDrop. setMatk(0);//攻击
		toDrop. setWatk(0);//魔法力
		toDrop. setWdef(0);//物理防御
		toDrop. setMdef(0);//魔法防御
		toDrop. setAcc(0);//命中
		toDrop. setAvoid(0);//回避
		toDrop. setHands(0);//手技
		toDrop. setSpeed(0);//移动
		toDrop. setJump(0);//跳跃
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
                cm.sendOk("兑换#v1142146#成功！");
				cm.worldMessage(6,"-["+cm.getName()+"]成功兑换了钓鱼王勋章");
                cm.dispose();
            } else {
                cm.sendOk("交换失败！材料不满足条件!");
                cm.dispose();
            }
            }
			}
		}
    


