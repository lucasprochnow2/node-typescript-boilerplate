import * as api from './express/api';

const { PORT = 5003 } = process.env;

try {
  api
    .server()
    .listen(PORT, (): void => console.log(`Server running. See http://localhost:${PORT}`));
} catch (error) {
  console.log(error);
}
