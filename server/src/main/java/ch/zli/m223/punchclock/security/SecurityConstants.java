package ch.zli.m223.punchclock.security;

import ch.zli.m223.punchclock.domain.Role;

public class SecurityConstants {
    public static final String SECRET = "SecretKeyToGenJWTs";
    public static final long EXPIRATION_TIME = 864_000_000; // 10 days
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final String SIGN_UP_URL = "/users/sign-up";

    public static class RoleConstants {
        public static final Role ADMIN_ROLE = new Role(null, "ADMIN");
        public static final Role USER_ROLE = new Role(null, "USER");
    }
}
