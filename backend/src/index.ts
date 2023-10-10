import express from 'express';
import compression from 'compression';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';

import { createTable } from '@/models/init';
import routes from '@/routes';
import { env } from '@/utils/env';
import '@/config/passport.config';

const app = express();

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: env.SECRET_KEY,
    name: 'database_user',
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7, secure: false, domain: 'localhost' },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', routes);

createTable();

app.listen(8080, () => {
  console.log('server is running on http://localhost:8080');
});
