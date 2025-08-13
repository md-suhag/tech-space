import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, RefreshCw, CreditCard, Headphones } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders",
      icon: <Truck className="h-6 w-6 text-primary" />,
    },
    {
      title: "Product Replace",
      description: "Easy Product Replacement Available!",
      icon: <RefreshCw className="h-6 w-6 text-primary" />,
    },
    {
      title: "EMI Available",
      description: "No cost EMI available on all major credit cards",
      icon: <CreditCard className="h-6 w-6 text-primary" />,
    },
    {
      title: "24/7 Support",
      description: "Dedicated 24/7 support via chat and email",
      icon: <Headphones className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-primary">
          Why Shop With Us
        </h2>
        <p className="mt-2 text-muted-foreground">
          Experience hassle-free shopping with our exclusive benefits.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((item, index) => (
          <Card
            key={index}
            className="rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col items-center p-6 text-center"
          >
            <CardContent className="flex flex-col items-center gap-4 p-0">
              <div className="bg-primary/10 rounded-full p-4">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
