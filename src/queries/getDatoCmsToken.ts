// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;
  return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';
  // switch (hostname) {
  //   case 'ror.sumanthsamala.com':
  //   case 'sumanthsamala.com':
  //   case 'ror.localhost':
  //   case 'localhost':
      

  //   case 'java.sumanthsamala.com':
  //   case 'java.localhost':
  //     return process.env.REACT_APP_DATOCMS_JAVA_TOKEN ?? '';

  //   case 'frontend.sumanthsamala.com':
  //   case 'frontend.localhost':
  //     return process.env.REACT_APP_DATOCMS_FRONTEND_TOKEN ?? '';

  //   case 'node.sumanthsamala.com':
  //   case 'node.localhost':
  //     return process.env.REACT_APP_DATOCMS_NODE_TOKEN ?? '';

  //   default:
  //     throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  // }
};
