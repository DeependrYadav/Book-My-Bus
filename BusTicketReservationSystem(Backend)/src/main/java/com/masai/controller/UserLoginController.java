package com.masai.controller;


import javax.security.auth.login.LoginException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.masai.model.CurrentUserSession;
import com.masai.model.LoginDTO;
import com.masai.service.LoginService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserLoginController {
	@Autowired
	private LoginService lService;
	
	@PostMapping("/login")
	public ResponseEntity<CurrentUserSession> userLoginHandler(@Valid @RequestBody LoginDTO dto) throws LoginException{
//		String msg=lService.logIntoAccount(dto);
		return new ResponseEntity<CurrentUserSession>(lService.logIntoAccount(dto),HttpStatus.ACCEPTED);
	}
	
	@PostMapping("/logout")
	public ResponseEntity<String> userLogoutHandler(@RequestParam String key) throws LoginException{
		String msg=lService.logOutFromAccount(key);
		return new ResponseEntity<String>(msg,HttpStatus.ACCEPTED);
	}
}

