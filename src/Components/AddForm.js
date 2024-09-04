import { useState } from "react";

export default function AddForm({ toggle, setFriends }) {
    const [friendName, setFriendName] = useState("");
    const [randomNum, setRandomNum] = useState(499423)

 

  function handleAddFriend(e) {
    e.preventDefault();
    const newFriend = {
      id: Date.now(),
      name: friendName,

      image: `https://i.pravatar.cc/48?u=${randomNum}`,
      balance: 0,
    };
    setFriendName("");
    setFriends((oldState) => [...oldState, newFriend]);
    setRandomNum(oldState => oldState + 1)
  }

  return (
    !toggle && (
      <>
        <form className="form-add-friend">
          <label>🧑‍🤝‍🧑Friend name</label>
          <input
            type="text"
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
          ></input>
          <label>🌄Image URL</label>
          <input type="text"></input>
          <button className="button" onClick={(e) => handleAddFriend(e)}>
            Add
          </button>
        </form>
      </>
    )
  );
}
