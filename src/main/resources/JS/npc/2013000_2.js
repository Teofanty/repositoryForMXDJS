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
            text +=" 兑换女神副本达人#v1142003# （四维+1）\r\n 需要50张女神副本邮票#v4031560#\r\n";
            text += "#L1##r兑换#v1142003#女神副本达人\r\n";
            //text += "#v1112915#*1 #v4031560#*25 #v4001222#*25 #v4001223#*10 #v4001224#*10 #v4001225#*10 #v4021000#*5 #v4021001#*5 #v4021002#*5 #v4021003#*5 #v4021004#*5 #v4021005#*5 #v4021006#*5 #v4021007#*5 +金币200万\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(4031560, 30) &&cm.getMeso() >=1) {
                cm.gainItem(4031560,-30);
                cm.gainMeso(-1);
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1142003); //获得装备的类形
		var toDrop = ii.randomizeStats(ii.getEquipById(1142003)).copy(); // 生成一个Equip类
		//toDrop. setFlag(1);//上锁
		toDrop. setStr(3);//给力量
		toDrop. setDex(3);//给敏捷 
		toDrop. setInt(3);//给智力
		toDrop. setLuk(3);//给运气
		toDrop. setHp(20);//给HP
		toDrop. setMp(20);//给MP
		toDrop. setMatk(3);//攻击
		toDrop. setWatk(3);//魔法力
		toDrop. setWdef(0);//物理防御
		toDrop. setMdef(0);//魔法防御
		toDrop. setAcc(0);//命中
		toDrop. setAvoid(0);//回避
		toDrop. setHands(0);//手技
		toDrop. setSpeed(0);//移动
		toDrop. setJump(0);//跳跃
		cm.getPlayer().getInventory(type).addItem(toDrop);//将这个装备放入包中
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
                cm.sendOk("合成#v1142003#成功！");
                cm.dispose();
            } else {
                cm.sendOk("合成失败！材料不足!");
                cm.dispose();
            }
            }
			}
		}
    


