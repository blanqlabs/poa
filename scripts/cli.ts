import "dotenv/config"
import { select } from "@inquirer/prompts"
import chalk from "chalk"

async function test() {
  console.log(chalk.blue("test"))
}

async function cli() {
  while (true) {
    const task = await select({
      message: "Select task",
      choices: [
        { name: "test", value: () => test() },
        { name: "exit", value: () => process.exit(0) },
      ],
    })
    await task()
  }
}

cli().catch(console.error)
