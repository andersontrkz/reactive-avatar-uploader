### Welcome to the Reactive Avatar Uploader project repository!

# Reactive Avatar Uploader


## About

This project develops a AvatarUpload component.


## Goal

The objective was create a React component using Typescript to let users upload and crop avatars.


## Requirements

- [x]  The <AvatarUpload /> component should allow users to upload images to make it easier for them to recognize key interface elements related to an organization;

- [x]  It should allow uploading an image by dragging it into the dashed area or clicking on it.
Throughout the entire process, the user can click on the "X" icon to cancel and return to the initial state;

- [x]  After uploading, the user can adjust the image to better fit the circular format. Using a slider, the user can zoom in and out on the image cut out by the circular mask to preview the final result;

- [x]  Clicking on save, the component should display the cropped logo and a button to restart the process. It must also provide some way for parent components to access the resulting image's raw data;

- [x]  [Faithfully implement the components developed in the Figma design.](https://www.figma.com/file/eiC4EtXzbSPNSjsXEIoVXL/Avatar-Upload?node-id=0%3A1)


## Features

- [x]  Upload Avatar;
- [x]  Crop Avatar;
- [x]  Save Avatar;
- [x]  Delete Avatar;
- [x]  Change Avatar;
- [x]  Drag/Drop File;
- [x]  Accept Image Files;
- [x]  Decline Other Files;
- [x]  Feedback Actions to User;
- [x]  Custom Hooks;
- [x]  Avatar Upload Context;
- [x]  Avatar Upload Provider;
- [x]  Responsive Components;
- [x]  Implement Tests.


# Technologies
- [React](https://reactjs.org/docs/getting-started.html)
- [Chakra UI](https://chakra-ui.com/docs/getting-started)
- [FontAwesome](https://fontawesome.com/)
- [Eslint](https://eslint.org/docs/user-guide/configuring/)
- [Prettier](https://prettier.io/docs/en/options.html)
- [Commitlint](https://commitlint.js.org/)
- [Enzyme](https://enzymejs.github.io/enzyme/docs/api/)
- [RTL](https://testing-library.com/docs/react-testing-library/intro/)


## Running


### Available Scripts

In the project directory, you can run:


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Contributing

Contributions are always welcome! If you have any ideas, suggestions, fixes, feel free to contribute. You can do that by going through the following steps:

1. Clone this repo;
2. Create a branch: `git checkout -b feat/your-module`;
3. Make some changes;
4. Test your changes;
5. Push your branch and open a Pull Request.


## License
[MIT](https://opensource.org/licenses/MIT)
