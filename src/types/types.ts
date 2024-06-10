export type Service = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
};

export type ServicesData = {
  services: Service[];
};

export type ContactType = {
  name: string;
  address: string;
  phone: string;
  email: string;
  placeholders: {
    email: string;
    phone: string;
  };
};
