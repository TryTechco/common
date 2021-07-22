export type NFTStatus =
  | "UNANCHORED"
  | "QUEUEING"
  | "PENDING"
  | "SUCCESS"
  | "FAILED";

export interface TX {
  id: number;
  signer_address: string;
  to_address: string;
  data: string;
  status: NFTStatus;
}

export interface CreateAssetResponse {
  name: string;
  description: string;
  external_url: string;
  image_url: string;
  animation_url: string;
  background_color: string;
  contract_address: string;
  owner_address: string;
  token_id: number;
  token_uri: string;
  attributes: any[];
  txs: TX[];
}

export interface CreateAssetData {
  metadata: {
    anchor: boolean;
    use_ipfs: boolean;
  };
  data: {
    animation_url: string;
    attributes_map: any; // lootex待討論
    background_color: string;
    description: string;
    external_url: string;
    image_url: string;
    name: string;
    to_address: string;
    youtube_url: string;
  };
}

export interface ListAssetsResponse {
  code: number;
  total_count: number;
  page: {
    base: string;
    prev: string;
  };
  data: CreateAssetResponse[];
}
