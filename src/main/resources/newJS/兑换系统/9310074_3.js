var xx;//
var xxdj;//
var sj1;//�ɹ���
var sjsx=Math.floor(Math.random()*7)-2;
var sjsx2=Math.floor(Math.random()*12)-2;
var xuqiushuliang;
var status = 0;

importPackage(java.util);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools);
importPackage(Packages.tools.packet);
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if ((mode == 0 && status == 2) || (mode == 0 && status == 13)) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			
			cm.sendNext("��ӭ����#v1113164#��ָǿ��ϵͳ\r\n\�����������ʹ����Ʒǿ��װ��!\r\n#e#r��Ҫǿ����#v1113164#�����װ������һ����#k�����޷�ǿ��!");
				} else if (status == 1) {
			var cc = cm.getInventory(1).getItem(1);
			if(cm.getInventory(1).getItem(1)!= null ){
			 cm.sendYesNo("��Ҫǿ����װ��Ϊ:\r\n\r\n#v"+cc.getItemId()+"#\r\n\r\n#r#eȷ��Ҫ��ʼǿ����?");
			} else{
			cm.sendOk("#b��һ�����޶�����#k");	
			cm.dispose();
			} 
			
		} else if (status == 2) {
			var item = cm.getInventory(1).getItem(1).copy();
			var xx = cm.getInventory(1).getItem(1).getLevel();
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1113164) {
				cm.sendOk("��ǿ����װ������#v1113164#.");
				cm.dispose();
			}else if(xx >= 10){
			cm.sendOk("���ֻ��ǿ��10��");
			cm.dispose();
			}else if(xx == 9){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*20);//���5%
				xxnew = 10;
				��Ʒ���� = 4310019;
				��Ʒ���� = 1;
				//������� = 1000000;
				��ά���� = 0;
				��ħ = 1;
				cm.sendNext("��ѡ���װ���ǣ�#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n��ǰ��ǿ���ȼ�Ϊ��#r"+xx+"#k\r\nǿ���ɹ�����20%��ά����:#r+"+��ά����+"\tħ/��#r+"+��ħ+"\r\n����Ҫ������Ʒ\r\n#r"+��Ʒ����+"��#v"+��Ʒ����+"#\r\n#k������һ��ʹ����ǿ������ǿ��\r\n\r\n");
			}else if(xx == 8){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*18);//���5%
				xxnew = 9;
				��Ʒ���� = 4310019;
				��Ʒ���� = 1;
				//������� = 1000000;
				��ά���� = 1;
				��ħ = 0;
				cm.sendNext("��ѡ���װ���ǣ�#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n��ǰ��ǿ���ȼ�Ϊ��#r"+xx+"#k\r\nǿ���ɹ�����30%��ά����:#r+"+��ά����+"\tħ/��#r+"+��ħ+"\r\n����Ҫ������Ʒ\r\n#r"+��Ʒ����+"��#v"+��Ʒ����+"#\r\n#k������һ��ʹ����ǿ������ǿ��\r\n\r\n");
			}else if(xx == 7){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*16);//���5%
				xxnew = 8;
				��Ʒ���� = 4310019;
				��Ʒ���� = 1;
				//������� = 1000000;
				��ά���� = 0;
				��ħ = 1;
				cm.sendNext("��ѡ���װ���ǣ�#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n��ǰ��ǿ���ȼ�Ϊ��#r"+xx+"#k\r\nǿ���ɹ�����40%��ά����:#r+"+��ά����+"\tħ/��#r+"+��ħ+"\r\n����Ҫ������Ʒ\r\n#r"+��Ʒ����+"��#v"+��Ʒ����+"#\r\n#k������һ��ʹ����ǿ������ǿ��\r\n\r\n");
			}else if(xx == 6){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*14);//���5%
				xxnew = 7;
				��Ʒ���� = 4310019;
				��Ʒ���� = 1;
				//������� = 1000000;
				��ά���� = 1;
				��ħ = 0;
				cm.sendNext("��ѡ���װ���ǣ�#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n��ǰ��ǿ���ȼ�Ϊ��#r"+xx+"#k\r\nǿ���ɹ�����50%��ά����:#r+"+��ά����+"\tħ/��#r+"+��ħ+"\r\n����Ҫ������Ʒ\r\n#r"+��Ʒ����+"��#v"+��Ʒ����+"#\r\n#k������һ��ʹ����ǿ������ǿ��\r\n\r\n");
			}else if(xx == 5){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*12);//���5%
				xxnew = 6;
				��Ʒ���� = 4310019;
				��Ʒ���� = 1;
				//������� = 1000000;
				��ά���� = 0;
				��ħ = 1;
				cm.sendNext("��ѡ���װ���ǣ�#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n��ǰ��ǿ���ȼ�Ϊ��#r"+xx+"#k\r\nǿ���ɹ�����50%��ά����:#r+"+��ά����+"\tħ/��#r+"+��ħ+"\r\n����Ҫ������Ʒ\r\n#r"+��Ʒ����+"��#v"+��Ʒ����+"#\r\n#k������һ��ʹ����ǿ������ǿ��\r\n\r\n");
			}else if(xx == 4){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*10);//���5%
				xxnew = 5;
				��Ʒ���� = 4310019;
				��Ʒ���� = 1;
				//������� = 1000000;
				��ά���� = 0;
				��ħ = 1;
				cm.sendNext("��ѡ���װ���ǣ�#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n��ǰ��ǿ���ȼ�Ϊ��#r"+xx+"#k\r\nǿ���ɹ�����60%��ά����:#r+"+��ά����+"\tħ/��#r+"+��ħ+"\r\n����Ҫ������Ʒ\r\n#r"+��Ʒ����+"��#v"+��Ʒ����+"#\r\n#k������һ��ʹ����ǿ������ǿ��\r\n\r\n");
			}else if(xx == 3){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*5);//���100%
				xxnew = 4;
				��Ʒ���� = 4310019;
				��Ʒ���� = 1;
				//������� = 1000000;
				��ά���� = 0;
				��ħ = 1;
				cm.sendNext("��ѡ���װ���ǣ�#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n��ǰ��ǿ���ȼ�Ϊ��#r"+xx+"#k\r\nǿ���ɹ�����70%��ά����:#r+"+��ά����+"\tħ/��#r+"+��ħ+"\r\n����Ҫ������Ʒ\r\n#r"+��Ʒ����+"��#v"+��Ʒ����+"#\r\n#k������һ��ʹ����ǿ������ǿ��\r\n\r\n");
			}else if(xx == 2){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*5);//���100%
				xxnew = 3;
				��Ʒ���� = 4310019;
				��Ʒ���� = 1;
				//������� = 1000000;
				��ά���� = 1;
				��ħ = 0;
				cm.sendNext("��ѡ���װ���ǣ�#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n��ǰ��ǿ���ȼ�Ϊ��#r"+xx+"#k\r\nǿ���ɹ�����100%��ά����:#r+"+��ά����+"\tħ/��#r+"+��ħ+"\r\n����Ҫ������Ʒ\r\n#r"+��Ʒ����+"��#v"+��Ʒ����+"#\r\n#k������һ��ʹ����ǿ������ǿ��\r\n\r\n");
			}else if(xx == 1){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*5);//���100%
				xxnew = 2;
				��Ʒ���� = 4310019;
				��Ʒ���� = 1;
				//������� = 1000000;
				��ά���� = 1;
				��ħ = 0;
				cm.sendNext("��ѡ���װ���ǣ�#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n��ǰ��ǿ���ȼ�Ϊ��#r"+xx+"#k\r\nǿ���ɹ�����100%��ά����:#r+"+��ά����+"\tħ/��#r+"+��ħ+"\r\n����Ҫ������Ʒ\r\n#r"+��Ʒ����+"��#v"+��Ʒ����+"#\r\n#k������һ��ʹ����ǿ������ǿ��\r\n\r\n");
			}else if(xx == 0){
				var xx = cm.getInventory(1).getItem(1).getLevel();
				sj = Math.floor(Math.random()*5);//���100%
				xxnew = 1;
				��Ʒ���� = 4310019;
				��Ʒ���� = 1;
				//������� = 1000000;
				��ά���� = 1;
				��ħ = 0;
				cm.sendNext("��ѡ���װ���ǣ�#v"+cm.getInventory(1).getItem(1).getItemId()+"##t"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n��ǰ��ǿ���ȼ�Ϊ��#r"+xx+"#k\r\nǿ���ɹ�����100%��ά����:#r+"+��ά����+"\tħ/��#r+"+��ħ+"\r\n����Ҫ������Ʒ\r\n#r"+��Ʒ����+"��#v"+��Ʒ����+"#\r\n#k������һ��ʹ����ǿ������ǿ��\r\n\r\n");
			
			}
		} else if (status == 3) {
		       if(!cm.haveItem(��Ʒ����,��Ʒ����)){
				cm.sendOk("#v"+��Ʒ����+"#��Ʒ��������"+��Ʒ����+"����");
				cm.dispose();
				return;
				} else if (sj > 5){//���ʧ��
			cm.sendOk("ǿ��ʧ�ܣ�");
			cm.gainItem(��Ʒ����,-��Ʒ����);
			cm.ShowWZEffect("Effect/BasicEff.img/SkillBook/Failure/0"); //����ʧ��Ч��
			status = -1;
			} else {
			cm.gainItem(��Ʒ����,-��Ʒ����);
			var statup = new java.util.ArrayList();
			var itemId1 = cm.getInventory(1).getItem(1).getItemId();
			var item = cm.getInventory(1).getItem(1).copy();
			var ii = MapleItemInformationProvider.getInstance();
			var type =  ii.getInventoryType(itemId1);
			var sx0 = item.getStr();//��ȡװ����ǰ����0
			var sx1 = item.getDex();//��ȡװ����ǰ����1
			var sx2 = item.getInt();//��ȡװ����ǰ����2
			var sx3 = item.getLuk();//��ȡװ����ǰ����3
			var sx4 = item.getHp();//��ȡװ����ǰHP4
			var sx5 = item.getMp();//��ȡװ����ǰMP5
			var sx6 = item.getWatk();//��ȡװ����ǰ�﹥6
			var sx7 = item.getMatk();//��ȡװ����ǰħ��7
			var sx8 = item.getWdef();//��ȡװ����ǰ���8
			var sx9 = item.getMdef();//��ȡװ����ǰħ��9
			var sx10= item.getAcc();//��ȡװ����ǰ����10
			var sx11= item.getAvoid();//��ȡװ����ǰ�ر�11
			var sx12= item.getHands();//��ȡװ����ǰ�ּ�12
			var sx13= item.getSpeed();//��ȡװ����ǰ�ƶ��ٶ�13
			var sx14= item.getJump();//��ȡװ����ǰ��Ծ��14
			item.setFlag(1);//����
			item.setStr(sx0+��ά����);
			item.setDex(sx1+��ά����);
			item.setInt(sx2+��ά����);
			item.setLuk(sx3+��ά����);
			item.setHp(sx4);
			item.setMp(sx5);
			item.setWatk(sx6+��ħ);
			item.setMatk(sx7+��ħ);
			item.setWdef(sx8);
			item.setMdef(sx9);
			item.setAcc(sx10);
			item.setAvoid(sx11);
			item.setHands(sx12);
			item.setSpeed(sx13);
			item.setJump(sx14);
			item.setJump(sx14);
			item.setLevel(+xxnew);
			item.setUpgradeSlots(0);
			MapleInventoryManipulator.removeFromSlot(cm.getC(),type,1,1, false);
			MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
			cm.ShowWZEffect("Effect/BasicEff.img/SkillBook/Success/0"); //�ɹ�
			cm.sendOk("��ǿ��ǿ���ɹ���");
			cm.laba(cm.getPlayer().getName() + " [��ǿ��]" + " : " + "�ɹ�ǿ����ǿ����"+xxnew+"�������ף����(��)�ɣ���",11);
			status = -1;
				}
			}
	}}
