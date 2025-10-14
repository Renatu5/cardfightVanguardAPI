export const logRequest = (req, res, next) => {
    console.log(`Received a ${req.method} requested from ${req.url}`);
    next();
}