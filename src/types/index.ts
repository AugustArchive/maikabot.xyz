export interface Guild {
    guildID: string;
    prefix: string;
    social: Social;
    suggestions: Suggestion;
    'mod-log': Normal;   
}

export interface Social {
    enabled: boolean;
    levelNotice: string;
}

export interface Normal {
    enabled: boolean;
    channelID: string;
}

export interface Suggestion {
    enabled: boolean;
    channelID: string;
    upvotes: string;
    downvotes: string;
}