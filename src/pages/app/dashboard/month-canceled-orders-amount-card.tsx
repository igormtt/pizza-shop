import { getMonthCanceledOrdersAmount } from "@/api/get-month-canceled-orders-amount";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";
import { MetricCardSkeleton } from "./metric-card-skeleton";

export function MonthCanceledOrderCard() {
  const { data: canceledOrdersAmount } = useQuery({
    queryFn: getMonthCanceledOrdersAmount,
    queryKey: ["metrics", "month-canceled-amount"],
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="2-4 text-muted-foreground h-4" />
      </CardHeader>

      <CardContent className="space-y-1">
        {canceledOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {canceledOrdersAmount.amount.toLocaleString("pt-BR")}
            </span>

            <p className="text-muted-foreground text-xs">
              {canceledOrdersAmount.diffFromLastMonth < 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {canceledOrdersAmount.diffFromLastMonth}%
                  </span>
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    +{canceledOrdersAmount.diffFromLastMonth} %
                  </span>{" "}
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
}
