package com.masai;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

@SpringBootApplication

public class BusTicketReservationSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(BusTicketReservationSystemApplication.class, args);
	}
	
//	@Bean
//	public LocalValidatorFactoryBean validator(MessageSource ms) {
//		LocalValidatorFactoryBean l = new LocalValidatorFactoryBean();
//		
//		l.setValidationMessageSource(ms);
//		
//		return l;
//	}

}
