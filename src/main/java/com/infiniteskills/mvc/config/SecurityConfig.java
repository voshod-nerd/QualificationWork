/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.config;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.rememberme.PersistentTokenRepository;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;

/**
 *
 * @author 
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    // private static final Logger log = Logger.getLogger(SecurityConfig.class.getName());
    @Autowired
    private UserDetailsService customUserDetailsService;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    
    //@Autowired
    //PersistentTokenRepository tokenRepository;

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
  
        auth.userDetailsService(customUserDetailsService).passwordEncoder(bCryptPasswordEncoder);
         //auth.userDetailsService(customUserDetailsService); 
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web
                .debug(true)
                .ignoring()
                .antMatchers("/resources/**"); // #3
    }
    
    

    @Override
    protected void configure(HttpSecurity http) throws Exception {

         http
                 .csrf()
                 .ignoringAntMatchers("/restcallback/**","/restcallgauger/**","/restitemdelivery/**")
                 .csrfTokenRepository(new HttpSessionCsrfTokenRepository());
       
        // http.authorizeRequests().anyRequest().permitAll().and().httpBasic();
        http    .authorizeRequests()
                .antMatchers("/resources/**", "/newuser","/","/processNewUser").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .permitAll()
                //.loginPage("/login")
                //.loginProcessingUrl("/login")
                .failureUrl("/login-error")
                .usernameParameter("username")
                .passwordParameter("password")
                .defaultSuccessUrl("/admin", true)
                //.and()
                //.rememberMe().rememberMeParameter("remember-me").tokenRepository(tokenRepository)
                //.tokenValiditySeconds(86400)
                .and()
                //.csrf(new HttpSessionCsrfTokenRepository())
                //.csrf(new HttpSessionCsrfTokenRepository())
                //.and()
                .exceptionHandling()
                .accessDeniedPage("/Access_Denied")
                .and()
                .logout()
                .logoutSuccessUrl("/")
                .and()
                .authorizeRequests()
                .antMatchers("/admin/**").hasRole("ADMIN");
                
                

        /* http.csrf()
                .disable()
                .authorizeRequests()
                .antMatchers("/resources/**", "/vc").permitAll()
                .antMatchers("addquestion", "/viewprofil").hasRole("USER")
                .and();

        http.formLogin()
                .loginPage("/login")
                .loginProcessingUrl("/j_spring_security_check")
                .failureUrl("/login?error")
                .usernameParameter("j_username")
                .passwordParameter("j_password")
                .defaultSuccessUrl("/index", true)
                // ���� ������ � ����� ������ ����
                .permitAll();

        http.logout()
                // ????????? ?????? ?????? ????
                .permitAll()
                // ????????? URL ???????
                .logoutUrl("/logout")
                // ????????? URL ??? ??????? ???????
                .logoutSuccessUrl("/")
                // ?????? ?? ???????? ??????? ??????
                .invalidateHttpSession(true);
         */
    }

}
