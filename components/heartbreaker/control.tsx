import Image from "next/image";
import DeadButton from "../../assets/dead-game-button.png";
import StopButton from "../../assets/stop-button.png";
import ActiveButton from "../../assets/active-game-button.png";
import { useContext, useEffect, useMemo, useState } from "react";
import { ConnectHeartBreak } from "./connect";
import {
  HeartBreakerContext,
  IHeartBreaker,
} from "../../system/context/HeartbreakerContext";
import { useAccount, useSignMessage } from "wagmi";

const Control = () => {
  const { address } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const points = [10, 20, 30, 40];
  const [selectedPoint, setSelectedPoint] = useState(10);
  const [active, setActive] = useState(true);
  const [customAmount, setCustomAmount] = useState(0);
  const [userInPlay, setUserInPlay] = useState(false);
  const [invalidBetAmount, setInvalidBetAmount] = useState(false);
  const [balanceUpdateAmount, setBalanceUpdateAmount] = useState(0);

  const {
    balance,
    mult,
    gameIsLive,
    multiplierToStopAt,
    gameResults,
    amountToPlay,
    onBet,
    onStop,
    onDeposit,
    onGetBalance,
    onSocketInit,
    onSetMultiplierToStopAt,
    onWithdraw,
  } = useContext(HeartBreakerContext);

  const userGameResult = useMemo(() => {
    if (gameResults.length === 0) return {} as IHeartBreaker["gameResults"][0];
    return gameResults.find((game) => game.userAddress === address);
  }, [gameResults]);

  const handleSetPlay = () => {
    if (invalidBetAmount) return;

    if (gameIsLive && userInPlay) {
      onStop(customAmount);
      setUserInPlay(false);
    }
    if (gameIsLive && !userInPlay) {
      return;
    }
    if (!gameIsLive) {
      const amount = (selectedPoint / 100) * balance;
      onBet(multiplierToStopAt, customAmount || amount);
    }
    return;
  };

  const handleButtonType = (
    active: boolean,
    userInPlay: boolean,
    gameIsLive: boolean,
    invalidBetAmount: boolean
  ) => {
    if (gameIsLive && userInPlay) {
      return StopButton;
    }
    if ((gameIsLive && !userInPlay) || invalidBetAmount) {
      return DeadButton;
    }
    if (!gameIsLive) {
      return ActiveButton;
    }
    return ActiveButton;
  };

  const handleWithdraw = async (address: string, withdrawAmount: number) => {
    const sig = await signMessageAsync({
      message: `Withdraw ${withdrawAmount} from Heartbreaker`,
    });
    onWithdraw(address, withdrawAmount, sig);
  };

  const handleDeposit = (address: string, amount: number) => {
    onDeposit(address, amount);
  };

  useEffect(() => {
    const amount = (selectedPoint / 100) * balance;
    setCustomAmount(parseFloat(amount.toFixed(2)));
  }, [selectedPoint]);

  useEffect(() => {
    if (gameIsLive && amountToPlay > 0) {
      setUserInPlay(true);
    }
  }, [gameIsLive, customAmount]);

  useEffect(() => {
    if (customAmount > balance || multiplierToStopAt < 1.01) {
      setInvalidBetAmount(true);
    } else {
      setInvalidBetAmount(false);
    }
  }, [customAmount, multiplierToStopAt]);

  return (
    <div className="px-[5px]">
      <div className="flex flex-row justify-end space-x-1 mb-1">
        <ConnectHeartBreak />
      </div>
      <div className="border border-gray-500">
        <div className="flex flex-row space-x-2 border px-[4px] py-[5px]">
          <div className="mt-2">
            <div className="text-[9px]">$LOVE AVAILABLE</div>
            <div className="text-[28px]">{balance}</div>
          </div>
          <div>
            <input
              type="text"
              className="text-[#0A0080] px-[3px] text-[10px] border-l-gray-600 border-t-gray-600 border-r-gray-200 border-b-gray-200 border-2"
              onChange={(e) => setBalanceUpdateAmount(Number(e.target.value))}
            />
            <div>
              <button
                className="w-1/2 bg-[#C1C1C1]  border-[#ededed] border-r-[#444444] border border-b-[#444444] px-[3px] text-center text-[6px] py-[2px]"
                onClick={() => handleDeposit(address!, balanceUpdateAmount)}
              >
                Deposit
              </button>
              <button
                className="w-1/2 bg-[#C1C1C1]  border-[#ededed] border-r-[#444444] border border-b-[#444444] px-[3px] text-center text-[6px] py-[2px]"
                onClick={() => handleWithdraw(address!, balanceUpdateAmount)}
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between h-[20px] px-[10px] cursor-pointer mt-[5px]">
        {points.map((val, index) => {
          return (
            <div
              onClick={() => setSelectedPoint(val)}
              key={index}
              className={`${
                selectedPoint == val ? "bg-[#0A0080] text-white" : ""
              } border-2 border-[#0A0080] text-[12px] text-[#0A0080] px-[6px] rounded-sm font-bold text-center flex flex-row items-center`}
            >
              {val} {"%"}
            </div>
          );
        })}
      </div>
      <div className="px-[10px]">
        <div className="flex  mt-[10px]">
          <p className="mr-[5px] w-[5rem]">Amount: </p>
          <input
            placeholder="Custom Amount"
            type="text"
            value={customAmount}
            readOnly={gameIsLive}
            onChange={(e) => setCustomAmount(Number(e.currentTarget.value))}
            className="text-[#0A0080] px-[3px] text-[10px] border-l-gray-600 border-t-gray-600 border-r-gray-200 border-b-gray-200 border-2 w-full"
          />
        </div>
        <div className="flex  mt-[10px]">
          <p className="mr-[5px] w-[5rem]">Target: </p>
          <input
            type="number"
            step="0.01"
            value={multiplierToStopAt}
            placeholder="1.01"
            readOnly={gameIsLive}
            min="1.01"
            onChange={(e) => {
              onSetMultiplierToStopAt(Number(e.target.value));
            }}
            className="text-[#0A0080] px-[3px] text-[10px] border-l-gray-600 border-t-gray-600 border-r-gray-200 border-b-gray-200 border-2 w-full"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between mt-[4px] px-[10px]">
        <div className="border border-gray-600  px-[7px] py-[4px] w-[69px]">
          <div style={{ color: gameIsLive ? "#808080" : "black" }}>PLAY</div>
          <div style={{ color: gameIsLive ? "#808080" : "black" }}>
            {amountToPlay}
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              handleSetPlay();
            }}
            className="cursor-pointer transform active:scale-90 transition duration-150 ease-in-out"
          >
            <Image
              src={
                invalidBetAmount
                  ? DeadButton
                  : handleButtonType(
                      active,
                      userInPlay,
                      gameIsLive,
                      invalidBetAmount
                    )
              }
              width={67}
              height={54}
              alt="dead-button"
            />
          </button>
        </div>
      </div>
      <div className="px-[10px]">
        <div className="bg-black h-[22px] mt-[12px] ">
          {!!userGameResult?.profit && userGameResult?.profit > 0 && (
            <p
              style={{
                backgroundColor: "blue",
                color: "white",
                textAlign: "center",
              }}
            >
              YOU WON {userGameResult?.profit.toFixed(2)}
            </p>
          )}
          {!!userGameResult?.profit && userGameResult?.profit < 0 && (
            <p
              style={{
                backgroundColor: "red",
                color: "white",
                textAlign: "center",
              }}
            >
              HEARTBREAK BABY!!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Control;