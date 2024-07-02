import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experimentSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  date: z.string().min(1, "Date is required."),
  results: z.string().min(10, "Results must be at least 10 characters."),
});

const Experiments = () => {
  const [experiments, setExperiments] = useState([]);
  const form = useForm({
    resolver: zodResolver(experimentSchema),
  });

  const onSubmit = (data) => {
    setExperiments([...experiments, data]);
    form.reset();
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-6">Biohacking Experiments</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Experiment Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Experiment Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="results"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Results</FormLabel>
                <FormControl>
                  <Textarea placeholder="Experiment Results" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Add Experiment</Button>
        </form>
      </Form>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Your Experiments</h2>
        {experiments.length === 0 ? (
          <p>No experiments added yet.</p>
        ) : (
          experiments.map((experiment, index) => (
            <Card key={index} className="mb-4">
              <CardHeader>
                <CardTitle>{experiment.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Description:</strong> {experiment.description}</p>
                <p><strong>Date:</strong> {experiment.date}</p>
                <p><strong>Results:</strong> {experiment.results}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Experiments;