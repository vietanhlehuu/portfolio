declare interface Window {
  // https://pageclip.co/docs#website-integration
  Pageclip: {
    send: (
      siteKey: string,
      formName: string,
      data: any,
      cb: (error: any, response: any) => void
    ) => void;
  };
}
