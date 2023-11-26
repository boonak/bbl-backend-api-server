import express from 'express';
import { auth } from 'express-openid-connect';
import dotenv from 'dotenv';
import path from 'path';
import indexRouter from './routes/index';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    authorizationParams: {
      response_type: 'id_token',
      response_mode: 'form_post',
      scope: 'openid profile email'
    }
};

app.use(auth(config));
app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

export default app;
