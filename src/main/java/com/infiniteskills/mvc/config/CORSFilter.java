/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.config;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author ֲÿקוסכאג
 */
public class CORSFilter implements Filter {
    
    private static final String FILTER_NAME = "myapp/";

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        System.out.println("Filtering on...........................................................");
        HttpServletResponse response = (HttpServletResponse) res;
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers", "x-requested-with, Content-Type");
        response.setContentType("text/plain;charset=UTF-8");
        HttpServletRequest request = (HttpServletRequest) req;
        request.setCharacterEncoding("UTF-8");
        
        
         HttpServletRequest httpServletRequest = (HttpServletRequest) request;
         String requestURI = httpServletRequest.getRequestURI();
        // Forcibly generate a session so that we can create CSRF when needed - Thymeleaf does that
        // See https://github.com/thymeleaf/thymeleaf-extras-springsecurity/issues/34
        if (!requestURI.startsWith(FILTER_NAME))
            httpServletRequest.getSession(true);
        
        chain.doFilter(req, res);
    }

    @Override
    public void init(FilterConfig filterConfig) {
    }

    @Override
    public void destroy() {
    }

}
