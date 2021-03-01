import React from "react";
import { useEffect } from "react";

function CookiePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <script
      id="CookieDeclaration"
      src="https://consent.cookiebot.com/13374a5a-f8ff-4ec7-90c7-9b849796daf7/cd.js"
      type="text/javascript"
      async
    ></script>
  );
}

export default CookiePage;
