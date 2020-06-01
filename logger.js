class LoggerManager {
  static type = {}

  static init = (tag) => {
    const logger = {
      log: console.log.bind(console, `%c${tag}`, "background: rgba(228, 228, 228, 1.00); padding: 4px;", new Date().toISOString()),
      warn: console.log.bind(console, `%c${tag}`, "background: rgba(250, 190, 59, 0.5); padding: 4px;",new Date().toISOString()),
      error: console.log.bind(console, `%c${tag}`, "background: rgba(225, 70, 40, 1.00); padding: 4px; color: #ffffff",new Date().toISOString()),
      info: console.log.bind(console, `%c${tag}`, "background: rgba(0, 111, 197, 1.00); padding: 4px; color: #ffffff",new Date().toISOString()),
      success: console.log.bind(console, `%c${tag}`, "background: rgba(176, 245, 102, 1.00); padding: 4px;",new Date().toISOString()),
    }

    logger.toggle = (bool) => {
      if (!bool) {
        logger.log = () => {}
        logger.warn = () => {}
        logger.error = () => {}
        logger.info = () => {}
        logger.success = () => {}
      }
    }

    return logger
  }
}

export default LoggerManager


let logger = LoggerManager.init("hehe")

logger.log("2312312312")
logger.error("2222222")

