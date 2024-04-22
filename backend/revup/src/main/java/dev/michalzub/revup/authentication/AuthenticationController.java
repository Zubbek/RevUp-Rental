package dev.michalzub.revup.authentication;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "auth")
@RequiredArgsConstructor
@Tag(name = "Authentication")
public class AuthenticationController {

   private final AuthenticationService authenticationService;

   @PostMapping("/login")
   public ResponseEntity<AuthenticationResponce> authenticate(
           @RequestBody @Valid AuthenticationRequest request
   ) {
      return ResponseEntity.ok(authenticationService.authenticate(request));
   }
}
