import React from "react";
import isEqual from "react-fast-compare";

import HeaderBox from "@/components/ui/header-box";
import TotalBalanceBox from "@/components/ui/total-balance-box";
import { cn } from "@/libs/utils";

interface Props {
  className?: string;
}

function Home(props: Props) {
  const { className } = props;

  const loggedIn = {
    firstName: "Yanji"
  }

  return (
    <div className={cn("py-5", className)}>
      <header>
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account and transactions efficiently."
        />
      </header>

      <TotalBalanceBox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.30}
      />
    </div>
  )
}

export default React.memo(Home, isEqual);
