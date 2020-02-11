import React from 'react';
import { render } from 'react-dom';
import { App } from 'base-app/components/app';

import 'ui-components/styles.less';
import 'base-app/components/app.less';

render(<App startAmount={10} />, document.getElementById('root'));
