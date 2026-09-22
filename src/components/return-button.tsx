import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

type ReturnButtonProps = {
  fallbackHref: string;
};

export function ReturnButton({ fallbackHref }: ReturnButtonProps) {
  return (
    <Link className="return-button" href={fallbackHref}>
      <span>返回首页</span>
      <i aria-hidden="true">
        <ArrowLeft size={16} weight="bold" />
      </i>
    </Link>
  );
}
