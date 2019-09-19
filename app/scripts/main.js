/* eslint-disable no-new */
import './polyfills';

// NHS.UK frontend
import nhsuk_skipLink from '../../node_modules/nhsuk-frontend/packages/components/skip-link/skip-link'; /* eslint-disable-line camelcase */
// import './search';
import DesignExample from './design-example';

// Initialise components
nhsuk_skipLink();

document.querySelectorAll(DesignExample.selector()).forEach((el) => {
  new DesignExample(el);
});
