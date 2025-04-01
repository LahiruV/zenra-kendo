import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MainBaseLayout, RegLogLayout } from '@zenra/layouts';
import { Home } from '@zenra/pages';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@progress/kendo-theme-default/dist/all.css';
// import './css/kendo-theme.css';
import './css/main.css';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const renderMainBaseLayout = (showSidebar: boolean, Component: React.FC) => (
    <MainBaseLayout showSidebar={showSidebar}>
      <Component />
    </MainBaseLayout>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* <Route
            path="/"
            element={
              <RegLogLayout>
                <Login />
              </RegLogLayout>
            }
          />
          <Route
            path="/register"
            element={
              <RegLogLayout>
                <Register />
              </RegLogLayout>
            }
          /> */}
          <Route path="/" element={renderMainBaseLayout(true, Home)} />
          {/* <Route path="/new-home" element={renderMainBaseLayout(true, Home)} />
          <Route path="/homes" element={renderMainBaseLayout(false, Home)} /> */}
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;