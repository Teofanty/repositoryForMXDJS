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
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//显示物品ID图片用的代码是  #v这里写入ID#
            text += "#L1##r#v4170000#领取100元点卷！#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("消耗栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4170000,1)){
				cm.gainItem(4170000, -1);
				cm.gainItem(2022070, 5);//管理者的祝福
				cm.gainItem(5041000, 1);//高级瞬移石
				cm.gainItem(4002000, 1);//绿蜗牛邮票
				cm.gainItem(4002001, 1);//蓝蜗牛邮票
				cm.gainItem(4031559, 1);//汉斯邮票
            cm.sendOk("换购成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了点卷！");
            cm.dispose();
			}else{
            cm.sendOk("道具不足无法换购！");
            cm.dispose();
			}
		}
    }
}


