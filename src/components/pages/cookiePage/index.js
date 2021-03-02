import React from "react";
import { useEffect } from "react";
import { Button } from "@material-ui/core";

function CookiePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "CookieDeclaration";
    script.src =
      "https://consent.cookiebot.com/13374a5a-f8ff-4ec7-90c7-9b849796daf7/cd.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    document.body.style =
      "background: #F6F9FB; margin: 100px; border: solid black; border-width: 3px; border-radius: 20px; padding: 20px";
  }, []);

  function ReloadPage() {
    window.location.reload();
  }

  return (
    <Button
      variant="contained"
      color="primary"
      style={{ marginBottom: "10px" }}
      onClick={ReloadPage}
    >
      Gå tilbage til forsiden
    </Button>
  );
}

export default CookiePage;
