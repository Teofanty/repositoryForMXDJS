function enter(pi) {
    var em = pi.getEventManager("CWKPQ");
    if (em != null) {
        pi.warpS(803010900, 0);
        if (!em.getProperty("glpq3").equals("10")) {
            em.setProperty("glpq3", parseInt(em.getProperty("glpq3")) + 1);
            pi.mapMessage(6, "一名探险家已经通过入口");
            if (em.getProperty("glpq3").equals("10")) {
                pi.mapMessage(6, "黑暗魔法师的力量变弱了，请到下一关卡去！");
                pi.getMap().changeEnvironment("3pt", 2);
            }
        }
    }
}
