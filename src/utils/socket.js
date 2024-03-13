import { io } from 'socket.io-client'

const URL = 'https://asteroids.dev.mediasia.cn'
const socket = io(URL)

export default socket
