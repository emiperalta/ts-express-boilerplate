import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export { app };
