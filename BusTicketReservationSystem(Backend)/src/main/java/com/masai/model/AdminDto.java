package com.masai.model;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class AdminDto {
	@NotNull(message ="Username cannot be null.")
	private String username;
	@NotNull(message ="Password cannot be null.")
	private String password;
}
