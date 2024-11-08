import React, { useState } from 'react';
import { ethers } from 'ethers';

const PaymentPage = () => {
  const [select, setSelect] = useState(null);
  const [account, setAccount] = useState(null); // To store connected account
  const [amount, setAmount] = useState(''); // Amount to send
  const [receiverAddress, setReceiverAddress] = useState(''); // Receiver address

  // Connect to Metamask
  const connectToMetamask = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccount(accounts[0]); // Store the first account
      } catch (error) {
        console.error("Error connecting to Metamask:", error);
      }
    } else {
      alert('Please install Metamask!');
    }
  };

  // Send transaction
  const sendTransaction = async () => {
    if (!account || !receiverAddress || !amount) {
      alert('Please fill in all the fields!');
      return;
    }

    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();

        // Creating the transaction
        const tx = {
          to: receiverAddress,
          value: ethers.parseEther(amount), // Convert amount to ethers
        };

        const transactionResponse = await signer.sendTransaction(tx);
        console.log('Transaction sent:', transactionResponse);
        alert('Transaction successful!');
      } catch (error) {
        console.error("Error sending transaction:", error);
        alert('Transaction failed!');
      }
    } else {
      alert('Metamask is not installed!');
    }
  };

  return (
    <div>
      <div className="flex w-full pb-5 border-b mb-2">
        <div
          className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
          onClick={() => setSelect(4)} // For Pay through Metamask
        >
          {select === 4 ? (
            <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
          ) : null}
        </div>
        <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
          Pay through Metamask
        </h4>
      </div>

      {/* Pay through Metamask */}
      {select === 4 ? (
        <div className="w-full flex flex-col pb-3">
          <div className="w-full pb-3">
            <label className="block pb-2">Metamask Address</label>
            <input
              type="text"
              value={account || ''}
              disabled
              className={`${styles.input} !w-[100%] text-[#444]`}
            />
          </div>
          <div className="w-full pb-3">
            <label className="block pb-2">Receiver Address</label>
            <input
              type="text"
              value={receiverAddress}
              onChange={(e) => setReceiverAddress(e.target.value)}
              placeholder="Enter receiver address"
              className={`${styles.input} !w-[100%] text-[#444]`}
            />
          </div>
          <div className="w-full pb-3">
            <label className="block pb-2">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount in ETH"
              className={`${styles.input} !w-[100%] text-[#444]`}
            />
          </div>
          <div
            className={`${styles.button} !bg-[#f63b60] text-white h-[55px] rounded-[5px] cursor-pointer text-[18px] font-[600] w-full`}
            onClick={connectToMetamask}
          >
            Connect to Metamask
          </div>
          <div
            className={`${styles.button} !bg-[#f63b60] text-white h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600] w-full mt-3`}
            onClick={sendTransaction}
          >
            Send Transaction
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PaymentPage;
