import jwtDecode from "jwt-decode";

export class Helper {
    static getUserIdFromToken(token: string): string | undefined{
        const tokenMap = new Map<string, string>(
            Object.entries(jwtDecode(token))
        );
        const userId: string | undefined = tokenMap.get(
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        );
        if (userId !== undefined) {
            return userId;
        }
        return undefined;
    }
}