import Routes from './router/router';

const Boot = () => {
  const router = new Routes();
  router.listen(8082);
};

Boot();
