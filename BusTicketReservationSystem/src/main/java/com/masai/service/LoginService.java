package com.masai.service;

import javax.security.auth.login.LoginException;

import com.masai.model.CurrentUserSession;
import com.masai.model.LoginDTO;

public interface LoginService {
	public CurrentUserSession logIntoAccount(LoginDTO dto) throws LoginException;
	public String logOutFromAccount(String key) throws LoginException;
}
