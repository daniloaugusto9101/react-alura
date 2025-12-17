# React + TypeScript + Vite

```
src/
├── app/
│   ├── App.tsx
│   ├── providers.tsx
│   └── index.tsx        # composição da app
│
├── routes/
│   ├── index.tsx        # RouterProvider / createBrowserRouter
│   ├── public.routes.tsx
│   ├── private.routes.tsx
│   ├── admin.routes.tsx (futuro)
│   └── types.ts
│
├── pages/
│   ├── Home/
│   │   ├── HomePage.tsx
│   │   └── index.ts
│   │
│   ├── Login/
│   │   ├── LoginPage.tsx
│   │   └── index.ts
│   │
│   ├── Dashboard/
│   │   ├── DashboardPage.tsx
│   │   ├── Dashboard.hooks.ts
│   │   ├── Dashboard.styles.ts
│   │   └── index.ts
│   │
│   ├── Users/
│   │   ├── UsersPage.tsx
│   │   ├── Users.filters.ts
│   │   ├── Users.hooks.ts
│   │   └── index.ts
│   │
│   └── NotFound/
│       ├── NotFoundPage.tsx
│       └── index.ts
│
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── store/
│   │   └── types.ts
│   │
│   ├── users/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types.ts
│   │
│   └── orders/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       └── types.ts
│
├── components/
│   ├── ui/
│   │   ├── CardLink/
│   │   │   ├── CardLink.tsx
│   │   │   ├── CardLink.types.ts
│   │   │   ├── CardLink.styles.ts
│   │   │   ├── CardLink.test.tsx
│   │   │   ├── CardLink.stories.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.types.ts
│   │   │   ├── Button.test.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── Input/
│   │       ├── Input.tsx
│   │       ├── Input.types.ts
│   │       ├── Input.test.tsx
│   │       └── index.ts
│   │
│   ├── layout/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── index.ts
│   │   └── Sidebar/
│   │       ├── Sidebar.tsx
│   │       └── index.ts
│   │
│   └── feedback/
│       ├── Modal/
│       │   ├── Modal.tsx
│       │   └── index.ts
│       └── Toast/
│           ├── Toast.tsx
│           └── index.ts
│
├── services/
│   ├── http/
│   │   └── axios.ts
│   ├── interceptors/
│   └── api.ts
│
├── store/
│   ├── index.ts
│   └── globalStore.ts
│
├── hooks/
│   ├── useDebounce.ts
│   └── useMediaQuery.ts
│
├── utils/
│   ├── formatDate.ts
│   └── validators.ts
│
├── styles/
│   └── globals.css
│
├── types/
│   └── global.d.ts
│
└── main.tsx

```
