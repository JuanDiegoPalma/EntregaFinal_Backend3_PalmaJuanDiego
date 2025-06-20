import { Router } from 'express'
import { SessionsController } from '../../controllers/sessions.controller.js'
// import { userModel } from '../../models/user.model.js'
// import { authentication } from '../../middlewares/auth.middleware.js'
// import { createHash, isValidPassword } from '../../utiils/hash.js'
// import passport from 'passport'
// import { generateToken, authToken } from '../../utiils/authToken.js'
import { authorization } from '../../middlewares/authorization.middleware.js'
import { passportCall } from '../../middlewares/passportCall.js'
import { UserDTO } from '../../dto/user.dto.js'

const router = Router()

const {
    register,
    login,
    current,
} = new SessionsController()

/**
 * @swagger
 * /api/sessions/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags:
 *       - Sesiones
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: Datos inválidos o usuario ya existe
 */
/**
 * @swagger
 * /api/sessions/login:
 *   post:
 *     summary: Inicia sesión de usuario
 *     tags:
 *       - Sesiones
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sesión iniciada correctamente
 *       400:
 *         description: Email o contraseña faltantes
 *       401:
 *         description: Usuario no existe o credenciales incorrectas
 */

/**
 * @swagger
 * /api/sessions/current:
 *   get:
 *     summary: Obtiene el usuario autenticado actual
 *     tags:
 *       - Sesiones
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Usuario autenticado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       401:
 *         description: No autorizado
 */

router.post('/register', register)
router.post('/login', login)
router.get('/current', passportCall('jwt'), (req, res) => {
    const userDTO = new UserDTO(req.user);
    res.send(userDTO);
});



// router.post('/register', async (req, res) => {
//     const { first_name, last_name, email, password } = req.body
//     console.log(req.body)

    
//     if (!email || !password) return res.status(400).send({status: 'error', error: 'email y password son obligatorios'})

    
//     const userFound = await userModel.findOne({email})
//     if (userFound) return res.status(401).send({status: 'error', error: 'El usuario ya existe'})

//     const newUser = {
//         first_name, 
//         last_name, 
//         email,
//         password: createHash(password) 
//     }

//     const result = await userModel.create(newUser)
//     res.send({status: 'success', paylad: result})
// })


// router.post('/login', async(req, res) => {
//     const { email, password } = req.body
    
//     if (!email || !password) return res.status(400).send({status: 'error', error: 'email y password son obligatorios'})

    
//     const userFound = await userModel.findOne({email})
//     if (!userFound) return res.status(401).send({status: 'error', error: 'El usuario no existe'})

   

//     if(!isValidPassword(password, { password: userFound.password })) return res.status(401).send({status: 'error', error: 'El email o la contraseña no coinciden'})
    
          
//     const token = generateToken({
//         id:userFound._id,
//         email: userFound.email,
//         role: userFound.role
//     })
  
//     res
//         .cookie('coderCookieToken', token, {
//             maxAge: 60*60*1000,
//             httpOnly: true
//         })
//         .send({status: 'success', messagge: 'Logged succes'})
// })

// router.get('/current', passportCall('jwt'), authorization('admin'),(req, res) => {
//     console.log(req.user)
//     res.send({status: 'success', payload: req.user})
// })

export{ router as sessionsRouter}