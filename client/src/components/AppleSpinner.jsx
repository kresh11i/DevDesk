import { IosSpinner } from "ios-spinner";
import React from "react";

export const AppleSpinner = () => {
  return <div>
    <IosSpinner className="w-15 h-15"></IosSpinner>
    <p className="font-bold">Loading...</p>
  </div>;
};
