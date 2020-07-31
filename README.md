[![Netlify Status](https://api.netlify.com/api/v1/badges/3715c793-544d-4b76-bc6b-44c71c876f32/deploy-status)](https://app.netlify.com/sites/hungry-kare-cb6e50/deploys)

# Description

This repository handles the samelogic.com landing page. This includes every path on the top level samelogic.com domain such as /blogs.

Its powered by gatsby and hosted on netlify. The blog is hosted on contentful.

Theming is 2 fold:

* Landing page by React Next Landing ([Saas Theme](https://superprops-gatsby.now.sh/saas/))
* Blog pages by StoryHub ([Personal Theme](https://storyhub-personal.redq.now.sh/))

# Installation


```
yarn
```

```
// For starting GatsbyJs Server run
yarn start
```

GatsbyJs server will start in `localhost:8000`


# Folder Structure

```
/packages
	/common [All common components and resource]
		/Assets
		/components
		/contexts
		/data
		/theme
	/functions
	/landing
```

# Stack We Have Used

1. Lerna (A tool for managing JavaScript projects with multiple packages. https://lernajs.io)
2. Yarn Workspace
3. React Js and Next Js
4. Gatsby Js
5. Styled System and Styled Components
6. Firebase Deployment.

# Development

Follow the below procedure to go with the development process.

## GatsbyJs

If you want to develop only for gatsbyjs then then you don't need the `/landing` folder which contains only nextjs related code. You can delete `/landing` folder.

For any specific template like the template under `/app` route. If you want to use this template only, then you have to follow below procedure.

1. Go to `/landing-gatsby/src/pages/`
2. now copy all the content from `app.js`
3. Paste all the content in `/landing-gatsby/src/pages/index.js`

Now for cleaning the unused code in your project follow the below procedure.

1. Now you can delete all other pages except `404.js`. That mean in your `/pages` folder you will have two files `index.js` and `404.js`
2. From `/landing-gatsby/src/containers/` folder you can delete all other folder except `App` and `Error`
3. From `/common/src/assets/image/` folder you can delete all other folder except `app`. Do not delete any files from there like `404.svg`, `error.svg` etc.
4. From `/common/src/data/` folder you can delete all other folder except `App`.
5. From `/common/src/theme/` folder you can delete all other folder except `app`. Do not delete the `index.js` file.

Now if you start your `gatsbyjs` server with `yarn gatsby-dev` then you will get your server running on `localhost:8000`

# Explaining Containers

In the `containers` directory you will get folder for our every template. If you want to use App template. Then in the `App` directory you will get folders containing different section of the template like `Banner`, `Footer`, `Testimonial`, `Navbar` etc.

All of these containers contains regular reactjs code.

# Deployment

For deploying your final project you have to build your project first. To build the project you have to follow below procedure.

### GatsbyJs

Run the below command on

```
yarn gatsby-build

// To check the build version locally run below command
// Not necessary if you don't want to check on your local.

yarn gatsby-serve
```

If you run `yarn gatsby-serve` then the build version the the project will start in `localhost:9000` . Navigate to the url you will get your site up and running.

# Deployment Support


## Netlify

At first, open an account on netlify and go to `sites` tab.

### GatsbyJs

If you want to host the `gatsbyjs` project, go to your command line and run this command on root directory.

```
yarn gatsby-build
```

After running above command go to `landing-gatsby` folder. You will find a `public` folder
there. Drag and drop this `public` folder on netlify `sites` tab.
