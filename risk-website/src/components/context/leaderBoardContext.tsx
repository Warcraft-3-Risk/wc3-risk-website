import React, { createContext, useContext, useState, ReactNode } from "react";

interface LeaderBoardContextProps {
  leaderBoard: Array<{ name: string; score: number }>;
  updateLeaderBoard: (newEntry: { name: string; score: number }) => void;
}

const LeaderBoardContext = createContext<LeaderBoardContextProps | undefined>(
  undefined
);

export const LeaderBoardProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [leaderBoard, setLeaderBoard] = useState<
    Array<{ name: string; score: number }>
  >([]);

  const updateLeaderBoard = (newEntry: { name: string; score: number }) => {
    setLeaderBoard((prev) =>
      [...prev, newEntry].sort((a, b) => b.score - a.score)
    );
  };

  return (
    <LeaderBoardContext.Provider value={{ leaderBoard, updateLeaderBoard }}>
      {children}
    </LeaderBoardContext.Provider>
  );
};

export const useLeaderBoard = (): LeaderBoardContextProps => {
  const context = useContext(LeaderBoardContext);
  if (!context) {
    throw new Error("useLeaderBoard must be used within a LeaderBoardProvider");
  }
  return context;
};
