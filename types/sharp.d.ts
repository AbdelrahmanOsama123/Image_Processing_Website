declare module 'sharp' {
    interface Sharp {
      toFile(arg0: string): unknown;
      resize(width?: number, height?: number): Sharp;
      toBuffer(): Promise<Buffer>;
    }
  
    function sharp(input?: string | Buffer): Sharp;
  
    export = sharp;
  }