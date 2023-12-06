"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "./ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { toast } from "./ui/use-toast"
import { Textarea } from "./ui/textarea"


const FormSchema = z.object({
  fullname: z.string().min(2, {
    message: "Message cannot be empty",
  }),
  contact: z.string().min(2, {
    message: "Message cannot be empty",
  }),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullname: "",
      contact: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("btn click")
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 p-5 bg-none">
        <div className="flex flex-row w-full ">
        <div className="m-5 w-[50%] ">

        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage /> */}
            </FormItem>
          )}
        />
        </div>
        <div className="m-5 w-[50%]">

        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email / Phone</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage /> */}
            </FormItem>
          )}
        />
        </div>
        
        </div>
        <div className="m-5 mt-0">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-5 mb-5 float-right">

        <Button type="submit">Submit</Button>
        </div>

        </div>
      </form>
    </Form>
  )
}
