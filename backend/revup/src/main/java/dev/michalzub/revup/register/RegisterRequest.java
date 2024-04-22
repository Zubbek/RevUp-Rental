package dev.michalzub.revup.register;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@Builder
public class RegisterRequest {

    @Email(message = "Email is not formatted")
    @NotEmpty(message = "Emial is required")
    @NotBlank(message = "Email is required")
    private final String  email;
    @NotEmpty(message = "Password is required")
    @NotBlank(message = "Password is required")
    @Size(min = 8, message = "Password should be 8 characters long minimum")
    private final String password;
}
