
# Asteroid Mining Simulation Project README

  

## Introduction

This project is an H5 webpage implemented using Tara and React frameworks. The source code is under src/, and here is my file structure:

  

## Directory Structure

```

src/

├── components/ # Component files, including both common and business components

├── pages/ # Project pages

├── services/ # API call files

├── static/ # Static resource files, containing stylesheets (CSS) and images

├── types/ # Variable type definitions used in the project

├── utils/ # Contains utility files:

│ ├── http.ts # Used for REST API calls

│ └── socket.ts # Used for establishing WebSocket connections

├── app.config.ts # Mainly used for defining page paths

├── app.scss # Global stylesheet file

└── constants.ts # Definition of constants

```

  

## Usage

1.  **Components**: This directory holds both common and business-specific components. Reusable components are stored in the `common` subdirectory, while components specific to this project are placed directly in the `components` directory.

  

2.  **Pages**: Project pages are located here. Each page typically corresponds to a specific route or view within the application.

  

3.  **Services**: API call files reside here. These files facilitate communication with external APIs and handle data retrieval and manipulation.

  

4.  **Static**: Static resources such as stylesheets and images are stored in this directory. CSS files are placed under the `css` subdirectory, while images are stored in the `images` subdirectory.

  

5.  **Types**: This directory contains TypeScript type definitions used throughout the project.

  

6.  **Utils**: Utility files are stored here, including `http.ts`, which facilitates REST API calls, and `socket.ts`, which is responsible for establishing WebSocket connections.

  

7.  **app.config.ts**: This file is primarily used for defining page paths or routes within the application.

  

8.  **app.scss**: Global styles for the project are defined in this file. These styles apply to all components and pages.

  

9.  **constants.ts**: This file contains definitions for project-specific constants used across the application.

  

## Branches Introduction

  

### main Branch:

- Branch Description: HTML5 page-specific branch, primarily implementing the Miners and Live Map pages.

- Start Command (Emphasized as Important): `npm run dev:h5`. Please open the website and inspect it (or use the F12 shortcut), then click "Toggle device tool" to switch to mobile mode.

<img  width="1440"  alt="Screen Shot 2024-03-14 at 8 00 28 PM"  src="https://github.com/christine0000/asteroid-mining-simulation/assets/56946626/06d2afe3-6873-422b-98d9-4939d624e9a6">

  ## Available Scripts

  

In the project directory, you can run:

### `npm install`

Install all project dependencies.

  

### `npm run dev:h5`

  
Start the project.
And the page will automatically be opened. Please be sure to watch the page in mobile mode as the image showed above.
  

### `npm run build:h5`

  
Build the application.
The application will be built for production under `dist` folder.
  

## Usage Instructions
1. Please use Node 18 or above.

2. Install dependencies using `npm install`.

  

## Additional Notes

- wechatVersion Branch is WeChat mini-program specific branch, mainly implementing Step 1 of Miners get data by Restful API, you can start it by `npm run dev:weapp`.

-  Important Note for wechatVersion Branch: Make sure to add the following Domain name in your APPID settings: https://asteroids.dev.mediasia.cn, with configuration URL: https://mp.weixin.qq.com/.

- Feel free to reach out to project maintainers for any questions or assistance.
