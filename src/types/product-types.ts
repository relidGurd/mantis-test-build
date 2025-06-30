type ImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

type Image = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Product = {
  id?: number;
  documentId?: string;
  title: string;
  slug?: string;
  card_description?: string;
  description?: string;
  price?: string;
  sale_percent?: string;
  availability?: boolean;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  preview_image?: Image;
  specifications?: any;
  gallery?: Image[];
};

export type ProductResponse = {
  data: Product;
  meta?: Record<string, unknown>;
};
