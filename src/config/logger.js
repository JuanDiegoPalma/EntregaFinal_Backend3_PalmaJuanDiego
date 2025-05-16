import winston from 'winston';

const logger = winston.createLogger({
    level: 'http',
    transports: [
        new winston.transports.Console({ level: 'http' }),
        new winston.transports.File({ filename: 'errors.log', level: 'error' })
    ],
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.simple()
    )
});

export default logger;