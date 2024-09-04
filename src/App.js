import { useState } from "react";
import AddForm from "./Components/AddForm";
import BillForm from "./Components/BillForm";
import SideBar from "./Components/SideBar";

const initialFriends = [
  {
    id: 49976,
    name: "Youssef",
    image: "https://i.pravatar.cc/48?u=12200534",
    balance: -110,
  },
  
  {
    id: 118836,
    name: "layla",
    image: "https://i.pravatar.cc/48?u=1182526",
    balance: 7,
  },
  {
    id: 933372,
    name: "Mariam",
    image: "https://i.pravatar.cc/48?u=11825836",
    balance: 20,
  },
  {
    id: 499476,
    name: "Omar",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  }
];

export default function App() {
  const [toggle, setToggle] = useState(true);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState("");
  const [myExpense, setMyExpense] = useState('');
  const [payBill, setPayBill] = useState('');
  const [billValue, setBillValue] = useState(null);
  
  let friendExpense = billValue - myExpense;

  function handleToggleAdd() {
    setToggle((oldState) => !oldState);
  }

  function handleSetMyExpense(e) {
    setMyExpense(Number(e.target.value));
  }

  function handleSubmitSplit() {
 
    const updateFriend = friends.find(friend => friend.name === selectedFriend )
    if(selectedFriend === payBill){
  
      const newBalance = updateFriend.balance -=myExpense;
      setFriends((oldState) => oldState.map(friend => friend.name === selectedFriend ? {...friend,balance:newBalance }:friend))
    }
    else{
      const newBalance = updateFriend.balance +=(billValue - myExpense);
      setFriends((oldState) => oldState.map(friend => friend.name === selectedFriend ? {...friend,balance:newBalance }:friend))

    }
  }

  function handleSetBillValue(e){
    setBillValue(Number(e.target.value))
  }


  return (
    <div className="app">
      <SideBar
        handleToggleAdd={handleToggleAdd}
        toggle={toggle}
        friends={friends}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
      />

      <BillForm
        selectedFriend={selectedFriend}
        payBill={payBill}
        handleSetMyExpense={handleSetMyExpense}
        myExpense={myExpense}
        setPayBill={setPayBill}
        handleSubmitSplit={handleSubmitSplit}
        handleSetBillValue={handleSetBillValue}
        friendExpense={friendExpense}
      />

      <AddForm
        toggle={toggle}
        setFriends={setFriends}
        myExpense={myExpense}
        setMyExpense={setMyExpense}
        setPayBill={setPayBill}
      />
    </div>
  );
}
