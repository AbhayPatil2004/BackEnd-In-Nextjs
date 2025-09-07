console.log("Hello route")

import { writeFile } from "fs/promises"

await writeFile("Hello.txt" , "Backend in Nextjs")

console.log("Written to file")