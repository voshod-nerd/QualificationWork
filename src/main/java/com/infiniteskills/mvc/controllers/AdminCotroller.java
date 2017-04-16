/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.infiniteskills.mvc.controllers;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author ой
 */
@Controller
public class AdminCotroller  
{
    private static final Logger log = Logger.getLogger(IndexController.class.getName()); 


@RequestMapping(value = "/admin", method = RequestMethod.GET)
        public String getAdmin(Model model) {
       
        return "admin.html";
    }


}
