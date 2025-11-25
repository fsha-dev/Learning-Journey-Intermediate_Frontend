import type { iCardInfoProps } from "./type";
import style from "./cardInfo.module.css";
export default function CardInfo<T>({
  data,
  renderCardInfo,
  className,
  ...rest
}: iCardInfoProps<T>) {
  return (
    <>
      <div className={`${style.container} || ${className || ""}`} {...rest}>
        {renderCardInfo(data)}
      </div>
    </>
  );
}
