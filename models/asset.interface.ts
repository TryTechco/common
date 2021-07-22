import { CreateAssetResponse } from "./nft.interface";
import { Gallery, Artist } from "./user.interface";

export type Unit = "USD" | "NTD";

export interface Asset {
  id: string;
  name: string;
  createdAt: number;
  owner: Gallery | Artist;
  price: number;
  unit: string;
  externalUrl: string;
  images?: string[];
  description: string;
  isNFT: boolean;
  NFTLink?: string;
  NFTInfo?: CreateAssetResponse;
  inventoryCount: number;
  sold: boolean;
}
