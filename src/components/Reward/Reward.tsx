import React, { memo } from "react";
import { useSelector } from "react-redux";

import { getStyleByReward } from "helpers";
import { selectQuestion } from "store/game/gameSlice";

import AnswerButtonSVG from "components/SVG/RewardBorderSVG";

import "./index.scss";

interface RewardProps {
  reward: number;
}

const Reward: React.FC<RewardProps> = memo(({ reward }) => {
  const { activeReward } = useSelector(selectQuestion);

  return (
    <div
      className={`reward reward--${getStyleByReward(+activeReward, reward)}`}
    >
      <AnswerButtonSVG />

      <span className="reward__text">$ {reward.toLocaleString("EN")}</span>
    </div>
  );
});

export default Reward;
