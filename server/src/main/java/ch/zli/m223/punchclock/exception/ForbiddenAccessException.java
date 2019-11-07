package ch.zli.m223.punchclock.exception;

public class ForbiddenAccessException extends RuntimeException {

    public ForbiddenAccessException(String message) {
        super(message);
    }
}