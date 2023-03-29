import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import 'bulma/css/bulma.min.css';

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: ''
  // put the gtm id
}
TagManager.initialize(tagManagerArgs)

function App () { 
    
        window.dataLayer.push({
          event: 'pageview'
        });
        // window.dataLayer.push({
        //     event: 'event',
        //     eventProps: {
        //         category: "categoryTest",
        //         action: "actionTest",
        //         label: "sport"
            
        //     }
        //   });

    return (
  <PortfolioContainer />
    )
}
export default App;
