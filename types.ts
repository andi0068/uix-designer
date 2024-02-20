export type Link = {
  label: string;
  href: string;
};

export type Image = {
  width: number;
  height: number;
  name: string;
};

export type Project = {
  number: string;
  title: string;
  tags: string[];
  image: Image;
};

export type Step = {
  number: string;
  title: string;
  description: string;
};
