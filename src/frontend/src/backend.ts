// Auto-generated stub — no backend calls needed for this static site
export type backendInterface = Record<string, never>;
export type CreateActorOptions = {
  agentOptions?: Record<string, unknown>;
};

export class ExternalBlob {
  static fromURL(_url: string): ExternalBlob {
    return new ExternalBlob();
  }
  async getBytes(): Promise<Uint8Array> {
    return new Uint8Array();
  }
  onProgress?: (progress: number) => void;
}

export function createActor(
  _canisterId: string,
  _upload: (file: ExternalBlob) => Promise<Uint8Array>,
  _download: (bytes: Uint8Array) => Promise<ExternalBlob>,
  _options?: CreateActorOptions,
): Promise<backendInterface> {
  return Promise.resolve({} as backendInterface);
}
