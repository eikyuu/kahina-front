export interface Anime {
    createdAt: string;
    updatedAt: string;
    slug: string;
    synopsis: string;
    description: string;
    type: string;
    canonicalTitle: string;
    averageRating: number;
    userCount: number;
    upVoteCount: number;
    startDate: string;
    endDate: string;
    nextRelease: string;
    popularityRank: number;
    ratingRank: number;
    ageRating: string;
    ageRatingGuide: string;
    origin: string;
    status: string;
    episodeCount: number;
    episodeLength: number;
    totalLength: number;
    youtubeVideoId: string;
    nsfw: boolean;
    title: Title;
    genre?: (GenreEntity)[] | null;
    episode?: (EpisodeEntity)[] | null;
    figure?: (FigureEntity)[] | null;
    staff?: (StaffOrStaffEntity)[] | null;
    music?: (MusicEntity)[] | null;
    quote?: (QuoteEntity)[] | null;
    streamingLink?: (StreamingLinkEntity)[] | null;
    license: License;
    theme?: (ThemeEntity)[] | null;
    studio: Studio;
    showType: string;
    score: number;
    favorite: number;
    avis?: (AvisEntity)[] | null;
  }
  export interface Title {
    en: string;
    enJp: string;
    jaJp: string;
    fr: string;
  }
  export interface GenreEntity {
    name: string;
    description: string;
    totalMediaCount: number;
    slug: string;
    nsfw: boolean;
  }
  export interface EpisodeEntity {
    canonicalTitle: string;
    seasonNumber: number;
    number: number;
    synopsis: string;
    airdate: string;
    length: number;
    title: Title;
  }
  export interface FigureEntity {
    description: string;
    role: string;
    staff: StaffOrStaffEntity;
    slug: string;
    name: Name;
  }
  export interface StaffOrStaffEntity {
    firstname: string;
    lastname: string;
    birthday: string;
    biography: string;
    role: string;
    voiceActor: boolean;
    language: string;
    website: string;
  }
  export interface Name {
    romaji: string;
    english: string;
    native: string;
  }
  export interface MusicEntity {
    name: string;
    composer: Composer;
  }
  export interface Composer {
    firstname: string;
    lastname: string;
    website: string;
  }
  export interface QuoteEntity {
    content: string;
  }
  export interface StreamingLinkEntity {
    url: string;
    name: string;
  }
  export interface License {
    name: string;
    website: string;
  }
  export interface ThemeEntity {
    name: string;
    slug: string;
    description: string;
  }
  export interface Studio {
    slogan: string;
    headOffice: string;
    direction: string;
    activity: string;
    product: string;
    parentCompany: string;
    website: string;
    slug: string;
  }
  export interface AvisEntity {
    content: string;
    note: number;
  }
  