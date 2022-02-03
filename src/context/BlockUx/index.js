import BlockUi from "react-block-ui";
import React from "react";
import "react-block-ui/style.css";

export const BlockUxContext = React.createContext(false);

export default function BlockUx(props) {
  const { children } = props;
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <BlockUxContext.Provider value={{ setIsLoading }}>
      <BlockUi tag="div" blocking={isLoading}>
        {children}
      </BlockUi>
    </BlockUxContext.Provider>
  );
}
