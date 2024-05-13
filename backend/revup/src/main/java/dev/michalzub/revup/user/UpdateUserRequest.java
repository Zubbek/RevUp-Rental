package dev.michalzub.revup.user;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UpdateUserRequest {
  private String email;
  private Boolean isLocked;
}
