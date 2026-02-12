// Types for application entities following Single Responsibility Principle

export interface BibleVerse {
  id: string;
  text: string;
  reference: string;
}

export interface NavigationItem {
  href: string;
  label: string;
  isActive?: boolean;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
}

export interface PrayerRequest {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface Testimony {
  id: string;
  name: string;
  content: string;
  imageUrl?: string;
}

export interface ChurchInfo {
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
}
