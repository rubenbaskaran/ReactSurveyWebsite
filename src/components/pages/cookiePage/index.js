import React from "react";
import { useEffect } from "react";
import { Button } from "@material-ui/core";

function CookiePage(props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "CookieDeclaration";
    script.src =
      "https://consent.cookiebot.com/13374a5a-f8ff-4ec7-90c7-9b849796daf7/cd.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        props.setCurrentPage(0);
      }}
    >
      Til forsiden
    </Button>
  );
}

export default CookiePage;
