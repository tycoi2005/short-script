    public static void getTBInfo(String eventId, String memId){
		TBEvent event = TBEventService.getEvent(eventId);
		if (event == null ) {
			renderHtml("Event not exits...");
		}
		MemInfoBasic memInfo = MemInfoService.getMemInfoBasic(memId);
		String teamId = memInfo.getTeamId();
		TBEventMemInfo eventMemInfo = service.bl.team.TBEventMemInfoService.getEventMemInfo(eventId, memId);
		TBEventTeamInfo teamBattleInfo = TBEventTeamInfoService.getTeamBattleInfo(eventId, teamId);
		String out = String.format("team.rank:%s\nteam.winpoint:%s\nmem.rank:%s\nmem.point:%s",
				teamBattleInfo.getRank(),
				teamBattleInfo.getWinPoint(),
				eventMemInfo.getRank(),
				eventMemInfo.getGetPt()
				);
		renderText(out);
	}