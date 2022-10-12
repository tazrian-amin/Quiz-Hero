import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import TopicDetails from './components/TopicDetails/TopicDetails';
import Statistics from './components/Statistics/Statistics';
import NotFound from './components/NotFound/NotFound';
import { loadQuiz } from './utilities/utilities';
import Blog from './components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: loadQuiz,
          element: <div>
            <Home></Home>
            <Topics></Topics>
          </div>
        },
        {
          path: '/home',
          loader: loadQuiz,
          element: <div>
            <Home></Home>
            <Topics></Topics>
          </div>
        },
        {
          path: '/topics',
          loader: loadQuiz,
          element: <Topics></Topics>
        },
        {
          path: '/topics/:topicId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <TopicDetails></TopicDetails>
        },
        {
          path: '/statistics',
          loader: loadQuiz,
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ],
    },
    { path: '*', element: <NotFound></NotFound> },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
