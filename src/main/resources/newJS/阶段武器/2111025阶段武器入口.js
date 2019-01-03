/* global cm */
importPackage(net.sf.odinms.client);
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);

var newWeapon = [1302105,1312039,1322065,1432050,1442071,1402053,1412035,1422039,1332081,1472077,1372046,1382062,1452062,1462056,1482029,1492030]
var oldWeapon = [1302182,1302182,1302182,1302182,1302182,1302182,1302182,1302182,1332063,1472061,1372107,1372107,1452051,1452051,1452051,1452051]//最后两个海盗的没有

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var text = "";
			text += "#e#r	\r\n\r\n			梦之岛专属武器制作 #l#n\r\n\r\n#e#d梦之岛风云骤起,为了抵抗梦之岛的强大怪兽大仙决定牺牲自身修为将功力存放在此,梦之岛的勇士们通过测试即可获得更强大的专属武器!!";
			text += "\r\n	#L1#专属武器制作第一阶段#l \r\n\r\n ";
			text += "\r\n   #L2#专属武器制作第二阶段#l\r\n\r\n\r\n ";
            cm.sendOk(text);
		} else if (selection == 1) {
			if(cm.getPlayer().getOneTimeLog("第一阶段专属武器") == 0){//判断永久记录
				cm.openNpc(2111025, 1);
			}else{
				cm.sendOk("第一阶段任务已完成。")
				cm.dispose();
			}
        } else if (selection == 2) {
			if ((cm.getPlayer().getOneTimeLog("第一阶段专属武器")  == 1) && (cm.getPlayer().getOneTimeLog("第二阶段专属武器")  == 0)) {
				cm.openNpc(2111025, 2);
			}else{
				cm.sendOk("前置阶段未完成或第二阶段任务已完成。")
				cm.dispose();
			}
        } else if (selection == 3) {
           cm.openNpc(2111025, 3);
        } else if (selection == 4) {
           cm.openNpc(2111025, 4);
        }
    }
}

//4031123 菠萝
//1122006 项链
//1112402 休彼得满戒指
//						四维   物G魔G  HP   防御	 代码
function giveEquipment(siwei, gongji, hpmp, fangyu, zhuangbeima) {
    var ii = MapleItemInformationProvider.getInstance();
    var type = ii.getInventoryType(zhuangbeima); //获得装备的类形
    var toDrop = ii.randomizeStats(ii.getEquipById(zhuangbeima)).copy(); // 生成一个Equip类
    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //时间
    //toDrop.setExpiration(temptime); 
    //toDrop. setFlag(1);//上锁
    toDrop.setStr(siwei); //给力量
    toDrop.setDex(siwei); //给敏捷 
    toDrop.setInt(siwei); //给智力
    toDrop.setLuk(siwei); //给运气
    toDrop. setHp(hpmp);//给HP
    //toDrop. setMp(hpmp);//给MP
    toDrop.setMatk(gongji); //攻击
    toDrop.setWatk(gongji); //魔法力
    toDrop. setWdef(fangyu);//物理防御
	//toDrop. setAcc(99);//命中
		/*toDrop. setMdef(99);//魔法防御
		toDrop. setAvoid(99);//回避
		toDrop. setHands(99);//手技
		toDrop. setSpeed(99);//移动
		toDrop. setJump(99);跳跃
		toDrop.setUpgradeSlots(7);可砸卷次数*/
    cm.getPlayer().getInventory(type).addItem(toDrop); //将这个装备放入包中
    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //刷新背包
}


function beibao(nayilan,kongjige){
	kongjige--;
	return cm.getInventory(nayilan).isFull(kongjige);
}	