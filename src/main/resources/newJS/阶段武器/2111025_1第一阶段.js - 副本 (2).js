/* global cm */
importPackage(net.sf.odinms.client);
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);

var step = "��һ�׶�";
var nextStep = "�ڶ��׶�"

var zhanshi = [1302105,1312039,1322065,1432050,1442071,1402053,1412035,1422039];
var propertyZS = [50,50,50,58,58,53,53.53]
var zhanshi1 = [1302182];

var feixia = [1332081,1472077];
var propertyFX = [50,20]
var feixia1 = [1332063,1472061];

var fashi = [1372046,1382062];
var propertyFS = [49,50]
var fashi1 = [1372107,1372107];

var gongshou = [1452062,1462056];
var propertyGS = [49,53]
var gongshou1 = [1452051,1452051];

var haidao = [1482029,1492030];
var propertyHD = [37,39]
var haidao1 = [1482014,1492014]

var newWeapon = [zhanshi, fashi, gongshou, feixia, haidao];
var oldWeapon = [zhanshi1, fashi1, gongshou1, feixia1, haidao1];
var propertyList = [propertyZS, propertyFS, propertyFX, propertyGS, propertyHD]

//������Ʒ�б���Ӧ����
var needItems = [4000001,4000012,4000015,2210006,4002000]
var needAmout = [50,50,50,1,20]

//��Ǯ�뾭�齱������
var giveExp = 100000;
var giveMany = 0;

var selected = 0;
var jobIndex = 0;
var oldWeaponList = [];
var newWeaponList = [];

var jobNames = ['սʿ','ħ��ʦ','������','����','����'];
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
			jobCode = cm.getPlayer().getJob() + '';
			jobIndex = parseInt(jobCode.substring(0,1)) - 1;
			if (jobIndex < 0 || (job > jobIndex.length - 1)){
				cm.sendOk("ְҵ���ԣ���תְ������")
				cm.dispose();
				return;
			}
			oldWeaponList = oldWeapon[jobIndex];
			newWeaponList = newWeapon[jobIndex];
			var jobName = jobNames[jobIndex];
            var text = "";
			text += "#e#r	\r\n\r\n		  "+ jobName +"ר����������" + step + "������10W���飩#l \r\n\r\n �����������Ʒ��";
			var text3 = "\r\n ";
			for(i = 0 ; i < needItems.length; i++){
				text3 += "#v" + needItems[i] + "# *" +  needAmout[i] + "+"
			}
			text3= text3.substring(0,text2.length-1);
			text += text3;
			//text += "\r\n #v4000001# * 50 + #v4000012# * 50 + #v4000015# * 50 + #v2210006# * 1 + #v4002000# * 20";
			text += "\r\n ��������Ӧǰ������ ";
			var text2 = "";
			for(var i=0; i < oldWeaponList.length; i++){
				text2 += "#v" + oldWeaponList[i] + "# �� "
			}
			text2= text2.substring(0,text2.length-1)
			text += text2;
			for(var i = 0 ; i < newWeaponList.length ; i++){
				text += "\r\n	#L" + i + "#�һ�ר������" + "#v" + newWeaponList[i] + "#";
			}
			cm.sendOk(text);  

		}else if (selection != -1) {
			if(cm.getPlayer().getOneTimeLog(step + "ר������") == 0){//�ж����ü�¼
				var flag = true;
				var notHaveIndex;
				for(var i=0; i< needItems.length ; i++){
					flag = flag && cm.haveItem(needItems[i], needAmout[i])
					if (!flag){
						notHaveIndex = i;
						break;
					}
				}
				
				if(!flag){
					cm.sendOk("��Ʒ #v" + needItems[notHaveIndex] + "#  ���㣬���ռ���������")
					cm.dispose();
				}
				
				var oldCode = 0;
				for(var i=0;i<oldWeaponList.lengthl;i++){
					oldCode = oldWeaponList[i];
					flag = flag && cm.haveItem(oldCode, 1);
					if(flag){
						break;
					}
				}
				if(flag){
					cm.getPlayer().setOneTimeLog(step + "ר������");
					for(var i=0; i< needItems.length ; i++){
						cm.gainItem(needItems[i], 0 - needAmout[i]);
					}		
					cm.gainItem(oldCode, -1);
					var propertys = propertyList[jobIndex];
					giveEquipment(propertys[selection], newWeaponList[selection]);
					cm.gainExp(giveExp);
				}else{
					cm.sendOk("�����Ƿ����ǰ��������")
					cm.dispose();
				}
			}else{
				cm.sendOk(step + "��������ɡ�")
				cm.dispose();
			}
        } 
    }
}

//4031123 ����
//1122006 ����
//1112402 �ݱ˵�����ָ
//						��ά   ��GħG  HP   ����	 ����
function giveEquipment(property, zhuangbeima) {
    var ii = MapleItemInformationProvider.getInstance();
    var type = ii.getInventoryType(zhuangbeima); //���װ��������
    var toDrop = ii.randomizeStats(ii.getEquipById(zhuangbeima)).copy(); // ����һ��Equip��
    //var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
    //toDrop.setExpiration(temptime); 
    toDrop. setFlag(1);//����
    //toDrop.setStr(siwei); //������
    //toDrop.setDex(siwei); //������ 
    //toDrop.setInt(siwei); //������
    ///toDrop.setLuk(siwei); //������
    //toDrop. setHp(hpmp);//��HP
    //toDrop. setMp(hpmp);//��MP
	if (jobIndex != 1){
		toDrop.setMatk(property); //����
	}else{
		toDrop.setWatk(property); //ħ����
	}
    //toDrop. setWdef(fangyu);//�������
	//toDrop. setAcc(99);//����
		/*toDrop. setMdef(99);//ħ������
		toDrop. setAvoid(99);//�ر�
		toDrop. setHands(99);//�ּ�
		toDrop. setSpeed(99);//�ƶ�
		toDrop. setJump(99);��Ծ
		toDrop.setUpgradeSlots(7);���Ҿ����*/
    cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
    cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
}
