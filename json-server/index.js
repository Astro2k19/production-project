const fs = require('fs')
const jsonServer = require('json-server')
const path = require('path')
const https = require('node:https')

const server = jsonServer.create()

const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

server.use(jsonServer.defaults({}))
server.use(jsonServer.bodyParser)

const mode = process.argv[2]

let options = {}
console.log(mode, 'mode')

if (mode !== 'development') {
    options = {
        key: fs.readFileSync(
            '/etc/letsencrypt/live/prod-project.fun-0001/privkey.pem',
        ),
        cert: fs.readFileSync(
            '/etc/letsencrypt/live/prod-project.fun-0001/fullchain.pem',
        ),
    }
}

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
    await new Promise(res => {
        setTimeout(res, 800)
    })
    next()
})

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body
        const db = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'),
        )
        const { users = [] } = db

        const userFromBd = users.find(
            user => user.username === username && user.password === password,
        )

        if (userFromBd) {
            return res.json(userFromBd)
        }

        return res.status(403).json({ message: 'USER_NOT_EXIST' })
    } catch (e) {
        return res.status(e.status).json({ message: e.message })
    }
})

server.get('/profile/:id', (req, res) => {
    try {
        const { id } = req.params
        const db = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'),
        )
        const { profile = [] } = db

        const foundProfile = profile.find(item => item.id == id)

        if (foundProfile) {
            return res.json(foundProfile)
        }

        return res.status(404).json({ message: 'PROFILE_NOT_FOUND' })
    } catch (e) {
        return res.status(e.status).json({ message: e.message })
    }
})

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
// server.use((req, res, next) => {
//     console.log(req.headers.authorization, 'server')
//     if (!req.headers.authorization) {
//         return res.status(403).json({ message: 'AUTH ERROR' })
//     }
//
//     next()
// })

server.use(router)

const DEV_PORT = 8000

if (mode !== 'development') {
    const PORT = 8443
    // running server
    const httpsServer = https.createServer(options, server)
    httpsServer.listen(PORT, () => {
        console.log(`server is running on ${PORT} port`)
    })
}

// running dev server
server.listen(DEV_PORT, () => {
    console.log('server is running on 8000 port')
})
