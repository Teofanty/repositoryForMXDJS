/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */
importPackage(Packages.tools.packet);

function enter(pi) {
    pi.getClient().getSession().write(CPacket.NPCPacket.getNPCTalk(1402001, 0, "我迟到了，我迟到了！ 我不能迟到!", "00 00", 17, 1402001));
    return true;
}