import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { textIcon } from './icon/uji';

const App = () => {
  return (
    <div>
      {JSON.stringify(textIcon)}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
