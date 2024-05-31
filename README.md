## Getting Started

First, create a `.env.local` file in the root of your project and add the following variables:

AUTH_SECRET=<random base64 ключ>
NODE_ENV=development
USERLIST=[{"email":<Any email>,"password":<Any password>,"isAdmin":<Boolean>}]

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
