import Routes from './router/router';
import { connectToDatabase } from './db/connect';

const Boot = () => {
  const router = new Routes();
  router.listen(8082);
  connectToDatabase();
};

Boot();
