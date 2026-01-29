# website-mới

This project was generated using the Theme Editor.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, configure your environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` and set:
- `NEXT_PUBLIC_API_URL` - Your central Theme Editor server URL (e.g., https://geekgolfers.com)

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Lead Submission

This site includes a lead capture form. All submissions are sent to your central Theme Editor server at:

```
[NEXT_PUBLIC_API_URL]/api/leads
```

Make sure to configure `NEXT_PUBLIC_API_URL` in your deployment environment variables.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push your code to GitHub
2. Import to Vercel
3. **Important**: Set environment variable `NEXT_PUBLIC_API_URL=https://geekgolfers.com`
4. Deploy

## Customize

Edit `src/data/theme-data.json` to customize the theme colors, content, and layout.
