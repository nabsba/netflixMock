const PORTS: { [key: string]: string | null | number } = {
  LOCAL: '3001',
  HEROKU: process.env.PORT ? process.env.PORT : 80,
  CENTOS: '8080',
  NAMECHEAP: null,
};

export { PORTS };
