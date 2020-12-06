import { app } from './app';
import 'dotenv/config';

import indexRouter from './routes/index.routes';

app.use(indexRouter);
app.listen(process.env.PORT, () =>
    console.log(`Server running at http://localhost:${process.env.PORT}`)
);
