# Makeover
[![Build Status](https://dev.azure.com/itron/SoftwareProducts/_apis/build/status/NetSW/NetSW.Makeover?branchName=master)](https://dev.azure.com/itron/SoftwareProducts/_build/latest?definitionId=6083&branchName=master)

## What is Makeover?
Makeover is a UI component library for building new or modernizing existing Itron web applications.  Makeover uses Vue.js because of it's ability to easily integrate with existing web user interfaces. 

Makeover is approachable and easy to use even for less experienced web UI developers.  It allows you to stay productive because it provides most of the common components for frontend development.  Makeover is thoroughly tested, improving the quality and reliability of your application.   

## Build pipeline
Makeover has a [build pipeline](https://dev.azure.com/itron/SoftwareProducts/_build?definitionId=6083&_a=summary&view=runs) that runs tests from the master branch and publishes the artifact to the @itron/makeover npm repo.  The build pipeline config is defined in the azure-pipelines.yml file



## Running unit tests
Makeover components are thoroughly tested, giving you confidence that they 'just work'.  To run the unit tests:
```
npm run test:unit
```
That command will keep the tests running, and re-run the tests when your code chagnes, which is great for development!   However if you just want to run the tests once:
```
npm run test:unit
```

## Adding Makeover to your project
```
npm install @itron/makeover
```


# Storybook
Makeover is thoroughly documented with the help of Storybook.  Storybook lets you see the API of a component, and discover a component's features and capabilities by interacting with it.

To start Storybook:
```
npm run storybook
```

## Build Storybook as a static web application
https://storybook.js.org/docs/react/sharing/publish-storybook#build-storybook-as-a-static-web-application
```
npm run storybook:build
```

## Publish the storybook docs to the public website
https://storybook.js.org/docs/react/sharing/publish-storybook#build-storybook-as-a-static-web-application
```
npm run storybook:publish
```

### Preview the built storybook static web application locally
```
npx http-server ./public/storybook
```


# Contributing

## When and why to contribute
* Taking a component that has proven to be useful for a specific feature and genericizing it for Itron-wide use.
* Creating a brand-new component that’s needed platform-wide.
* Extending an existing component to support a broad, unsupported use case.


## Talk to Greg
* Before you start, reach out to Greg Bruins.  Perhaps there is something already in the works that is similar to your idea.  


## Structure and formatting
* It must not import dependencies or styles from anywhere besides this project and Makeover's package.json file.
* It must have an intuitive, well thought out name
* It must have tests
* It must have documentation (ideally a Storybook file)
* It must scale responsively in relation to the viewport and in relation to other elements inside which it might be nested
* It must be mobile-friendly


## Accessibility
* It must be functional using only keyboard navigation as much as possible
* Its markup must be ordered so its elements have a logical tabbing order.
* It must use appropriate semantic tags: `<h1>`, `<header>`, `<nav>`, `<aside>`, etc
    * If this somehow isn’t possible, it must have appropriate aria or role attributes on non-standard elements that act like links, buttons, modals, etc.


## Not everything needs to be a Makeover component
Components that are used only for a single feature should live in that feature’s codebase rather than in Makeover.

Components tied to specific data sources or business logic should never be part of Makeover, either. This guarantees Makeover stays free of external dependencies, which in turn ensures it can be used anywhere in Itron without side effects.


## Separation of concerns is important
Components shouldn’t try to do too much. If we reach a point where a component’s logic and behavior start to feel too complex, it’s probably time to make a separate component.


## Making updates 
* Create a development branch for your changes
* Run the unit tests:  `npm run test:unit`
* When you're ready to merge your code into master, you'll need to think about how to version Makeover:
    * When you make backwards compatible bug fixes: `npm version patch`
    * When you add functionality in a backwards compatible manner: `npm version minor` 
    * When you make incompatible API changes: `npm version major`
* Create a PR for merge into master


## Adding new SVG icons
SVG icons live in the components/svg/icons folder.   After adding a new SVG file, the `components/svg/SvgSprite.vue` file needs to be refreshed so your new icon is included in it:
* Regenerate the SvgSprite.vue file (components/svg/SvgSprite.vue) by running this command: `npm run svgsprite`
* Update the `svgIcons` array in `components/svg/svgIcon/constants.js`.  
* Save and commit your changes.  