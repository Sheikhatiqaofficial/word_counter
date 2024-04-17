#! /usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk";

let response:
    {
        sentence: string
    }
    = await inquirer.prompt([

        {
            name: "sentence",
            type: "input",
            message: chalk.yellow.bold("ENTER YOUR SENTENCE TO COUNT THE WORDS!"),
        }
    ])
const words = response.sentence.trim().split(" ")

console.log(words)

console.log(chalk.magenta.bold(`YOUR GIVEN SENTENCE WORD COUNT IS " ${words.length} "`));




