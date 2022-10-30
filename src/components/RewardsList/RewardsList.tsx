import React, { memo } from "react";

import { getRewards } from "helpers";

import Reward from "components/Reward";

import "./index.scss";

const RewardsList: React.FC = memo(() => (
  <section className="rewards__list">
    {getRewards().map((reward) => (
      <Reward key={reward} reward={reward} />
    ))}
  </section>
));

export default RewardsList;
