export default function Friend({
  friend,
  setSelectedFriend,
  selectedFriend,
  myExpense,
  payBill,
}) {
  return (
    <li>
      <h3>{friend.name}</h3>
      <img src={friend.image} alt={friend.name}></img>

      {friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you {friend.balance}$
        </p>
      ) : friend.balance === 0 ? (
        <p>You and {friend.name} are even</p>
      ) : (
        <p className="red">
          You owe {friend.name} {-friend.balance}$
        </p>
      )}

      {selectedFriend === friend.name ? (
        <button className="button" onClick={() => setSelectedFriend("")}>
          close
        </button>
      ) : (
        <button
          className="button"
          onClick={() => setSelectedFriend(friend.name)}
        >
          Select
        </button>
      )}
    </li>
  );
}
