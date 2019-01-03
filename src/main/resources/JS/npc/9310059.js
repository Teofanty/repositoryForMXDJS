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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "               		游戏更改\r\n" //showghrs
			text += "2018年1月16日\r\n"
			text += "  1、增加女生的脸型。\r\n"
			text += "2018年1月15日\r\n"
			text += "  1、增加女生的发型。\r\n"
			text += "2018年1月11日\r\n"
			text += "  1、增加黑龙时间到150分钟。\r\n"
			text += "2018年1月10日\r\n"
			text += "  1、调低黑龙110级武器暴率。\r\n"
			text += "2017年12月14日\r\n"
			text += "  1、玩具箱和副本箱 增加 御守和心跳糖。\r\n"
			text += "2017年12月10日\r\n"
			text += "  1、增加6小时在线奖励。\r\n"
			text += "2017年12月8日\r\n"
			text += "  1、玩具箱 增加金币抽奖。\r\n"
			text += "2017年12月5日\r\n"
			text += "  1、自由市场 段段NPC 添加游戏更改说明。\r\n"
			text += "2017年12月4日\r\n"
			text += "  1、天球BOSS 增加掉落。\r\n"
			text += "  2、射手公园去掉 妖僧，改为 天球BOSS。\r\n"
           
            cm.sendOk(text); 
			cm.dispose(); 
        } 
	}
}