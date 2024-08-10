import clsx from "clsx";
import css from "./TransactionsHead.module.css";

export default function TransactionsHead() {
  return (
    <>
      <th className={clsx(css.tableHead)}>Type</th>
      <th className={clsx(css.tableHead)}>Amount</th>
      <th className={clsx(css.tableHead)}>Currency</th>
    </>
  );
}
