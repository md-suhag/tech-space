import React from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export function PriceRangeSlider({
  query,
  onChange,
  className,
  min = 0,
  max = 50000,
  step = 1000,
}) {
  return (
    <div className={cn("flex flex-col gap-2 w-full max-w-md", className)}>
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>৳ {query.minPrice}</span>
        <span>৳ {query.maxPrice}</span>
      </div>
      <Slider
        value={[query.minPrice, query.maxPrice]}
        min={min}
        max={max}
        step={step}
        onValueChange={onChange}
      />
    </div>
  );
}
