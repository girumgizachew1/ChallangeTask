import { lazy, Suspense } from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
// Lazy load the Splitter component
const Splitter = lazy(() => import('./components/Splitter'));

function App() {
  return (
    <div>
            {/* Use Helmet component to add meta data */}
       <Helmet>
        <title>Bill Splitter App</title>
        <meta name="description" content="A bill splitter app that calculates the total tip and amount per person." />
        <meta name="keywords" content="bill splitter, tip calculator, split bill, calculate tip, group expenses" />
        <meta name="author" content="Your Name Here" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
      </Helmet>
      {/* Use Suspense component with fallback to display a loading indicator */}
      <Suspense fallback={<Loading/>}>
        {/* Render the Splitter component */}
        <Splitter />
      </Suspense>
    </div>
  );
}

// Define the Loading component as a fallback to display a loading indicator
function Loading(){
  return(
    <div>
      {/* Display a spinning circle and "Loading..." text */}
      <div className="flex items-center justify-center h-screen">
        <svg
          className="animate-spin -ml-1 mr-3 h-10 w-10 text-teal-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm12-5.291a7.962 7.962 0 01-2 5.291l3 2.647A8.01 8.01 0 0024 12h-4zm-2-5.291V4.062A7.962 7.962 0 0116 12h4c0-3.042-1.135-5.824-3-7.938z"
          ></path>
        </svg>
        <span className="text-teal-500 text-xl font-semibold">
          Loading...
        </span>
      </div>
    </div>
  )
}

export default App;
