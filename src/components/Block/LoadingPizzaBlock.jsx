import React from 'react'
import ContentLoader from "react-content-loader"
function LoadingPizzaBlock() {
    return(
        <ContentLoader 
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="140" cy="140" r="140" /> 
        <rect x="0" y="300" rx="6" ry="6" width="280" height="26" /> 
        <rect x="0" y="339" rx="6" ry="6" width="280" height="84" /> 
        <rect x="0" y="427" rx="6" ry="6" width="63" height="31" /> 
        <rect x="157" y="427" rx="24" ry="24" width="120" height="31" />
      </ContentLoader>
    )
}

export default LoadingPizzaBlock
