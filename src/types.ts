export interface PostItem {
  type: 'feed' | 'stories' | 'reels' | 'acao';
  title: string;
  description: string;
  hasEnquiry?: boolean;
}

export interface CampaignWeek {
  id: string;
  phaseId: string;
  name: string;
  dates: string;
  title: string;
  objective: string;
  posts: PostItem[];
  checklist: string[];
  suggestedCaptions: {
    title: string;
    caption: string;
  }[];
}

export interface MarketingPhase {
  id: string;
  name: string;
  period: string;
  description: string;
  colorClass: string;
}

export interface SponsorBenefit {
  name: string;
  description: string;
  category: 'visual' | 'midia' | 'experiencia';
}
