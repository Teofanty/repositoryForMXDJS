function enter(pi) {
    var em = pi.getEventManager("CWKPQ");
    if (em != null) {
        if (!em.getProperty("glpq4").equals("5")) {
            pi.playerMessage("这个传送门尚未开启！");
        } else {
            pi.warpParty(803011100, 0);
        }
    }
}
