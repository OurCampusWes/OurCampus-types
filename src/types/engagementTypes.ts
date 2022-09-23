export type Event = {
  imageURL: string;
  invited: string[];
  endDateTime: string;
  joined: string[];
  title: string;
  location: string;
  description: string;
  startDateTime: string;
  public: boolean;
  category: number;
  dateTimePosted: string;
  author: string;
  flagged: string[];
  label: 'c' | 'u' | 's',
  dateTimeEdited: string;
  id: string;
};

export type Organization = {
  contact: string;
  dateTimePosted: string;
  author: string;
  description: string;
  link: string;
  displayName: string;
  label: string;
  events: string[];
  subscribers: string[];
  media: string[];
  imageURL: string;
  dateTimeEdited: string;
};
