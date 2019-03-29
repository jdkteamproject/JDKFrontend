export interface Image {
  width: number;
  fallback: boolean;
  url: string;
  ratio: string;
  height: number;
}

export interface Start {
  dateTime: Date;
  localTime: string;
  dateTBA: boolean;
  noSpecificTime: boolean;
  timeTBA: boolean;
  localDate: string;
  dateTBD: boolean;
}

export interface Status {
  code: string;
}

export interface Dates {
  timezone: string;
  start: Start;
  status: Status;
  spanMultipleDays: boolean;
}

export interface PriceRange {
  min: number;
  max: number;
  currency: string;
  type: string;
}

export interface SubGenre {
  name: string;
  id: string;
}

export interface Segment {
  name: string;
  id: string;
}

export interface Genre {
  name: string;
  id: string;
}

export interface SubType {
  name: string;
  id: string;
}

export interface Type {
  name: string;
  id: string;
}

export interface Classification {
  subGenre: SubGenre;
  segment: Segment;
  genre: Genre;
  subType: SubType;
  type: Type;
  family: boolean;
  primary: boolean;
}

export interface Country {
  countryCode: string;
  name: string;
}

export interface Image2 {
  width: number;
  fallback: boolean;
  url: string;
  ratio: string;
  height: number;
  attribution: string;
}

export interface Address {
  line1: string;
}

export interface City {
  name: string;
}

export interface Twitter {
  handle: string;
}

export interface Social {
  twitter: Twitter;
}

export interface Self {
  href: string;
}

export interface Links {
  self: Self;
}

export interface UpcomingEvents {
  _total: number;
  tmr: number;
  ticketmaster: number;
}

export interface GeneralInfo {
  generalRule: string;
  childRule: string;
}

export interface BoxOfficeInfo {
  openHoursDetail: string;
  phoneNumberDetail: string;
  willCallDetail: string;
  acceptedPaymentDetail: string;
}

export interface Market {
  name: string;
  id: string;
}

export interface Dma {
  id: number;
}

export interface Location {
  latitude: string;
  longitude: string;
}

export interface State {
  name: string;
  stateCode: string;
}

export interface Ada {
  adaCustomCopy: string;
  adaPhones: string;
  adaHours: string;
}

export interface Venue {
  country: Country;
  images: Image2[];
  address: Address;
  test: boolean;
  city: City;
  social: Social;
  _links: Links;
  timezone: string;
  upcomingEvents: UpcomingEvents;
  postalCode: string;
  generalInfo: GeneralInfo;
  type: string;
  locale: string;
  boxOfficeInfo: BoxOfficeInfo;
  url: string;
  markets: Market[];
  dmas: Dma[];
  accessibleSeatingDetail: string;
  name: string;
  parkingDetail: string;
  location: Location;
  id: string;
  state: State;
  ada: Ada;
}

export interface Embedded2 {
  venues: Venue[];
}

export interface Event {
  images: Image[];
  dates: Dates;
  priceRanges: PriceRange[];
  url: string;
  classifications: Classification[];
  _embedded: Embedded2;
  name: string;
  id: string;
  info: string;
}

export interface Embedded {
  events: Event[];
}

export interface Page {
  number: number;
  size: number;
  totalPages: number;
  totalElements: number;
}

export interface EventModel {
  _embedded: Embedded;
  page: Page;
}



