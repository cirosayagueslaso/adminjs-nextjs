# AdminJS with NextJS 📚

This repository is a demo of how to setup `AdminJS` with `NextJS`. The setup is simple but it hasn't been tested fully.
It works by creating an `Express` app with the router created by the `AdminJS plugin`. The `Express` app is mounted in an `API Route` under the pages router. It needs to be setup with the pages router because the `App Router` doesn't have an option to disable the body parser.

# How to replicate this setup ❓

1. Install `adminjs`, `@adminjs/express`, `@types/express`, `express`, `express-formidable` and `express-session`.
1. Setup a `NextJS API Route` with an `Express` app that uses the router provided by the `@adminjs/express` plugin.
1. Disable the `bodyParser` for the `API Route` you just created. You can also enable the `externalResolver` setting to remove the warnings from NextJS.
1. Add the following to the `next.config.js` to rewrites the routes for the adminjs section:

```JS
  ...
  rewrites: () => [
    {
      source: '/:admin*',
      destination: '/api/:admin*',
    },
  ],
  ...
```

1. That's it! 🚀

# Important notes ⚠️

- This setup hasn't been tested fully. `AdminJS` renders fine but I haven't tested all the functionalities provided by the library.
- Changing the package type to module may have some side effects. If there is any library that uses CommonJS in your project, the whole setup won't work. I would recommend to use an older version of AdminJS as an alternative for that scenario, although I'm not sure if those are mantained.
- This setup is not a guide on how to use neither `NextJS` nor `AdminJS`, it's just a demo of how I managed to get both playing "nicely" together.
- The `AdminJS` docs (recommend to setup a file watcher in development)[https://docs.adminjs.co/installation/getting-started#frontend-bundling]. There, they mentioned the following:

  > you would bundle all frontend files during build step of your deployment process

  I'm not sure on how to do that with `AdminJS` and also on how this step would be integrated with `NextJS'` build step.
