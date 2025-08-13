import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          About TechSpace
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Your go-to destination for the latest gadgets, electronics, and
          accessories — all in one place.
        </p>
      </div>

      <Separator className="mb-12" />

      {/* Mission + Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="rounded-2xl shadow-sm hover:shadow-lg transition">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-muted-foreground">
              At TechSpace, we aim to make technology accessible, affordable,
              and exciting for everyone. We carefully select products that blend
              quality with innovation to ensure you stay ahead in the tech
              world.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm hover:shadow-lg transition">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
            <p className="text-muted-foreground">
              We envision a future where technology empowers people to work
              smarter, connect better, and live more comfortably. Our goal is to
              be the most trusted tech store for customers worldwide.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
        <p className="text-muted-foreground leading-relaxed">
          Founded in 2024, TechSpace started with a passion for gadgets and a
          dream to make them accessible to everyone. From humble beginnings as a
          small online store, we’ve grown into a trusted name for tech lovers.
          Every product we offer is hand-picked to ensure the highest quality,
          performance, and style.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold mb-4">
          Ready to explore the future of tech?
        </h3>
        <Button asChild size="lg" className="rounded-full">
          <Link to="/products"> Shop Now</Link>
        </Button>
      </div>
    </section>
  );
};

export default About;
