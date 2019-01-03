function enter(pi) {
    var em = pi.getEventManager("CWKPQ");
    if (em != null) {
        if (em.getProperty("glpq1").equals("1")) {
            em.setProperty("glpq1", "2");
            pi.warp(pi.getMapId(), 0);
            pi.mapMessage("[绯红远征队] 一个冒险家好像找到了暗门！大家跟上！");
        } else if (em.getProperty("glpq1").equals("2")) {
            pi.warpParty(803010800, 0);
        } else {
            pi.playerMessage(5, "请确保队长先向杰克通报情况！");
        }
    }
}
