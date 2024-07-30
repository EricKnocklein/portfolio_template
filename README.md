# Portfolio Builder

This is a simple portfolio builder built from reusable components. It can be customized on a basic level by changing the files in the data folder or at a higher level by modifying the code directly. This file explains the components and how to set up the site. I used Netlify to host it, so what is already here is tailored to that. It could be that other hosting services require other files or configurations. To see this portfolio viewer in action, see [this site](https://ericknock.dev/).

## Data Files

Each of the files in the `/src/data` folder is customizable.

### `about.json`

This file defines what shows up on the index or home page of the site. The JSON includes an `images` entry that sets up the images displayed on the left side of the site. Each of these images needs a `src`, and it is recommended that they also include something in `alt` for better accessibility. With some modification of the code, the images can also be made to show captions, which are built from the `caption` value.

### `career.json`

This file is used to build the career page. The `overview` value builds the introduction pragraphs. The `resume` value links to a resume.

The `sections` object creates the rest of the page. Each entry in this object creates a new section. The title of the section is the key while the value is another object describing how the section should be laid out. Each section has a `title`, `dates` that the section covers, a `description` using Markdown that is the main body of the section, and an array of `images` that are displayed in the top left of the section.

### `categoryAbbreviations.json`

This is a simple file that creates abbreviations for the categories defined in `projects.json`.

### `nav.json`

This defines the navigation bar of the website. The `nav-items` array contains objects with a `name` entry and a `link` entry. The `name` is what is displayed in the nav bar, while the `link` is where the navigation button will take the user.

Note that the nav bar has one default element in addition to those defined here. It includes the logo, which is a button that redirects to the index page.

Also note that the layout of the nav bar is dependend on how many items are in the `nav.json` file. If there is an off number, then the logo is displayed on the left. If there is an even number, then the logo is displayed in the middle. This is easy to change, though, and I will describe how when I discuss the componets.

### `projects.json`

This file defines the projects page and the page for each individual project.

`categories`: the categories into which the projects fall. Each category has a `name` and an `image`. The images is displayed when the category filter is selected.

`projects`: the projects in the portfolio. Each entry in this object had a `title`, a list of `categories` into which it falls, `dates` over which the project spanned, a `link` if applicable, a `desc` (description) that is redered with Markdown, an optional `tagline`, and an array of `images` each with a `src`, an `alt`, and a `caption`.

The key with which these project objects are inserted into the `projects` object is the URL at which they can be found. For example, a project with key `portfolio` will be found at `/projects/portfolio`.

On the projects page (`/projects`), only an portion of the project description is shown. If the `tagline` property is not set, then the card for the project will display the first sentence of the description. Keep this in mind when writing the descriptions.

## Pages, Routing, and `App.js`

Found in `/src/pages`, there are number page I have already created. These pages are special components that use other components to render a full page. These components are used in `/src/App.js`. I'm not going to describe each of the pages here, but I will describe the routing.

This website uses `react-router-dom` to handle routing. `App.js` sets up the router. Depending on the URL path, it renders different pages. Most of the pages simply have the Navbar on top and the content (as defined by the page components) below. But if you want to change the layout drastically, you can also add more components or wrap these components in different styles as I did with the `/projects/:projectId` page.

## Components

This section is mostly just for those who are looking to modify the code, but it could be useful to others as well because it describes how components react to their input data.

Each component is styled using the `.module.css` file with its name. This way, there is no danger of class name collisions.

## Card Wrapper

This component wraps all its children elements in a card. It can take a `height`, `width`, and `maxWidth` property to customize its layout. If the `onClick` property is set, then the cursor will change into a pointer when hovering over the card.

## Career Card

This component uses the Card Wrapper component to display career information. Each entry in one of the objects in `sections` in `career.json` is displayed in this card.

Most of the data for the card is passed in the `data` property. The `id` property is passed in in order to allow for automatic scrolling to the card.

If there are images to display, the Career Card creates an Image Display element to display them.

It also uses the LR Text element to display the date. This is just me being lazy and reusing the style of an component I had previously designed. The component here serves no other function.

Lastly, it uses the Markdown component (from `react-markdown`) to render the description.

## Category

This is one of the few components that is interactible. There is a toggle when the user selects the category by clicking on its card. An `onClick` function is passed to it to define what happens when it is toggled. It uses the Card Wrapper to display its content.

## Image Display

Displays an array of images passed in the `imgs` property. If this array has more than one element, then it displays buttons the user can use to cycle through the images. If an image includes a caption, then it displays a card with that caption rendered using the Markdown component.

## LR Text

A simple component to display text on the left and the right. It has some basic styling of this text.

## Mosaic

Creates a backdrop for its children elements. The backdrop is a pattern of repeated tiles defined in the `tiles` constant. By using overlapping semi-transparent tiles, it makes the backdrop less repetative and adds visual interest.

## Navbar

This component renders the navigation bar at the top of each page. It uses the data in `nav.json` to create buttons. The home button is always there. It appears on the left if there are an odd number of navigation links in `nav.json` and displays in the center when there are an even number. It uses the Nav Button component.

## Nav Button

This component renders a navigation button. My plan is to add some sort of animation to this button, which is why it has its own component. It takes a `name` to display and a `link` to link to as properties.
