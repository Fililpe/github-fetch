import "./styles.css";

const ItemList = ({ title, description }) => {
  return (
    <div className="item-list">
      <strong>{title}</strong>
      <span>{description}</span>
    </div>
  );
};

export default ItemList;
