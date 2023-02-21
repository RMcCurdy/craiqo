import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { PageRoutes } from './routes/PageRoutes'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>yo</div>}>
      <PageRoutes />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
