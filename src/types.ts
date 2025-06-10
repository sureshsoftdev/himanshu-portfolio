// types.ts

export interface ProfileBanner {
  backgroundImage: { url: string };
  headline: string;
  resumelink: {
    url: string;
  };
  linkedinlink: string;
  profileSummary: string;
}

export interface workpermit {
  visastatus: string;
  expirydate: Date;
  summary: string;
  additionalinfo: string;
}

export interface TimelineItem {
  timelinetype: 'work' | 'education';
  name: string;
  title: string;
  techstack: string;
  summarypoints: string;
  daterange: string;
}

export interface Project {
  title: string;
  description: string;
  techused: string;
  image: { url: string };
}

export interface Certification {
  title: string;
  issuer: string;
  issueddate: string;
  link: string;
  iconname: string;
}

export interface ContactMe {
  profilepicture: { url: string };
  name: string;
  title: string;
  summary: string;
  companyuniversity: string;
  linkedinlink: string;
  email: string;
  phonenumber: string;
}

export interface Skill { 
  name: string;
  category: string;
  description: string;
  icon: string;
}
