package com.masai.service;

import java.time.LocalDateTime;
import java.util.Optional;

import javax.security.auth.login.LoginException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.masai.model.CurrentUserSession;
import com.masai.model.LoginDTO;
import com.masai.model.User;
import com.masai.repository.SessionRepo;
import com.masai.repository.UserRepo;

import net.bytebuddy.utility.RandomString;

@Service
public class LoginServiceImpl implements LoginService{
	
	@Autowired
	private UserRepo uRepo;
	
	@Autowired
	private SessionRepo sRepo;

	@Override
	public CurrentUserSession logIntoAccount(LoginDTO dto) throws LoginException {
		User user=uRepo.findByUserName(dto.getUsername());
		if(user==null) {
			throw new LoginException("Please Enter a valid username.");
		}
		Optional<CurrentUserSession> validUserSessionOpt =sRepo.findById(user.getUserLoginId());
		if(validUserSessionOpt.isPresent()) {
			throw new LoginException("User already Logged in with this username.");
		}
		if(user.getPassword().equals(dto.getPassword())) {
			String key=RandomString.make(6);
			String name= user.getFirstName().concat("  "+user.getLastName());
			CurrentUserSession currentUserSession=new CurrentUserSession(user.getUserLoginId(),name,key,LocalDateTime.now());
			sRepo.save(currentUserSession);
			return currentUserSession;
		}else {
			throw new LoginException("Please Enter a valid password");
		}
	}

	@Override
	public String logOutFromAccount(String key) throws LoginException {
		
		CurrentUserSession validUserSession=sRepo.findByUuid(key);
		
		if(validUserSession==null) {
			throw new LoginException("User not logged in with this username.");
		}
		sRepo.delete(validUserSession);
		return "Logged out successfully.";
	}

}