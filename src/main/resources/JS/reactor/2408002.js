/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function act() {
    var eim = rm.getPlayer().getEventInstance();
    var party = rm.getPlayer().getEventInstance().getPlayers();
    var womanfred = eim.getMapFactory().getMap(240050100);
    var vvpMap = rm.getPlayer().getMapId();
    var vvpKey;
    var vvpOrig = 4001087;
    var vvpStage = -1;
    rm.mapMessage(6, "钥匙传送到某处...");
    switch (vvpMap) {
        case 240050101 : {
            vvpKey = vvpOrig;
            vvpStage = 2;
            break;
        }
        case 240050102 : {
            vvpKey = vvpOrig + 1;
            vvpStage = 3;
            break;
        }
        case 240050103 : {
            vvpKey = vvpOrig + 2;
            vvpStage = 4;
            break;
        }
        case 240050104 : {
            vvpKey = vvpOrig + 3;
            vvpStage = 5;
            break;
        }
        default : {
            vvpKey = -1;
            break;
        }
    }
    var tehWomanfred = new client.Item(vvpKey, 0, 1);
    var theWomanfred = womanfred.getReactorByName("keyDrop1");
    var dropper = eim.getPlayers().get(0);
    womanfred.spawnItemDrop(theWomanfred, dropper, tehWomanfred, theWomanfred.getPosition(), true, true);
    womanfred.dropMessage(5, "光的明亮的闪光，然后是关键的地方突然出现在地图上.");
}
	
	