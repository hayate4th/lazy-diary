import React from "react";

import AppHeader from "./components/AppHeader";
import TemplateWriter from "./containers/TemplateWriter";

const App: React.FC = () => {
  return (
    <>
      <AppHeader />
      <TemplateWriter />
    </>
  );
};

export default App;
