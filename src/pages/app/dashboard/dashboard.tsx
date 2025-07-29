import { DayOrdersAmountCard } from "./day-orders-amount-card";
import { MonthCanceledOrderCard } from "./month-canceled-orders-amount-card";
import { MonthOrdersAmountCard } from "./month-orders-amount";
import { MonthRevenueCard } from "./month-revenue-card";
import { PopularProductsChart } from "./popular-product-chart";
import { RevenueChart } from "./revenue-chart";

export function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <MonthRevenueCard />
        <MonthOrdersAmountCard />
        <DayOrdersAmountCard />
        <MonthCanceledOrderCard />
      </div>

      <div className="grid grid-cols-9 gap-4">
        <RevenueChart />
        <PopularProductsChart />
      </div>
    </div>
  );
}
