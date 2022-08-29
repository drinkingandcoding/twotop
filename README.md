# twotop

## Developing

Once you've created a project and installed dependencies with `yarn install` start a development server:

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev -- --open
```

Serve the files on your local network (nice for testing mobile devices)

```bash
yarn dev --host
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Auth

If needing test auth, let Ryan know and he'll supply creds
