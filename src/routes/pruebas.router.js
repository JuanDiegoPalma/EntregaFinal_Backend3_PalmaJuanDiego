import { Router } from 'express'
// import { authentication } from '../middlewares/auth.middleware.js'
import { fork } from 'node:child_process'

const router = Router()

router.get('/suma', (req, res) => {
    const childProcess = fork('./src/routes/operacionCompleja.js')
    childProcess.send('inicar el proceso')
    childProcess.on('message', resultado => {
        res.send({resultado})
    })
})

export{router as pruebasRouter}