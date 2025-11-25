export interface iCardInfoProps<T> {
  data: T;
  renderCardInfo: (data: T) => React.ReactNode;
}
