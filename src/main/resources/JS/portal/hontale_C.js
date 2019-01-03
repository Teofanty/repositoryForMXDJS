/* ==================
 ???????:  NPC	    
 ?????????????     
 ???????297870163    609654666
 =====================
 */

function enter(pi) {
    var eim = pi.getPlayer().getEventInstance();
    if (eim.getProperty("choiceCave") == null) {
        pi.getPlayer().message(5, "아직 동굴이 선택되지 않았습니다.");
        return false;
    }
    if (eim.getProperty("choiceCave").equals("0")) {
        pi.allPartyWarp(240050300, false);
    } else {
        pi.allPartyWarp(240050310, false);
    }
    return true;
}