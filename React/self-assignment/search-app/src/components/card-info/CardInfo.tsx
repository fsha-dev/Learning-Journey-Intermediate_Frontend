import type { iCardInfoProps } from "./type";
export default function CardInfo<T>({
  data,
  renderCardInfo,
}: iCardInfoProps<T>) {
  return (
    <>
      <div>{renderCardInfo(data)}</div>
    </>
  );
}
