import PropTypes from "prop-types";
import clsx from "clsx";
import TransactionItem from "../TransactionItem/TransactionItem";
import TransactionsHead from "../TransactionsHead/TransactionsHead";
import css from "./TransactionHistory.module.css";

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function TransactionHistory({ items }) {
  return (
    <table className={clsx(css.transactionsTable)}>
      <thead className={clsx(css.tableHead)}>
        <tr>
          <TransactionsHead />
        </tr>
      </thead>

      <tbody className={clsx(css.tableBody)}>
        {items.map((item) => {
          return (
            <tr key={item.id} className={clsx(css.tableBodyRow)}>
              <TransactionItem
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
