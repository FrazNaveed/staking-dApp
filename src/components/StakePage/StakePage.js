import { useState } from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";

import "./style.css";
const StakePage = () => {
  const [amount, setAmount] = useState(0);
  const [tooltip, showTooltip] = useState(true);

  return (
    <div className="main">
      <p style={{ color: "white" }}>
        You can have test tokens for staking from <a href="#">here</a>
      </p>
      <div className="main--info">
        <div>
          <span
            onMouseEnter={() => showTooltip(true)}
            onMouseLeave={() => {
              showTooltip(false);
              setTimeout(() => showTooltip(true), 50);
            }}
          >
            <FontAwesomeIcon
              className="stakepage--tooltip"
              data-tip
              data-for="global"
              icon={faInfoCircle}
            />
          </span>
          {tooltip && (
            <>
              {" "}
              <ReactTooltip
                place="right"
                type="info"
                id="global"
                aria-haspopup="true"
                effect="solid"
              >
                <ol>
                  <li>This is test dApp for staking demo.</li>
                  <li>
                    This is Flexible Staking. You can stake & unstake your
                    tokens any time.
                  </li>
                  <li>Rewards are distributed after 7 days.</li>
                  <li>
                    Rewards are based upon the user's amount of stake & the time
                    at which they are staking.
                  </li>
                </ol>
              </ReactTooltip>
            </>
          )}

          <label>
            Treasury Balance: <span className="metrics">5,453,345,345</span>
          </label>
        </div>
        <div>
          {" "}
          <label>
            {" "}
            Next Reward in: <span className="metrics">09:89:76</span>
          </label>
        </div>
      </div>

      <div className="stakepage--main">
        <div className="stakepage--buttons">
          <label>Stake</label>
          <label>Unstake</label>
        </div>
        <div className="stakepage--inputs">
          <div className="stakepage--balances">
            <label>Amount</label>
            <label>
              Balance: <span>0.00</span>
            </label>
          </div>

          <div className="stakepage--amount">
            <input
              type="number"
              placeholder="0"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>
          <center>
            <div className="stakepage--percentages">
              <button>25%</button>
              <button>50%</button>
              <button>75%</button>
              <button>100%</button>
            </div>
          </center>
        </div>

        <div className="stakepage--stake_button">
          <center>
            <button>Stake Tokens 💰</button>
          </center>
        </div>
        <div className="stakepage--rewards">
          <label>
            Staked: <span>0.00</span>
          </label>
          <label>
            Rewards: <span>0.00</span>
          </label>
        </div>
        <div className="stakepage--reward_buttons">
          <button>Compound</button>
          <button>Harvest</button>
        </div>
      </div>
    </div>
  );
};

export default StakePage;
