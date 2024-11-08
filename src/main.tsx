import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import store from "./app/store"
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Documentation from './views/Docs/Documentation.tsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "documentation",
//         element: <Documentation store={store} />
//       }
//     ]
//   }
// ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
