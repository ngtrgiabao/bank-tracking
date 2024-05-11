import React from "react";
import isEqual from "react-fast-compare";

import HeaderBox from "@/components/ui/header-box";
import TotalBalanceBox from "@/components/ui/total-balance-box";
import { cn } from "@/lib/utils";
import RightSidebar from "@/components/ui/right-sidebar";
import { getLoggedInUser } from "@/lib/actions/user";

interface Props {
  className?: string;
}

const guest = {
  firstName: "Guest",
  lastName: ""
}

async function Home(props: Props) {
  const { className } = props;

  const loggedIn = await getLoggedInUser();

  return (
    <section className={cn("flex w-full flex-col md:flex-row", className)}>
      <div className="py-5 flex-1 container">
        <header>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.30}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn ?? guest}
        banks={[{
          currentBalance: 123.50
        }, {
          currentBalance: 599.50
        }]}
        transactions={[]}
      />
    </section>
  )
}

export default React.memo(Home, isEqual);
