import Friend from "./Friend";

export default function SideBar({
  handleToggleAdd,
  toggle,
  friends,
  setSelectedFriend,
  selectedFriend,
  payBill,
  myExpense,
}) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            setSelectedFriend={setSelectedFriend}
            selectedFriend={selectedFriend}
            payBill={payBill}
            myExpense={myExpense}
          />
        ))}
      </ul>

      {!toggle && (
        <button className="button" onClick={handleToggleAdd}>
          Close
        </button>
      )}
      {toggle && (
        <button className="button" onClick={handleToggleAdd}>
          Add friend
        </button>
      )}
    </div>
  );
}
