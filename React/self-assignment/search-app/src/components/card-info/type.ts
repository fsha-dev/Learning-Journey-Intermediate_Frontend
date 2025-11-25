export interface iCardInfoProps<T>
  extends React.HTMLAttributes<HTMLDivElement> {
  data: T;
  renderCardInfo: (data: T) => React.ReactNode;
}
