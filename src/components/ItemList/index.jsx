import "./styles.css";

const ItemList = ({ title, description }) => {
  return (
    <div className="item-list">
      <strong>{title}</strong>
      <span>{description}</span>
      <hr />
    </div>
  );
};

export default ItemList;
