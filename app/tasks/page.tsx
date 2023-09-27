import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"
import { taskSchema } from "./data/schema"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
  const dataPath = path.join(process.cwd(), "app/tasks/data/tasks.json") // D:\dev\shadcn\app\tasks\data\tasks.json
  const data = await fs.readFile(dataPath)
  const tasks = JSON.parse(data.toString()) // turn Buffer to String, then parse as JSON object
  return z.array(taskSchema).parse(tasks) // verify tasks with taskSchema by Zod
}

export default async function TaskPage() {
  const tasks = await getTasks()

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex items-center justify-between gap-2">
        {/* flex max-w-[980px] flex-col items-start gap-2 */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your tasks for this month!
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <UserNav />
        </div>
      </div>
      <DataTable data={tasks} columns={columns} />
    </section>
  )
}
