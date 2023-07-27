package com.masai.service;

import com.masai.exception.LoginException;
import com.masai.model.AdminDto;
import com.masai.model.CurrentUserSession;

public interface AdminLoginService {
	public CurrentUserSession logIntoAccount(AdminDto dto) throws LoginException;
	public String logOutFromAccount(String key) throws LoginException;
}