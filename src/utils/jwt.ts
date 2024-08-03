/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import jwt, { SignOptions } from "jsonwebtoken";
import CONFIG from "../config/environment";

export const signJWT = (payload: Object, options?: SignOptions | undefined) => {
	return jwt.sign(payload, CONFIG.jwt_private, {
		...(options && options),
		algorithm: "RS256",
	});
};

export const verifyJWT = (token: string) => {
	try {
		const decoded: any = jwt.verify(token, CONFIG.jwt_public);
		return {
			valid: true,
			expired: false,
			decoded,
		};
	} catch (error: any) {
		return {
			valid: false,
			expired: (error.message = "jwt expired or not eligible ti use"),
			decoded: null,
		};
	}
};
