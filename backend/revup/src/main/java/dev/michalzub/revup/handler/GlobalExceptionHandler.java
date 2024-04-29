package dev.michalzub.revup.handler;

import jakarta.mail.MessagingException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashSet;
import java.util.Set;

import static dev.michalzub.revup.handler.BuisnessErrorCodes.*;
import static org.springframework.http.HttpStatus.*;

@RestControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(LockedException.class)
  public ResponseEntity<ExceptionResponse> handleException(LockedException exp) {
    return ResponseEntity
      .status(UNAUTHORIZED)
      .body(
        ExceptionResponse.builder()
          .businessErrorCode(ACCOUNT_LOCKED.getCode())
          .businessErrorDescription(ACCOUNT_LOCKED.getDescription())
          .error(exp.getMessage())
          .build()
      );
  }

  @ExceptionHandler(DataIntegrityViolationException.class)
  public ResponseEntity<ExceptionResponse> handleDuplicateEmail(DataIntegrityViolationException exp) {
    if (exp.getMessage().contains("uk_6dotkott2kjsp8vw4d0m25fb7")) {
      return ResponseEntity
        .status(FORBIDDEN)
        .body(
          ExceptionResponse.builder()
            .businessErrorCode(DUPLICATE_CREDENTIALS.getCode())
            .businessErrorDescription(DUPLICATE_CREDENTIALS.getDescription())
            .error(DUPLICATE_CREDENTIALS.getDescription())
            .build()
        );
    }
    return ResponseEntity
      .status(INTERNAL_SERVER_ERROR)
      .body(
        ExceptionResponse.builder()
          .businessErrorDescription("Internal error, please contact the admin")
          .error(exp.getMessage())
          .build()
      );
  }

  @ExceptionHandler(DisabledException.class)
  public ResponseEntity<ExceptionResponse> handleException(DisabledException exp) {
    return ResponseEntity
      .status(UNAUTHORIZED)
      .body(
        ExceptionResponse.builder()
          .businessErrorCode(ACCOUNT_DISABLED.getCode())
          .businessErrorDescription(ACCOUNT_DISABLED.getDescription())
          .error(exp.getMessage())
          .build()
      );
  }


  @ExceptionHandler(BadCredentialsException.class)
  public ResponseEntity<ExceptionResponse> handleException() {
    return ResponseEntity
      .status(UNAUTHORIZED)
      .body(
        ExceptionResponse.builder()
          .businessErrorCode(BAD_CREDENTIALS.getCode())
          .businessErrorDescription(BAD_CREDENTIALS.getDescription())
          .error("Login and / or Password is incorrect")
          .build()
      );
  }

  @ExceptionHandler(MessagingException.class)
  public ResponseEntity<ExceptionResponse> handleException(MessagingException exp) {
    return ResponseEntity
      .status(INTERNAL_SERVER_ERROR)
      .body(
        ExceptionResponse.builder()
          .error(exp.getMessage())
          .build()
      );
  }

  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<ExceptionResponse> handleMethodArgumentNotValidException(MethodArgumentNotValidException exp) {
    Set<String> errors = new HashSet<>();
    exp.getBindingResult().getAllErrors()
      .forEach(error -> {
        var errorMessage = error.getDefaultMessage();
        errors.add(errorMessage);
      });

    return ResponseEntity
      .status(BAD_REQUEST)
      .body(
        ExceptionResponse.builder()
          .validationErrors(errors)
          .build()
      );
  }

  @ExceptionHandler(Exception.class)
  public ResponseEntity<ExceptionResponse> handleException(Exception exp) {
    exp.printStackTrace();
    return ResponseEntity
      .status(INTERNAL_SERVER_ERROR)
      .body(
        ExceptionResponse.builder()
          .businessErrorDescription("Internal error, please contact the admin")
          .error(exp.getMessage())
          .build()
      );
  }
}
