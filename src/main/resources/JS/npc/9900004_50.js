importPackage(Packages.client);
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
            var txt = "";
            txt = "5.20活动#v4031019#兑换神秘好礼领取。\r\n#r背包设置和消耗栏目请注意：留3个空位以上\r\n";
            if (cm.getPlayer().getBossLog("meirirenwu66") == 1){
                txt += "#r你已经领取过了！";
                 cm.sendOk(txt);
				 cm.dispose();
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 30){
			    txt += "#L30##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 29){
			    txt += "#L29##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 28){
			    txt += "#L28##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 27){
			    txt += "#L27##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 26){
			    txt += "#L26##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 25){
			    txt += "#L25##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 24){
			    txt += "#L24##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 23){
			    txt += "#L23##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 22){
			    txt += "#L22##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 21){
			    txt += "#L21##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 20){
			    txt += "#L20##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 19){
			    txt += "#L19##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 18){
			    txt += "#L18##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 17){
			    txt += "#L17##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 16){
			    txt += "#L16##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 15){
			    txt += "#L15##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 14){
			    txt += "#L14##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 13){
			    txt += "#L13##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 12){
			    txt += "#L12##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 11){
			    txt += "#L11##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 10){
			    txt += "#L10##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 9){
			    txt += "#L9##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 8){
			    txt += "#L8##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 7){
			    txt += "#L7##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 6){
			    txt += "#L6##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 5){
			    txt += "#L5##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 4){
			    txt += "#L4##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 3){
			    txt += "#L3##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 2){
			    txt += "#L2##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 1){
			    txt += "#L1##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri166") == 0){
			    txt += "#L0##b给我一个#v4031019##l!";
                cm.sendSimple(txt);
            }else{
                txt += "你已经领过了！";
                 cm.sendOk(txt);
				 cm.dispose();
				 }
        } else if (selection == 0) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 1) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 4) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 5) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 6) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 7) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 8) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 9) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 10) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 11) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 12) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 13) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 14) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 15) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 16) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 17) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请收集50个#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 18) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 19) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 20) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 21) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请收集10个#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 22) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 23) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 24) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 25) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 26) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 27) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 28) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 29) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
        } else if (selection == 30) {
            if (cm.haveItem(4031019,1) ){
				cm.gainItem(4031019, -1);
                cm.sendOk("恭喜!");
                cm.gainItem(3010061, 1);//给这个物品1个的意思
				cm.gainItem(2022459, 5);
				cm.gainItem(2022462, 5);
				//cm.gainMeso(100000);//给金币1万的意思
				//cm.gainExp(20000);//给2万经验的意思
				cm.getPlayer().setBossLog('meirirenwu66');
				cm.getPlayer().setOneTimeLog("meiri166");
                cm.dispose();
            }else{
                cm.sendOk("物品不足!请把#v4031019#交给我!");
                cm.dispose();
            }
            }
            }
        }
    

