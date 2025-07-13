import React from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export function PriceRangeSlider({
  minPrice,
  maxPrice,
  onChange,
  className,
  min = 0,
  max = 25000,
  step = 500,
}) {
  return (
    <div className={cn("flex flex-col gap-2 w-full max-w-md", className)}>
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>৳ {minPrice}</span>
        <span>৳ {maxPrice}</span>
      </div>
      <Slider
        value={[minPrice, maxPrice]}
        min={min}
        max={max}
        step={step}
        onValueChange={onChange}
      />
    </div>
  );
}
