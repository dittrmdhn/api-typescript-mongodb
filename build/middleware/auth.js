"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAdmin = exports.requireUser = void 0;
const requireUser = (req, res, next) => {
    const user = res.locals.user;
    if (!user) {
        return res.sendStatus(403);
    }
    return next();
};
exports.requireUser = requireUser;
const requireAdmin = (req, res, next) => {
    const user = res.locals.user;
    if (!user || user._doc.role !== "admin") {
        return res.sendStatus(403);
    }
    return next();
};
exports.requireAdmin = requireAdmin;
//# sourceMappingURL=auth.js.map