import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import 'bulma/css/bulma.min.css';

import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: 'GTM-WCGQ7Z2'
}
TagManager.initialize(tagManagerArgs)

const App = () => 
window.dataLayer.push({
    event: 'pageview'
  });
  <PortfolioContainer />;

export default App;
