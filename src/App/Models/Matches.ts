export interface Match {
    title: string;
    embed: string;
    url: string;
    thumbnail: string;
    date: string;
    side1: Side1OrSide2;
    side2: Side1OrSide2;
    competition: Competition;
    videos?: (VideosEntity)[] | null;
  }
  export interface Side1OrSide2 {
    name: string;
    url: string;
  }
  export interface Competition {
    name: string;
    id: number;
    url: string;
  }
  export interface VideosEntity {
    title: string;
    embed: string;
  }

  
  export interface Matches {
    Matches: Match[];
  }