import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import Error401 from './Pages/Error Page/401';
import Error403 from './Pages/Error Page/403';
import Error404 from './Pages/Error Page/404';
import Error500 from './Pages/Error Page/500';
import Error503 from './Pages/Error Page/503';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, statusCode: null };
  }

  static getDerivedStateFromError(error) {
    if (error.statusCode) {
      // If the error has a status code, set it in state
      return { hasError: true, statusCode: error.statusCode };
    }
    // Otherwise, set the state to indicate a generic error
    return { hasError: true, statusCode: 500 };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    const { hasError, statusCode } = this.state;
    if (hasError) {
      switch (statusCode) {
        case 401:
          return <Error401 />;
        case 403:
          return <Error403 />;
        case 404:
          return <Error404 />;
        case 500:
          return <Error500 />;
        case 503:
          return <Error503 />;
        default:
          return <Error500 />;
      }
    }

    return this.props.children;
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
      <ErrorBoundary>
        <App/>
      </ErrorBoundary>
    </Router>
  </React.StrictMode>
);
