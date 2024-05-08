<img src="./src/lib/images/goldie_logo_background.png" class="w-full"/>

# Project Goldie
A web application to tell you goldprices based on common items.

### Preview
<img src="./src/lib/images/goldie_preview.png" class="w-full"/>

## Description
A web application to tell you goldprices based on common items.
It collects gold prices from 'https://api.metals.dev/v1/latest' and shows the gold price with different common items.
This svelte web application has been done for a university project and is purely to show the learned knowledge in executed form.

### Requirements

#### Client-side state management using $state .
state has been used to update the gold items.

#### Dynamic page data using load and an external API.
load has been used various things. especially to communicate between the components and load the goldprices.

#### Give your site a good-looking design. Follow best practices regarding color schemes. Dark Mode is not required, but would be nice to have.
I challenged myself to use uncommen colors and still make it somewhat work. In real life environements you often can not choose the company color. Still trying to have correct contrast and be accesible with difficult colors was a challenge. Especially for the eye...

#### At least two pages with a link between (e.g. Landing Page and App, or List/Detail view).
Login -> Gold Dashboard -> GoldItem Detail View


#### Login with Username/Password.
Login is handled via cookies. There is also a logout and redirect. The redirect works pretty strange on svelte, sometimes it does redirect correctly after logout, sometimes you need to hit it twice...

#### Hosting on Vercel
It is hosted on Vercel. Getting Image imports to work on vercel was a challenge.


## Setup

### Step 1: Install Dependencies
```
npm i
```

### Step 2: Setup .env variables
```
GOLD_API_KEY="TVCED7BFAJ1RTPDGGCJH706DGGCJH"
REDIS_KEY='Aad5ACQgYWRkMzliN2UtZDg2MS00YmZhLWI2Y2EtZTk3MmNiNmU2M2U2NzE5ODVjNjk1NjEwNDIwMGIyMTQxMzUwMDY3OTY1MGM='
JWT_PRIVATE_KEY='jwt_private_key'
```

### Step 3: Start the application
```
npm run dev
```