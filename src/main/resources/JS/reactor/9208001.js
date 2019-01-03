/* ==================
 脚本类型: 反应堆    
 脚本作者：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */

function act() {
    var eim = rm.getEventInstance();
    if (eim != null) {
	var status = eim.getProperty("stage1status");
	if (status != null && !status.equals("waiting")) {
	    var stage = parseInt(eim.getProperty("stage1phase"));
	    //rm.mapMessage(6,"Stage " + stage);
	    if (status.equals("display")) {
		var prevCombo = eim.getProperty("stage1combo");
		prevCombo += rm.getReactor().getObjectId();
		//rm.mapMessage(6,"Current Combo: " + prevCombo);
		eim.setProperty("stage1combo",prevCombo);
		if (prevCombo.length == (6 * (stage + 3))) { //end of displaying
		    eim.setProperty("stage1status","active");
		    rm.mapMessage("组合已显示; 继续小心.");
		    eim.setProperty("stage1guess","");
		}
	    } else { //active
		var prevGuess = eim.getProperty("stage1guess");
		if (prevGuess.length != (6 * (stage + 3))) {
		    prevGuess += rm.getReactor().getObjectId();
		    eim.setProperty("stage1guess",prevGuess);
		}
	    //rm.mapMessage(6,"Current Guess: " + prevGuess);
	    }
	}
    }
//rm.mapMessage(6,""+rm.getReactor().getObjectId());
}