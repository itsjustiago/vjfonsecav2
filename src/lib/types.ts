export interface NavLink {
  label: string;
  href: string;
}

export interface ProductCategory {
  id: string;
  iconName: string;
  title: string;
  description: string;
  items: string[];
}

export interface PortfolioProject {
  id: string;
  image: string;
  title: string;
  tag: string;
  year: string;
  location: string;
}

export interface Differentiator {
  id: string;
  iconName: string;
  stat: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  mobile: string;
  mobileDisplay: string;
  email: string;
  address: string;
  region: string;
}
