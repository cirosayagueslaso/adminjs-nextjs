import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express, { Request, Response, Router } from 'express';

const admin = new AdminJS({
  rootPath: '/admin',
  branding: {
    companyName: 'My Company',
    withMadeWithLove: false,
  },
})

const adminRouter = AdminJSExpress.buildRouter(admin)

const app = express();

app.use(admin.options.rootPath, adminRouter)
//app.use("/api/admin", adminRouter)

export default (req: Request, res: Response) =>  {
  app(req, res, (err) => {
    console.log('express handling')

    if (!res.headersSent) {
      console.warn('no headers sent')
    }

    if (err) {
      console.error(err);
      res.status(err.status || 500).end(err.message);
    } else {
      res.end();
    }
  });
};

export const config = {
  api: {
    // Defaults to true. Setting this to false disables body parsing and allows you to consume the request body as stream or raw-body.
    bodyParser: false,

    // Determines how much data should be sent from the response body. It is automatically enabled and defaults to 4mb.
    // responseLimit: false,

    // Disables warnings for unresolved requests if the route is being handled by an external resolver like Express.js or Connect. Defaults to false.
    externalResolver: true, 
  },
}