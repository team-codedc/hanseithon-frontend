export const TEAM_MEMBER_POSITION_VALUES = {
  DEVELOPER: "DEVELOPER",
  DESIGN: "DESIGN",
  PM: "PM",
} as const;

export type TEAM_MEMBER_POSITION_TYPE =
  typeof TEAM_MEMBER_POSITION_VALUES[keyof typeof TEAM_MEMBER_POSITION_VALUES];

export const TEAM_TYPE_VALUES = {
  GAME: "GAME",
  LIVING: "LIVING",
} as const;

export type TEAM_TYPE = typeof TEAM_TYPE_VALUES[keyof typeof TEAM_TYPE_VALUES];

export type TeamCategroyType = {
  [key: string]: string | undefined;
};

export const TeamCategroy: TeamCategroyType = {
  DEVELOPER: "개발자",
  DESIGN: "디자이너",
  PRODUTMANGER: "PM",
} as const;

export type TeamPartType = {
  [key: string]: string | undefined;
};

export const TeamPart: TeamPartType = {
  LIVING: "생활",
  GAME: "게임",
} as const;
