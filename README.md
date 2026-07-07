# lingua-class

A modern language learning application built with Next.js, featuring interactive lessons, flashcards, and speech recognition.

## Features

- 📚 **Lesson Library** — browse and access structured curriculum content
- 🎯 **Flashcards** — spaced-repetition vocabulary practice
- 🗣️ **Speaking** — speech recognition & synthesis for pronunciation practice
- 👂 **Listening** — audio-based comprehension exercises
- 📖 **Reading** — reading passages with comprehension questions
- ✍️ **Writing** — writing practice with feedback
- 📊 **Progress Tracking** — monitor your learning journey
- 👨‍🏫 **Classroom** — student & teacher roles
- ⚙️ **Settings** — customize your learning experience

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State**: Zustand
- **Speech**: Web Speech API (recognition & synthesis)

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

```
lingua-class/
├── app/                  # Next.js App Router pages
│   ├── classroom/        # Classroom feature
│   ├── flashcards/       # Flashcards feature
│   ├── lesson-library/   # Lesson library
│   ├── listening/        # Listening practice
│   ├── reading/          # Reading practice
│   ├── speaking/         # Speaking practice
│   ├── vocabulary/       # Vocabulary practice
│   ├── writing/          # Writing practice
│   ├── progress/         # Progress tracking
│   ├── student/          # Student role
│   ├── teacher/          # Teacher role
│   └── settings/         # User settings
├── components/           # Reusable React components
│   ├── ui/               # shadcn/ui primitives
│   ├── landing/          # Landing page components
│   ├── layout/           # Layout components
│   ├── providers/        # Context providers
│   ├── shared/           # Shared components
│   └── vocabulary/       # Vocabulary components
├── data/                 # Curriculum & dialogue data
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
├── stores/               # Zustand state stores
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.