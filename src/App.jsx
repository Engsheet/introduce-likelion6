import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <>
      <HelmetProvider>
        <div className="max-w-[1024px] h-fit translate-x-1/2 -translate-y-1/2 absolute top-1/2 right-1/2">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </>
  );
}

export default App;
