﻿importPackage(java.lang);
importPackage(Packages.client);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
importPackage(Packages.constants);
importPackage(Packages.net.channel);
importPackage(Packages.tools);
importPackage(Packages.scripting);
importPackage(Packages.tools.packet);
importPackage(Packages.tools.data);
importPackage(Packages.tools);
var status = 0;
var j=0;
var itemList = 
Array(  
//鱼
Array(1142146, 1, 1, 1), //钓鱼王



//------脸饰------
/*Array(1012056, 150, 1, 1), //狗狗鼻
Array(1022047, 150, 1, 1), //猫头鹰
Array(1012058, 150, 1, 1), //匹诺曹的鼻子
Array(1012059, 150, 1, 1), //匹诺曹的鼻子
Array(1012060, 150, 1, 1), //匹诺曹的鼻子
Array(1012061, 150, 1, 1), //匹诺曹的鼻子
Array(1121501, 150, 1, 1), //绿色蝶形领结
Array(1121502, 150, 1, 1), //红色蝶形领结
Array(1121503, 150, 1, 1), //黄色蝶形领结
Array(1121504, 150, 1, 1), //粉红蝶形领结
Array(1121505, 150, 1, 1), //黑色蝶形领结
Array(1121506, 150, 1, 1), //蓝色蝶形领结
Array(1012477, 150, 1, 1), //甜瓜味雪糕	
Array(1012420, 150, 1, 1), //水果草莓味雪糕	
Array(1012419, 150, 1, 1), //甜瓜味雪糕	
Array(1012417, 1, 1, 1), //巧克力雪糕	
Array(1012418, 150, 1, 1), //西瓜味雪糕	
Array(1012416, 1, 1, 1), //草莓雪糕	
Array(1012073, 150, 1, 1), //西瓜雪糕	
Array(1012071, 1, 1, 1), //巧克力雪糕	
Array(1012072, 150, 1, 1), //甜瓜雪糕	
Array(1012070, 1, 1, 1), //草莓雪糕
//------吊坠------
Array(1122015, 150, 1, 1), //枫叶围巾
Array(1122074, 150, 1, 1), //枫叶吊坠
//------盾牌------
Array(1092022, 150, 1, 1), //调色板盾牌
Array(1092050, 1, 1, 1), //冷艳剑盾
Array(1092049, 1, 1, 1), //热情剑盾
//------椅子------
Array(3015304, 1, 1, 1), //哗啦啦大水车
Array(3015051, 1, 1, 1), //巨无霸国际巨星
Array(3010070, 1, 1, 1), //巨无霸品克缤
Array(3015172, 1, 1, 1), //幻想牧场椅子
Array(3015173, 150, 1, 1), //夏日美梦椅子
Array(3010999, 150, 1, 1), //主人请用餐椅子
Array(3010976, 150, 1, 1), //为我加油！椅子
Array(3015225, 1, 1, 1), //和大象一起自拍椅子
Array(3010206, 150, 1, 1), //梦想画家椅子
Array(3010151, 150, 1, 1), //无人岛椅子
Array(3010848, 1, 1, 1), //红地毯主人公椅子
Array(3010044, 150, 1, 1), //同一红伞下
Array(3010036, 150, 1, 1), //浪漫秋千
Array(3010879, 150, 1, 1), //繁星椅子
Array(3010199, 150, 1, 1), //雪房子
Array(3010795, 150, 1, 1), //森林中休息处
Array(3010494, 150, 1, 1), //TV椅子
Array(3010490, 150, 1, 1), //红色大象
Array(3010465, 150, 1, 1), //可爱音符椅子
Array(3010460, 150, 1, 1), //红色爆竹
Array(3010450, 150, 1, 1), //艾莉珍椅子
Array(3010447, 150, 1, 1), //睡觉小鸟
Array(3010448, 150, 1, 1), //泡泡浴椅子
Array(3010440, 150, 1, 1), //寻找故乡的月妙椅子
Array(3010431, 150, 1, 1), //夏日喵喵椅子
Array(3015041, 150, 1, 1), //舒适大白熊椅子
Array(3010374, 150, 1, 1), //闪耀星星之夜椅子
Array(3010373, 150, 1, 1), //云朵洗手间椅子
Array(3015096, 150, 1, 1), //羊羊幻想牧场椅子
Array(3010296, 150, 1, 1), //甜蜜的圣诞椅子
Array(3012025, 150, 1, 1), //小鸡弹簧床椅子
Array(3012024, 150, 1, 1), //沙滩排球椅子
Array(3010570, 150, 1, 1), //迷你神兽椅子
Array(3010525, 150, 1, 1), //猫头鹰椅子
Array(3010544, 150, 1, 1), //热带夏日椅子
Array(3010849, 150, 1, 1), //最佳新人椅子
Array(3010850, 150, 1, 1), //潮流评论家椅子
Array(3010168, 150, 1, 1), //友谊万岁椅子
Array(3010142, 150, 1, 1), //水族馆椅子
Array(3015428, 150, 1, 1), //和猴子一起放烟花椅子*/
//------披风------
Array(1102053, 150, 1, 1), //破披风
Array(1102166, 150, 1,1), //枫叶披风
Array(1102167, 150, 1, 1), //枫叶披风
Array(1102168, 150, 1, 1), //枫叶披风
//Array(1102084, 1, 1, 1), //粉红盖亚披风	
Array(1102085, 150, 1, 1), //黄色盖亚披风	
//Array(1102086, 1, 1, 1), //紫色盖亚披风
//Array(1102041, 1, 1, 1), //浪人披风(粉)	
Array(1102040, 150, 1, 1), //浪人披风(黄)	
Array(1102043, 150, 1, 1), //浪人披风(褐)	
//Array(1102042, 1, 1, 1), //浪人披风(紫)
//Array(2070005, 1, 1, 1), //金钱镖
//Array(2070006, 1, 1, 1), //齿轮镖
//Array(2070007, 1, 1, 1), //月牙镖
//-------武器------
Array(1500004, 800, 1, 1), //特殊
Array(4015009, 50, 1, 1), //时间碎片
Array(1302105, 800, 1, 1), //圣诞六翼天使武器(单手剑)
Array(1312039, 800, 1, 1), //圣诞六翼天使武器(单手斧)
Array(1322065, 800, 1, 1), //圣诞六翼天使武器(单手钝器)        
Array(1332081, 800, 1, 1), //圣诞六翼天使武器(短剑)        
Array(1372046, 800, 1, 1), //圣诞六翼天使武器(短杖)
Array(1382062, 800, 1, 1), //圣诞六翼天使武器(长杖)
Array(1402053, 800, 1, 1), //圣诞六翼天使武器(双手剑        
Array(1412035, 800, 1, 1), //圣诞六翼天使武器(双手斧)
Array(1422039, 800, 1, 1), //圣诞六翼天使武器(双手钝器)        
Array(1432050, 800, 1, 1), //圣诞六翼天使武器(枪)
Array(1442071, 800, 1, 1), //圣诞六翼天使武器(矛
Array(1452062, 800, 1, 1), //圣诞六翼天使武器(弓) 1462056       
Array(1462056, 800, 1, 1),
Array(1472077, 800, 1, 1), //圣诞六翼天使武器(拳套)
Array(1482029, 800, 1, 1), //圣诞六翼天使武器(指节)
Array(1492030, 800, 1, 1), //圣诞六翼天使武器(手枪)
Array(4015009, 50, 1, 1), //时间碎片
Array(1302105, 800, 1, 1), //圣诞六翼天使武器(单手剑)
Array(1312039, 800, 1, 1), //圣诞六翼天使武器(单手斧)
Array(1322065, 800, 1, 1), //圣诞六翼天使武器(单手钝器)        
Array(1332081, 800, 1, 1), //圣诞六翼天使武器(短剑)        
Array(1372046, 800, 1, 1), //圣诞六翼天使武器(短杖)
Array(1382062, 800, 1, 1), //圣诞六翼天使武器(长杖)
Array(1402053, 800, 1, 1), //圣诞六翼天使武器(双手剑        
Array(1412035, 800, 1, 1), //圣诞六翼天使武器(双手斧)
Array(1422039, 800, 1, 1), //圣诞六翼天使武器(双手钝器)        
Array(1432050, 800, 1, 1), //圣诞六翼天使武器(枪)
Array(1442071, 800, 1, 1), //圣诞六翼天使武器(矛
Array(1452062, 800, 1, 1), //圣诞六翼天使武器(弓) 1462056       
Array(1462056, 800, 1, 1),
Array(1472077, 800, 1, 1), //圣诞六翼天使武器(拳套)
Array(1482029, 800, 1, 1), //圣诞六翼天使武器(指节)
Array(1492030, 800, 1, 1), //圣诞六翼天使武器(手枪)
Array(4015009, 50, 1, 1), //时间碎片
Array(1472077, 800, 1, 1), //圣诞六翼天使武器(拳套)
Array(1482029, 800, 1, 1), //圣诞六翼天使武器(指节)
Array(1492030, 800, 1, 1), //圣诞六翼天使武器(手枪)
Array(1302105, 800, 1, 1), //圣诞六翼天使武器(单手剑)
Array(1312039, 800, 1, 1), //圣诞六翼天使武器(单手斧)
Array(1322065, 800, 1, 1), //圣诞六翼天使武器(单手钝器)        
Array(1332081, 800, 1, 1), //圣诞六翼天使武器(短剑)        
Array(1372046, 800, 1, 1), //圣诞六翼天使武器(短杖)
Array(1382062, 800, 1, 1), //圣诞六翼天使武器(长杖)
Array(1402053, 800, 1, 1), //圣诞六翼天使武器(双手剑        
Array(1412035, 800, 1, 1), //圣诞六翼天使武器(双手斧)
Array(1422039, 800, 1, 1), //圣诞六翼天使武器(双手钝器)        
Array(1432050, 800, 1, 1), //圣诞六翼天使武器(枪)
Array(1442071, 800, 1, 1), //圣诞六翼天使武器(矛
Array(1452062, 800, 1, 1), //圣诞六翼天使武器(弓) 1462056       
Array(1462056, 800, 1, 1),
Array(1472077, 800, 1, 1), //圣诞六翼天使武器(拳套)
Array(1482029, 800, 1, 1), //圣诞六翼天使武器(指节)
Array(1492030, 800, 1, 1), //圣诞六翼天使武器(手枪)
Array(1302105, 800, 1, 1), //圣诞六翼天使武器(单手剑)
Array(1312039, 800, 1, 1), //圣诞六翼天使武器(单手斧)
Array(1322065, 800, 1, 1), //圣诞六翼天使武器(单手钝器)        
Array(1332081, 800, 1, 1), //圣诞六翼天使武器(短剑)        
Array(1372046, 800, 1, 1), //圣诞六翼天使武器(短杖)
Array(1382062, 800, 1, 1), //圣诞六翼天使武器(长杖)
Array(1402053, 800, 1, 1), //圣诞六翼天使武器(双手剑        
Array(1412035, 800, 1, 1), //圣诞六翼天使武器(双手斧)
Array(1422039, 800, 1, 1), //圣诞六翼天使武器(双手钝器)        
Array(1432050, 800, 1, 1), //圣诞六翼天使武器(枪)
Array(1442071, 800, 1, 1), //圣诞六翼天使武器(矛
Array(1452062, 800, 1, 1), //圣诞六翼天使武器(弓) 1462056       
Array(1462056, 800, 1, 1),
Array(1472077, 800, 1, 1), //圣诞六翼天使武器(拳套)
Array(1482029, 800, 1, 1), //圣诞六翼天使武器(指节)
Array(1492030, 800, 1, 1), //圣诞六翼天使武器(手枪)
Array(4015009, 50, 1, 1), //时间碎片
Array(1302105, 800, 1, 1), //圣诞六翼天使武器(单手剑)
Array(1312039, 800, 1, 1), //圣诞六翼天使武器(单手斧)
Array(1322065, 800, 1, 1), //圣诞六翼天使武器(单手钝器)        
Array(1332081, 800, 1, 1), //圣诞六翼天使武器(短剑)        
Array(1372046, 800, 1, 1), //圣诞六翼天使武器(短杖)
Array(1382062, 800, 1, 1), //圣诞六翼天使武器(长杖)
Array(1402053, 800, 1, 1), //圣诞六翼天使武器(双手剑        
Array(1412035, 800, 1, 1), //圣诞六翼天使武器(双手斧)
Array(1422039, 800, 1, 1), //圣诞六翼天使武器(双手钝器)        
Array(1432050, 800, 1, 1), //圣诞六翼天使武器(枪)
Array(1442071, 800, 1, 1), //圣诞六翼天使武器(矛
Array(1452062, 800, 1, 1), //圣诞六翼天使武器(弓) 1462056       
Array(1462056, 800, 1, 1),
Array(1472077, 800, 1, 1), //圣诞六翼天使武器(拳套)
Array(1482029, 800, 1, 1), //圣诞六翼天使武器(指节)
Array(1492030, 800, 1, 1), //圣诞六翼天使武器(手枪)
Array(1402063, 1, 1, 1), //樱花伞
Array(1121501, 500, 1, 1), //绿色蝶形领结
Array(1121502, 500, 1, 1), //红色蝶形领结
Array(1121503, 500, 1, 1), //黄色蝶形领结
Array(1121504, 500, 1, 1), //粉红蝶形领结
Array(1121505, 500, 1, 1), //黑色蝶形领结
Array(1121506, 500, 1, 1), //蓝色蝶形领结
Array(1432182, 150, 1, 1), //红色之矛(枪)
Array(1492194, 150, 1, 1), //红色短枪
Array(1482183, 150, 1, 1), //红色拳甲(海盗)
Array(1382226, 150, 1, 1), //红色长杖
Array(1402214, 150, 1, 1), //红色双手剑
Array(1452220, 150, 1, 1), //红色弓
Array(1462208, 150, 1, 1), //红色之弩
Array(1472230, 150, 1, 1), //红色拳甲(标)
Array(1332242, 150, 1, 1), //红色切割者
Array(1422156, 150, 1, 1), //红色巨锤
Array(1353102, 150, 1, 1), //红色狐狸珠(海盗盾牌)
//------手套------
Array(1082145, 150, 1, 1), //工地手套(黄)
Array(1082146, 150, 1, 1), //工地手套(红)
Array(1082147, 150, 1, 1), //工地手套(蓝)
Array(1082148, 150, 1, 1), //工地手套(紫)
Array(1082149, 150, 1, 1), //工地手套(褐)
Array(1082150, 150, 1, 1), //工地手套(灰)
Array(1081502, 150, 1, 1), //工地手套(白)
Array(1082175, 150, 1, 1), //马绍尔手套(赤)
Array(1082176, 150, 1, 1), //马绍尔手套(青)
Array(1082177, 150, 1, 1), //马绍尔手套(紫
Array(1082178, 150, 1, 1), //马绍尔手套(桃)
Array(1082179, 10, 1, 1), //马绍尔手套(黄)
//-----耳环-----
Array(1032032, 150, 1, 1), //秋叶耳环
Array(1032035, 150, 1, 1), //枫叶耳环
Array(1032040, 150, 1, 1), //枫叶型耳环
Array(1032041, 150, 1, 1), //枫叶型耳环
Array(1032042, 150, 1, 1), //枫叶型耳环
Array(1032030, 150, 1, 1), //勇气耳环

Array(2040025, 100, 1, 1), //头盔智力卷轴60%
Array(2040026, 100, 1, 1), //头盔智力卷轴10%
Array(2040029, 100, 1, 1), //头盔敏捷卷轴60%
Array(2040031, 100, 1, 1), //头盔敏捷卷轴10%
Array(2070010, 150, 1, 1), //冰棱
Array(2070009, 150, 1, 1), //木质陀螺
Array(2040105, 300, 1, 1), //脸部装饰回避率卷轴10%
Array(2040106, 300, 1, 1), //脸部装饰回避率卷轴60%
Array(2040150, 300, 1, 1), //眼部装饰命中率卷轴10%
Array(2040201, 300, 1, 1), //眼部装饰命中率卷轴60%
Array(2040205, 100, 1, 1), //眼部装饰智力卷轴10%
Array(2040206, 100, 1, 1), //眼部装饰智力卷轴60%
Array(2040301, 100, 1, 1), //耳环智力卷轴60%
Array(2040302, 100, 1, 1), //耳环智力卷轴10%
Array(2040310, 300, 1, 1), //耳环防御力卷轴10%
Array(2040317, 100, 1, 1), //耳环敏捷卷轴60%
Array(2040318, 100, 1, 1), //耳环敏捷卷轴10%
Array(2040901, 1000, 1, 1), //盾牌防御卷轴60%
Array(2040902, 1000, 1, 1), //盾牌防御卷轴10%1500012
Array(1500012, 1500, 1, 1), //特殊
Array(2040321, 100, 1, 1), //耳环装饰运气卷轴60%
Array(2040323, 100, 1, 1), //耳环运气卷轴10%
Array(2040326, 300, 1, 1), //耳环装饰体力卷轴60%
Array(2040328, 300, 1, 1), //耳环装饰体力卷轴10%
Array(2040401, 600, 1, 1), //上衣防御卷轴60%
Array(2040402, 600, 1, 1), //上衣防御卷轴10%
Array(2040401, 600, 1, 1), //上衣防御卷轴60%
Array(2040402, 600, 1, 1), //上衣防御卷轴10%
Array(2040401, 600, 1, 1), //上衣防御卷轴60%
Array(2040402, 600, 1, 1), //上衣防御卷轴10%
Array(2040401, 600, 1, 1), //上衣防御卷轴60%
Array(2040402, 600, 1, 1), //上衣防御卷轴10%
Array(2040401, 600, 1, 1), //上衣防御卷轴60%
Array(2040402, 600, 1, 1), //上衣防御卷轴10%
Array(2040401, 600, 1, 1), //上衣防御卷轴60%
Array(2040402, 600, 1, 1), //上衣防御卷轴10%
Array(2040401, 600, 1, 1), //上衣防御卷轴60%
Array(2040402, 600, 1, 1), //上衣防御卷轴10%
Array(2040401, 600, 1, 1), //上衣防御卷轴60%
Array(2040402, 600, 1, 1), //上衣防御卷轴10%

Array(2040412, 300, 1, 1), //上衣运气卷轴10%
Array(2040413, 300, 1, 1), //上衣运气卷轴60%
Array(2040418, 300, 1, 1), //上衣力量卷轴60%
Array(2040419, 300, 1, 1), //上衣力量卷轴10%
Array(2040421, 300, 1, 1), //上衣体力卷轴60%
Array(2040422, 300, 1, 1), //上衣体力卷轴10%
Array(2040425, 300, 1, 1), //上衣运气卷轴60%
Array(2040427, 300, 1, 1), //上衣运气卷轴10%
Array(2040501, 100, 1, 1), //全身铠甲敏捷卷轴60%
Array(2040502, 100, 1, 1), //全身铠甲敏捷卷轴10%
Array(2040504, 300, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 600, 1, 1), //全身铠甲防御卷轴10%
Array(2040504, 600, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 300, 1, 1), //全身铠甲防御卷轴10%
Array(2040504, 300, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 600, 1, 1), //全身铠甲防御卷轴10%
Array(2040504, 600, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 300, 1, 1), //全身铠甲防御卷轴10%
Array(2040504, 300, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 600, 1, 1), //全身铠甲防御卷轴10%
Array(2040504, 600, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 300, 1, 1), //全身铠甲防御卷轴10%
Array(2040504, 300, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 600, 1, 1), //全身铠甲防御卷轴10%
Array(2040504, 600, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 600, 1, 1), //全身铠甲防御卷轴10%
Array(2040504, 600, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 300, 1, 1), //全身铠甲防御卷轴10%
Array(2040504, 300, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 600, 1, 1), //全身铠甲防御卷轴10%
Array(2040505, 600, 1, 1), //全身铠甲防御卷轴10%
Array(2040504, 600, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 300, 1, 1), //全身铠甲防御卷轴10%
Array(2040504, 300, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 600, 1, 1), //全身铠甲防御卷轴10%
Array(2040505, 300, 1, 1), //全身铠甲防御卷轴10%
Array(2040504, 300, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 600, 1, 1), //全身铠甲防御卷轴10%
Array(2040504, 600, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 300, 1, 1), //全身铠甲防御卷轴10%Array(2040504, 300, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 600, 1, 1), //全身铠甲防御卷轴10%
Array(2040504, 600, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 300, 1, 1), //全身铠甲防御卷轴10%Array(2040504, 300, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 600, 1, 1), //全身铠甲防御卷轴10%
Array(2040504, 300, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 600, 1, 1), //全身铠甲防御卷轴10%Array(2040504, 300, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 600, 1, 1), //全身铠甲防御卷轴10%
Array(2040504, 300, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 600, 1, 1), //全身铠甲防御卷轴10%
Array(2040504, 600, 1, 1), //全身铠甲防御卷轴60%
Array(2040505, 300, 1, 1), //全身铠甲防御卷轴10%
Array(2040924, 300, 1, 1), //盾牌运气卷轴60%
Array(2040925, 300, 1, 1), //盾牌运气卷轴10%
Array(2040924, 300, 1, 1), //盾牌运气卷轴60%
Array(2040925, 300, 1, 1), //盾牌运气卷轴10%
Array(2040924, 300, 1, 1), //盾牌运气卷轴60%
Array(2040925, 300, 1, 1), //盾牌运气卷轴10%
Array(2040513, 80, 1, 1), //全身铠甲智力卷轴60%
Array(2040514, 80, 1, 1), //全身铠甲智力卷轴10%
Array(2040516, 80, 1, 1), //全身铠甲运气卷轴60%
Array(2040517, 80, 1, 1), //全身铠甲运气卷轴10%
Array(2040532, 80, 1, 1), //全身盔甲力量卷轴60%
Array(2040534, 80, 1, 1), //全身盔甲力量卷轴10%
Array(2040601, 300, 1, 1), //裤/裙防御卷轴60%
Array(2040602, 300, 1, 1), //裤/裙防御卷轴10%
Array(2040612, 300, 1, 1), //裤裙敏捷卷轴10%
Array(2040613, 300, 1, 1), //裤裙敏捷卷轴60%
Array(2040618, 300, 1, 1), //裤裙跳跃卷轴60%
Array(2040619, 300, 1, 1), //裤裙跳跃卷轴10%
Array(2040621, 300, 1, 1), //裤裙体力卷轴60%
Array(2040622, 300, 1, 1), //裤裙体力卷轴10%
Array(2040625, 300, 1, 1), //裤裙敏捷卷轴60%
Array(2040627, 300, 1, 1), //裤裙敏捷卷轴10%
Array(2040704, 300, 1, 1), //鞋子跳跃卷轴60%
Array(2040705, 300, 1, 1), //鞋子跳跃卷轴10%
Array(2040707, 300, 1, 1), //鞋子速度卷轴60%
Array(2040708, 300, 1, 1), //鞋子速度卷轴10%
//Array(2040727, 300, 1, 1), //鞋子防滑卷轴10%
Array(2070002, 500, 1, 1), //黑色利刃
Array(2070004, 400, 1, 1), //黑色刺
Array(2070002, 500, 1, 1), //黑色利刃
Array(2070004, 400, 1, 1), //黑色刺
Array(2070002, 500, 1, 1), //黑色利刃
Array(2070004, 400, 1, 1), //黑色刺
Array(2040804, 30, 1, 1), //手套攻击卷轴60%
Array(2040805, 30, 1, 1), //手套攻击卷轴10%
Array(2040816, 80, 1, 1), //手套魔力卷轴10%
Array(2040817, 80, 1, 1), //手套魔力卷轴60%
Array(2040824, 300, 1, 1), //手套体力卷轴60%
Array(2040825, 300, 1, 1), //手套体力卷轴10%
Array(2040901, 1000, 1, 1), //盾牌防御卷轴60%
Array(2040902, 1000, 1, 1), //盾牌防御卷轴10%
Array(2040914, 30, 1, 1), //盾牌攻击卷轴60%
Array(2040915, 30, 1, 1), //盾牌攻击卷轴10%
Array(2040919, 80, 1, 1), //盾牌魔力卷轴60%
Array(2040920, 80, 1, 1), //盾牌魔力卷轴10%
Array(2040924, 300, 1, 1), //盾牌运气卷轴60%
Array(2040925, 300, 1, 1), //盾牌运气卷轴10%
Array(2040927, 600, 1, 1), //盾牌体力卷轴60%
Array(2040928, 600, 1, 1), //盾牌体力卷轴10%
Array(2040927, 600, 1, 1), //盾牌体力卷轴60%
Array(2040928, 600, 1, 1), //盾牌体力卷轴10%
Array(2040927, 600, 1, 1), //盾牌体力卷轴60%
Array(2040928, 600, 1, 1), //盾牌体力卷轴10%
Array(2040927, 600, 1, 1), //盾牌体力卷轴60%
Array(2040928, 600, 1, 1), //盾牌体力卷轴10%
Array(2040931, 300, 1, 1), //盾牌力量卷轴60%
Array(2040933, 300, 1, 1), //盾牌力量卷轴10%
Array(2041001, 300, 1, 1), //披风魔防卷轴60%
Array(2041002, 300, 1, 1), //披风魔防卷轴10%
Array(2041004, 600, 1, 1), //披风防御卷轴60%
Array(2041005, 600, 1, 1), //披风防御卷轴10%
Array(2041007, 300, 1, 1), //披风体力卷轴60%
Array(2041008, 300, 1, 1), //披风体力卷轴10%
Array(2041010, 300, 1, 1), //披风魔力卷轴60%
Array(2041011, 300, 1, 1), //披风魔力卷轴10%
Array(2041013, 100, 1, 1), //披风力量卷轴60%
Array(2041014, 80, 1, 1), //披风力量卷轴10%
Array(2041016, 80, 1, 1), //披风智力卷轴60%
Array(2041017, 80, 1, 1), //披风智力卷轴10%
Array(2041019, 300, 1, 1), //披风敏捷卷轴60%
Array(2041020, 300, 1, 1), //披风敏捷卷轴10%
Array(2041022, 300, 1, 1), //披风运气卷轴60%
Array(2041023, 300, 1, 1), //披风运气卷轴10%
//Array(2041058, 10, 1, 1), //披风防寒卷轴10%
Array(2041201, 80, 1, 1), //项链运气卷轴10%
Array(2041202, 80, 1, 1), //项链运气卷轴60%
Array(2041206, 80, 1, 1), //项链力量卷轴10%
Array(2041207, 80, 1, 1), //项链力量卷轴60%
Array(2041301, 80, 1, 1), //腰带力量卷轴60%
Array(2041304, 80, 1, 1), //腰带智力卷轴60%
Array(2041307, 80, 1, 1), //腰带敏捷卷轴60%
Array(2041310, 80, 1, 1), //腰带运气卷轴60%
Array(2043001, 150, 1, 1), //单手剑攻击卷轴60%
Array(2043002, 150, 1, 1), //单手剑攻击卷轴10%
Array(2043008, 150, 1, 1), //单手剑魔力卷轴10%
Array(2043009, 150, 1, 1), //单手剑魔力卷轴60%
Array(2043017, 150, 1, 1), //单手剑命中率卷轴60%
Array(2043019, 150, 1, 1), //单手剑命中率卷轴10%
Array(2043101, 150, 1, 1), //单手斧攻击卷轴60%
Array(2043102, 150, 1, 1), //单手斧攻击卷轴10%
Array(2043112, 150, 1, 1), //单手斧命中率卷轴60%
Array(2043114, 150, 1, 1), //单手斧命中率卷轴10%
Array(2043201, 150, 1, 1), //单手钝器攻击卷轴60%
Array(2043202, 150, 1, 1), //单手钝器攻击卷轴10%
Array(2043212, 150, 1, 1), //单手钝器命中率卷轴60%
Array(2043214, 150, 1, 1), //单手钝器命中率卷轴10%
Array(2043301, 150, 1, 1), //短剑攻击卷轴60%
Array(2043302, 150, 1, 1), //短剑攻击卷轴10%
Array(2043701, 150, 1, 1), //短杖魔力卷轴60%
Array(2043702, 150, 1, 1), //短杖魔力卷轴10%
Array(2043801, 150, 1, 1), //长杖魔力卷轴60%
Array(2043802, 150, 1, 1), //长杖魔力卷轴10%
Array(2044001, 150, 1, 1), //双手剑攻击卷轴60%
Array(2044002, 150, 1, 1), //双手剑攻击卷轴10%
Array(2044012, 150, 1, 1), //双手剑命中率卷轴60%
Array(2044014, 150, 1, 1), //双手剑命中率卷轴10%
Array(2044101, 150, 1, 1), //双手斧攻击卷轴60%
Array(2044102, 150, 1, 1), //双手斧攻击卷轴10%
Array(2044112, 150, 1, 1), //双手斧命中率卷轴60%
Array(2044114, 150, 1, 1), //双手斧命中率卷轴10%
Array(2044201, 150, 1, 1), //双手钝器攻击卷轴60%
Array(2044202, 150, 1, 1), //双手钝器攻击卷轴10%
Array(2044212, 150, 1, 1), //双手钝器命中率卷轴60%
Array(2044214, 150, 1, 1), //双手钝器命中率卷轴10%
Array(2044301, 150, 1, 1), //枪攻击卷轴60%
Array(2044302, 150, 1, 1), //枪攻击卷轴10%
Array(2044312, 150, 1, 1), //枪命中率卷轴60%
Array(2044314, 150, 1, 1), //枪命中率卷轴10%
Array(2044401, 150, 1, 1), //矛攻击卷轴60%
Array(2044402, 150, 1, 1), //矛攻击卷轴10%
Array(2044412, 150, 1, 1), //矛命中率卷轴60%
Array(2044414, 150, 1, 1), //矛命中率卷轴10%
Array(2044501, 150, 1, 1), //弓攻击卷轴60%
Array(2044502, 150, 1, 1), //弓攻击卷轴10%
Array(2044601, 150, 1, 1), //弩攻击卷轴60%
Array(2044602, 150, 1, 1), //弩攻击卷轴10%
Array(2044801, 150, 1, 1), //拳甲攻击卷轴60%
Array(2044802, 150, 1, 1), //拳甲攻击卷轴10%
Array(2044807, 150, 1, 1), //拳甲命中率卷轴60%
Array(2044809, 150, 1, 1), //拳甲命中率卷轴10%
Array(2044901, 150, 1, 1), //短枪攻击卷轴60%
Array(2044902, 150, 1, 1), //短枪攻击卷轴10%
Array(2044701, 150, 1, 1), //拳套攻击卷轴60%
Array(2044702, 150, 1, 1) //拳套攻击卷轴10%
);
var status = 0;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
     if (status == 0) {
	
		if (cm.getInventory(1).isFull(0)){//判断第一个也就是装备栏的装备栏是否有一个空格);
		cm.getPlayer().dropMessage(5,"请保证装备栏位至少有1个空格,否则无法获得物品.")
		cm.getPlayer().cancelFishingTask();//取消钓鱼
		cm.dispose();
		return;
		} else if (cm.getInventory(2).isFull(0)){//判断第二个也就是消耗栏的装备栏是否有一个空格
		cm.getPlayer().dropMessage(5,"请保证消耗栏位至少有1个空格,否则获得物品.");
		cm.getPlayer().cancelFishingTask();//取消钓鱼
		cm.dispose();
		return;
		} else if (cm.getInventory(3).isFull(0)){//判断第三个也就是设置栏的装备栏是否有一个空格
		cm.getPlayer().dropMessage(5,"请保证设置栏位至少有1个空格,否则获得物品.");
		cm.getPlayer().cancelFishingTask();//取消钓鱼
		cm.dispose();
		return;
		} else if (cm.getInventory(4).isFull(0)){//判断第四个也就是其它栏的装备栏是否有一个空格
		cm.getPlayer().dropMessage(5,"请保证其它栏位至少有1个空格,否则获得物品.");
		cm.getPlayer().cancelFishingTask();//取消钓鱼
		cm.dispose();
		return;
		} else if (cm.getInventory(5).isFull(0)){//判断第五个也就是现金栏的装备栏是否有一个空格
		cm.getPlayer().dropMessage(5,"请保证现金栏位至少有1个空格,否则获得物品.");
		cm.getPlayer().cancelFishingTask();//取消钓鱼
		cm.dispose();
		return;
       }
     
		var ii = MapleItemInformationProvider.getInstance();
        var chance = Math.floor(Math.random()*100);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];

			       
				   
				   if(ii.getInventoryType(itemId).getType() == 1){
			        	var toDrop = ii.randomizeStats(ii.getEquipById(itemId)).copy();
						MapleInventoryManipulator.addFromDrop(cm.getC(),toDrop,false);
				}else{
				 	 var toDrop = new Equip(itemId,0).copy();
				cm.gainItem(itemId,quantity);
				}
				
				
				cm.getPlayer().showdy(itemId);

            cm.dispose();
        } else {
			cm.getPlayer().dropMessage(5,"大鱼潜逃了");
            cm.dispose();
        }
       }
    }
}
	

	