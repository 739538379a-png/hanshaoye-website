"use client";

import { ArrowLeft } from "@phosphor-icons/react";

type ReturnButtonProps = {
  fallbackHref: string;
};

export function ReturnButton({ fallbackHref }: ReturnButtonProps) {
  const returnToPreviousPage = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.assign(fallbackHref);
  };

  return (
    <button className="return-button" type="button" onClick={returnToPreviousPage}>
      <span>返回上一页</span>
      <i aria-hidden="true">
        <ArrowLeft size={16} weight="bold" />
      </i>
    </button>
  );
}
