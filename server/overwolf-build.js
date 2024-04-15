import chokidar from 'chokidar'
import { exec } from 'child_process'

const watcher = chokidar.watch('../src/**/**', {
  persistent: true,
  ignored: /(^|[\/\\])\../,
  interval: 5000
})

watcher.on('change', (path) => {
  console.log(`File ${path} has been changed`)
  buildForOverwolf()
})
// exec('npm run build', (error, stdout, stderr) => {
//   if (error) {
//     console.error('Error building for Overwolf:', error)
//     return
//   }
//   console.log(stdout)
// })

function buildForOverwolf() {
  exec('npm run build', (error, stdout, stderr) => {
    if (error) {
      console.error('Error building for Overwolf:', error)
      return
    }
    console.log(stdout)
  })
}
