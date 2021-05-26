# DJ Events (Frontend)

> Next.js website for DJ Events. This site uses Strapi as a backend. The repo for that is below

This project is done for learning purpose from brad's course, check it out if you are interested [Next.js Udemy course](https://www.udemy.com/course/nextjs-dev-to-deployment)

![DJ Events](/public/images/sample/event1.jpg 'DJ Events')

# Usage

### Setup Backend

The Strapi backend can be found [here](https://github.com/bradtraversy/dj-events-backend)

Clone the repo above and run your backend

### Maps

Create a .env.local file and add your Mapbox and Google API keys

```
NEXT_PUBLIC_MAPBOX_API_TOKEN = "xxxxx"
NEXT_PUBLIC_GOOGLE_MAP_API_KEY = "xxxxx"
```

### Run the Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
